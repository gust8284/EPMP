(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('croatia', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Next parliamentary election due by 2028'
    },
    overview: {
      keyFacts: [
        'Croatia now uses a full structured module for overview, government, parliament and news.',
        'Prime Minister Andrej Plenković leads the government under President Zoran Milanović.',
        'The parliament tab compares the current 151-seat Sabor with a poll-based lower-house projection for a vote held today.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Croatia.',
      system: 'Parliamentary republic',
      status: 'HDZ-led coalition government.',
      headOfState: {
        title: 'President',
        name: 'Zoran Milanović'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Andrej Plenković',
        party: 'Croatian Democratic Union (HDZ)'
      },
      governmentParties: 'HDZ-led coalition with Homeland Movement and minority support partners.',
      supportArrangement: 'The cabinet relies on a right-leaning coalition structure with additional parliamentary support from smaller partners and minority representatives.',
      electionCycle: 'Parliamentary term: 4 years. Presidential term: 5 years.',
      notes: 'Croatian politics continue to feature sharp rivalry between Plenković and Milanović alongside a fragmented opposition scene.',
      keyParties: ['HDZ', 'SDP', 'Homeland Movement', 'Možemo!', 'Most']
    },
    parliament: {
      chamber: 'Sabor',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Sabor balance',
        chamber: 'Sabor',
        totalSeats: 151,
        majority: 76,
        asOf: '2024 parliamentary election result',
        methodLabel: 'Current legislature balance',
        note: 'The current chamber is anchored to the most recent parliamentary election result.',
        parties: [
          { short: 'HDZ', name: 'HDZ', seats: 61, color: '#2f6fb2' },
          { short: 'SDP', name: 'SDP coalition', seats: 42, color: '#d14343' },
          { short: 'DP', name: 'Homeland Movement', seats: 14, color: '#7c2d12' },
          { short: 'M!', name: 'Možemo!', seats: 10, color: '#22c55e' },
          { short: 'MOST', name: 'Most', seats: 11, color: '#f59e0b' },
          { short: 'OTH', name: 'Other opposition', seats: 8, color: '#9ca3af' },
          { short: 'SD', name: 'Serb Democratic / minorities', seats: 4, color: '#6b7280' },
          { short: 'F', name: 'Fokus', seats: 1, color: '#06b6d4' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Sabor',
        totalSeats: 151,
        majority: 76,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'The projected chamber follows current national polling and is best read as a parliament-level approximation rather than a district-by-district simulation.',
        parties: [
          { short: 'HDZ', name: 'HDZ', seats: 64, color: '#2f6fb2' },
          { short: 'SDP', name: 'SDP coalition', seats: 48, color: '#d14343' },
          { short: 'M!', name: 'Možemo!', seats: 25, color: '#22c55e' },
          { short: 'MOST', name: 'Most', seats: 14, color: '#f59e0b' }
        ]
      }
    },
    news: [
      {
        title: 'President hosts Slovenian counterpart for regional education event',
        date: '13 April 2026',
        source: 'Office of the President of Croatia',
        summary: 'Zoran Milanović used a bilateral appearance to emphasize regional cooperation and softer civic diplomacy themes.'
      },
      {
        title: 'Milanović comments on Hungarian political change',
        date: '13 April 2026',
        source: 'Office of the President of Croatia',
        summary: 'The Croatian president weighed in on developments in neighboring Hungary, reflecting the regional sensitivity of the election result there.'
      },
      {
        title: 'Government reiterates support for Ukraine and defense cooperation',
        date: '2026',
        source: 'Government of Croatia',
        summary: 'Plenković’s government continued to frame Croatia as a reliable EU and NATO partner while maintaining a pro-Ukraine line.'
      }
    ]
  });
})();
