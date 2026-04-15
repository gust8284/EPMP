(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('spain', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary constitutional monarchy',
      nextElection: 'Congress term normally lasts 4 years unless dissolved earlier'
    },
    overview: {
      keyFacts: [
        'Spain is now wired into the full structured data layer for overview, government, parliament and news.',
        'The current executive is led by Prime Minister Pedro Sánchez under King Felipe VI.',
        'The parliament tab uses the Congress of Deputies, with current group totals and an explicitly illustrative polling-based seat map.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Spain.',
      system: 'Parliamentary constitutional monarchy',
      status: 'Minority government led by Pedro Sánchez, dependent on a shifting parliamentary support network rather than a single large majority bloc.',
      headOfState: {
        title: 'Monarch',
        name: 'King Felipe VI'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Pedro Sánchez',
        party: 'PSOE'
      },
      governmentParties: 'PSOE and Sumar',
      supportArrangement: 'Government survival depends on negotiated support from smaller regional and left-wing parties, while the PP remains the largest opposition force.',
      electionCycle: 'The Congress of Deputies normally serves 4 years unless dissolved earlier.',
      notes: 'Spain’s lower house remains fragmented. The formal cabinet base is narrower than the set of parties needed to pass budgets and major laws.',
      keyParties: ['PSOE', 'PP', 'Vox', 'Sumar', 'Junts', 'ERC', 'EH Bildu', 'PNV']
    },
    parliament: {
      chamber: 'Congress of Deputies',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Congress groups',
        chamber: 'Congress of Deputies',
        totalSeats: 350,
        majority: 176,
        note: 'Current lower-house group totals. Several smaller or region-specific formations are combined only where needed to keep the chart readable.',
        parties: [
          { short: 'SUM', name: 'Plurinational SUMAR', seats: 26, color: '#d45087' },
          { short: 'PSOE', name: 'Socialist Group', seats: 121, color: '#e15759' },
          { short: 'REG', name: 'Regional support parties', seats: 18, color: '#f28e2b' },
          { short: 'JUN', name: 'Junts', seats: 7, color: '#9c6644' },
          { short: 'PP', name: 'Popular Party', seats: 137, color: '#1f4fa3' },
          { short: 'VOX', name: 'Vox', seats: 33, color: '#2e8b57' },
          { short: 'MIX', name: 'Mixed Group', seats: 8, color: '#8f9aa8' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Illustrative poll-based projection',
        chamber: 'Congress of Deputies',
        totalSeats: 350,
        majority: 176,
        asOf: '12 April 2026',
        methodLabel: 'Illustrative proportional approximation',
        note: 'Illustrative lower-house map from the PolitPro national poll trend. Real Spanish seat allocation depends on province-level district magnitudes and can differ materially from a national proportional model.',
        parties: [
          { short: 'PSOE', name: 'PSOE', seats: 99, color: '#e15759' },
          { short: 'SUM', name: 'Sumar', seats: 22, color: '#d45087' },
          { short: 'POD', name: 'Podemos', seats: 12, color: '#a05195' },
          { short: 'REG', name: 'Regional parties', seats: 34, color: '#f28e2b' },
          { short: 'PP', name: 'Popular Party', seats: 109, color: '#1f4fa3' },
          { short: 'VOX', name: 'Vox', seats: 63, color: '#2e8b57' },
          { short: 'SALF', name: 'SALF', seats: 7, color: '#8b5e3c' },
          { short: 'OTH', name: 'Others', seats: 4, color: '#8f9aa8' }
        ]
      }
    },
    news: [
      {
        title: 'Sánchez pushes diplomatic and economic agenda in China',
        date: '12 April 2026',
        source: 'Reuters',
        summary: 'Pedro Sánchez used a China visit to underline Spain’s economic diplomacy and its attempt to keep a wider strategic profile inside the EU.'
      },
      {
        title: 'Government argues Spain needs a larger international role',
        date: '7 April 2026',
        source: 'Reuters',
        summary: 'Sánchez said Spain should play a larger geopolitical role, linking foreign policy visibility to the country’s weight inside Europe and NATO debates.'
      },
      {
        title: 'Madrid sharpens criticism of the US and Israel over Gaza policy',
        date: '9 April 2026',
        source: 'Reuters',
        summary: 'The Spanish government again positioned itself as one of the stronger European critics of current US and Israeli policy over Gaza, reinforcing a distinctive foreign-policy tone.'
      }
    ]
  });
})();
