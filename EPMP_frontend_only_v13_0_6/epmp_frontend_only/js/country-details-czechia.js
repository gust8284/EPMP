(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('czechia', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Next Chamber of Deputies election is expected by 31 October 2029'
    },
    overview: {
      keyFacts: [
        'Czechia now uses a full structured module for overview, government, parliament and news.',
        'President Petr Pavel remains head of state, while Prime Minister Andrej Babiš returned to office after the October 2025 election.',
        'The parliament tab tracks the 2025 Chamber of Deputies result and a poll-trend projection based on the April 2026 PolitPro trend.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Czechia.',
      system: 'Parliamentary republic',
      status: 'ANO-led coalition government in office after the 2025 election.',
      headOfState: {
        title: 'President',
        name: 'Petr Pavel'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Andrej Babiš',
        party: 'ANO 2011'
      },
      governmentParties: 'ANO 2011, SPD and Motorists for Themselves (AUTO).',
      supportArrangement: 'The coalition controls 108 of 200 seats in the Chamber of Deputies and won confidence in January 2026.',
      electionCycle: 'Chamber of Deputies term: 4 years.',
      notes: 'The government has quickly run into conflict with President Pavel over ministerial appointments, media policy and defence spending.',
      keyParties: ['ANO 2011', 'SPOLU', 'STAN', 'Pirates', 'SPD', 'Motorists']
    },
    parliament: {
      chamber: 'Chamber of Deputies',
      current: {
        title: 'Current parliament',
        subtitle: '2025 election result',
        chamber: 'Chamber of Deputies',
        totalSeats: 200,
        majority: 101,
        asOf: 'Official result, 6 Oct 2025',
        methodLabel: 'Official election result',
        note: 'This chamber view uses the official 2025 Chamber of Deputies result announced by the Chamber of Deputies and the Czech Statistical Office.',
        parties: [
          { short: 'ANO', name: 'ANO 2011', seats: 80, color: '#5db7ff' },
          { short: 'SPOLU', name: 'SPOLU', seats: 52, color: '#2d4f8f' },
          { short: 'STAN', name: 'STAN', seats: 22, color: '#c54a41' },
          { short: 'PIR', name: 'Pirates', seats: 18, color: '#111111' },
          { short: 'SPD', name: 'SPD', seats: 15, color: '#1e3a8a' },
          { short: 'AUTO', name: 'Motorists', seats: 13, color: '#6b7280' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Chamber of Deputies',
        totalSeats: 200,
        majority: 101,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'This projection follows the PolitPro trend and its seat model for the Czech Chamber of Deputies. It reflects a more fragmented opposition field than the 2025 election result.',
        parties: [
          { short: 'ANO', name: 'ANO 2011', seats: 81, color: '#5db7ff' },
          { short: 'STAN', name: 'STAN', seats: 35, color: '#c54a41' },
          { short: 'ODS', name: 'ODS', seats: 35, color: '#2d4f8f' },
          { short: 'PIR', name: 'Pirates', seats: 21, color: '#111111' },
          { short: 'SPD', name: 'SPD', seats: 16, color: '#1e3a8a' },
          { short: 'AUTO', name: 'Motorists', seats: 12, color: '#6b7280' }
        ]
      }
    },
    news: [
      {
        title: 'Largest anti-government protest since 2019 hits Prague',
        date: '21 March 2026',
        source: 'Reuters',
        summary: 'Around 250,000 people rallied at Letná against the Babiš government over fears about public media independence, defence cuts and broader democratic backsliding.'
      },
      {
        title: 'Coalition moves to cut parts of public-media funding',
        date: '23 March 2026',
        source: 'Reuters',
        summary: 'The ruling coalition presented legislation that critics say would weaken public broadcasting by reducing fee-based financing for some groups and companies.'
      },
      {
        title: 'Chamber shields Babiš from trial for the rest of the term',
        date: '5 March 2026',
        source: 'Reuters',
        summary: 'Deputies voted to preserve the prime minister\'s immunity in the long-running Stork Nest subsidy case, reinforcing opposition claims that the government is eroding accountability.'
      }
    ]
  });
})();
