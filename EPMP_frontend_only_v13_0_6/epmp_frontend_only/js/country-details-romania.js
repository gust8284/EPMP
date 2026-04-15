(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('romania', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Semi-presidential republic',
      nextElection: 'Next parliamentary election is expected by 30 November 2028'
    },
    overview: {
      keyFacts: [
        'Romania now uses a full structured module for overview, government, parliament and news.',
        'Nicușor Dan is president and Ilie Bolojan heads a broad coalition government that still includes PSD, PNL, USR and UDMR.',
        'The parliament tab uses the Chamber of Deputies rather than the full bicameral parliament, because that is the chamber most useful for readable seat comparisons inside EPMP.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Romania.',
      system: 'Semi-presidential republic',
      status: 'Broad pro-EU coalition government under Prime Minister Ilie Bolojan.',
      headOfState: {
        title: 'President',
        name: 'Nicușor Dan'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Ilie Bolojan',
        party: 'National Liberal Party (PNL)'
      },
      governmentParties: 'PSD, PNL, USR and UDMR.',
      supportArrangement: 'The coalition has a clear parliamentary majority but remains under fiscal strain and internal bargaining over budget consolidation and welfare offsets.',
      electionCycle: 'Parliamentary term: 4 years. Presidential term: 5 years.',
      notes: 'Romania’s executive is balancing fiscal tightening, anti-corruption pressures and the political fallout from the invalidated 2024 presidential election cycle.',
      keyParties: ['PSD', 'AUR', 'PNL', 'USR', 'UDMR', 'S.O.S. Romania']
    },
    parliament: {
      chamber: 'Chamber of Deputies',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Chamber of Deputies balance',
        chamber: 'Chamber of Deputies',
        totalSeats: 330,
        majority: 166,
        asOf: 'Current sitting balance in 2026',
        methodLabel: 'Current lower-house seat balance',
        note: 'This view tracks the current Chamber of Deputies sitting balance rather than the full bicameral parliament. It excludes one vacant seat and groups the minority deputies together.',
        parties: [
          { short: 'PSD', name: 'PSD', seats: 93, color: '#d32f2f' },
          { short: 'PNL', name: 'PNL', seats: 51, color: '#1d4ed8' },
          { short: 'USR', name: 'USR', seats: 40, color: '#3b82f6' },
          { short: 'UDMR', name: 'UDMR', seats: 22, color: '#15803d' },
          { short: 'MIN', name: 'National minorities', seats: 17, color: '#9ca3af' },
          { short: 'AUR', name: 'AUR', seats: 62, color: '#f59e0b' },
          { short: 'SOS', name: 'S.O.S. Romania', seats: 15, color: '#7c2d12' },
          { short: 'POT', name: 'Party of Young People', seats: 5, color: '#f97316' },
          { short: 'IND', name: 'Independents / other opposition', seats: 25, color: '#6b7280' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Chamber of Deputies',
        totalSeats: 330,
        majority: 166,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'The projection follows the PolitPro Romania trend and its seat model. It is best read as a lower-house approximation because Romania’s parliament is bicameral and minority representation complicates a perfect one-to-one comparison.',
        parties: [
          { short: 'AUR', name: 'AUR', seats: 137, color: '#f59e0b' },
          { short: 'PSD', name: 'PSD', seats: 82, color: '#d32f2f' },
          { short: 'PNL', name: 'PNL', seats: 61, color: '#1d4ed8' },
          { short: 'USR', name: 'USR', seats: 50, color: '#3b82f6' }
        ]
      }
    },
    news: [
      {
        title: 'President Dan appoints chief prosecutors despite criticism',
        date: '9 April 2026',
        source: 'Reuters',
        summary: 'Nicușor Dan approved a disputed package of prosecutor appointments despite objections from civil-society groups and the magistrates’ council.'
      },
      {
        title: 'Coalition budget compromise averts immediate government crisis',
        date: '20 March 2026',
        source: 'Reuters',
        summary: 'Romanian lawmakers approved the 2026 budget after coalition partners reached a last-minute compromise over pension aid and deficit reduction.'
      },
      {
        title: 'PSD to review whether to remain in Bolojan coalition',
        date: '23 March 2026',
        source: 'Reuters',
        summary: 'The Social Democrats said they would decide later in April whether to remain in the broad coalition, underscoring the internal strain behind the government’s parliamentary majority.'
      }
    ]
  });
})();
