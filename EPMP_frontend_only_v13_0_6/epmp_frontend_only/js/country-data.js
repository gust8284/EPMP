(function () {
  const registry = Object.create(null);
  const pending = Object.create(null);
  const scriptMap = {
    albania: 'js/country-details-albania.js',
    'bosnia-and-herzegovina': 'js/country-details-bosnia-and-herzegovina.js',
    belarus: 'js/country-details-belarus.js',
    cyprus: 'js/country-details-cyprus.js',
    iceland: 'js/country-details-iceland.js',
    kosovo: 'js/country-details-kosovo.js',
    moldova: 'js/country-details-moldova.js',
    'north-macedonia': 'js/country-details-north-macedonia.js',
    montenegro: 'js/country-details-montenegro.js',
    serbia: 'js/country-details-serbia.js',
    russia: 'js/country-details-russia.js',
    turkey: 'js/country-details-turkey.js',
    ukraine: 'js/country-details-ukraine.js',
    sweden: 'js/country-details-sweden.js',
    germany: 'js/country-details-germany.js',
    france: 'js/country-details-france.js',
    netherlands: 'js/country-details-netherlands.js',
    poland: 'js/country-details-poland.js',
    spain: 'js/country-details-spain.js',
    italy: 'js/country-details-italy.js',
    'united-kingdom': 'js/country-details-united-kingdom.js',
    denmark: 'js/country-details-denmark.js',
    finland: 'js/country-details-finland.js',
    norway: 'js/country-details-norway.js',
    belgium: 'js/country-details-belgium.js',
    austria: 'js/country-details-austria.js',
    switzerland: 'js/country-details-switzerland.js',
    czechia: 'js/country-details-czechia.js',
    slovakia: 'js/country-details-slovakia.js',
    hungary: 'js/country-details-hungary.js',
    slovenia: 'js/country-details-slovenia.js',
    romania: 'js/country-details-romania.js',
    bulgaria: 'js/country-details-bulgaria.js',
    estonia: 'js/country-details-estonia.js',
    latvia: 'js/country-details-latvia.js',
    lithuania: 'js/country-details-lithuania.js',
    ireland: 'js/country-details-ireland.js',
    portugal: 'js/country-details-portugal.js',
    greece: 'js/country-details-greece.js',
    croatia: 'js/country-details-croatia.js',
    luxembourg: 'js/country-details-luxembourg.js'
  };

  function clone(value) {
    return value ? JSON.parse(JSON.stringify(value)) : null;
  }

  function inferCoverage(detail) {
    const sections = [];
    if (detail && detail.overview) sections.push('overview');
    if (detail && detail.government) sections.push('government');
    if (detail && detail.parliament) sections.push('parliament');
    if (detail) {
      const normalizedNews = normalizeNews(detail.news);
      if (normalizedNews && normalizedNews.items.length) sections.push('news');
    }
    return sections;
  }

  function normalizeNews(news) {
    function normalizeItems(items) {
      return (items || []).map(function (item) {
        if (!item || typeof item !== 'object' || Array.isArray(item)) return item;
        const normalizedItem = Object.assign({}, item);
        if (!normalizedItem.summary && normalizedItem.blurb) {
          normalizedItem.summary = normalizedItem.blurb;
        }
        return normalizedItem;
      });
    }

    if (Array.isArray(news)) {
      return {
        summary: '',
        items: normalizeItems(news)
      };
    }
    if (news && Array.isArray(news.items)) {
      return {
        summary: news.summary || '',
        items: normalizeItems(news.items)
      };
    }
    return null;
  }

  function sumSeats(parties) {
    return (parties || []).reduce(function (sum, party) {
      return sum + Math.max(0, Number(party && party.seats) || 0);
    }, 0);
  }

  function normalizeChamber(chamber, options) {
    if (!chamber) return null;
    const normalized = Object.assign({}, chamber);
    normalized.parties = Array.isArray(chamber.parties) ? chamber.parties.slice() : [];

    const inferredTotal = sumSeats(normalized.parties);
    if (!normalized.totalSeats && inferredTotal) {
      normalized.totalSeats = inferredTotal;
    }
    if (!normalized.majority && normalized.totalSeats) {
      normalized.majority = Math.floor(Number(normalized.totalSeats) / 2) + 1;
    }
    if (!normalized.methodLabel) {
      normalized.methodLabel = options && options.methodLabel ? options.methodLabel : 'Structured chamber data';
    }
    if (!normalized.methodType) {
      normalized.methodType = options && options.methodType ? options.methodType : 'structured';
    }
    return normalized;
  }

  function validateDetail(id, detail) {
    const warnings = [];
    if (!detail || !detail.parliament) return warnings;

    ['current', 'projected'].forEach(function (key) {
      const chamber = detail.parliament[key];
      if (!chamber) return;
      const totalSeats = Number(chamber.totalSeats) || 0;
      const seatSum = sumSeats(chamber.parties);
      if (totalSeats && seatSum && totalSeats !== seatSum) {
        warnings.push(id + ':' + key + ': declared totalSeats (' + totalSeats + ') does not match party sum (' + seatSum + ').');
      }
      if (totalSeats && chamber.majority && Number(chamber.majority) !== (Math.floor(totalSeats / 2) + 1)) {
        warnings.push(id + ':' + key + ': majority threshold looks inconsistent with totalSeats.');
      }
    });

    return warnings;
  }

  function normalizeDetail(id, data) {
    const detail = clone(data) || {};
    detail.meta = Object.assign({
      schemaVersion: 1,
      readiness: 'full',
      source: 'module',
      sections: inferCoverage(detail),
      validationWarnings: []
    }, detail.meta || {});

    if (!Array.isArray(detail.meta.sections) || !detail.meta.sections.length) {
      detail.meta.sections = inferCoverage(detail);
    }

    const normalizedNews = normalizeNews(detail.news);
    if (normalizedNews) {
      detail.news = normalizedNews.items;
      detail.newsSummary = normalizedNews.summary;
    }

    if (detail.parliament) {
      detail.parliament = Object.assign({}, detail.parliament);
      detail.parliament.current = normalizeChamber(detail.parliament.current, {
        methodLabel: 'Official current chamber totals',
        methodType: 'official-current'
      });
      detail.parliament.projected = normalizeChamber(detail.parliament.projected, {
        methodLabel: 'Poll-based projection',
        methodType: 'poll-projection'
      });
    }

    detail.meta.validationWarnings = validateDetail(id, detail);
    return detail;
  }

  function registerCountryDetail(id, data) {
    if (!id || !data) return;
    registry[id] = normalizeDetail(id, data);
  }

  function hasCountryDetail(id) {
    return Boolean(scriptMap[id] || registry[id]);
  }

  function getCountryModuleIds() {
    return Object.keys(scriptMap);
  }

  function loadCountryDetail(id) {
    if (!id) return Promise.resolve(null);
    if (registry[id]) return Promise.resolve(clone(registry[id]));
    if (!scriptMap[id]) return Promise.resolve(null);
    if (pending[id]) {
      return pending[id].then(clone);
    }

    pending[id] = new Promise(function (resolve) {
      const script = document.createElement('script');
      script.src = scriptMap[id];
      script.async = true;
      script.onload = function () {
        resolve(registry[id] || null);
      };
      script.onerror = function () {
        resolve(null);
      };
      document.head.appendChild(script);
    });

    return pending[id].then(clone);
  }

  window.EPMPCountryData = {
    registerCountryDetail: registerCountryDetail,
    loadCountryDetail: loadCountryDetail,
    hasCountryDetail: hasCountryDetail,
    getCountryModuleIds: getCountryModuleIds
  };
})();
