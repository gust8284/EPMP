(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('bulgaria', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Snap parliamentary election scheduled for 19 April 2026'
    },
    overview: {
      keyFacts: [
        'Bulgaria is included here as a transition-phase full module because it is between governments and heading into another snap parliamentary election.',
        'President Iliana Iotova is head of state and Andrey Gyurov leads a caretaker government until the 19 April 2026 vote.',
        'The parliament tab compares the outgoing October 2024 National Assembly with the latest pre-election poll-trend projection.'
      ]
    },
    government: {
      summary: 'Bulgaria is currently governed by a caretaker cabinet.',
      system: 'Parliamentary republic',
      status: 'Caretaker administration in office ahead of another snap election.',
      headOfState: {
        title: 'President',
        name: 'Iliana Iotova'
      },
      headOfGovernment: {
        title: 'Caretaker Prime Minister',
        name: 'Andrey Gyurov'
      },
      governmentParties: 'No normal governing coalition is in office. The caretaker cabinet was appointed by the president after the resignation of Rosen Zhelyazkov’s government.',
      supportArrangement: 'The outgoing GERB-BSP-ITN alignment no longer commands the executive. The caretaker cabinet’s main job is to organise the 19 April 2026 election.',
      electionCycle: 'National Assembly term: 4 years, but early elections remain common in the current period of instability.',
      notes: 'Bulgaria’s module is deliberately explicit about the transition: the “current government” is caretaker, while the “current parliament” card refers to the outgoing elected National Assembly.',
      keyParties: ['Progressive Bulgaria', 'GERB-SDS', 'Democratic Bulgaria', 'DPS', 'Vazrazhdane']
    },
    parliament: {
      chamber: 'National Assembly',
      current: {
        title: 'Current parliament',
        subtitle: 'Outgoing 2024 National Assembly',
        chamber: 'National Assembly',
        totalSeats: 240,
        majority: 121,
        asOf: 'Official result, 27 Oct 2024',
        methodLabel: 'Official election result',
        note: 'This chamber view shows the outgoing National Assembly elected in October 2024. Bulgaria is now under a caretaker cabinet and heading toward a new snap election on 19 April 2026.',
        parties: [
          { short: 'GERB', name: 'GERB-SDS', seats: 69, color: '#1d4ed8' },
          { short: 'PPDB', name: 'PP-DB', seats: 37, color: '#3b82f6' },
          { short: 'V', name: 'Vazrazhdane', seats: 35, color: '#111827' },
          { short: 'DPS', name: 'DPS - New Beginning', seats: 30, color: '#22c55e' },
          { short: 'BSP', name: 'BSP - United Left', seats: 20, color: '#ef4444' },
          { short: 'APS', name: 'Alliance for Rights and Freedoms', seats: 19, color: '#14b8a6' },
          { short: 'ITN', name: 'There Is Such a People', seats: 18, color: '#f59e0b' },
          { short: 'MECh', name: 'MECh', seats: 12, color: '#a855f7' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'National Assembly',
        totalSeats: 240,
        majority: 121,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'This projection uses the latest PolitPro Bulgaria trend immediately before the 19 April 2026 snap election. Only parties clearing the 4% threshold are included in the seat projection.',
        parties: [
          { short: 'PB', name: 'Progressive Bulgaria', seats: 95, color: '#ec4899' },
          { short: 'GERB', name: 'GERB-SDS', seats: 64, color: '#1d4ed8' },
          { short: 'DPS', name: 'DPS', seats: 31, color: '#22c55e' },
          { short: 'DB', name: 'Democratic Bulgaria', seats: 29, color: '#3b82f6' },
          { short: 'V', name: 'Vazrazhdane', seats: 21, color: '#111827' }
        ]
      }
    },
    news: [
      {
        title: 'Caretaker government vows fair conditions for April election',
        date: '19 February 2026',
        source: 'Reuters',
        summary: 'Andrey Gyurov’s caretaker cabinet took office promising to stabilise administration and ensure a cleaner snap election on 19 April.'
      },
      {
        title: 'Former president Radev launches Progressive Bulgaria alliance',
        date: '2 March 2026',
        source: 'Reuters',
        summary: 'Rumen Radev resigned the presidency, built a new alliance and rapidly became the main challenger in Bulgaria’s next parliamentary race.'
      },
      {
        title: 'Euro support rises as energy shock boosts demand for stability',
        date: '7 April 2026',
        source: 'Reuters',
        summary: 'The central bank said support for the euro had risen after Bulgaria’s adoption of the common currency and amid new geopolitical and energy turbulence.'
      }
    ]
  });
})();
