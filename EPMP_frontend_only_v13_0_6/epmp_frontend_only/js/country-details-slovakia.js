(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('slovakia', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Next National Council election is expected by 2027'
    },
    overview: {
      keyFacts: [
        'Slovakia now runs on a full structured module for overview, government, parliament and news.',
        'President Peter Pellegrini remains head of state and Robert Fico remains prime minister.',
        'The current parliament stays fragmented after defections, while the poll trend points to a weaker position for the governing bloc than in 2023.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Slovakia.',
      system: 'Parliamentary republic',
      status: 'SMER-led government remains in office but depends on a fragile parliamentary support base.',
      headOfState: {
        title: 'President',
        name: 'Peter Pellegrini'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Robert Fico',
        party: 'SMER - Social Democracy'
      },
      governmentParties: 'SMER-SD, HLAS-SD and SNS.',
      supportArrangement: 'The formal coalition no longer looks comfortable on paper and has relied on cabinet reshuffles and support from unaffiliated deputies to stabilise its majority.',
      electionCycle: 'National Council term: 4 years.',
      notes: 'Government politics are shaped by rule-of-law disputes at home and by Fico’s confrontational stance on sanctions, Russian energy and military aid to Ukraine.',
      keyParties: ['SMER-SD', 'Progressive Slovakia', 'HLAS-SD', 'SaS', 'KDH', 'SNS']
    },
    parliament: {
      chamber: 'National Council',
      current: {
        title: 'Current parliament',
        subtitle: 'Current seat balance',
        chamber: 'National Council',
        totalSeats: 150,
        majority: 76,
        asOf: 'Current seat balance in early 2026',
        methodLabel: 'Current parliamentary grouping',
        note: 'This chamber view reflects the current balance after defections and regroupings, rather than the original 2023 election-night seat map.',
        parties: [
          { short: 'SMER', name: 'SMER-SD', seats: 41, color: '#d32f2f' },
          { short: 'PS', name: 'Progressive Slovakia', seats: 33, color: '#6a1b9a' },
          { short: 'HLAS', name: 'HLAS-SD', seats: 25, color: '#ec6c5f' },
          { short: 'S', name: 'Slovensko', seats: 12, color: '#2563eb' },
          { short: 'SaS', name: 'Freedom and Solidarity', seats: 12, color: '#22c55e' },
          { short: 'KDH', name: 'Christian Democratic Movement', seats: 11, color: '#1f4b99' },
          { short: 'SNS', name: 'Slovak National Party', seats: 8, color: '#1f2937' },
          { short: 'IND', name: 'Independents and minor groupings', seats: 8, color: '#9ca3af' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'National Council',
        totalSeats: 150,
        majority: 76,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'The projection follows the PolitPro Slovakia trend and its threshold-adjusted seat model for a single nationwide constituency.',
        parties: [
          { short: 'PS', name: 'Progressive Slovakia', seats: 36, color: '#6a1b9a' },
          { short: 'SMER', name: 'SMER-SD', seats: 32, color: '#d32f2f' },
          { short: 'REP', name: 'Republika', seats: 19, color: '#4b5563' },
          { short: 'S', name: 'Slovensko', seats: 15, color: '#2563eb' },
          { short: 'HLAS', name: 'HLAS-SD', seats: 14, color: '#ec6c5f' },
          { short: 'SaS', name: 'Freedom and Solidarity', seats: 13, color: '#22c55e' },
          { short: 'KDH', name: 'Christian Democratic Movement', seats: 11, color: '#1f4b99' },
          { short: 'DEM', name: 'Demokrati', seats: 10, color: '#14b8a6' }
        ]
      }
    },
    news: [
      {
        title: 'Fico offers close energy cooperation to Hungary’s incoming leadership',
        date: '13 April 2026',
        source: 'Reuters',
        summary: 'After Viktor Orbán’s defeat in Hungary, Robert Fico said Slovakia was ready for intensive cooperation with Péter Magyar, especially on energy security and the Druzhba pipeline issue.'
      },
      {
        title: 'Fuel emergency partially eased as diesel export ban ends',
        date: '8 April 2026',
        source: 'Reuters',
        summary: 'Slovakia ended its temporary diesel export ban but kept other emergency measures in place after the disruption of Russian oil flows through Ukraine earlier this year.'
      },
      {
        title: 'Public opposition keeps targeting Fico’s rule-of-law agenda',
        date: '20 March 2026',
        source: 'Reuters / photo coverage',
        summary: 'Anti-government demonstrations continued in Bratislava as critics accused the government of weakening public institutions, media independence and corruption enforcement.'
      }
    ]
  });
})();
