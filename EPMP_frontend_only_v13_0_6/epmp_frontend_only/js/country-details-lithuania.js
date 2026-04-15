(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('lithuania', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Semi-presidential republic',
      nextElection: 'Next parliamentary election due by late 2028'
    },
    overview: {
      keyFacts: [
        'Lithuania now uses a full structured module for overview, government, parliament and news.',
        'Prime Minister Inga Ruginienė heads the government under President Gitanas Nausėda.',
        'The parliament tab compares the current 141-seat Seimas with a poll-based projection for a vote held today.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Lithuania.',
      system: 'Semi-presidential republic',
      status: 'Broad center-left coalition government.',
      headOfState: {
        title: 'President',
        name: 'Gitanas Nausėda'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Inga Ruginienė',
        party: 'Social Democratic Party of Lithuania'
      },
      governmentParties: 'LSDP, Dawn of Nemunas, Lithuanian Farmers and Greens Union, and Electoral Action of Poles in Lithuania–Christian Families Alliance.',
      supportArrangement: 'The cabinet rests on a broad and somewhat heterogeneous parliamentary coalition in the Seimas.',
      electionCycle: 'Parliamentary term: 4 years. Presidential term: 5 years.',
      notes: 'Lithuanian politics currently combine defense-industrial expansion, coalition management and close coordination with EU and NATO partners.',
      keyParties: ['LSDP', 'TS-LKD', 'Dawn of Nemunas', 'LVŽS', 'Liberals Movement', 'Freedom Party']
    },
    parliament: {
      chamber: 'Seimas',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Seimas balance',
        chamber: 'Seimas',
        totalSeats: 141,
        majority: 71,
        asOf: '2024 parliamentary election result',
        methodLabel: 'Current legislature balance',
        note: 'The current chamber is anchored to the latest Seimas election result.',
        parties: [
          { short: 'LSDP', name: 'Social Democrats', seats: 52, color: '#d14343' },
          { short: 'TS', name: 'Homeland Union', seats: 28, color: '#2f6fb2' },
          { short: 'NA', name: 'Dawn of Nemunas', seats: 20, color: '#8b5cf6' },
          { short: 'DSVL', name: 'For Lithuania', seats: 14, color: '#06b6d4' },
          { short: 'LS', name: 'Liberals Movement', seats: 12, color: '#f59e0b' },
          { short: 'LVZS', name: 'Farmers and Greens', seats: 8, color: '#22c55e' },
          { short: 'LLRA', name: 'Electoral Action of Poles', seats: 3, color: '#ef4444' },
          { short: 'NS', name: 'National Alliance', seats: 1, color: '#4b5563' },
          { short: 'LT', name: 'Freedom and Justice', seats: 1, color: '#6b7280' },
          { short: 'OTH', name: 'Others / independents', seats: 2, color: '#9ca3af' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Seimas',
        totalSeats: 141,
        majority: 71,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'The projected chamber follows the current national poll trend and should be read as a parliamentary approximation rather than a full constituency-level forecast.',
        parties: [
          { short: 'LSDP', name: 'Social Democrats', seats: 30, color: '#d14343' },
          { short: 'TS', name: 'Homeland Union', seats: 29, color: '#2f6fb2' },
          { short: 'LVZS', name: 'Farmers and Greens', seats: 23, color: '#22c55e' },
          { short: 'NA', name: 'Dawn of Nemunas', seats: 23, color: '#8b5cf6' },
          { short: 'DSVL', name: 'For Lithuania', seats: 21, color: '#06b6d4' },
          { short: 'LS', name: 'Liberals Movement', seats: 15, color: '#f59e0b' }
        ]
      }
    },
    news: [
      {
        title: 'Prime minister visits Azerbaijan for energy and transport talks',
        date: '9 April 2026',
        source: 'Government of Lithuania',
        summary: 'Inga Ruginienė used a Baku visit to stress energy diversification, logistics links and broader economic cooperation.'
      },
      {
        title: 'Rheinmetall plant project remains central to defense-industrial strategy',
        date: '4 November 2025',
        source: 'Government of Lithuania',
        summary: 'Lithuania continued to frame defense manufacturing expansion as part of its longer-term security and industrial policy.'
      },
      {
        title: 'Lithuania pushes deeper security coordination with Germany',
        date: '6 January 2026',
        source: 'Government of Lithuania',
        summary: 'The government emphasized military cooperation and industrial ties as German engagement in Lithuania deepened further.'
      }
    ]
  });
})();
