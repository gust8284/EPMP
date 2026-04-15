(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('latvia', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Saeima election due on 3 October 2026'
    },
    overview: {
      keyFacts: [
        'Latvia now uses a full structured module for overview, government, parliament and news.',
        'Prime Minister Evika Siliņa leads the government under President Edgars Rinkēvičs.',
        'The parliament tab compares the current 100-seat Saeima with a rescaled poll-based projection for a vote held today.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Latvia.',
      system: 'Parliamentary republic',
      status: 'Coalition government led by New Unity.',
      headOfState: {
        title: 'President',
        name: 'Edgars Rinkēvičs'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Evika Siliņa',
        party: 'New Unity'
      },
      governmentParties: 'New Unity, Union of Greens and Farmers, and The Progressives.',
      supportArrangement: 'The government rests on a three-party coalition in the Saeima and operates in a fragmented pre-election environment.',
      electionCycle: 'Parliamentary term: 4 years. Presidential term: 4 years.',
      notes: 'Latvian politics in 2026 are shaped by election-security concerns, coalition bargaining and the approaching October parliamentary vote.',
      keyParties: ['New Unity', 'Union of Greens and Farmers', 'The Progressives', 'National Alliance', 'Latvia First', 'United List']
    },
    parliament: {
      chamber: 'Saeima',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Saeima balance',
        chamber: 'Saeima',
        totalSeats: 100,
        majority: 51,
        asOf: '2022 parliamentary election result',
        methodLabel: 'Current legislature balance',
        note: 'The current chamber is anchored to the 2022 Saeima election result.',
        parties: [
          { short: 'JV', name: 'New Unity', seats: 23, color: '#2f6fb2' },
          { short: 'ZZS', name: 'Union of Greens and Farmers', seats: 16, color: '#4c9b3b' },
          { short: 'AS', name: 'United List', seats: 13, color: '#76b7b2' },
          { short: 'NA', name: 'National Alliance', seats: 13, color: '#9a5b2a' },
          { short: 'P', name: 'The Progressives', seats: 10, color: '#c7395f' },
          { short: 'LPV', name: 'Latvia First', seats: 9, color: '#7b4bb3' },
          { short: 'S!', name: 'Stability!', seats: 10, color: '#4f46e5' },
          { short: 'AP!', name: 'For Stability? / AP!', seats: 6, color: '#6b7280' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Saeima',
        totalSeats: 100,
        majority: 51,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats (rescaled approximation)',
        note: 'PolitPro’s current seat model sums above 100, so this EPMP view rescales the projected balance back to the Saeima’s fixed 100 seats using proportional normalization.',
        parties: [
          { short: 'LPV', name: 'Latvia First', seats: 18, color: '#7b4bb3' },
          { short: 'P', name: 'The Progressives', seats: 15, color: '#c7395f' },
          { short: 'NA', name: 'National Alliance', seats: 14, color: '#9a5b2a' },
          { short: 'JV', name: 'New Unity', seats: 13, color: '#2f6fb2' },
          { short: 'AS', name: 'United List', seats: 13, color: '#76b7b2' },
          { short: 'S!', name: 'Stability!', seats: 12, color: '#4f46e5' },
          { short: 'ZZS', name: 'Union of Greens and Farmers', seats: 9, color: '#4c9b3b' },
          { short: 'AP!', name: 'AP!', seats: 6, color: '#6b7280' }
        ]
      }
    },
    news: [
      {
        title: 'President warns on election security and foreign interference',
        date: '23 March 2026',
        source: 'Office of the President of Latvia',
        summary: 'Edgars Rinkēvičs emphasized resilience, election integrity and the need for political discipline ahead of the October parliamentary vote.'
      },
      {
        title: 'Baltic leaders mark two years since major regional security shift',
        date: '24 February 2026',
        source: 'Government of Latvia',
        summary: 'Latvia joined neighboring governments in underlining long-term defense support for Ukraine and tighter Baltic-Nordic coordination.'
      },
      {
        title: 'Polling volatility intensifies ahead of autumn election',
        date: '3 April 2026',
        source: 'LSM / PolitPro trend coverage',
        summary: 'Recent polling suggested a fragmented contest with Latvia First, The Progressives and several incumbent parties competing in a highly open field.'
      }
    ]
  });
})();
