(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('portugal', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Semi-presidential republic',
      nextElection: 'Next legislative election due by 2029'
    },
    overview: {
      keyFacts: [
        'Portugal now uses a full structured module for overview, government, parliament and news.',
        'Prime Minister Luís Montenegro heads the government under President António José Seguro.',
        'The parliament tab compares the current 230-seat Assembly of the Republic with a poll-based projection for a vote held today.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Portugal.',
      system: 'Semi-presidential republic',
      status: 'Center-right minority government under Democratic Alliance leadership.',
      headOfState: {
        title: 'President',
        name: 'António José Seguro'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Luís Montenegro',
        party: 'Social Democratic Party / Democratic Alliance'
      },
      governmentParties: 'Democratic Alliance (PSD/CDS-PP) led minority government.',
      supportArrangement: 'The cabinet governs without an outright parliamentary majority and must navigate a fragmented Assembly of the Republic.',
      electionCycle: 'Parliamentary term: 4 years. Presidential term: 5 years.',
      notes: 'Portugal in 2026 combines a newly inaugurated president with continued tension between the center-right government, the Socialists and Chega.',
      keyParties: ['Democratic Alliance', 'Socialist Party', 'Chega', 'Liberal Initiative', 'Livre', 'CDU']
    },
    parliament: {
      chamber: 'Assembly of the Republic',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Assembly balance',
        chamber: 'Assembly of the Republic',
        totalSeats: 230,
        majority: 116,
        asOf: '2025 legislative election result',
        methodLabel: 'Current legislature balance',
        note: 'The current chamber is anchored to the latest legislative election outcome.',
        parties: [
          { short: 'AD', name: 'Democratic Alliance', seats: 91, color: '#2f6fb2' },
          { short: 'CH', name: 'Chega', seats: 60, color: '#1f4e79' },
          { short: 'PS', name: 'Socialist Party', seats: 58, color: '#d14343' },
          { short: 'IL', name: 'Liberal Initiative', seats: 9, color: '#4c9bf0' },
          { short: 'L', name: 'Livre', seats: 6, color: '#22c55e' },
          { short: 'CDU', name: 'CDU', seats: 3, color: '#b91c1c' },
          { short: 'BE', name: 'Left Bloc', seats: 1, color: '#f97316' },
          { short: 'PAN', name: 'PAN', seats: 1, color: '#16a34a' },
          { short: 'JPP', name: 'JPP', seats: 1, color: '#6b7280' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Assembly of the Republic',
        totalSeats: 230,
        majority: 116,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'This view follows the current national polling trend and should be read as a chamber-level projection rather than a district-by-district simulation.',
        parties: [
          { short: 'AD', name: 'Democratic Alliance', seats: 68, color: '#2f6fb2' },
          { short: 'PS', name: 'Socialist Party', seats: 67, color: '#d14343' },
          { short: 'CH', name: 'Chega', seats: 61, color: '#1f4e79' },
          { short: 'IL', name: 'Liberal Initiative', seats: 14, color: '#4c9bf0' },
          { short: 'CDU', name: 'CDU', seats: 8, color: '#b91c1c' },
          { short: 'L', name: 'Livre', seats: 7, color: '#22c55e' },
          { short: 'BE', name: 'Left Bloc', seats: 3, color: '#f97316' },
          { short: 'PAN', name: 'PAN', seats: 2, color: '#16a34a' }
        ]
      }
    },
    news: [
      {
        title: 'António José Seguro begins presidency after March inauguration',
        date: '9 March 2026',
        source: 'Portuguese presidency / Reuters',
        summary: 'Portugal entered a new presidential phase as António José Seguro took office following the February 2026 presidential election.'
      },
      {
        title: 'Government highlights emergency response and infrastructure resilience',
        date: '11 February 2026',
        source: 'Government of Portugal',
        summary: 'The government stressed emergency coordination and infrastructure resilience after severe weather and flooding pressures.'
      },
      {
        title: '2026 budget fight underlines minority-government constraints',
        date: '27 November 2025',
        source: 'Reuters',
        summary: 'Parliamentary budget bargaining showed how the Montenegro government must maneuver between the Socialists and a strengthened right-populist opposition.'
      }
    ]
  });
})();
