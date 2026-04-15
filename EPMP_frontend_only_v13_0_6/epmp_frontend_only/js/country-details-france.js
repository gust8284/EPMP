(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('france', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Semi-presidential republic',
      nextElection: 'Presidential election expected in 2027; legislative election due by 2029 unless the Assembly is dissolved earlier'
    },
    overview: {
      keyFacts: [
        'France is now wired into the structured country-data layer for overview, government, parliament and news.',
        'The executive is led by President Emmanuel Macron and Prime Minister Sébastien Lecornu, but the government does not control an absolute majority in the National Assembly.',
        'The parliament tab uses the current National Assembly group totals and an illustrative poll-based projection for a fresh legislative election.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for France.',
      system: 'Semi-presidential republic',
      status: 'Minority government under President Emmanuel Macron and Prime Minister Sébastien Lecornu, without an absolute majority in the National Assembly.',
      headOfState: {
        title: 'President',
        name: 'Emmanuel Macron'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Sébastien Lecornu',
        party: 'Presidential camp'
      },
      governmentParties: 'Executive anchored in the Macron-aligned presidential camp, with support negotiated issue by issue in parliament.',
      supportArrangement: 'No stable governing majority; budgets and major bills depend on cross-group bargaining and surviving no-confidence motions.',
      electionCycle: 'Presidential term: 5 years. Legislative term: normally 5 years unless the National Assembly is dissolved.',
      notes: 'The current National Assembly was elected after the June 2024 dissolution. The lower house remains highly fragmented, so government survival depends more on parliamentary arithmetic than on a formal majority coalition.',
      keyParties: ['Rassemblement National', 'Nouveau Front Populaire', 'Ensemble', 'Les Républicains']
    },
    parliament: {
      chamber: 'National Assembly',
      current: {
        title: 'Current parliament',
        subtitle: 'Current National Assembly groups',
        chamber: 'National Assembly',
        totalSeats: 577,
        majority: 289,
        note: 'This chamber view tracks the current lower-house group totals published by the Assemblée nationale. It does not include the Senate.',
        parties: [
          { short: 'GDR', name: 'Gauche Démocrate et Républicaine', seats: 17, color: '#7f0000' },
          { short: 'LFI', name: 'La France insoumise - Nouveau Front Populaire', seats: 71, color: '#c61f3a' },
          { short: 'SOC', name: 'Socialistes et apparentés', seats: 69, color: '#e85d75' },
          { short: 'ECO', name: 'Écologiste et Social', seats: 38, color: '#49a65b' },
          { short: 'LIOT', name: 'Libertés, Indépendants, Outre-mer et Territoires', seats: 22, color: '#38a3a5' },
          { short: 'DEM', name: 'Les Démocrates', seats: 37, color: '#f1c453' },
          { short: 'EPR', name: 'Ensemble pour la République', seats: 91, color: '#f4a259' },
          { short: 'HOR', name: 'Horizons & Indépendants', seats: 35, color: '#4f7ecb' },
          { short: 'DR', name: 'Droite Républicaine', seats: 48, color: '#2f4f9d' },
          { short: 'UDR', name: 'Union des droites pour la République', seats: 17, color: '#27406e' },
          { short: 'RN', name: 'Rassemblement National', seats: 122, color: '#123a7a' },
          { short: 'NI', name: 'Non inscrit', seats: 10, color: '#7a8594' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Illustrative poll-based projection',
        chamber: 'National Assembly',
        totalSeats: 577,
        majority: 289,
        asOf: '12 April 2026',
        methodLabel: 'Illustrative proportional approximation',
        note: 'Illustrative proportional seat allocation from the PolitPro national poll trend. Real French legislative results can differ sharply because the National Assembly is elected in two-round constituencies, not by nationwide proportional representation.',
        parties: [
          { short: 'EXG', name: 'Extrême gauche', seats: 6, color: '#7f0000' },
          { short: 'NFP', name: 'Nouveau Front Populaire', seats: 138, color: '#d43750' },
          { short: 'DVG', name: 'Divers gauche', seats: 23, color: '#f08a97' },
          { short: 'OTH', name: 'Others', seats: 12, color: '#9aa4b2' },
          { short: 'ENS', name: 'Ensemble', seats: 81, color: '#f4a259' },
          { short: 'LR', name: 'Les Républicains', seats: 69, color: '#355fb3' },
          { short: 'DVD', name: 'Divers droite', seats: 17, color: '#4f7ecb' },
          { short: 'DLF', name: 'Debout la France', seats: 6, color: '#6b5ca5' },
          { short: 'REC', name: 'Reconquête', seats: 23, color: '#5b3f8c' },
          { short: 'RN', name: 'Rassemblement National', seats: 202, color: '#123a7a' }
        ]
      }
    },
    news: [
      {
        title: 'Government launches a new electrification drive',
        date: '10 April 2026',
        source: 'Gouvernement / Matignon',
        summary: 'Prime Minister Sébastien Lecornu announced a larger electrification push tied to energy security, including stronger support for heat pumps, electric vehicles and industrial electrification.'
      },
      {
        title: 'Municipal runoffs deny the far right major-city breakthroughs',
        date: '23 March 2026',
        source: 'Reuters',
        summary: 'The second round of municipal elections left National Rally without control of major target cities such as Marseille, while mainstream and left-wing forces held key urban ground ahead of the 2027 presidential race.'
      },
      {
        title: 'Minority government survives budget no-confidence votes',
        date: '23 January 2026',
        source: 'Reuters',
        summary: 'Lecornu survived two no-confidence motions after using Article 49.3 to push budget measures through a fragmented National Assembly, underscoring how dependent the government is on ad hoc parliamentary support.'
      }
    ]
  });
})();
