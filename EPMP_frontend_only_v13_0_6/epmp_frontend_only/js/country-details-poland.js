(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('poland', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Presidential election cycle is active; next Sejm election is expected in 2027 unless parliament is dissolved earlier'
    },
    overview: {
      keyFacts: [
        'Poland is now on the full structured data path for overview, government, parliament and news.',
        'The executive is led by Prime Minister Donald Tusk, while Karol Nawrocki serves as President.',
        'The parliament tab focuses on the Sejm, using current bloc totals and a threshold-based projection from recent polling.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Poland.',
      system: 'Parliamentary republic',
      status: 'Broad pro-European coalition government led by Donald Tusk.',
      headOfState: {
        title: 'President',
        name: 'Karol Nawrocki'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Donald Tusk',
        party: 'Civic Coalition'
      },
      governmentParties: 'Civic Coalition, Poland 2050, PSL and the Left',
      supportArrangement: 'The governing side controls a working Sejm majority through a multi-party coalition spanning liberal, centrist, agrarian and left forces.',
      electionCycle: 'The Sejm normally serves 4 years unless dissolved earlier.',
      notes: 'The government is more stable in the Sejm than in the presidency. That split matters for veto politics and long-cycle institutional reform.',
      keyParties: ['Koalicja Obywatelska', 'PiS', 'Polska 2050', 'PSL', 'Lewica', 'Konfederacja']
    },
    parliament: {
      chamber: 'Sejm',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Sejm blocs',
        chamber: 'Sejm',
        totalSeats: 460,
        majority: 231,
        note: 'This current chamber view groups some smaller parliamentary formations into bloc-level labels to keep the diagram readable while preserving the overall Sejm balance.',
        parties: [
          { short: 'KO', name: 'Civic Coalition', seats: 156, color: '#f28e2b' },
          { short: 'TD', name: 'Third Way', seats: 60, color: '#ffd166' },
          { short: 'LEW', name: 'Left', seats: 21, color: '#d45087' },
          { short: 'PiS', name: 'Law and Justice', seats: 188, color: '#234b8d' },
          { short: 'KON', name: 'Konfederacja', seats: 16, color: '#6f4aa8' },
          { short: 'OTH', name: 'Other opposition', seats: 19, color: '#8f9aa8' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend with electoral threshold filter',
        chamber: 'Sejm',
        totalSeats: 460,
        majority: 231,
        asOf: '12 April 2026',
        methodLabel: 'Poll trend to seats (threshold projection)',
        note: 'Illustrative Sejm projection using the PolitPro national poll trend and a simplified threshold filter. Smaller parties below the national threshold are excluded from the seat allocation model.',
        parties: [
          { short: 'KO', name: 'Civic Coalition', seats: 179, color: '#f28e2b' },
          { short: 'PiS', name: 'Law and Justice', seats: 136, color: '#234b8d' },
          { short: 'KON', name: 'Konfederacja', seats: 67, color: '#6f4aa8' },
          { short: 'KKP', name: 'Confederation of the Polish Crown', seats: 43, color: '#8b5e3c' },
          { short: 'LEW', name: 'Left', seats: 35, color: '#d45087' }
        ]
      }
    },
    news: [
      {
        title: 'Poland and South Korea elevate ties to a strategic partnership',
        date: '13 April 2026',
        source: 'Reuters',
        summary: 'Warsaw and Seoul announced a strategic-partnership upgrade, underlining Poland’s effort to broaden defense and industrial cooperation beyond Europe.'
      },
      {
        title: 'Tusk touts emissions-trading breakthrough for eastern EU states',
        date: '20 March 2026',
        source: 'Chancellery of the Prime Minister',
        summary: 'Donald Tusk presented a negotiated ETS package as an important win for Central and Eastern European member states concerned about the cost of the transition.'
      },
      {
        title: 'Poland and Ireland push a wider European security agenda',
        date: '31 March 2026',
        source: 'Chancellery of the Prime Minister',
        summary: 'Tusk used a Poland-Ireland meeting to stress European security, resilience and continued support coordination for Ukraine.'
      }
    ]
  });
})();
