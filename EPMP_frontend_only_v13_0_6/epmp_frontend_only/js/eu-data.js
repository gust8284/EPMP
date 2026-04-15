(function () {
  window.EPMPEUData = {
    memberIds: [
      'austria', 'belgium', 'bulgaria', 'croatia', 'cyprus', 'czechia', 'denmark', 'estonia',
      'finland', 'france', 'germany', 'greece', 'hungary', 'ireland', 'italy', 'latvia',
      'lithuania', 'luxembourg', 'malta', 'netherlands', 'poland', 'portugal', 'romania',
      'slovakia', 'slovenia', 'spain', 'sweden'
    ],
    candidateIds: [
      'albania', 'bosnia-and-herzegovina', 'moldova', 'montenegro', 'north-macedonia',
      'serbia', 'turkey', 'ukraine'
    ],
    potentialCandidateIds: ['kosovo'],
    newsSummary: 'This feed tracks current EU-level developments across the European Council, the Council of the EU, the European Parliament and the Commission.',
    news: [
      {
        title: 'European Council conclusions set the current EU agenda',
        date: '19 Mar 2026',
        source: 'European Council',
        summary: 'EU leaders adopted conclusions covering Ukraine, the Middle East, competitiveness and the single market, European defence and security, migration, multilateralism, democratic resilience and the Dniester region.'
      },
      {
        title: 'Council hardens the Union’s posture on hybrid threats',
        date: '16 Mar 2026',
        source: 'Council of the EU',
        summary: 'The Council approved conclusions on countering hybrid threats, including sabotage, malicious cyber activity, foreign information manipulation and interference, and election interference, while emphasising support for candidate and potential candidate countries.'
      },
      {
        title: 'Two EU-level meetings are next in the April cycle',
        date: '10 Apr 2026',
        source: 'Council forward look',
        summary: 'The Council’s forward look for 13–26 April says foreign ministers will revisit Ukraine and the Middle East on 21 April, while EU leaders are due to meet informally on 23–24 April under the Cyprus Presidency.'
      },
      {
        title: 'Parliament’s current agenda mixes summit follow-up, trade and AI',
        date: 'Apr 2026 agenda',
        source: 'European Parliament',
        summary: 'The Parliament agenda highlights a debate on the 19 March EU summit, a vote on the EU–US trade deal, an AI-related vote on a nudification ban, and committee work on the 2028–2034 EU budget framework.'
      },
      {
        title: 'Commission continues the competitiveness and climate push',
        date: '1 Apr 2026',
        source: 'European Commission',
        summary: 'The Commission announced measures to reinforce the stability and predictability of the EU carbon market, fitting into the broader competitiveness and Clean Industrial Deal agenda.'
      }
    ],
    parliament: {
      current: {
        title: 'European Parliament political groups',
        subtitle: 'Current occupied seats by group',
        chamber: 'European Parliament',
        totalSeats: 718,
        majority: 360,
        asOf: 'March 2026 snapshot',
        methodLabel: 'Official current group snapshot',
        methodType: 'official-current',
        note: 'The European Parliament has 720 statutory seats, but the official March 2026 group snapshot sums to 718 occupied seats, implying 2 vacancies in that snapshot.',
        parties: [
          { name: 'The Left', short: 'Left', seats: 46, color: '#7f1d1d' },
          { name: 'Greens/European Free Alliance', short: 'Greens/EFA', seats: 53, color: '#22c55e' },
          { name: 'Progressive Alliance of Socialists and Democrats', short: 'S&D', seats: 135, color: '#e11d48' },
          { name: 'Renew Europe', short: 'Renew', seats: 76, color: '#f59e0b' },
          { name: 'European People’s Party', short: 'EPP', seats: 184, color: '#2563eb' },
          { name: 'European Conservatives and Reformists', short: 'ECR', seats: 81, color: '#1d4ed8' },
          { name: 'Patriots for Europe', short: 'PfE', seats: 84, color: '#1e3a8a' },
          { name: 'Europe of Sovereign Nations', short: 'ESN', seats: 28, color: '#7c3aed' },
          { name: 'Non-attached Members', short: 'NI', seats: 31, color: '#94a3b8' }
        ]
      }
    }
  };
})();
