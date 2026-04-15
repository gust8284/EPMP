(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('estonia', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Riigikogu election due by March 2027'
    },
    overview: {
      keyFacts: [
        'Estonia now uses a full structured module for overview, government, parliament and news.',
        'Prime Minister Kristen Michal leads the government under President Alar Karis.',
        'The parliament tab compares the current 101-seat Riigikogu with a threshold-based poll projection.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Estonia.',
      system: 'Parliamentary republic',
      status: 'Coalition government led by the Reform Party.',
      headOfState: {
        title: 'President',
        name: 'Alar Karis'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Kristen Michal',
        party: 'Reform Party'
      },
      governmentParties: 'Reform Party, Estonia 200 and Social Democratic Party.',
      supportArrangement: 'The cabinet relies on a liberal-centrist parliamentary coalition in the Riigikogu.',
      electionCycle: 'Parliamentary term: 4 years. Presidential term: 5 years.',
      notes: 'The government agenda remains centered on defense, fiscal restraint, digital administration and support for Ukraine.',
      keyParties: ['Reform Party', 'Centre Party', 'Isamaa', 'EKRE', 'Estonia 200', 'Social Democratic Party']
    },
    parliament: {
      chamber: 'Riigikogu',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Riigikogu balance',
        chamber: 'Riigikogu',
        totalSeats: 101,
        majority: 51,
        asOf: '2023 parliamentary election result',
        methodLabel: 'Current legislature balance',
        note: 'The current chamber is anchored to the 2023 Riigikogu election result.',
        parties: [
          { short: 'SDE', name: 'Social Democratic Party', seats: 9, color: '#d64562' },
          { short: 'KESK', name: 'Centre Party', seats: 16, color: '#2d8fd5' },
          { short: 'RE', name: 'Reform Party', seats: 37, color: '#f2c94c' },
          { short: 'E200', name: 'Estonia 200', seats: 14, color: '#6f5bd5' },
          { short: 'IS', name: 'Isamaa', seats: 8, color: '#315d9b' },
          { short: 'EKRE', name: 'EKRE', seats: 17, color: '#1f2a44' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Riigikogu',
        totalSeats: 101,
        majority: 51,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats (threshold projection)',
        note: 'The projection converts the current poll trend into a 101-seat chamber and excludes parties below the national threshold.',
        parties: [
          { short: 'IS', name: 'Isamaa', seats: 27, color: '#315d9b' },
          { short: 'KESK', name: 'Centre Party', seats: 24, color: '#2d8fd5' },
          { short: 'SDE', name: 'Social Democratic Party', seats: 16, color: '#d64562' },
          { short: 'RE', name: 'Reform Party', seats: 14, color: '#f2c94c' },
          { short: 'EKRE', name: 'EKRE', seats: 13, color: '#1f2a44' },
          { short: 'PP', name: 'Parempoolsed', seats: 7, color: '#6b7280' }
        ]
      }
    },
    news: [
      {
        title: 'Baltic prime ministers stress stronger regional security cooperation',
        date: '10 April 2026',
        source: 'Reuters',
        summary: 'The Baltic prime ministers coordinated messaging on defense, deterrence and support for Ukraine as security policy stayed central in regional politics.'
      },
      {
        title: 'Government drops planned energy-excise increase',
        date: '13 March 2026',
        source: 'Reuters',
        summary: 'Estonia cancelled a planned rise in energy excise duties after domestic pressure over prices and competitiveness.'
      },
      {
        title: 'State backs new Eesti.ai initiative',
        date: '27 January 2026',
        source: 'Government of Estonia',
        summary: 'The government launched a new AI strategy push designed to expand public-sector automation and digital competitiveness.'
      }
    ]
  });
})();
