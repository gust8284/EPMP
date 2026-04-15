(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('germany', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Federal parliamentary republic',
      nextElection: 'Expected in 2029'
    },
    overview: {
      keyFacts: [
        'Government and parliament data are populated from current federal sources plus a poll-trend projection.',
        'The Federal Chancellor is Friedrich Merz and the governing coalition is CDU/CSU-SPD.',
        'The parliament tab compares current Bundestag membership totals with a poll-based projection for a fresh election.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Germany.',
      system: 'Federal parliamentary republic',
      status: 'Coalition federal government formed after the 2025 Bundestag election.',
      headOfState: {
        title: 'Head of state',
        name: 'President Frank-Walter Steinmeier'
      },
      headOfGovernment: {
        title: 'Federal Chancellor',
        name: 'Friedrich Merz',
        party: 'CDU'
      },
      governmentParties: 'CDU, CSU and SPD',
      supportArrangement: 'Coalition government based on the coalition agreement signed on 5 May 2025.',
      cabinetSize: 'Federal Chancellor plus 17 Federal Ministers',
      electionCycle: 'Bundestag electoral period normally lasts 4 years.',
      notes: 'The 21st Bundestag election took place on 23 February 2025. The next regular election is expected in 2029.',
      keyParties: ['CDU', 'CSU', 'SPD']
    },
    parliament: {
      chamber: 'Bundestag',
      current: {
        title: 'Current parliament',
        subtitle: 'Current parliamentary membership totals',
        chamber: 'Bundestag',
        totalSeats: 629,
        majority: 315,
        note: 'Current Bundestag membership totals reflected in official roll-call records in March 2026: five parliamentary groups plus three fraktionslos members.',
        parties: [
          { short: 'LINKE', name: 'The Left', seats: 64, color: '#b13a83' },
          { short: 'GRÜNE', name: 'Alliance 90/The Greens', seats: 85, color: '#5ea539' },
          { short: 'SPD', name: 'Social Democratic Party', seats: 119, color: '#e3323a' },
          { short: 'CDU/CSU', name: 'CDU/CSU', seats: 208, color: '#1c1c1c' },
          { short: 'AfD', name: 'Alternative for Germany', seats: 150, color: '#0f9fe6' },
          { short: 'IND', name: 'Fraktionslos', seats: 3, color: '#7a8594' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll-based projection',
        chamber: 'Bundestag',
        totalSeats: 630,
        majority: 316,
        asOf: '12 April 2026',
        methodLabel: 'Poll trend to seats (threshold projection)',
        note: 'Seat projection based on the PolitPro poll trend. Parties below the 5% threshold are excluded from the projected chamber.',
        parties: [
          { short: 'LINKE', name: 'The Left', seats: 74, color: '#b13a83' },
          { short: 'GRÜNE', name: 'Alliance 90/The Greens', seats: 92, color: '#5ea539' },
          { short: 'SPD', name: 'Social Democratic Party', seats: 99, color: '#e3323a' },
          { short: 'CDU/CSU', name: 'CDU/CSU', seats: 184, color: '#1c1c1c' },
          { short: 'AfD', name: 'Alternative for Germany', seats: 181, color: '#0f9fe6' }
        ]
      }
    },
    news: [
      {
        title: 'Fuel-price relief package enters force',
        date: '31 March 2026',
        source: 'Federal Government',
        summary: 'Berlin put new anti-price measures into effect from 1 April, including a limit on how often petrol stations may raise prices and the release of some oil reserves.'
      },
      {
        title: 'Coalition adds broader emergency fuel and tax relief',
        date: '13 April 2026',
        source: 'Reuters',
        summary: 'The coalition announced an expanded package including a temporary fuel-tax cut and a tax-free employee bonus as it responds to the energy shock linked to the Iran war.'
      },
      {
        title: 'Merz pushes reforms after state-election pressure',
        date: '23 March 2026',
        source: 'Reuters',
        summary: 'After a state-election setback for the SPD partner, Chancellor Friedrich Merz said the federal government would accelerate promised tax and social-security reforms.'
      }
    ]
  });
})();
