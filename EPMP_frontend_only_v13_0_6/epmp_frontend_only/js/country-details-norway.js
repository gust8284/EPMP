(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('norway', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary constitutional monarchy',
      nextElection: 'Next Storting election is expected in 2029'
    },
    overview: {
      keyFacts: [
        'Norway now has full structured coverage across overview, government, parliament and news.',
        'The executive is led by King Harald V and Prime Minister Jonas Gahr Støre.',
        'The parliament tab uses the 169-seat Storting, with current official seats and a poll-trend projection.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Norway.',
      system: 'Parliamentary constitutional monarchy',
      status: 'Single-party minority Labour government.',
      headOfState: {
        title: 'Monarch',
        name: 'King Harald V'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Jonas Gahr Støre',
        party: 'Labour Party'
      },
      governmentParties: 'Labour Party',
      supportArrangement: 'The government is a single-party minority cabinet and relies on issue-by-issue parliamentary support despite a broader centre-left competition space.',
      electionCycle: 'The Storting is elected for fixed 4-year terms; no early parliamentary elections are normally held.',
      notes: 'Norway combines stable constitutional rules with more fluid bloc competition. Polling in 2026 points to strong momentum for the right, especially the Progress Party.',
      keyParties: ['Labour', 'Progress Party', 'Conservative', 'Centre Party', 'Socialist Left', 'Red', 'Greens']
    },
    parliament: {
      chamber: 'Storting',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Storting seat distribution',
        chamber: 'Storting',
        totalSeats: 169,
        majority: 85,
        asOf: 'Current 2025–2029 term',
        methodLabel: 'Official chamber totals',
        note: 'The current chamber uses official Storting party strengths for the 2025–2029 term.',
        parties: [
          { short: 'AP', name: 'Labour', seats: 53, color: '#d14b4b' },
          { short: 'FRP', name: 'Progress Party', seats: 47, color: '#2a6db3' },
          { short: 'H', name: 'Conservative', seats: 24, color: '#4e7fb0' },
          { short: 'SV', name: 'Socialist Left', seats: 9, color: '#c51b7d' },
          { short: 'SP', name: 'Centre', seats: 9, color: '#2f9a5d' },
          { short: 'R', name: 'Red', seats: 9, color: '#c62828' },
          { short: 'MDG', name: 'Greens', seats: 8, color: '#4caf50' },
          { short: 'KRF', name: 'Christian Democrats', seats: 7, color: '#f1c453' },
          { short: 'V', name: 'Liberals', seats: 3, color: '#5aa6df' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Storting',
        totalSeats: 169,
        majority: 85,
        asOf: 'Poll trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats (national approximation)',
        note: 'This projection converts national polling into a 169-seat parliament for readability. Norway’s real county-level allocation can differ from a national approximation.',
        parties: [
          { short: 'FRP', name: 'Progress Party', seats: 47, color: '#2a6db3' },
          { short: 'AP', name: 'Labour', seats: 38, color: '#d14b4b' },
          { short: 'H', name: 'Conservative', seats: 30, color: '#4e7fb0' },
          { short: 'R', name: 'Red', seats: 13, color: '#c62828' },
          { short: 'SP', name: 'Centre', seats: 9, color: '#2f9a5d' },
          { short: 'SV', name: 'Socialist Left', seats: 8, color: '#c51b7d' },
          { short: 'MDG', name: 'Greens', seats: 7, color: '#4caf50' },
          { short: 'KRF', name: 'Christian Democrats', seats: 6, color: '#f1c453' },
          { short: 'V', name: 'Liberals', seats: 6, color: '#5aa6df' },
          { short: 'OTH', name: 'Others', seats: 5, color: '#7f8c8d' }
        ]
      }
    },
    news: {
      summary: 'Recent Norway briefing cards loaded.',
      items: [
        {
          title: 'Government returns to rebuilt executive quarter',
          date: '13 Apr 2026',
          blurb: 'Norway formally reopened parts of the rebuilt government quarter in Oslo, a major symbolic and administrative milestone after the 2011 attacks.'
        },
        {
          title: 'Defence spending rises sharply',
          date: '27 Mar 2026',
          blurb: 'The government presented a long-term defence strengthening package worth roughly NOK 115 billion, reflecting the new Nordic security environment.'
        },
        {
          title: 'Nuclear-energy debate remains exploratory',
          date: '8 Apr 2026',
          blurb: 'A new commission is examining future nuclear options, but Norway is still far from any decision to launch a full civilian nuclear programme.'
        }
      ]
    }
  });
})();