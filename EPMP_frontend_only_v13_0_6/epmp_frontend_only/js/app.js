(function () {
  const countries = [
  {
    "id": "albania",
    "name": "Albania",
    "officialName": "Republic of Albania",
    "region": "balkans",
    "capital": "Tirana",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Albania: current political news feed placeholder.",
      "Albania: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "austria",
    "name": "Austria",
    "officialName": "Republic of Austria",
    "region": "central-europe",
    "capital": "Vienna",
    "system": "Federal parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Austria: current political news feed placeholder.",
      "Austria: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "belgium",
    "name": "Belgium",
    "officialName": "Kingdom of Belgium",
    "region": "western-europe",
    "capital": "Brussels",
    "system": "Federal parliamentary constitutional monarchy",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Belgium: current political news feed placeholder.",
      "Belgium: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "bulgaria",
    "name": "Bulgaria",
    "officialName": "Republic of Bulgaria",
    "region": "eastern-europe",
    "capital": "Sofia",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Bulgaria: current political news feed placeholder.",
      "Bulgaria: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "bosnia-and-herzegovina",
    "name": "Bosnia and Herzegovina",
    "officialName": "Bosnia and Herzegovina",
    "region": "balkans",
    "capital": "Sarajevo",
    "system": "Federal parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Bosnia and Herzegovina: current political news feed placeholder.",
      "Bosnia and Herzegovina: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "belarus",
    "name": "Belarus",
    "officialName": "Republic of Belarus",
    "region": "eastern-europe",
    "capital": "Minsk",
    "system": "Presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Belarus: current political news feed placeholder.",
      "Belarus: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "switzerland",
    "name": "Switzerland",
    "officialName": "Swiss Confederation",
    "region": "western-europe",
    "capital": "Bern",
    "system": "Federal directorial republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Switzerland: current political news feed placeholder.",
      "Switzerland: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "cyprus",
    "name": "Cyprus",
    "officialName": "Republic of Cyprus",
    "region": "southern-europe",
    "capital": "Nicosia",
    "system": "Presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Cyprus: current political news feed placeholder.",
      "Cyprus: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "czechia",
    "name": "Czechia",
    "officialName": "Czech Republic",
    "region": "central-europe",
    "capital": "Prague",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Czechia: current political news feed placeholder.",
      "Czechia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "germany",
    "name": "Germany",
    "officialName": "Federal Republic of Germany",
    "region": "central-europe",
    "capital": "Berlin",
    "system": "Federal parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Germany: current political news feed placeholder.",
      "Germany: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "denmark",
    "name": "Denmark",
    "officialName": "Kingdom of Denmark",
    "region": "nordics",
    "capital": "Copenhagen",
    "system": "Parliamentary constitutional monarchy",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Denmark: current political news feed placeholder.",
      "Denmark: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "spain",
    "name": "Spain",
    "officialName": "Kingdom of Spain",
    "region": "southern-europe",
    "capital": "Madrid",
    "system": "Parliamentary constitutional monarchy",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Spain: current political news feed placeholder.",
      "Spain: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "estonia",
    "name": "Estonia",
    "officialName": "Republic of Estonia",
    "region": "baltics",
    "capital": "Tallinn",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Estonia: current political news feed placeholder.",
      "Estonia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "finland",
    "name": "Finland",
    "officialName": "Republic of Finland",
    "region": "nordics",
    "capital": "Helsinki",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Finland: current political news feed placeholder.",
      "Finland: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "france",
    "name": "France",
    "officialName": "French Republic",
    "region": "western-europe",
    "capital": "Paris",
    "system": "Semi-presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "France: current political news feed placeholder.",
      "France: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "united-kingdom",
    "name": "United Kingdom",
    "officialName": "United Kingdom of Great Britain and Northern Ireland",
    "region": "western-europe",
    "capital": "London",
    "system": "Parliamentary constitutional monarchy",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "United Kingdom: current political news feed placeholder.",
      "United Kingdom: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "greece",
    "name": "Greece",
    "officialName": "Hellenic Republic",
    "region": "southern-europe",
    "capital": "Athens",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Greece: current political news feed placeholder.",
      "Greece: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "croatia",
    "name": "Croatia",
    "officialName": "Republic of Croatia",
    "region": "balkans",
    "capital": "Zagreb",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Croatia: current political news feed placeholder.",
      "Croatia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "hungary",
    "name": "Hungary",
    "officialName": "Republic of Hungary",
    "region": "central-europe",
    "capital": "Budapest",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Hungary: current political news feed placeholder.",
      "Hungary: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "ireland",
    "name": "Ireland",
    "officialName": "Ireland",
    "region": "western-europe",
    "capital": "Dublin",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Ireland: current political news feed placeholder.",
      "Ireland: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "iceland",
    "name": "Iceland",
    "officialName": "Republic of Iceland",
    "region": "nordics",
    "capital": "Reykjavík",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Iceland: current political news feed placeholder.",
      "Iceland: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "italy",
    "name": "Italy",
    "officialName": "Italian Republic",
    "region": "southern-europe",
    "capital": "Rome",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Italy: current political news feed placeholder.",
      "Italy: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "kosovo",
    "name": "Kosovo",
    "officialName": "Republic of Kosovo",
    "region": "balkans",
    "capital": "Pristina",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Kosovo: current political news feed placeholder.",
      "Kosovo: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "lithuania",
    "name": "Lithuania",
    "officialName": "Republic of Lithuania",
    "region": "baltics",
    "capital": "Vilnius",
    "system": "Semi-presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Lithuania: current political news feed placeholder.",
      "Lithuania: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "luxembourg",
    "name": "Luxembourg",
    "officialName": "Grand Duchy of Luxembourg",
    "region": "western-europe",
    "capital": "Luxembourg",
    "system": "Parliamentary constitutional monarchy",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Luxembourg: current political news feed placeholder.",
      "Luxembourg: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "latvia",
    "name": "Latvia",
    "officialName": "Republic of Latvia",
    "region": "baltics",
    "capital": "Riga",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Latvia: current political news feed placeholder.",
      "Latvia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "moldova",
    "name": "Moldova",
    "officialName": "Republic of Moldova",
    "region": "eastern-europe",
    "capital": "Chișinău",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Moldova: current political news feed placeholder.",
      "Moldova: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "north-macedonia",
    "name": "North Macedonia",
    "officialName": "Republic of North Macedonia",
    "region": "balkans",
    "capital": "Skopje",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "North Macedonia: current political news feed placeholder.",
      "North Macedonia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "montenegro",
    "name": "Montenegro",
    "officialName": "Montenegro",
    "region": "balkans",
    "capital": "Podgorica",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Montenegro: current political news feed placeholder.",
      "Montenegro: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "netherlands",
    "name": "Netherlands",
    "officialName": "Kingdom of the Netherlands",
    "region": "western-europe",
    "capital": "Amsterdam",
    "system": "Parliamentary constitutional monarchy",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Netherlands: current political news feed placeholder.",
      "Netherlands: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "norway",
    "name": "Norway",
    "officialName": "Kingdom of Norway",
    "region": "nordics",
    "capital": "Oslo",
    "system": "Parliamentary constitutional monarchy",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Norway: current political news feed placeholder.",
      "Norway: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "poland",
    "name": "Poland",
    "officialName": "Republic of Poland",
    "region": "central-europe",
    "capital": "Warsaw",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Poland: current political news feed placeholder.",
      "Poland: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "portugal",
    "name": "Portugal",
    "officialName": "Portuguese Republic",
    "region": "southern-europe",
    "capital": "Lisbon",
    "system": "Semi-presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Portugal: current political news feed placeholder.",
      "Portugal: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "romania",
    "name": "Romania",
    "officialName": "Romania",
    "region": "eastern-europe",
    "capital": "Bucharest",
    "system": "Semi-presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Romania: current political news feed placeholder.",
      "Romania: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "russia",
    "name": "Russia",
    "officialName": "Russian Federation",
    "region": "eastern-europe",
    "capital": "Moscow",
    "system": "Semi-presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Russia: current political news feed placeholder.",
      "Russia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "serbia",
    "name": "Serbia",
    "officialName": "Republic of Serbia",
    "region": "balkans",
    "capital": "Belgrade",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Serbia: current political news feed placeholder.",
      "Serbia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "slovakia",
    "name": "Slovakia",
    "officialName": "Slovak Republic",
    "region": "central-europe",
    "capital": "Bratislava",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Slovakia: current political news feed placeholder.",
      "Slovakia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "slovenia",
    "name": "Slovenia",
    "officialName": "Republic of Slovenia",
    "region": "balkans",
    "capital": "Ljubljana",
    "system": "Parliamentary republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Slovenia: current political news feed placeholder.",
      "Slovenia: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "sweden",
    "name": "Sweden",
    "officialName": "Kingdom of Sweden",
    "region": "nordics",
    "capital": "Stockholm",
    "system": "Parliamentary constitutional monarchy",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Sweden: current political news feed placeholder.",
      "Sweden: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "turkey",
    "name": "Turkey",
    "officialName": "Republic of Turkey",
    "region": "southern-europe",
    "capital": "Ankara",
    "system": "Presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Turkey: current political news feed placeholder.",
      "Turkey: elections and coalition watchlist placeholder."
    ]
  },
  {
    "id": "ukraine",
    "name": "Ukraine",
    "officialName": "Ukraine",
    "region": "eastern-europe",
    "capital": "Kyiv",
    "system": "Semi-presidential republic",
    "governmentStatus": "Current government data layer pending",
    "nextElection": "Election data layer pending",
    "leaderTitle": "Head of government",
    "leader": "Current leadership data pending",
    "coalition": "Current government composition pending",
    "news": [
      "Ukraine: current political news feed placeholder.",
      "Ukraine: elections and coalition watchlist placeholder."
    ]
  }
];

  function getApiBaseUrl() {
    const config = window.EPMP_CONFIG || {};
    const base = typeof config.API_BASE_URL === 'string' ? config.API_BASE_URL.trim() : '';
    return base.replace(/\/$/, '');
  }

  const state = {
    selectedCountryId: null,
    activeRegion: 'all',
    activeTab: 'overview',
    searchQuery: '',
    activeCoverage: 'all',
    activeOverlay: 'none',
    activeMastheadTab: 'filters',
    activeEUSection: 'overview',
    activeNATOSection: 'overview',
    remoteBlocNews: { eu: null, nato: null },
    remoteBlocNewsStatus: { eu: 'idle', nato: 'idle' },
    mapScale: 1.52,
    mapTilt: 0,
    panelWidth: 430,
    baseMapOffsetX: -18,
    baseMapOffsetY: -26,
    defaultMapOffsetX: -18,
    defaultMapOffsetY: -26,
    isPanelCollapsed: false,
    isResizing: false,
    dragStartX: 0,
    startPanelWidth: 430,
    isPanning: false,
    isPanPending: false,
    panStartX: 0,
    panStartY: 0,
    startMapOffsetX: -18,
    startMapOffsetY: -26,
    didPan: false,
    panPointerId: null,
    hasPanCapture: false,
    mapBBox: null,
    countryDetails: {},
    loadingCountryIds: {},
    countryLoadSerial: 0,
    visibleCountryCount: 0
  };

  const els = {
    app: document.getElementById('app'),
    masthead: document.getElementById('masthead'),
    appMain: document.getElementById('app-main'),
    mapViewport: document.getElementById('map-viewport'),
    mapCanvas: document.getElementById('map-canvas'),
    europeMap: document.getElementById('europe-map'),
    countriesLayer: document.getElementById('countries-layer'),
    tooltip: document.getElementById('map-tooltip'),
    selectedCountryLabel: document.getElementById('selected-country-label'),
    activeRegionLabel: document.getElementById('active-region-label'),
    mapMetaLabel: document.getElementById('map-meta-label'),
    panelResizer: document.getElementById('panel-resizer'),
    infoPanel: document.getElementById('info-panel'),
    togglePanelBtn: document.getElementById('toggle-panel-btn'),
    toggleMastheadBtn: document.getElementById('toggle-masthead-btn'),
    toggleIntroBtn: document.getElementById('toggle-intro-btn'),
    panelIntro: document.getElementById('panel-intro'),
    countrySearch: document.getElementById('country-search'),
    regionFilter: document.getElementById('region-filter'),
    coverageFilter: document.getElementById('coverage-filter'),
    overlayFilter: document.getElementById('overlay-filter'),
    easterEggOverlay: document.getElementById('easter-egg-overlay'),
    overlayStatusStrip: document.getElementById('overlay-status-strip'),
    appAnnouncer: document.getElementById('app-announcer'),
    toastStack: document.getElementById('toast-stack'),
    shortcutModal: document.getElementById('shortcut-modal'),
    openShortcutsBtn: document.getElementById('open-shortcuts-btn'),
    closeShortcutsBtn: document.getElementById('close-shortcuts-btn'),
    mastheadFiltersPanel: document.getElementById('masthead-filters-panel'),
    mastheadEUPanel: document.getElementById('masthead-eu-panel'),
    mastheadNATOPanel: document.getElementById('masthead-nato-panel'),
    euPanelContent: document.getElementById('eu-panel-content'),
    natoPanelContent: document.getElementById('nato-panel-content'),
    mastheadTabButtons: Array.from(document.querySelectorAll('.masthead-tab-btn')),
    clearFiltersBtn: document.getElementById('clear-filters-btn'),
    resetViewBtn: document.getElementById('reset-view-btn'),
    zoomInBtn: document.getElementById('zoom-in-btn'),
    zoomOutBtn: document.getElementById('zoom-out-btn'),
    tiltLeftBtn: document.getElementById('tilt-left-btn'),
    tiltRightBtn: document.getElementById('tilt-right-btn'),
    mapResetBtn: document.getElementById('map-reset-btn'),
    emptyState: document.getElementById('panel-empty-state'),
    panelContent: document.getElementById('panel-content'),
    countryName: document.getElementById('country-name'),
    countryOfficialName: document.getElementById('country-official-name'),
    regionBadge: document.getElementById('country-region-badge'),
    summaryCapital: document.getElementById('summary-capital'),
    summarySystem: document.getElementById('summary-system'),
    summaryElection: document.getElementById('summary-election'),
    summaryEUStatus: document.getElementById('summary-eu-status'),
    countryEUStatusBadge: document.getElementById('country-eu-badge'),
    tabContent: document.getElementById('tab-content'),
    tabs: Array.from(document.querySelectorAll('.tab-btn'))
  };


  class SafeStorage {
    constructor(prefix) {
      this.prefix = prefix;
      this.available = null;
    }

    getKey(name) {
      return this.prefix + ':' + name;
    }

    isAvailable() {
      if (typeof this.available === 'boolean') return this.available;
      try {
        const probeKey = this.getKey('__probe__');
        window.localStorage.setItem(probeKey, '1');
        window.localStorage.removeItem(probeKey);
        this.available = true;
      } catch (error) {
        this.available = false;
      }
      return this.available;
    }

    get(name, fallbackValue) {
      if (!this.isAvailable()) return fallbackValue;
      try {
        const rawValue = window.localStorage.getItem(this.getKey(name));
        return rawValue == null ? fallbackValue : JSON.parse(rawValue);
      } catch (error) {
        return fallbackValue;
      }
    }

    set(name, value) {
      if (!this.isAvailable()) return false;
      try {
        window.localStorage.setItem(this.getKey(name), JSON.stringify(value));
        return true;
      } catch (error) {
        return false;
      }
    }
  }

  class AnnouncementCenter {
    constructor(liveRegion, toastStack) {
      this.liveRegion = liveRegion;
      this.toastStack = toastStack;
      this.toastTimers = new Set();
    }

    speak(message) {
      if (!this.liveRegion || !message) return;
      this.liveRegion.textContent = '';
      window.requestAnimationFrame(() => {
        this.liveRegion.textContent = message;
      });
    }

    toast(message, variant) {
      if (!this.toastStack || !message) return;
      const toast = document.createElement('div');
      toast.className = 'toast' + (variant ? ' is-' + variant : '');
      toast.textContent = message;
      this.toastStack.appendChild(toast);
      window.requestAnimationFrame(() => {
        toast.classList.add('is-visible');
      });
      const timer = window.setTimeout(() => {
        toast.classList.remove('is-visible');
        window.setTimeout(() => {
          toast.remove();
          this.toastTimers.delete(timer);
        }, 220);
      }, 3200);
      this.toastTimers.add(timer);
    }

    notify(message, variant) {
      this.speak(message);
      this.toast(message, variant || 'info');
    }
  }

  class PreferencesManager {
    constructor(storage, state, els) {
      this.storage = storage;
      this.state = state;
      this.els = els;
    }

    hydrate() {
      const savedRegion = this.storage.get('activeRegion', this.state.activeRegion);
      const savedOverlay = this.storage.get('activeOverlay', this.state.activeOverlay);
      const savedPanelWidth = this.storage.get('panelWidth', this.state.panelWidth);
      const savedPanelCollapsed = this.storage.get('isPanelCollapsed', this.state.isPanelCollapsed);
      const savedMastheadTab = this.storage.get('activeMastheadTab', this.state.activeMastheadTab);
      const savedIntroCollapsed = this.storage.get('isIntroCollapsed', false);
      const savedMap = this.storage.get('mapState', null);

      this.state.activeRegion = typeof savedRegion === 'string' ? savedRegion : this.state.activeRegion;
      this.state.activeOverlay = typeof savedOverlay === 'string' ? savedOverlay : this.state.activeOverlay;
      this.state.panelWidth = typeof savedPanelWidth === 'number' ? savedPanelWidth : this.state.panelWidth;
      this.state.isPanelCollapsed = Boolean(savedPanelCollapsed);
      this.state.activeMastheadTab = savedMastheadTab === 'eu' || savedMastheadTab === 'nato' ? savedMastheadTab : 'filters';

      if (savedMap && typeof savedMap === 'object') {
        if (typeof savedMap.scale === 'number') this.state.mapScale = savedMap.scale;
        if (typeof savedMap.tilt === 'number') this.state.mapTilt = savedMap.tilt;
        if (typeof savedMap.offsetX === 'number') this.state.baseMapOffsetX = savedMap.offsetX;
        if (typeof savedMap.offsetY === 'number') this.state.baseMapOffsetY = savedMap.offsetY;
      }

      if (this.els.regionFilter) this.els.regionFilter.value = this.state.activeRegion;
      if (this.els.overlayFilter) this.els.overlayFilter.value = this.state.activeOverlay;
      if (savedIntroCollapsed && this.els.panelIntro) {
        this.els.panelIntro.classList.add('is-collapsed');
      }
      if (this.els.toggleIntroBtn) {
        const introExpanded = !(savedIntroCollapsed && this.els.panelIntro);
        this.els.toggleIntroBtn.textContent = introExpanded ? 'Collapse intro' : 'Expand intro';
        this.els.toggleIntroBtn.setAttribute('aria-expanded', String(introExpanded));
      }
    }

    persistLayout() {
      this.storage.set('panelWidth', this.state.panelWidth);
      this.storage.set('isPanelCollapsed', this.state.isPanelCollapsed);
      this.storage.set('activeMastheadTab', this.state.activeMastheadTab);
      this.storage.set('isIntroCollapsed', Boolean(this.els.panelIntro && this.els.panelIntro.classList.contains('is-collapsed')));
    }

    persistFilters() {
      this.storage.set('activeRegion', this.state.activeRegion);
      this.storage.set('activeOverlay', this.state.activeOverlay);
    }

    persistMap() {
      this.storage.set('mapState', {
        scale: this.state.mapScale,
        tilt: this.state.mapTilt,
        offsetX: this.state.baseMapOffsetX,
        offsetY: this.state.baseMapOffsetY
      });
    }
  }

  class WorkspaceController {
    constructor(state, els) {
      this.state = state;
      this.els = els;
    }

    syncStatusBar(selectedCountry) {
      if (this.els.activeRegionLabel) {
        this.els.activeRegionLabel.textContent = 'Region: ' + regionLabel(this.state.activeRegion);
      }
      if (this.els.selectedCountryLabel) {
        this.els.selectedCountryLabel.textContent = 'Selected: ' + (selectedCountry ? selectedCountry.name : 'None');
      }
      if (this.els.mapMetaLabel) {
        const overlayLabel = this.state.activeOverlay === 'none' ? 'None' : getOverlayLabel(this.state.activeOverlay);
        const onlineLabel = navigator.onLine ? 'Online' : 'Offline';
        this.els.mapMetaLabel.textContent = 'Shown: ' + String(this.state.visibleCountryCount || 0) + ' · Overlay: ' + overlayLabel + ' · Zoom: ' + String(Math.round(this.state.mapScale * 100)) + '% · ' + onlineLabel;
      }
    }

    syncPanelState() {
      if (!this.els.app || !this.els.togglePanelBtn) return;
      this.els.app.classList.toggle('panel-collapsed', this.state.isPanelCollapsed);
      this.els.togglePanelBtn.textContent = this.state.isPanelCollapsed ? 'Expand workspace' : 'Collapse workspace';
      this.els.togglePanelBtn.setAttribute('aria-expanded', String(!this.state.isPanelCollapsed));
    }
  }

  class BlocNewsService {
    constructor(getBaseUrl, onResult) {
      this.getBaseUrl = getBaseUrl;
      this.onResult = onResult;
    }

    load(kind, limit) {
      const apiBaseUrl = this.getBaseUrl();
      if (!apiBaseUrl) {
        this.onResult(kind, { status: 'disabled', items: null, error: null });
        return Promise.resolve(false);
      }

      this.onResult(kind, { status: 'loading', items: null, error: null });
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeout = controller ? window.setTimeout(() => controller.abort(), 15000) : null;
      return fetch(apiBaseUrl + '/api/blocs/' + encodeURIComponent(kind) + '/news?limit=' + encodeURIComponent(limit || 8), controller ? { signal: controller.signal } : undefined)
        .then((response) => {
          if (!response.ok) {
            throw new Error('HTTP ' + response.status);
          }
          return response.json();
        })
        .then((payload) => {
          if (timeout) window.clearTimeout(timeout);
          this.onResult(kind, { status: 'ready', items: normalizeRemoteNewsItems(payload && payload.items), error: null });
          return true;
        })
        .catch((error) => {
          if (timeout) window.clearTimeout(timeout);
          this.onResult(kind, { status: 'error', items: null, error: error });
          return false;
        });
    }
  }

  class ShortcutModalController {
    constructor(modal, openButton, closeButton, announcer) {
      this.modal = modal;
      this.openButton = openButton;
      this.closeButton = closeButton;
      this.announcer = announcer;
      this.previouslyFocused = null;
    }

    isOpen() {
      return Boolean(this.modal && !this.modal.hidden);
    }

    open() {
      if (!this.modal) return;
      this.previouslyFocused = document.activeElement;
      this.modal.hidden = false;
      this.modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (this.announcer) this.announcer.speak('Keyboard shortcuts opened.');
      if (this.closeButton) this.closeButton.focus();
    }

    close() {
      if (!this.modal) return;
      this.modal.hidden = true;
      this.modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (this.previouslyFocused && typeof this.previouslyFocused.focus === 'function') {
        this.previouslyFocused.focus();
      }
    }

    bind() {
      if (this.openButton) {
        this.openButton.addEventListener('click', () => {
          this.open();
        });
      }
      if (this.closeButton) {
        this.closeButton.addEventListener('click', () => {
          this.close();
        });
      }
      if (this.modal) {
        this.modal.addEventListener('click', (event) => {
          if (event.target === this.modal) this.close();
        });
      }
    }
  }

  class KeyboardShortcutController {
    constructor(options) {
      this.options = options || {};
    }

    bind() {
      document.addEventListener('keydown', (event) => {
        const key = event.key;
        const activeElement = document.activeElement;
        const isTyping = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'SELECT' || activeElement.isContentEditable);

        if (this.options.shortcutModal && this.options.shortcutModal.isOpen()) {
          if (key === 'Escape') {
            event.preventDefault();
            this.options.shortcutModal.close();
          }
          return;
        }

        if (isTyping && key !== 'Escape') return;
        if (event.altKey || event.ctrlKey || event.metaKey) return;

        if (key === '?' || (key === '/' && !isTyping)) {
          event.preventDefault();
          this.options.shortcutModal && this.options.shortcutModal.open();
          return;
        }

        if (key === 'f' || key === 'F') {
          event.preventDefault();
          this.options.focusSearch && this.options.focusSearch();
          return;
        }

        if (key === 'm' || key === 'M') {
          event.preventDefault();
          this.options.openMastheadTab && this.options.openMastheadTab('filters');
          return;
        }

        if (key === 'e' || key === 'E') {
          event.preventDefault();
          this.options.openMastheadTab && this.options.openMastheadTab('eu');
          return;
        }

        if (key === 'n' || key === 'N') {
          event.preventDefault();
          this.options.openMastheadTab && this.options.openMastheadTab('nato');
          return;
        }

        if (key === '0') {
          event.preventDefault();
          this.options.resetMap && this.options.resetMap();
          return;
        }

        if (key === '+' || key === '=') {
          event.preventDefault();
          this.options.zoomBy && this.options.zoomBy(0.08);
          return;
        }

        if (key === '-' || key === '_') {
          event.preventDefault();
          this.options.zoomBy && this.options.zoomBy(-0.08);
          return;
        }

        if (key === 'Escape') {
          this.options.onEscape && this.options.onEscape();
        }
      });
    }
  }

  const storage = new SafeStorage('epmp-ui');
  const announcer = new AnnouncementCenter(els.appAnnouncer, els.toastStack);
  const preferences = new PreferencesManager(storage, state, els);
  const workspaceController = new WorkspaceController(state, els);
  const shortcutModal = new ShortcutModalController(els.shortcutModal, els.openShortcutsBtn, els.closeShortcutsBtn, announcer);
  let blocNewsService = null;
  let keyboardShortcuts = null;
  let mapPersistTimer = null;

  function persistLayoutState() {
    preferences.persistLayout();
  }

  function persistFilterState() {
    preferences.persistFilters();
  }

  function persistMapState() {
    if (mapPersistTimer) {
      window.clearTimeout(mapPersistTimer);
    }
    mapPersistTimer = window.setTimeout(function () {
      preferences.persistMap();
      mapPersistTimer = null;
    }, 120);
  }

  function syncWorkspaceStatus() {
    workspaceController.syncStatusBar(getCountryById(state.selectedCountryId));
  }

  function bindGlobalResilienceGuards() {
    window.addEventListener('error', function () {
      announcer.toast('A runtime issue was caught. The app is still active.', 'warning');
    });
    window.addEventListener('unhandledrejection', function () {
      announcer.toast('A background task failed. Fallback data remains available.', 'warning');
    });
    window.addEventListener('online', function () {
      syncWorkspaceStatus();
      announcer.toast('Connection restored.', 'info');
    });
    window.addEventListener('offline', function () {
      syncWorkspaceStatus();
      announcer.toast('Offline mode detected. Using local fallback data.', 'warning');
    });
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }


  let easterEggTimer = null;

  function triggerEasterEgg() {
    if (!els.easterEggOverlay) return;
    if (easterEggTimer) {
      window.clearTimeout(easterEggTimer);
      easterEggTimer = null;
    }
    els.easterEggOverlay.hidden = false;
    els.easterEggOverlay.setAttribute('aria-hidden', 'false');
    window.requestAnimationFrame(function () {
      els.easterEggOverlay.classList.add('is-visible');
    });
    easterEggTimer = window.setTimeout(function () {
      els.easterEggOverlay.classList.remove('is-visible');
      window.setTimeout(function () {
        if (!els.easterEggOverlay.classList.contains('is-visible')) {
          els.easterEggOverlay.hidden = true;
          els.easterEggOverlay.setAttribute('aria-hidden', 'true');
        }
      }, 450);
    }, 2600);
  }

  function regionLabel(region) {
    if (region === 'all') return 'All Europe';
    return region.replace(/-/g, ' ').replace(/\b\w/g, function (char) { return char.toUpperCase(); });
  }



  function getEUData() {
    return window.EPMPEUData || null;
  }

  function getNATOData() {
    return window.EPMPNATOData || null;
  }

  function getGeoData() {
    return window.EPMPGeoData || null;
  }

  function getOverlayConfig(overlayId) {
    if (!overlayId || overlayId === 'none') return null;
    const geoData = getGeoData();
    const overlays = geoData && geoData.overlays ? geoData.overlays : null;
    return overlays && overlays[overlayId] ? overlays[overlayId] : null;
  }

  function getOverlayLabel(overlayId) {
    const overlay = getOverlayConfig(overlayId);
    return overlay ? overlay.label : 'None';
  }

  function countryMatchesOverlay(country, overlayId) {
    if (!country || !overlayId || overlayId === 'none') return true;
    const overlay = getOverlayConfig(overlayId);
    return Boolean(overlay && Array.isArray(overlay.ids) && overlay.ids.indexOf(country.id) !== -1);
  }

  function getCountryBlocLabels(country) {
    if (!country) return [];
    const labels = [];
    const euStatus = getEUStatusByCountryId(country.id);
    if (euStatus) labels.push(euStatus.label);
    ['euro-area', 'schengen', 'nato'].forEach(function (overlayId) {
      const overlay = getOverlayConfig(overlayId);
      if (overlay && countryMatchesOverlay(country, overlayId)) {
        labels.push(overlay.label);
      }
    });
    return labels;
  }

  function applyOverlayMapMarkings() {
    const overlay = getOverlayConfig(state.activeOverlay);
    Array.from(document.querySelectorAll('.country-group')).forEach(function (group) {
      const country = getCountryById(group.getAttribute('data-country-id'));
      const match = Boolean(overlay && country && countryMatchesOverlay(country, state.activeOverlay));
      group.classList.toggle('is-overlay-filter-active', Boolean(overlay));
      group.classList.toggle('is-overlay-match', match);
      if (match && overlay) {
        group.style.setProperty('--overlay-color', overlay.color || '#7df8ff');
        group.setAttribute('data-overlay-label', overlay.label || 'Overlay');
      } else {
        group.style.removeProperty('--overlay-color');
        group.removeAttribute('data-overlay-label');
      }
    });
  }

  function renderOverlayStatusStrip() {
    if (!els.overlayStatusStrip) return;
    const overlay = getOverlayConfig(state.activeOverlay);
    if (!overlay) {
      els.overlayStatusStrip.hidden = true;
      els.overlayStatusStrip.innerHTML = '';
      return;
    }

    const ids = Array.isArray(overlay.ids) ? overlay.ids : [];
    const countriesOnMap = countries || [];
    const shownCount = countriesOnMap.filter(function (country) {
      return countryMatchesOverlay(country, state.activeOverlay);
    }).length;
    const missingCount = Math.max(0, ids.length - shownCount);

    els.overlayStatusStrip.hidden = false;
    els.overlayStatusStrip.innerHTML = `
      <article class="summary-card overlay-status-card is-primary" style="border-color:${escapeHtml(overlay.color || '#7df8ff')}; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);">
        <span class="summary-label">Active overlay</span>
        <strong>${escapeHtml(overlay.label || 'Overlay')}</strong>
        <p class="content-card-note">${escapeHtml(overlay.description || 'Bloc highlighting active.')}</p>
      </article>
      <article class="summary-card overlay-status-card">
        <span class="summary-label">Shown on this map</span>
        <strong>${escapeHtml(String(shownCount))}</strong>
        <p class="content-card-note">Countries currently highlighted and filterable.</p>
      </article>
      <article class="summary-card overlay-status-card">
        <span class="summary-label">Off-map / omitted</span>
        <strong>${escapeHtml(String(missingCount))}</strong>
        <p class="content-card-note">Members not drawn in the current SVG.</p>
      </article>
    `;
  }

  function getEUStatusByCountryId(countryId) {
    const euData = getEUData();
    if (!euData || !countryId) return null;
    if (Array.isArray(euData.memberIds) && euData.memberIds.indexOf(countryId) !== -1) {
      return {
        key: 'member',
        label: 'EU member',
        shortLabel: 'EU member',
        mapClass: 'is-eu-member'
      };
    }
    if (Array.isArray(euData.candidateIds) && euData.candidateIds.indexOf(countryId) !== -1) {
      return {
        key: 'candidate',
        label: 'EU candidate country',
        shortLabel: 'EU candidate',
        mapClass: 'is-eu-candidate'
      };
    }
    if (Array.isArray(euData.potentialCandidateIds) && euData.potentialCandidateIds.indexOf(countryId) !== -1) {
      return {
        key: 'potential-candidate',
        label: 'EU potential candidate',
        shortLabel: 'EU aspirant',
        mapClass: 'is-eu-potential-candidate'
      };
    }
    return null;
  }

  function formatEUStatusSummary(country) {
    const status = getEUStatusByCountryId(country && country.id);
    return status ? status.label : 'Not in the EU accession track';
  }

  function applyEUCountryMarkings() {
    Array.from(document.querySelectorAll('.country-group')).forEach(function (group) {
      const countryId = group.getAttribute('data-country-id');
      const status = getEUStatusByCountryId(countryId);
      group.classList.remove('is-eu-member', 'is-eu-candidate', 'is-eu-potential-candidate');
      group.removeAttribute('data-eu-status');
      if (status) {
        group.classList.add(status.mapClass);
        group.setAttribute('data-eu-status', status.key);
      }
    });
  }

  function setActiveMastheadTab(tabId) {
    const nextTab = tabId === 'eu' || tabId === 'nato' ? tabId : 'filters';
    state.activeMastheadTab = nextTab;
    const isEU = nextTab === 'eu';
    const isNATO = nextTab === 'nato';
    const isBlocMode = isEU || isNATO;
    if (els.mastheadFiltersPanel) {
      els.mastheadFiltersPanel.classList.toggle('is-active', nextTab === 'filters');
      els.mastheadFiltersPanel.hidden = nextTab !== 'filters';
    }
    if (els.mastheadEUPanel) {
      els.mastheadEUPanel.classList.toggle('is-active', isEU);
      els.mastheadEUPanel.hidden = !isEU;
    }
    if (els.mastheadNATOPanel) {
      els.mastheadNATOPanel.classList.toggle('is-active', isNATO);
      els.mastheadNATOPanel.hidden = !isNATO;
    }

    if (els.app) {
      els.app.classList.toggle('is-bloc-mode', isBlocMode);
    }

    if (els.appMain) {
      els.appMain.style.display = isBlocMode ? 'none' : '';
    }

    if (els.masthead && isBlocMode && els.masthead.classList.contains('is-collapsed')) {
      els.masthead.classList.remove('is-collapsed');
    }

    if (els.toggleMastheadBtn) {
      els.toggleMastheadBtn.disabled = isBlocMode;
      els.toggleMastheadBtn.setAttribute('aria-disabled', String(isBlocMode));
      els.toggleMastheadBtn.textContent = els.masthead && els.masthead.classList.contains('is-collapsed') ? 'Expand masthead' : 'Collapse masthead';
      els.toggleMastheadBtn.setAttribute('aria-expanded', String(!(els.masthead && els.masthead.classList.contains('is-collapsed'))));
    }

    els.mastheadTabButtons.forEach(function (button) {
      const buttonTab = button.getAttribute('data-masthead-tab');
      const active = buttonTab === nextTab;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });

    persistLayoutState();
    syncWorkspaceStatus();
  }


  const waveTwoIds = new Set([
    'austria', 'belgium', 'czechia', 'denmark', 'finland', 'iceland', 'ireland',
    'luxembourg', 'norway', 'portugal', 'romania', 'switzerland'
  ]);

  function getCoverageClassForCountry(country) {
    if (!country) return 'basic';
    return hasCountryDetailModule(country.id) ? 'full' : 'basic';
  }

  function getRolloutWaveLabel(country) {
    if (!country) return 'Mass rollout queue';
    if (hasCountryDetailModule(country.id)) return 'Live module';
    if (waveTwoIds.has(country.id)) return 'Wave 2 priority';
    return 'Mass rollout queue';
  }

  function buildGeneratedCountryDetail(baseCountry) {
    if (!baseCountry) return null;
    const coverageClass = getCoverageClassForCountry(baseCountry);
    const hasModule = coverageClass === 'full';
    const rolloutWave = getRolloutWaveLabel(baseCountry);
    return {
      meta: {
        schemaVersion: 1,
        readiness: hasModule ? 'module-available' : 'basic',
        source: 'generated',
        sections: ['overview', 'government', 'news'],
        rolloutWave: rolloutWave,
        validationWarnings: []
      },
      overview: {
        keyFacts: [
          baseCountry.officialName + ' is currently using a standardized structured profile while deeper country-specific data is staged separately.',
          'Government and news use a generated baseline; parliament distribution remains unavailable until a dedicated chamber model is added.',
          'Rollout status: ' + rolloutWave + '.'
        ]
      },
      government: {
        summary: 'This country is currently using EPMP\'s standardized baseline profile. Institutional fields are visible, but current office-holder facts and coalition mechanics still need a dedicated module.',
        system: baseCountry.system,
        status: baseCountry.governmentStatus,
        governmentParties: baseCountry.coalition,
        notes: hasModule
          ? 'A dedicated module exists for this country and will replace this generated baseline as soon as it loads in the current session.'
          : 'This baseline profile keeps the UI consistent during mass inclusion, but it should not be treated as a production-grade political brief.'
      },
      news: [
        {
          title: 'Coverage status',
          date: 'EPMP internal',
          source: 'Structured baseline',
          summary: hasModule
            ? 'A full country module exists for ' + baseCountry.name + '. This generated layer is only a temporary fallback until the dedicated data module loads.'
            : baseCountry.name + ' is now included through the mass structured baseline. Country-specific briefing cards still need to be added in a future full module.'
        },
        {
          title: 'Expansion roadmap',
          date: rolloutWave,
          source: 'Rollout planner',
          summary: hasModule
            ? 'The remaining work for this country is now mainly visual tuning and factual maintenance.'
            : 'Next full-module work should focus on current government facts, chamber composition, projection methodology, and curated news cards.'
        }
      ]
    };
  }

  function getMapFitMode() {
    const mastheadCollapsed = els.masthead.classList.contains('is-collapsed');
    if (mastheadCollapsed && state.isPanelCollapsed) return 'fully-collapsed';
    if (mastheadCollapsed || state.isPanelCollapsed) return 'semi-collapsed';
    return 'normal';
  }

  function getMapFitConfig() {
    const mode = getMapFitMode();
    if (mode === 'fully-collapsed') {
      return {
        mode: mode,
        padXRatio: 0.012,
        padTopRatio: 0.008,
        padBottomRatio: 0.032,
        wideWeight: 0.92,
        tallWeight: 0.64,
        scaleAdjust: 0.12,
        minScale: 1.16,
        maxScale: 1.78,
        offsetX: -12,
        offsetY: -44
      };
    }

    if (mode === 'semi-collapsed') {
      const mastheadCollapsed = els.masthead.classList.contains('is-collapsed');
      return {
        mode: mode,
        padXRatio: 0.038,
        padTopRatio: mastheadCollapsed ? 0.022 : 0.03,
        padBottomRatio: 0.055,
        wideWeight: 0.64,
        tallWeight: 0.56,
        scaleAdjust: 0.04,
        minScale: 1.06,
        maxScale: 1.42,
        offsetX: state.isPanelCollapsed ? -6 : -3,
        offsetY: mastheadCollapsed ? -30 : -24
      };
    }

    return {
      mode: mode,
      padXRatio: 0.065,
      padTopRatio: 0.05,
      padBottomRatio: 0.08,
      wideWeight: 0.42,
      tallWeight: 0.5,
      scaleAdjust: 0,
      minScale: 1.02,
      maxScale: 1.28,
      offsetX: 0,
      offsetY: -18
    };
  }

  function getCountryDetailLoader() {
    return window.EPMPCountryData && typeof window.EPMPCountryData.loadCountryDetail === 'function'
      ? window.EPMPCountryData.loadCountryDetail
      : null;
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderMetaList(items) {
    if (!Array.isArray(items) || !items.length) return '';
    return '<div class="detail-list">' + items.map(function (item) {
      return '<div class="detail-list-row"><span class="detail-list-label">' + escapeHtml(item.label || 'Item') + '</span><strong>' + escapeHtml(item.value || '—') + '</strong></div>';
    }).join('') + '</div>';
  }

  function renderTagList(title, items) {
    if (!Array.isArray(items) || !items.length) return '';
    return '<article class="content-card"><h3>' + escapeHtml(title) + '</h3><div class="pill-row">' + items.map(function (item) {
      return '<span class="data-pill">' + escapeHtml(item) + '</span>';
    }).join('') + '</div></article>';
  }

  function getCountryModuleApi() {
    return window.EPMPCountryData || null;
  }

  function hasCountryDetailModule(id) {
    const api = getCountryModuleApi();
    return Boolean(api && typeof api.hasCountryDetail === 'function' && api.hasCountryDetail(id));
  }

  function inferCoverageSections(country) {
    const sections = [];
    if (country && country.overview) sections.push('overview');
    if (country && country.government) sections.push('government');
    if (country && country.parliament) sections.push('parliament');
    if (country && ((Array.isArray(country.news) && country.news.length) || (country.news && Array.isArray(country.news.items) && country.news.items.length))) sections.push('news');
    return sections;
  }

  function getCountryCoverageMeta(country) {
    const meta = country && country.meta ? country.meta : {};
    const sections = Array.isArray(meta.sections) && meta.sections.length ? meta.sections.slice() : inferCoverageSections(country);
    let readiness = meta.readiness || '';
    if (!readiness) {
      readiness = country && country.detailSource === 'module' ? 'full' : hasCountryDetailModule(country && country.id) ? 'module-available' : 'basic';
    }
    return {
      readiness: readiness,
      source: meta.source || (country && country.detailSource ? country.detailSource : 'fallback'),
      rolloutWave: meta.rolloutWave || getRolloutWaveLabel(country),
      sections: sections,
      warnings: Array.isArray(meta.validationWarnings) ? meta.validationWarnings.slice() : []
    };
  }

  function formatReadinessLabel(readiness) {
    if (readiness === 'full') return 'Structured module active';
    if (readiness === 'module-available') return 'Module available, baseline active';
    if (readiness === 'basic') return 'Basic structured profile';
    if (readiness === 'partial') return 'Partial structured module';
    return 'Prototype fallback';
  }

  function formatSectionLabel(section) {
    if (!section) return 'Unknown';
    return section.charAt(0).toUpperCase() + section.slice(1);
  }

  function formatSourcePathLabel(source) {
    if (source === 'module') return 'Dedicated module';
    if (source === 'generated') return 'Generated baseline';
    return 'Prototype fallback';
  }

  function mergeCountryData(baseCountry, detail) {
    if (!baseCountry) return null;
    const merged = Object.assign({}, baseCountry, detail || {});
    const government = Object.assign({}, baseCountry.government || {}, detail && detail.government ? detail.government : {});
    if (Object.keys(government).length) {
      merged.government = government;
    }
    if (detail && detail.summary) {
      if (detail.summary.capital) merged.capital = detail.summary.capital;
      if (detail.summary.system) merged.system = detail.summary.system;
      if (detail.summary.nextElection) merged.nextElection = detail.summary.nextElection;
    }
    if (detail && detail.news) {
      if (Array.isArray(detail.news)) {
        merged.news = detail.news.slice();
      } else if (detail.news && Array.isArray(detail.news.items)) {
        merged.news = detail.news.items.slice();
        if (detail.news.summary) merged.newsSummary = detail.news.summary;
      }
    }
    if (detail && detail.newsSummary) {
      merged.newsSummary = detail.newsSummary;
    }
    const detailSource = detail && detail.meta && detail.meta.source ? detail.meta.source : (detail ? 'module' : 'fallback');
    merged.detailSource = detailSource;
    merged.detailLoaded = detailSource === 'module';
    merged.detailGenerated = detailSource === 'generated';
    return merged;
  }

  function getResolvedCountry(id) {
    const baseCountry = getCountryById(id);
    if (!baseCountry) return null;
    const resolvedDetail = state.countryDetails[id] || buildGeneratedCountryDetail(baseCountry);
    return mergeCountryData(baseCountry, resolvedDetail);
  }

  function isCountryDetailLoading(id) {
    return Boolean(state.loadingCountryIds[id]);
  }

  function renderSelectedCountry() {
    renderPanel(getResolvedCountry(state.selectedCountryId));
  }

  function getAvailableSections(country) {
    if (!country) return ['overview'];
    const coverageMeta = getCountryCoverageMeta(country);
    const sections = Array.isArray(coverageMeta.sections) && coverageMeta.sections.length
      ? coverageMeta.sections.slice()
      : ['overview'];
    if (sections.indexOf('overview') === -1) sections.unshift('overview');
    if (sections.indexOf('methodology') === -1) sections.push('methodology');
    return sections;
  }

  function countrySupportsSection(country, section) {
    return getAvailableSections(country).indexOf(section) !== -1;
  }

  function getFirstAvailableSection(country) {
    const sections = getAvailableSections(country);
    return sections[0] || 'overview';
  }

  function ensureCountryDetail(id) {
    const loader = getCountryDetailLoader();
    if (!id || !loader || state.countryDetails[id] || state.loadingCountryIds[id]) return;
    state.loadingCountryIds[id] = true;
    const requestSerial = ++state.countryLoadSerial;

    loader(id)
      .then(function (detail) {
        delete state.loadingCountryIds[id];
        if (detail) {
          state.countryDetails[id] = detail;
        }
        if (state.selectedCountryId === id && requestSerial <= state.countryLoadSerial) {
          renderSelectedCountry();
        }
      })
      .catch(function () {
        delete state.loadingCountryIds[id];
        if (state.selectedCountryId === id) {
          renderSelectedCountry();
        }
      });
  }

  function setPanelWidth(px) {
    state.panelWidth = clamp(px, 320, 720);
    document.documentElement.style.setProperty('--panel-width', state.panelWidth + 'px');
    persistLayoutState();
  }

  function getMapBBox() {
    if (state.mapBBox) return state.mapBBox;
    state.mapBBox = els.countriesLayer.getBBox();
    return state.mapBBox;
  }

  function getViewBoxMetrics() {
    const parts = (els.europeMap.getAttribute('viewBox') || '0 0 100 100').trim().split(/\s+/).map(Number);
    return {
      x: parts[0] || 0,
      y: parts[1] || 0,
      width: parts[2] || 100,
      height: parts[3] || 100
    };
  }

  function updateMapViewBox() {
    const bbox = getMapBBox();
    const fit = getMapFitConfig();
    const padX = bbox.width * fit.padXRatio;
    const padTop = bbox.height * fit.padTopRatio;
    const padBottom = bbox.height * fit.padBottomRatio;
    const x = bbox.x - padX;
    const y = bbox.y - padTop;
    const width = bbox.width + (padX * 2);
    const height = bbox.height + padTop + padBottom;
    els.europeMap.setAttribute('viewBox', [x.toFixed(2), y.toFixed(2), width.toFixed(2), height.toFixed(2)].join(' '));
  }

  function getDefaultMapView() {
    updateMapViewBox();
    const rect = els.mapViewport.getBoundingClientRect();
    const viewportAspect = rect.width && rect.height ? rect.width / rect.height : 1.65;
    const viewBox = getViewBoxMetrics();
    const mapAspect = viewBox.width / viewBox.height;
    const fit = getMapFitConfig();
    const wideDelta = Math.max(0, (viewportAspect / mapAspect) - 1);
    const tallDelta = Math.max(0, (mapAspect / viewportAspect) - 1);

    let fittedScale = 1 + (wideDelta * fit.wideWeight) + (tallDelta * fit.tallWeight) + fit.scaleAdjust;
    fittedScale = clamp(fittedScale, fit.minScale, fit.maxScale);

    return {
      scale: fittedScale,
      offsetX: fit.offsetX,
      offsetY: fit.offsetY
    };
  }

  function getPanLimits() {
    const rect = els.mapViewport.getBoundingClientRect();
    const extraX = Math.max(0, ((state.mapScale - 1) * rect.width) / 2);
    const extraY = Math.max(0, ((state.mapScale - 1) * rect.height) / 2);
    return {
      minX: state.defaultMapOffsetX - (extraX + 72),
      maxX: state.defaultMapOffsetX + (extraX + 72),
      minY: state.defaultMapOffsetY - (extraY + 72),
      maxY: state.defaultMapOffsetY + (extraY + 72)
    };
  }

  function clampMapOffsets() {
    const limits = getPanLimits();
    state.baseMapOffsetX = clamp(state.baseMapOffsetX, limits.minX, limits.maxX);
    state.baseMapOffsetY = clamp(state.baseMapOffsetY, limits.minY, limits.maxY);
  }

  function syncMapLayout(options) {
    const defaults = getDefaultMapView();
    const shouldReset = Boolean(options && options.reset);

    state.defaultMapOffsetX = defaults.offsetX;
    state.defaultMapOffsetY = defaults.offsetY;

    if (shouldReset) {
      state.mapScale = defaults.scale;
      state.mapTilt = 0;
      state.baseMapOffsetX = defaults.offsetX;
      state.baseMapOffsetY = defaults.offsetY;
    } else {
      if (!Number.isFinite(state.mapScale) || state.mapScale <= 0) {
        state.mapScale = defaults.scale;
      }
      if (!Number.isFinite(state.baseMapOffsetX)) {
        state.baseMapOffsetX = defaults.offsetX;
      }
      if (!Number.isFinite(state.baseMapOffsetY)) {
        state.baseMapOffsetY = defaults.offsetY;
      }
    }

    applyMapTransform();
  }

  function resetMapView() {
    syncMapLayout({ reset: true });
  }

  function applyMapTransform() {
    clampMapOffsets();
    els.mapCanvas.style.transform = 'translate(' + state.baseMapOffsetX.toFixed(1) + 'px, ' + state.baseMapOffsetY.toFixed(1) + 'px) scale(' + state.mapScale.toFixed(3) + ') rotate(' + state.mapTilt.toFixed(1) + 'deg)';
    persistMapState();
    syncWorkspaceStatus();
  }

  function showTooltip(label, event) {
    els.tooltip.textContent = label;
    els.tooltip.classList.remove('is-hidden');
    moveTooltip(event);
  }

  function getTooltipLabel(country) {
    const labels = [];
    const status = getEUStatusByCountryId(country && country.id);
    if (status) labels.push(status.shortLabel);
    const overlay = getOverlayConfig(state.activeOverlay);
    if (overlay && country && countryMatchesOverlay(country, state.activeOverlay) && (!status || overlay.label !== status.label)) {
      labels.push(overlay.shortLabel || overlay.label);
    }
    return labels.length ? country.name + ' · ' + labels.join(' · ') : country.name;
  }

  function moveTooltip(event) {
    const rect = els.mapCanvas.getBoundingClientRect();
    els.tooltip.style.left = (event.clientX - rect.left) + 'px';
    els.tooltip.style.top = (event.clientY - rect.top) + 'px';
  }

  function hideTooltip() {
    els.tooltip.classList.add('is-hidden');
  }

  function getCountryById(id) {
    return countries.find(function (country) { return country.id === id; }) || null;
  }

  function attachMapEvents() {
    const groups = Array.from(document.querySelectorAll('.country-group'));
    groups.forEach(function (group) {
      const countryId = group.getAttribute('data-country-id');
      const country = getCountryById(countryId);
      if (!country) return;
      const focusable = group.querySelector('.country-shape');

      group.addEventListener('mouseenter', function (event) {
        group.classList.add('is-hovered');
        showTooltip(getTooltipLabel(country), event);
        if (hasCountryDetailModule(country.id)) {
          ensureCountryDetail(country.id);
        }
      });

      group.addEventListener('mouseleave', function () {
        group.classList.remove('is-hovered');
        hideTooltip();
      });

      group.addEventListener('mousemove', function (event) {
        moveTooltip(event);
      });

      group.addEventListener('click', function (event) {
        if (state.didPan) {
          event.preventDefault();
          event.stopPropagation();
          state.didPan = false;
          return;
        }
        selectCountry(country.id);
      });

      if (focusable) {
        focusable.addEventListener('focus', function () {
          if (hasCountryDetailModule(country.id)) {
            ensureCountryDetail(country.id);
          }
        });

        focusable.addEventListener('keydown', function (event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            selectCountry(country.id);
          }
        });
      }
    });
  }

  function applyCountryVisibility() {
    const groups = Array.from(document.querySelectorAll('.country-group'));
    const region = state.activeRegion;
    const query = state.searchQuery.trim().toLowerCase();
    let visibleCount = 0;

    groups.forEach(function (group) {
      const country = getCountryById(group.getAttribute('data-country-id'));
      if (!country) return;
      const regionMatch = region === 'all' || country.region === region;
      const searchMatch = !query || country.name.toLowerCase().includes(query);
      const coverageMatch = state.activeCoverage === 'all' || getCoverageClassForCountry(country) === state.activeCoverage;
      const overlayMatch = state.activeOverlay === 'none' || countryMatchesOverlay(country, state.activeOverlay);
      const visible = regionMatch && searchMatch && coverageMatch && overlayMatch;
      if (visible) visibleCount += 1;
      group.classList.toggle('is-dimmed', !visible);
      group.style.opacity = visible ? '1' : '0.2';
    });

    state.visibleCountryCount = visibleCount;
    applyOverlayMapMarkings();
    renderOverlayStatusStrip();
    persistFilterState();
    syncWorkspaceStatus();
  }

  function renderDeferredSectionCard(country, section) {
    const labels = {
      overview: 'overview',
      government: 'government',
      parliament: 'parliament',
      news: 'news',
      methodology: 'methodology'
    };
    const sectionLabel = labels[section] || section;
    return `
      <article class="content-card content-card-loading">
        <span class="loading-chip">Loading module</span>
        <h3>Preparing ${escapeHtml(country.name)} ${escapeHtml(sectionLabel)} data</h3>
        <p>The dedicated country module is still loading. This section will render automatically once the structured data arrives.</p>
      </article>
    `;
  }

  function renderUnavailableSectionCard(country, section) {
    const sectionLabel = formatSectionLabel(section).toLowerCase();
    return `
      <article class="content-card">
        <span class="loading-chip loading-chip-muted">Not available yet</span>
        <h3>${escapeHtml(formatSectionLabel(section))} not available</h3>
        <p>${escapeHtml(country.name)} currently uses a ${escapeHtml(formatReadinessLabel(getCountryCoverageMeta(country).readiness).toLowerCase())}. This profile does not yet include a structured ${escapeHtml(sectionLabel)} dataset.</p>
        <p class="content-card-note">Continue with the available sections while the remaining structured module data is filled in.</p>
      </article>
    `;
  }

  function renderSectionLoadStatus(country) {
    if (!country || !isCountryDetailLoading(country.id) || !hasCountryDetailModule(country.id)) return '';
    return `
      <div class="panel-load-banner" role="status" aria-live="polite">
        <span class="loading-dot" aria-hidden="true"></span>
        <span>Loading dedicated ${escapeHtml(country.name)} module… baseline data remains usable during fetch.</span>
      </div>
    `;
  }


  function ensureValidActiveTab(country) {
    const active = state.activeTab || 'overview';
    const sections = getAvailableSections(country);
    const loading = Boolean(country && isCountryDetailLoading(country.id) && hasCountryDetailModule(country.id));
    if (sections.indexOf(active) !== -1) return active;
    if (loading) return active;
    state.activeTab = getFirstAvailableSection(country);
    return state.activeTab;
  }

  function getSectionAvailability(country, section) {
    const loading = Boolean(country && isCountryDetailLoading(country.id) && hasCountryDetailModule(country.id));
    const available = countrySupportsSection(country, section);
    const deferred = !available && loading;
    return { available: available, deferred: deferred, loading: loading };
  }

  function renderOverview(country) {
    const detailLoaded = country.detailLoaded;
    const loading = isCountryDetailLoading(country.id);
    const overviewItems = country.overview && Array.isArray(country.overview.keyFacts)
      ? country.overview.keyFacts.map(function (item) {
          return '<li>' + escapeHtml(item) + '</li>';
        }).join('')
      : '';
    const coverageMeta = getCountryCoverageMeta(country);
    const sectionPills = coverageMeta.sections.length
      ? '<div class="pill-row">' + coverageMeta.sections.map(function (section) {
          return '<span class="data-pill">' + escapeHtml(formatSectionLabel(section)) + '</span>';
        }).join('') + '</div>'
      : '<p>No structured sections are active yet.</p>';
    const validationBlock = coverageMeta.warnings.length
      ? '<p class="content-card-note">Validation warnings: ' + escapeHtml(String(coverageMeta.warnings.length)) + '. Check the browser console before expanding this country to production scale.</p>'
      : '<p class="content-card-note">No schema validation warnings for the current structured module.</p>';
    const blocTags = getCountryBlocLabels(country);
    const blocCard = blocTags.length ? renderTagList('Union and bloc status', blocTags) : '';
    const statusText = detailLoaded
      ? 'Structured country data is active for this country. Tabs now render from the normalized detail layer rather than the shared fallback copy.'
      : loading
        ? 'A dedicated country module is loading. The generated baseline remains visible so the workspace stays usable while richer data is prepared.'
        : country.detailGenerated && hasCountryDetailModule(country.id)
          ? 'A dedicated detail module exists for this country, but the workspace is currently using the generated baseline until that module is loaded in this session.'
          : country.detailGenerated
            ? 'This country is now included through the mass structured baseline. It no longer relies on raw prototype placeholders, but it still needs a dedicated full module.'
            : 'This country still falls back to the shared prototype layer. Add a country detail module to replace these generic cards.';

    return `
      <article class="content-card">
        <h3>Workspace status</h3>
        <p>${escapeHtml(statusText)}</p>
      </article>
      <article class="content-card">
        <h3>Structured data readiness</h3>
        <div class="pill-row">
          <span class="data-pill">${escapeHtml(formatReadinessLabel(coverageMeta.readiness))}</span>
          <span class="data-pill">${escapeHtml(country.detailLoaded ? 'Loaded in session' : country.detailGenerated ? 'Generated baseline active' : 'Not yet loaded')}</span>
        </div>
        <div class="detail-list" style="margin-top:0.85rem;">
          <div class="detail-list-row">
            <span class="detail-list-label">Section coverage</span>
            <strong>${escapeHtml(String(coverageMeta.sections.length))}</strong>
          </div>
          <div class="detail-list-row">
            <span class="detail-list-label">Source path</span>
            <strong>${escapeHtml(formatSourcePathLabel(coverageMeta.source))}</strong>
          </div>
          <div class="detail-list-row">
            <span class="detail-list-label">Rollout wave</span>
            <strong>${escapeHtml(coverageMeta.rolloutWave || '—')}</strong>
          </div>
        </div>
        <div style="margin-top:0.75rem;">${sectionPills}</div>
        ${validationBlock}
      </article>
      ${blocCard}
      <article class="content-card">
        <h3>Map and panel foundation</h3>
        <p>${escapeHtml(country.name)} uses the real country geometry with direct selection, filtering and a resizable workspace. The next scale step is to keep country facts modular and validated before adding the rest of Europe in bulk. Use the Methodology tab to check trust level, projection method and freshness signals for the current country.</p>
        ${overviewItems ? '<ul class="detail-bullet-list">' + overviewItems + '</ul>' : '<p>Government, parliament and news can now be split into dedicated data modules without changing the map interaction layer.</p>'}
      </article>
    `;
  }

  function renderGovernment(country) {
    const loading = isCountryDetailLoading(country.id);
    const government = country.government || null;

    if (!government && loading) {
      return `
        <article class="content-card">
          <h3>Government workspace</h3>
          <p>Loading structured government data for ${escapeHtml(country.name)}...</p>
        </article>
      `;
    }

    if (!government) {
      return `
        <article class="content-card">
          <h3>Government workspace</h3>
          <p><strong>${escapeHtml(country.leaderTitle)}:</strong> ${escapeHtml(country.leader)}</p>
          <p><strong>System:</strong> ${escapeHtml(country.system)}</p>
          <p><strong>Status:</strong> ${escapeHtml(country.governmentStatus)}</p>
          <p><strong>Arrangement:</strong> ${escapeHtml(country.coalition)}</p>
        </article>
      `;
    }

    const principalActors = [government.headOfState, government.headOfGovernment].filter(Boolean).map(function (actor) {
      return `
        <article class="data-card">
          <span class="data-card-label">${escapeHtml(actor.title || 'Office')}</span>
          <strong>${escapeHtml(actor.name || '—')}</strong>
          ${actor.party ? '<p>' + escapeHtml(actor.party) + '</p>' : ''}
        </article>
      `;
    }).join('');

    const coalitionItems = [];
    if (government.governmentParties) {
      coalitionItems.push({ label: 'Government parties', value: government.governmentParties });
    }
    if (government.supportArrangement) {
      coalitionItems.push({ label: 'Support arrangement', value: government.supportArrangement });
    }
    if (government.cabinetSize) {
      coalitionItems.push({ label: 'Cabinet size', value: government.cabinetSize });
    }

    const institutionalItems = [];
    if (government.system || country.system) {
      institutionalItems.push({ label: 'System', value: government.system || country.system });
    }
    if (government.status) {
      institutionalItems.push({ label: 'Status', value: government.status });
    }
    if (country.nextElection) {
      institutionalItems.push({ label: 'Next election', value: country.nextElection });
    }
    if (government.electionCycle) {
      institutionalItems.push({ label: 'Election cycle', value: government.electionCycle });
    }

    return `
      <article class="content-card">
        <h3>Government workspace</h3>
        <p>${escapeHtml(government.summary || 'Structured government data loaded.')}</p>
      </article>
      ${principalActors ? '<section class="data-grid">' + principalActors + '</section>' : ''}
      <article class="content-card">
        <h3>Institutional snapshot</h3>
        ${renderMetaList(institutionalItems) || '<p>No structured institutional data added yet.</p>'}
      </article>
      <article class="content-card">
        <h3>Coalition and parliamentary basis</h3>
        ${renderMetaList(coalitionItems) || '<p>No coalition data added yet.</p>'}
        ${government.notes ? '<p class="content-card-note">' + escapeHtml(government.notes) + '</p>' : ''}
      </article>
      ${renderTagList('Key parties in scope', government.keyParties)}
    `;
  }


  function getSemicircleLayout(totalSeats, options) {
    const rows = totalSeats >= 600 ? 12 : totalSeats >= 500 ? 11 : totalSeats >= 340 ? 10 : totalSeats >= 260 ? 9 : 8;
    const weights = Array.from({ length: rows }, function (_, index) {
      return index + 4;
    });
    const weightTotal = weights.reduce(function (sum, weight) { return sum + weight; }, 0);
    const rawCounts = weights.map(function (weight) {
      return (totalSeats * weight) / weightTotal;
    });
    const baseCounts = rawCounts.map(Math.floor);
    let allocated = baseCounts.reduce(function (sum, count) { return sum + count; }, 0);
    const remainders = rawCounts.map(function (value, index) {
      return { index: index, value: value - baseCounts[index] };
    }).sort(function (a, b) {
      return b.value - a.value;
    });

    for (let i = 0; allocated < totalSeats && i < remainders.length; i += 1) {
      baseCounts[remainders[i].index] += 1;
      allocated += 1;
    }

    const compact = Boolean(options && options.compact);
    const masthead = Boolean(options && options.masthead);
    let seatRadius = totalSeats >= 600 ? 3.85 : totalSeats >= 500 ? 4.15 : totalSeats >= 340 ? 4.85 : totalSeats >= 260 ? 5.2 : 5.6;
    let rowGap = totalSeats >= 600 ? 13.5 : totalSeats >= 500 ? 14 : totalSeats >= 340 ? 15.5 : 16.5;
    let outerRadius = totalSeats >= 600 ? 228 : totalSeats >= 500 ? 220 : totalSeats >= 340 ? 212 : 198;
    if (compact) {
      seatRadius *= 0.9;
      rowGap *= 0.92;
      outerRadius *= 0.88;
    }
    if (masthead) {
      seatRadius *= 0.88;
      rowGap *= 0.9;
      outerRadius *= 0.78;
    }
    const radii = Array.from({ length: rows }, function (_, index) {
      return outerRadius - ((rows - 1 - index) * rowGap);
    });
    const widthPadding = compact ? (masthead ? 28 : 40) : 56;
    const heightPadding = compact ? (masthead ? 34 : 58) : 76;
    const xPadding = compact ? (masthead ? 14 : 20) : 28;
    const yPadding = compact ? (masthead ? 14 : 24) : 34;

    return {
      rows: rows,
      rowCounts: baseCounts,
      radii: radii,
      seatRadius: seatRadius,
      width: (outerRadius * 2) + widthPadding,
      height: outerRadius + heightPadding,
      cx: outerRadius + xPadding,
      cy: outerRadius + yPadding,
      compact: compact
    };
  }

  function buildSeatStream(parties) {
    const stream = [];
    (parties || []).forEach(function (party) {
      const seats = Math.max(0, Number(party.seats) || 0);
      for (let i = 0; i < seats; i += 1) {
        stream.push(party);
      }
    });
    return stream;
  }

  function renderSemicircleChart(chamber, options) {
    const parties = Array.isArray(chamber.parties) ? chamber.parties.filter(function (party) {
      return party && Number(party.seats) > 0;
    }) : [];
    if (!parties.length) {
      return '<p>No seat distribution available.</p>';
    }

    const totalSeats = chamber.totalSeats || parties.reduce(function (sum, party) {
      return sum + (Number(party.seats) || 0);
    }, 0);
    const layout = getSemicircleLayout(totalSeats, options);
    const cx = layout.cx;
    const cy = layout.cy;
    const seats = buildSeatStream(parties);
    const circles = [];
    let seatIndex = 0;

    for (let rowIndex = 0; rowIndex < layout.rowCounts.length; rowIndex += 1) {
      const rowCount = layout.rowCounts[rowIndex];
      const radius = layout.radii[rowIndex];
      for (let positionIndex = 0; positionIndex < rowCount; positionIndex += 1) {
        const fraction = rowCount === 1 ? 0.5 : positionIndex / (rowCount - 1);
        const angle = Math.PI - (fraction * Math.PI);
        const x = cx + (Math.cos(angle) * radius);
        const y = cy - (Math.sin(angle) * radius);
        const party = seats[seatIndex] || parties[parties.length - 1];
        circles.push(
          '<circle cx="' + x.toFixed(2) + '" cy="' + y.toFixed(2) + '" r="' + layout.seatRadius.toFixed(2) + '" fill="' + escapeHtml(party.color || '#7aa7d9') + '" stroke="rgba(255, 255, 255, 0.2)" stroke-width="0.45"></circle>'
        );
        seatIndex += 1;
      }
    }

    const centerTop = cy - (layout.radii[0] * (layout.compact ? 0.1 : 0.15));
    const totalFontSize = layout.compact ? (totalSeats >= 600 ? 25 : totalSeats >= 340 ? 27 : 29) : (totalSeats >= 600 ? 29 : totalSeats >= 340 ? 31 : 33);
    const labelFontSize = layout.compact ? 12 : (totalSeats >= 600 ? 13 : 14);
    const centerLabel = [
      '<text x="' + cx.toFixed(2) + '" y="' + centerTop.toFixed(2) + '" text-anchor="middle" class="parliament-center-total" font-size="' + totalFontSize + '">' + escapeHtml(String(totalSeats)) + '</text>',
      '<text x="' + cx.toFixed(2) + '" y="' + (centerTop + 31).toFixed(2) + '" text-anchor="middle" class="parliament-center-label" font-size="' + labelFontSize + '">total seats</text>'
    ].join('');

    return '<svg class="parliament-svg" viewBox="0 0 ' + layout.width + ' ' + layout.height + '" role="img" aria-label="' + escapeHtml(chamber.title || 'Parliament seat chart') + '">' + circles.join('') + centerLabel + '</svg>';
  }

  function renderParliamentLegend(chamber) {
    const totalSeats = chamber.totalSeats || 0;
    const items = (chamber.parties || []).filter(function (party) {
      return party && Number(party.seats) > 0;
    }).map(function (party) {
      const seats = Number(party.seats) || 0;
      const share = totalSeats ? ((seats / totalSeats) * 100).toFixed(1) : '0.0';
      return `
        <div class="legend-chip">
          <span class="legend-swatch" style="background:${escapeHtml(party.color || '#7aa7d9')}"></span>
          <span class="legend-chip-label">${escapeHtml(party.short || party.name || 'Party')} (${escapeHtml(String(seats))})</span>
          <span class="legend-chip-share">${escapeHtml(share)}%</span>
        </div>
      `;
    }).join('');

    return '<div class="parliament-legend">' + items + '</div>';
  }

  function renderParliamentCard(chamber) {
    if (!chamber) return '';
    const totalSeats = Number(chamber.totalSeats) || 0;
    const majority = Number(chamber.majority) || 0;
    const methodLabel = chamber.methodLabel || '';

    return `
      <article class="content-card parliament-card">
        <div class="parliament-card-header">
          <div>
            <h3>${escapeHtml(chamber.title || 'Chamber composition')}</h3>
            ${chamber.subtitle ? '<p class="parliament-card-subtitle">' + escapeHtml(chamber.subtitle) + '</p>' : ''}
          </div>
          <div class="parliament-chip-stack">
            <div class="parliament-chip">${escapeHtml(chamber.chamber || 'Parliament')}</div>
            ${methodLabel ? '<div class="parliament-method-chip">' + escapeHtml(methodLabel) + '</div>' : ''}
          </div>
        </div>
        ${renderParliamentLegend(chamber)}
        <div class="parliament-chart-wrap">
          ${renderSemicircleChart(chamber)}
        </div>
        <div class="parliament-meta">
          <div class="parliament-meta-item">
            <span>Total seats</span>
            <strong>${escapeHtml(String(totalSeats || '—'))}</strong>
          </div>
          <div class="parliament-meta-item">
            <span>Majority</span>
            <strong>${escapeHtml(String(majority || '—'))}</strong>
          </div>
          ${chamber.asOf ? '<div class="parliament-meta-item"><span>As of</span><strong>' + escapeHtml(chamber.asOf) + '</strong></div>' : ''}
        </div>
        ${chamber.note ? '<p class="content-card-note">' + escapeHtml(chamber.note) + '</p>' : ''}
      </article>
    `;
  }

  function renderParliament(country) {
    const loading = isCountryDetailLoading(country.id);
    const parliament = country.parliament || null;

    if (!parliament && loading) {
      return `
        <article class="content-card">
          <h3>Parliament workspace</h3>
          <p>Loading structured parliament data for ${escapeHtml(country.name)}...</p>
        </article>
      `;
    }

    if (!parliament || (!parliament.current && !parliament.projected)) {
      return `
        <article class="content-card">
          <h3>Parliament workspace</h3>
          <p>No chamber distribution data is available for ${escapeHtml(country.name)} yet.</p>
          <p>Add current seat data and a polling projection in the country detail module to activate the diagrams.</p>
        </article>
      `;
    }

    const chamberName = parliament.chamber || 'Parliament';
    const projectedMethod = parliament.projected && parliament.projected.methodLabel ? parliament.projected.methodLabel : 'Poll-based projection';
    return `
      <article class="content-card">
        <h3>${escapeHtml(chamberName)} distribution</h3>
        <p>This tab compares the current chamber with a hypothetical fresh-election distribution. The method label on each card shows whether the numbers come from official current totals or from an estimation model.</p>
        ${projectedMethod ? '<p class="content-card-note">Projection method: ' + escapeHtml(projectedMethod) + '.</p>' : ''}
      </article>
      <section class="parliament-grid">
        ${renderParliamentCard(parliament.current)}
        ${renderParliamentCard(parliament.projected)}
      </section>
    `;
  }


  function renderBlocSubtabs(kind, activeSection) {
    return `
      <nav class="eu-panel-subtabs" aria-label="${escapeHtml(kind)} sections">
        <button class="ghost-btn bloc-subtab-btn ${activeSection === 'overview' ? 'is-active' : ''}" type="button" data-bloc-kind="${escapeHtml(kind.toLowerCase())}" data-bloc-section="overview" aria-selected="${activeSection === 'overview'}">Overview</button>
        <button class="ghost-btn bloc-subtab-btn ${activeSection === 'news' ? 'is-active' : ''}" type="button" data-bloc-kind="${escapeHtml(kind.toLowerCase())}" data-bloc-section="news" aria-selected="${activeSection === 'news'}">News</button>
      </nav>
    `;
  }

  function renderNewsList(items, fallbackLabel) {
    const list = Array.isArray(items) ? items : [];
    if (!list.length) {
      return `<section class="news-list"><article class="news-item"><strong>No entries</strong><p>${escapeHtml(fallbackLabel || 'No news entries available.')}</p></article></section>`;
    }

    return `
      <section class="news-list">
        ${list.map(function (item, index) {
          const metaParts = [item.date, item.source].filter(Boolean).map(escapeHtml);
          return `
            <article class="news-item">
              <strong>${escapeHtml(item.title || ('Briefing ' + (index + 1)))}</strong>
              ${metaParts.length ? '<div class="news-meta">' + metaParts.join(' · ') + '</div>' : ''}
              <p>${escapeHtml(item.summary || item.blurb || 'No summary available.')}</p>
            </article>
          `;
        }).join('')}
      </section>
    `;
  }


  function normalizeRemoteNewsItems(items) {
    return (Array.isArray(items) ? items : []).map(function (item) {
      return {
        title: item.title || '',
        date: item.published || '',
        source: item.source || '',
        summary: item.summary || '',
        link: item.link || ''
      };
    }).filter(function (item) {
      return !!item.title;
    });
  }

  function getBlocNewsItems(kind, fallbackItems) {
    const remoteItems = state.remoteBlocNews[kind];
    if (Array.isArray(remoteItems) && remoteItems.length) {
      return remoteItems;
    }
    return Array.isArray(fallbackItems) ? fallbackItems : [];
  }

  function loadBlocNews(kind) {
    if (!blocNewsService) return Promise.resolve(false);
    return blocNewsService.load(kind, 8);
  }

  function loadConfiguredBlocNews() {
    if (!blocNewsService) return;
    loadBlocNews('eu');
    loadBlocNews('nato');
  }

  function renderEUStatusLegend() {
    return `
      <div class="eu-status-legend">
        <div class="eu-legend-chip"><span class="eu-legend-dot is-member"></span><span>EU member state</span></div>
        <div class="eu-legend-chip"><span class="eu-legend-dot is-aspiring"></span><span>EU-aspiring country</span></div>
        <div class="eu-legend-chip"><span class="eu-legend-dot is-other"></span><span>Other European country</span></div>
      </div>
    `;
  }

  function renderEUPanel() {
    if (!els.euPanelContent) return;
    const euData = getEUData();
    if (!euData) {
      els.euPanelContent.innerHTML = '<article class="content-card"><h3>EU panel unavailable</h3><p>No EU-wide data layer is loaded in this build yet.</p></article>';
      return;
    }

    const mapCountries = countries || [];
    const memberCountOnMap = mapCountries.filter(function (country) {
      return !!getEUStatusByCountryId(country.id) && getEUStatusByCountryId(country.id).key === 'member';
    }).length;
    const aspiringCountOnMap = mapCountries.filter(function (country) {
      const status = getEUStatusByCountryId(country.id);
      return status && status.key !== 'member';
    }).length;
    const candidateCountOnMap = mapCountries.filter(function (country) {
      const status = getEUStatusByCountryId(country.id);
      return status && status.key === 'candidate';
    }).length;
    const potentialCountOnMap = mapCountries.filter(function (country) {
      const status = getEUStatusByCountryId(country.id);
      return status && status.key === 'potential-candidate';
    }).length;
    const chamber = euData.parliament && euData.parliament.current ? euData.parliament.current : null;
    const newsItems = getBlocNewsItems('eu', euData.news);
    const activeSection = state.activeEUSection === 'news' ? 'news' : 'overview';

    let content = '';
    if (activeSection === 'news') {
      content = `
        <article class="content-card">
          <h3>European Union news workspace</h3>
          <p>${escapeHtml(euData.newsSummary || 'EU-wide institutional briefings and political developments.')}</p>
          <p class="content-card-note">This news view is scrollable so the EU workspace can hold more institutional updates without crushing the chart layout above.</p>
        </article>
        ${renderNewsList(newsItems, 'EU news is not loaded in this build yet.')}
      `;
    } else {
      content = `
        <div class="eu-panel-grid">
          <article class="content-card">
            <h3>European Union workspace</h3>
            <p>${escapeHtml(euData.newsSummary || 'EU-wide institutional developments, membership status and Parliament group distribution.')}</p>
            <div class="eu-panel-summary-grid">
              <article class="summary-card">
                <span class="summary-label">EU member states</span>
                <strong>${escapeHtml(String((euData.memberIds || []).length))}</strong>
                <p class="content-card-note">${escapeHtml(String(memberCountOnMap))} shown on this SVG map</p>
              </article>
              <article class="summary-card">
                <span class="summary-label">EU-aspiring on this map</span>
                <strong>${escapeHtml(String(aspiringCountOnMap))}</strong>
                <p class="content-card-note">${escapeHtml(String(candidateCountOnMap))} candidates · ${escapeHtml(String(potentialCountOnMap))} potential candidate</p>
              </article>
              <article class="summary-card">
                <span class="summary-label">EP occupied seats</span>
                <strong>${escapeHtml(chamber ? String(chamber.totalSeats) : '—')}</strong>
                <p class="content-card-note">Statutory size: 720</p>
              </article>
              <article class="summary-card">
                <span class="summary-label">Snapshot</span>
                <strong>${escapeHtml(chamber && chamber.asOf ? chamber.asOf : '—')}</strong>
                <p class="content-card-note">Current group composition view</p>
              </article>
            </div>
            ${renderEUStatusLegend()}
            <p class="content-card-note">Map markings cover EU members plus the accession-track countries shown on this map. Malta is not drawn in the current SVG, and Georgia is outside the current map scope.</p>
          </article>
          ${chamber ? `
            <article class="content-card parliament-card">
              <div class="parliament-card-header">
                <div>
                  <h3>${escapeHtml(chamber.title || 'European Parliament')}</h3>
                  ${chamber.subtitle ? '<p class="parliament-card-subtitle">' + escapeHtml(chamber.subtitle) + '</p>' : ''}
                </div>
                <div class="parliament-chip-stack">
                  <div class="parliament-chip">${escapeHtml(chamber.chamber || 'European Parliament')}</div>
                  ${chamber.methodLabel ? '<div class="parliament-method-chip">' + escapeHtml(chamber.methodLabel) + '</div>' : ''}
                </div>
              </div>
              ${renderParliamentLegend(chamber)}
              <div class="parliament-chart-wrap is-compact is-eu-panel-chart">${renderSemicircleChart(chamber, { compact: true, masthead: true })}</div>
              <div class="parliament-meta">
                <div class="parliament-meta-item"><span>Total seats shown</span><strong>${escapeHtml(String(chamber.totalSeats || '—'))}</strong></div>
                <div class="parliament-meta-item"><span>Majority</span><strong>${escapeHtml(String(chamber.majority || '—'))}</strong></div>
                <div class="parliament-meta-item"><span>As of</span><strong>${escapeHtml(chamber.asOf || '—')}</strong></div>
              </div>
              ${chamber.note ? '<p class="content-card-note">' + escapeHtml(chamber.note) + '</p>' : ''}
            </article>
          ` : ''}
        </div>
      `;
    }

    els.euPanelContent.innerHTML = renderBlocSubtabs('EU', activeSection) + content;
  }

  function renderNATOPanel() {
    if (!els.natoPanelContent) return;
    const natoData = getNATOData();
    if (!natoData) {
      els.natoPanelContent.innerHTML = '<article class="content-card"><h3>NATO panel unavailable</h3><p>No NATO-wide data layer is loaded in this build yet.</p></article>';
      return;
    }

    const activeSection = state.activeNATOSection === 'news' ? 'news' : 'overview';
    const natoOverlay = getOverlayConfig('nato');
    const mapShown = natoOverlay && Array.isArray(natoOverlay.ids) ? natoOverlay.ids.filter(function (id) {
      return !!getCountryById(id);
    }).length : 0;

    let content = '';
    if (activeSection === 'news') {
      content = `
        <article class="content-card">
          <h3>NATO news workspace</h3>
          <p>${escapeHtml(natoData.newsSummary || 'Alliance-level NATO headlines and transatlantic political developments.')}</p>
          <p class="content-card-note">This feed mixes official NATO updates with major alliance-shaping reporting about Washington, burden-sharing, summit politics and public rhetoric around NATO.</p>
        </article>
${renderNewsList(getBlocNewsItems('nato', natoData.news), 'NATO news is not loaded in this build yet.')}
      `;
    } else {
      content = `
        <div class="eu-panel-grid">
          <article class="content-card">
            <h3>NATO workspace</h3>
            <p>${escapeHtml(natoData.overviewSummary || 'Alliance-level NATO developments and transatlantic politics.')}</p>
            <div class="eu-panel-summary-grid">
              <article class="summary-card">
                <span class="summary-label">Total allies</span>
                <strong>${escapeHtml(String(natoData.totalAllies || 32))}</strong>
                <p class="content-card-note">32-member alliance</p>
              </article>
              <article class="summary-card">
                <span class="summary-label">Shown on this SVG</span>
                <strong>${escapeHtml(String(mapShown || natoData.europeanAlliesOnMap || 30))}</strong>
                <p class="content-card-note">European allies on the map; U.S. and Canada are off-map</p>
              </article>
              <article class="summary-card">
                <span class="summary-label">Secretary General</span>
                <strong>${escapeHtml(natoData.secretaryGeneral || '—')}</strong>
                <p class="content-card-note">Current alliance head</p>
              </article>
              <article class="summary-card">
                <span class="summary-label">Next summit</span>
                <strong>${escapeHtml(natoData.summit && natoData.summit.location ? natoData.summit.location : '—')}</strong>
                <p class="content-card-note">${escapeHtml(natoData.summit && natoData.summit.dates ? natoData.summit.dates : 'Date pending')}</p>
              </article>
            </div>
          </article>
          <article class="content-card">
            <h3>${escapeHtml(natoData.commitment && natoData.commitment.title ? natoData.commitment.title : 'NATO commitment')}</h3>
            <div class="data-grid">
              <article class="data-card">
                <span class="data-card-label">Current benchmark</span>
                <strong>${escapeHtml(natoData.commitment && natoData.commitment.value ? natoData.commitment.value : '—')}</strong>
                <p>${escapeHtml(natoData.commitment && natoData.commitment.note ? natoData.commitment.note : 'Alliance commitment details not loaded.')}</p>
              </article>
              <article class="data-card">
                <span class="data-card-label">Map overlay</span>
                <strong>NATO overlay available</strong>
                <p>Use the bloc overlay filter to isolate European NATO allies directly on the map.</p>
              </article>
              <article class="data-card">
                <span class="data-card-label">Political pressure point</span>
                <strong>Transatlantic strain</strong>
                <p>This panel tracks NATO politics broadly, including burden-sharing pressure, summit politics and Trump-related alliance friction.</p>
              </article>
            </div>
            <p class="content-card-note">This workspace is intentionally political as well as institutional. It is meant to catch alliance-level arguments, not just official communiqués.</p>
          </article>
        </div>
      `;
    }

    els.natoPanelContent.innerHTML = renderBlocSubtabs('NATO', activeSection) + content;
  }

  function renderNews(country) {
    const items = (country.news || []).map(function (item, index) {
      if (item && typeof item === 'object') {
        const metaParts = [item.date, item.source].filter(Boolean).map(escapeHtml);
        return `
          <article class="news-item">
            <strong>${escapeHtml(item.title || ('Briefing ' + (index + 1)))}</strong>
            ${metaParts.length ? '<div class="news-meta">' + metaParts.join(' · ') + '</div>' : ''}
            <p>${escapeHtml(item.summary || item.blurb || 'No summary available.')}</p>
          </article>
        `;
      }

      return `
        <article class="news-item">
          <strong>Slot ${index + 1}</strong>
          <p>${escapeHtml(item)}</p>
        </article>
      `;
    }).join('');
    const summaryText = country.newsSummary || 'This tab now supports structured country-specific briefing cards. For countries without a richer feed yet, the generated baseline appears instead of raw placeholder strings.';
    return `
      <article class="content-card">
        <h3>News briefing</h3>
        <p>${escapeHtml(summaryText)}</p>
      </article>
      <section class="news-list">${items || '<article class="news-item"><strong>No entries</strong><p>News slots have not been added for this country yet.</p></article>'}</section>
    `;
  }

  function renderMethodology(country) {
    const coverageMeta = getCountryCoverageMeta(country);
    const loading = isCountryDetailLoading(country.id);
    const availableSections = getAvailableSections(country).filter(function (section) {
      return section !== 'methodology';
    });
    const warnings = coverageMeta.warnings || [];
    const currentChamber = country.parliament && country.parliament.current ? country.parliament.current : null;
    const projectedChamber = country.parliament && country.parliament.projected ? country.parliament.projected : null;
    const newsItems = Array.isArray(country.news) ? country.news : [];
    const sourceNames = Array.from(new Set(newsItems.map(function (item) {
      return item && typeof item === 'object' ? item.source : null;
    }).filter(Boolean)));
    const dateSignals = Array.from(new Set(newsItems.map(function (item) {
      return item && typeof item === 'object' ? item.date : null;
    }).filter(Boolean)));
    const loadStateLabel = loading
      ? 'Dedicated module loading in this session'
      : country.detailLoaded
        ? 'Dedicated module active'
        : country.detailGenerated
          ? 'Generated baseline active'
          : 'Prototype fallback active';
    const confidenceText = country.detailLoaded
      ? 'This country is currently rendering from a dedicated structured module. Current parliament figures and government facts should be read as module data, while projected chambers remain estimation models.'
      : country.detailGenerated && hasCountryDetailModule(country.id)
        ? 'A full module exists for this country, but the current session is still showing the generated baseline. Treat this view as transitional until the module finishes loading.'
        : country.detailGenerated
          ? 'This country currently uses the mass structured baseline. It is suitable for navigation and comparison, but not yet for high-confidence parliament work.'
          : 'This country is still closer to prototype fallback than to a production-grade political brief.';

    const parliamentRows = [];
    if (currentChamber) {
      parliamentRows.push({
        label: 'Current chamber method',
        value: (currentChamber.methodLabel || 'Structured chamber data') + (currentChamber.asOf ? ' · ' + currentChamber.asOf : '')
      });
    }
    if (projectedChamber) {
      parliamentRows.push({
        label: 'Projected chamber method',
        value: (projectedChamber.methodLabel || 'Poll-based projection') + (projectedChamber.asOf ? ' · ' + projectedChamber.asOf : '')
      });
    }
    if (!parliamentRows.length) {
      parliamentRows.push({
        label: 'Parliament method',
        value: 'No structured chamber model is available for this country yet.'
      });
    }

    return `
      <article class="content-card">
        <h3>Data status and trust level</h3>
        <p>${escapeHtml(confidenceText)}</p>
        <div class="detail-list" style="margin-top:0.85rem;">
          <div class="detail-list-row">
            <span class="detail-list-label">Readiness</span>
            <strong>${escapeHtml(formatReadinessLabel(coverageMeta.readiness))}</strong>
          </div>
          <div class="detail-list-row">
            <span class="detail-list-label">Source path</span>
            <strong>${escapeHtml(formatSourcePathLabel(coverageMeta.source))}</strong>
          </div>
          <div class="detail-list-row">
            <span class="detail-list-label">Session state</span>
            <strong>${escapeHtml(loadStateLabel)}</strong>
          </div>
          <div class="detail-list-row">
            <span class="detail-list-label">Rollout wave</span>
            <strong>${escapeHtml(coverageMeta.rolloutWave || '—')}</strong>
          </div>
        </div>
        <div style="margin-top:0.75rem;" class="pill-row">${availableSections.map(function (section) {
          return '<span class="data-pill">' + escapeHtml(formatSectionLabel(section)) + '</span>';
        }).join('')}</div>
      </article>
      <article class="content-card">
        <h3>Parliament methodology</h3>
        <p>Current and projected chambers should not be treated as the same kind of data. Current chambers describe present membership totals. Projected chambers are model outputs and must be read through the method label shown below.</p>
        ${renderMetaList(parliamentRows)}
        ${(currentChamber && currentChamber.note) || (projectedChamber && projectedChamber.note) ? '<p class="content-card-note" style="margin-top:0.8rem;">' + escapeHtml((projectedChamber && projectedChamber.note) || (currentChamber && currentChamber.note) || '') + '</p>' : ''}
      </article>
      <article class="content-card">
        <h3>News and freshness signals</h3>
        <p>EPMP does not yet have live scraping in this workspace. News cards therefore represent a curated snapshot stored inside the country module or generated baseline.</p>
        <div class="detail-list" style="margin-top:0.85rem;">
          <div class="detail-list-row">
            <span class="detail-list-label">News entries</span>
            <strong>${escapeHtml(String(newsItems.length || 0))}</strong>
          </div>
          <div class="detail-list-row">
            <span class="detail-list-label">Distinct sources</span>
            <strong>${escapeHtml(String(sourceNames.length || 0))}</strong>
          </div>
          <div class="detail-list-row">
            <span class="detail-list-label">Date markers</span>
            <strong>${escapeHtml(dateSignals.length ? dateSignals.slice(0, 2).join(' · ') + (dateSignals.length > 2 ? ' …' : '') : 'Not supplied')}</strong>
          </div>
        </div>
        ${sourceNames.length ? '<div class="pill-row" style="margin-top:0.75rem;">' + sourceNames.map(function (source) {
          return '<span class="data-pill">' + escapeHtml(source) + '</span>';
        }).join('') + '</div>' : '<p class="content-card-note" style="margin-top:0.8rem;">This country currently has no distinct source labels in its stored news cards.</p>'}
      </article>
      <article class="content-card">
        <h3>Validation and limitations</h3>
        ${warnings.length ? '<p>The current module has schema warnings. Review the console before treating this country as production-grade.</p><ul class="detail-bullet-list">' + warnings.map(function (warning) {
          return '<li>' + escapeHtml(warning) + '</li>';
        }).join('') + '</ul>' : '<p>No schema-level warnings are currently attached to this country profile.</p>'}
        <p class="content-card-note">For mass rollout, use this tab to distinguish between official current-seat totals, threshold-adjusted projections, illustrative proportional approximations, and simple generated baseline coverage.</p>
      </article>
    `;
  }

  function renderTabContent(country) {
    if (!country) {
      els.tabContent.innerHTML = '';
      return;
    }

    const sectionState = getSectionAvailability(country, state.activeTab);
    if (sectionState.deferred) {
      els.tabContent.innerHTML = renderDeferredSectionCard(country, state.activeTab);
      return;
    }

    if (!sectionState.available && state.activeTab !== 'overview') {
      els.tabContent.innerHTML = renderUnavailableSectionCard(country, state.activeTab);
      return;
    }

    if (state.activeTab === 'government') {
      els.tabContent.innerHTML = renderGovernment(country);
      return;
    }

    if (state.activeTab === 'parliament') {
      els.tabContent.innerHTML = renderParliament(country);
      return;
    }

    if (state.activeTab === 'news') {
      els.tabContent.innerHTML = renderNews(country);
      return;
    }

    if (state.activeTab === 'methodology') {
      els.tabContent.innerHTML = renderMethodology(country);
      return;
    }

    els.tabContent.innerHTML = renderOverview(country);
  }

  function updateTabButtons(country) {
    const resolvedCountry = country || getResolvedCountry(state.selectedCountryId);
    const availableSections = getAvailableSections(resolvedCountry);
    const loading = resolvedCountry ? isCountryDetailLoading(resolvedCountry.id) : false;

    els.tabs.forEach(function (button) {
      const tabId = button.getAttribute('data-tab');
      const isAvailable = availableSections.indexOf(tabId) !== -1 || (loading && hasCountryDetailModule(resolvedCountry && resolvedCountry.id));
      const isDeferred = !isAvailable && hasCountryDetailModule(resolvedCountry && resolvedCountry.id);
      button.classList.toggle('is-active', tabId === state.activeTab);
      button.classList.toggle('is-disabled', !isAvailable && !isDeferred);
      button.classList.toggle('is-deferred', isDeferred);
      button.disabled = !isAvailable && !isDeferred;
      if (!isAvailable && !isDeferred) {
        button.setAttribute('aria-disabled', 'true');
        button.title = tabId === 'parliament' ? 'No structured parliament dataset is available for this country yet.' : 'This section is not available for the current country profile yet.';
      } else if (isDeferred) {
        button.removeAttribute('aria-disabled');
        button.title = 'This section will become available once the full country module finishes loading.';
      } else {
        button.removeAttribute('aria-disabled');
        button.title = '';
      }
    });
  }

  function renderPanel(country) {
    const hasCountry = Boolean(country);
    els.emptyState.classList.toggle('is-hidden', hasCountry);
    els.panelContent.classList.toggle('is-hidden', !hasCountry);

    if (!hasCountry) {
      syncWorkspaceStatus();
      return;
    }

    els.countryName.textContent = country.name;
    els.countryOfficialName.textContent = country.officialName;
    els.regionBadge.textContent = regionLabel(country.region);
    els.summaryCapital.textContent = country.capital;
    els.summarySystem.textContent = country.system;
    els.summaryElection.textContent = country.nextElection;
    if (els.summaryEUStatus) {
      els.summaryEUStatus.textContent = formatEUStatusSummary(country);
    }

    const euStatus = getEUStatusByCountryId(country.id);
    if (els.countryEUStatusBadge) {
      if (euStatus) {
        els.countryEUStatusBadge.textContent = euStatus.shortLabel;
        els.countryEUStatusBadge.className = 'region-badge ' + (euStatus.key === 'member' ? 'is-eu-member' : 'is-eu-aspiring');
        els.countryEUStatusBadge.classList.remove('is-hidden');
      } else {
        els.countryEUStatusBadge.textContent = 'Outside EU track';
        els.countryEUStatusBadge.className = 'region-badge is-neutral is-hidden';
      }
    }
    syncWorkspaceStatus();

    ensureValidActiveTab(country);
    updateTabButtons(country);
    renderTabContent(country);
    const loadBanner = renderSectionLoadStatus(country);
    if (loadBanner) {
      els.tabContent.insertAdjacentHTML('afterbegin', loadBanner);
    }
  }

  function syncSelectionClasses() {
    const groups = Array.from(document.querySelectorAll('.country-group'));
    groups.forEach(function (group) {
      group.classList.toggle('is-selected', group.getAttribute('data-country-id') === state.selectedCountryId);
    });
  }

  function selectCountry(id) {
    state.selectedCountryId = id;
    if (state.isPanelCollapsed) {
      togglePanelCollapse(false);
    }
    syncSelectionClasses();
    renderSelectedCountry();
    const country = getCountryById(id);
    if (country) announcer.speak(country.name + ' selected.');
    syncWorkspaceStatus();
    ensureCountryDetail(id);
  }

  function clearSelectedCountry(options) {
    if (!state.selectedCountryId) return false;
    const current = getCountryById(state.selectedCountryId);
    state.selectedCountryId = null;
    syncSelectionClasses();
    renderPanel(null);
    syncWorkspaceStatus();
    if (!(options && options.silent) && current) {
      announcer.speak(current.name + ' deselected.');
    }
    return true;
  }

  function clearSelectionIfHidden() {
    const current = getCountryById(state.selectedCountryId);
    if (!current) return;
    const regionMatch = state.activeRegion === 'all' || current.region === state.activeRegion;
    const searchMatch = !state.searchQuery.trim() || current.name.toLowerCase().includes(state.searchQuery.trim().toLowerCase());
    const coverageMatch = state.activeCoverage === 'all' || getCoverageClassForCountry(current) === state.activeCoverage;
    const overlayMatch = state.activeOverlay === 'none' || countryMatchesOverlay(current, state.activeOverlay);
    if (!regionMatch || !searchMatch || !coverageMatch || !overlayMatch) {
      clearSelectedCountry({ silent: true });
    }
  }

  function startPan(event) {
    if (event.button !== 0 || state.isResizing) return;
    if (event.target.closest('#map-toolbar')) return;
    state.isPanPending = true;
    state.isPanning = false;
    state.didPan = false;
    state.panPointerId = event.pointerId !== undefined ? event.pointerId : null;
    state.hasPanCapture = false;
    state.panStartX = event.clientX;
    state.panStartY = event.clientY;
    state.startMapOffsetX = state.baseMapOffsetX;
    state.startMapOffsetY = state.baseMapOffsetY;
  }

  function onPanMove(event) {
    if (!state.isPanPending && !state.isPanning) return;
    if (state.panPointerId !== null && event.pointerId !== undefined && event.pointerId !== state.panPointerId) return;
    const deltaX = event.clientX - state.panStartX;
    const deltaY = event.clientY - state.panStartY;
    if (!state.isPanning) {
      if (Math.abs(deltaX) < 7 && Math.abs(deltaY) < 7) {
        return;
      }
      state.isPanning = true;
      state.didPan = true;
      document.body.classList.add('is-panning');
      hideTooltip();
      if (!state.hasPanCapture && typeof els.mapViewport.setPointerCapture === 'function' && state.panPointerId !== null) {
        try {
          els.mapViewport.setPointerCapture(state.panPointerId);
          state.hasPanCapture = true;
        } catch (error) {}
      }
    }
    state.baseMapOffsetX = state.startMapOffsetX + deltaX;
    state.baseMapOffsetY = state.startMapOffsetY + deltaY;
    applyMapTransform();
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    }
    event.preventDefault && event.preventDefault();
  }

  function stopPan() {
    if (!state.isPanPending && !state.isPanning) return;
    const didActuallyPan = state.isPanning;
    if (state.hasPanCapture && typeof els.mapViewport.releasePointerCapture === 'function' && state.panPointerId !== null) {
      try {
        els.mapViewport.releasePointerCapture(state.panPointerId);
      } catch (error) {}
    }
    state.hasPanCapture = false;
    state.panPointerId = null;
    state.isPanPending = false;
    state.isPanning = false;
    document.body.classList.remove('is-panning');
    if (didActuallyPan) {
      window.setTimeout(function () {
        state.didPan = false;
      }, 90);
    } else {
      state.didPan = false;
    }
  }

  function startResize(event) {
    if (window.innerWidth <= 980 || state.isPanelCollapsed) return;
    state.isResizing = true;
    state.dragStartX = event.clientX;
    state.startPanelWidth = state.panelWidth;
    document.body.classList.add('is-resizing');
    if (typeof els.panelResizer.setPointerCapture === 'function' && event.pointerId !== undefined) {
      els.panelResizer.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
  }

  function onResizeMove(event) {
    if (!state.isResizing) return;
    const delta = state.dragStartX - event.clientX;
    setPanelWidth(state.startPanelWidth + delta);
    window.getSelection && window.getSelection().removeAllRanges();
  }

  function stopResize() {
    if (!state.isResizing) return;
    state.isResizing = false;
    document.body.classList.remove('is-resizing');
    applyMapTransform();
  }

  function togglePanelCollapse(forceValue) {
    state.isPanelCollapsed = typeof forceValue === 'boolean' ? forceValue : !state.isPanelCollapsed;
    workspaceController.syncPanelState();
    persistLayoutState();
    syncWorkspaceStatus();
    window.requestAnimationFrame(function () { syncMapLayout(); });
  }

  function toggleSection(button, element, labels) {
    const collapsed = !element.classList.contains('is-collapsed');
    element.classList.toggle('is-collapsed', collapsed);
    button.textContent = collapsed ? labels.expand : labels.collapse;
    button.setAttribute('aria-expanded', String(!collapsed));
    persistLayoutState();
    if (element === els.masthead) {
      window.requestAnimationFrame(function () { syncMapLayout(); });
    }
  }

  function bindEvents() {
    els.zoomInBtn.addEventListener('click', function () {
      state.mapScale = clamp(state.mapScale + 0.08, 0.72, 2.3);
      applyMapTransform();
    });

    els.zoomOutBtn.addEventListener('click', function () {
      state.mapScale = clamp(state.mapScale - 0.08, 0.72, 2.3);
      applyMapTransform();
    });

    els.tiltLeftBtn.addEventListener('click', function () {
      state.mapTilt = clamp(state.mapTilt - 4, -20, 20);
      applyMapTransform();
    });

    els.tiltRightBtn.addEventListener('click', function () {
      state.mapTilt = clamp(state.mapTilt + 4, -20, 20);
      applyMapTransform();
    });

    els.mapResetBtn.addEventListener('click', function () {
      resetMapView();
      announcer.toast('Map view reset.', 'info');
    });

    els.mapViewport.addEventListener('pointerdown', startPan);
    els.mapViewport.addEventListener('wheel', function (event) {
      event.preventDefault();
      const previousScale = state.mapScale;
      const direction = event.deltaY > 0 ? -1 : 1;
      const step = event.ctrlKey ? 0.04 : 0.1;
      state.mapScale = clamp(state.mapScale + direction * step, 0.72, 2.3);
      const rect = els.mapViewport.getBoundingClientRect();
      const pointerX = event.clientX - (rect.left + (rect.width / 2));
      const pointerY = event.clientY - (rect.top + (rect.height / 2));
      const ratio = state.mapScale / previousScale;
      state.baseMapOffsetX = (ratio * state.baseMapOffsetX) + ((1 - ratio) * pointerX);
      state.baseMapOffsetY = (ratio * state.baseMapOffsetY) + ((1 - ratio) * pointerY);
      applyMapTransform();
    }, { passive: false });
    els.resetViewBtn.addEventListener('click', function () {
      resetMapView();
      state.activeRegion = 'all';
      state.searchQuery = '';
      state.activeCoverage = 'all';
      state.activeOverlay = 'none';
      els.regionFilter.value = 'all';
      els.countrySearch.value = '';
      if (els.coverageFilter) els.coverageFilter.value = 'all';
      if (els.overlayFilter) els.overlayFilter.value = 'none';
      applyCountryVisibility();
      clearSelectionIfHidden();
      announcer.toast('Filters and map view reset.', 'info');
    });

    els.countrySearch.addEventListener('input', function (event) {
      const nextQuery = event.target.value || '';
      if (nextQuery.trim().toLowerCase() === 'hamza') {
        triggerEasterEgg();
        state.searchQuery = '';
        event.target.value = '';
      } else {
        state.searchQuery = nextQuery;
      }
      applyCountryVisibility();
      clearSelectionIfHidden();
    });

    els.regionFilter.addEventListener('change', function (event) {
      state.activeRegion = event.target.value;
      applyCountryVisibility();
      clearSelectionIfHidden();
    });

    if (els.coverageFilter) {
      els.coverageFilter.addEventListener('change', function (event) {
        state.activeCoverage = event.target.value;
        applyCountryVisibility();
        clearSelectionIfHidden();
      });
    }

    if (els.overlayFilter) {
      els.overlayFilter.addEventListener('change', function (event) {
        state.activeOverlay = event.target.value || 'none';
        applyCountryVisibility();
        clearSelectionIfHidden();
      });
    }

    els.clearFiltersBtn.addEventListener('click', function () {
      state.activeRegion = 'all';
      state.searchQuery = '';
      state.activeCoverage = 'all';
      state.activeOverlay = 'none';
      els.regionFilter.value = 'all';
      els.countrySearch.value = '';
      if (els.coverageFilter) els.coverageFilter.value = 'all';
      if (els.overlayFilter) els.overlayFilter.value = 'none';
      applyCountryVisibility();
      clearSelectionIfHidden();
      announcer.toast('Map filters cleared.', 'info');
    });

    els.toggleMastheadBtn.addEventListener('click', function () {
      toggleSection(els.toggleMastheadBtn, els.masthead, {
        collapse: 'Collapse masthead',
        expand: 'Expand masthead'
      });
    });

    els.mastheadTabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const tabId = button.getAttribute('data-masthead-tab');
        setActiveMastheadTab(tabId);
      });
    });

    if (els.euPanelContent) {
      els.euPanelContent.addEventListener('click', function (event) {
        const button = event.target.closest('[data-bloc-kind="eu"][data-bloc-section]');
        if (!button) return;
        state.activeEUSection = button.getAttribute('data-bloc-section') === 'news' ? 'news' : 'overview';
        renderEUPanel();
      });
    }

    if (els.natoPanelContent) {
      els.natoPanelContent.addEventListener('click', function (event) {
        const button = event.target.closest('[data-bloc-kind="nato"][data-bloc-section]');
        if (!button) return;
        state.activeNATOSection = button.getAttribute('data-bloc-section') === 'news' ? 'news' : 'overview';
        renderNATOPanel();
      });
    }

    els.toggleIntroBtn.addEventListener('click', function () {
      toggleSection(els.toggleIntroBtn, els.panelIntro, {
        collapse: 'Collapse intro',
        expand: 'Expand intro'
      });
    });

    function handlePanelToggleIntent(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      togglePanelCollapse();
    }

    els.togglePanelBtn.addEventListener('pointerdown', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    els.togglePanelBtn.addEventListener('click', handlePanelToggleIntent);

    els.panelResizer.addEventListener('pointerdown', startResize);
    window.addEventListener('pointermove', function (event) {
      onResizeMove(event);
      onPanMove(event);
    });
    window.addEventListener('pointerup', function () {
      stopResize();
      stopPan();
    });
    window.addEventListener('pointercancel', function () {
      stopResize();
      stopPan();
    });
    window.addEventListener('resize', function () {
      window.requestAnimationFrame(function () { syncMapLayout(); });
    });

    els.panelResizer.addEventListener('dblclick', function () {
      if (state.isPanelCollapsed) {
        togglePanelCollapse(false);
      }
      setPanelWidth(430);
      applyMapTransform();
    });

    els.panelResizer.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (state.isPanelCollapsed) togglePanelCollapse(false);
        setPanelWidth(state.panelWidth + 24);
        applyMapTransform();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (state.isPanelCollapsed) togglePanelCollapse(false);
        setPanelWidth(state.panelWidth - 24);
        applyMapTransform();
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        if (state.isPanelCollapsed) togglePanelCollapse(false);
        setPanelWidth(430);
        applyMapTransform();
      }
    });

    els.tabs.forEach(function (button) {
      button.addEventListener('click', function () {
        const nextTab = button.getAttribute('data-tab');
        if (!nextTab) return;
        if (button.disabled) return;
        state.activeTab = nextTab;
        renderSelectedCountry();
        ensureCountryDetail(state.selectedCountryId);
      });
    });
  }

  function init() {
    preferences.hydrate();
    shortcutModal.bind();
    bindGlobalResilienceGuards();

    blocNewsService = new BlocNewsService(getApiBaseUrl, function (kind, result) {
      state.remoteBlocNews[kind] = result.items;
      state.remoteBlocNewsStatus[kind] = result.status;
      if (kind === 'eu') {
        renderEUPanel();
      } else if (kind === 'nato') {
        renderNATOPanel();
      }
      if (result.status === 'error') {
        announcer.toast((kind === 'eu' ? 'EU' : 'NATO') + ' live news failed to load. Fallback data remains active.', 'warning');
      }
    });

    keyboardShortcuts = new KeyboardShortcutController({
      shortcutModal: shortcutModal,
      focusSearch: function () {
        setActiveMastheadTab('filters');
        if (els.countrySearch) els.countrySearch.focus();
      },
      openMastheadTab: function (tabId) {
        setActiveMastheadTab(tabId);
      },
      resetMap: function () {
        resetMapView();
      },
      zoomBy: function (delta) {
        state.mapScale = clamp(state.mapScale + delta, 0.72, 2.3);
        applyMapTransform();
      },
      onEscape: function () {
        hideTooltip();
        if (state.activeMastheadTab === 'eu' || state.activeMastheadTab === 'nato') {
          setActiveMastheadTab('filters');
          announcer.notify('Returned to map view.', 'info');
          return;
        }
        if (clearSelectedCountry()) {
          return;
        }
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      }
    });
    keyboardShortcuts.bind();

    setPanelWidth(state.panelWidth || 430);
    workspaceController.syncPanelState();
    applyEUCountryMarkings();
    attachMapEvents();
    renderEUPanel();
    renderNATOPanel();
    setActiveMastheadTab(state.activeMastheadTab);
    renderPanel(null);
    bindEvents();
    applyCountryVisibility();

    const savedMapState = storage.get('mapState', null);
    if (savedMapState) {
      applyMapTransform();
    } else {
      resetMapView();
    }

    loadConfiguredBlocNews();
    syncWorkspaceStatus();
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
