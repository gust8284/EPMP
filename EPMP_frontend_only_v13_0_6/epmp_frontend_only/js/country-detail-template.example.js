(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('country-id', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      capital: 'Capital',
      system: 'Political system',
      nextElection: 'Next election date or note'
    },
    overview: {
      keyFacts: [
        'High-level fact 1.',
        'High-level fact 2.',
        'High-level fact 3.'
      ]
    },
    government: {
      summary: 'Short summary.',
      system: 'Political system',
      status: 'Government status.',
      headOfState: {
        title: 'Head of state',
        name: 'Name'
      },
      headOfGovernment: {
        title: 'Head of government',
        name: 'Name',
        party: 'Party'
      },
      governmentParties: 'List of government parties',
      supportArrangement: 'How the government holds parliamentary support.',
      electionCycle: 'Regular election cycle.',
      notes: 'Any important context.',
      keyParties: ['Party A', 'Party B', 'Party C']
    },
    parliament: {
      chamber: 'Chamber name',
      current: {
        title: 'Current parliament',
        subtitle: 'Official current distribution',
        chamber: 'Chamber name',
        totalSeats: 100,
        majority: 51,
        methodLabel: 'Official current chamber totals',
        note: 'What the current numbers represent.',
        parties: [
          { short: 'A', name: 'Party A', seats: 40, color: '#3366cc' },
          { short: 'B', name: 'Party B', seats: 35, color: '#dc3912' },
          { short: 'C', name: 'Party C', seats: 25, color: '#ff9900' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll-based projection',
        chamber: 'Chamber name',
        totalSeats: 100,
        majority: 51,
        asOf: 'DD Month YYYY',
        methodLabel: 'Poll trend to seats (threshold projection)',
        note: 'How the projection was built and what its limits are.',
        parties: [
          { short: 'A', name: 'Party A', seats: 42, color: '#3366cc' },
          { short: 'B', name: 'Party B', seats: 33, color: '#dc3912' },
          { short: 'C', name: 'Party C', seats: 25, color: '#ff9900' }
        ]
      }
    },
    news: [
      {
        title: 'Headline',
        date: 'DD Month YYYY',
        source: 'Source',
        summary: 'Short summary.'
      }
    ]
  });
})();


// Suggested optional additions for future modules:
// - Give parliament.current and parliament.projected both a precise methodLabel.
// - Add projected.asOf whenever a poll trend date exists.
// - Add source labels to every news card so the Methodology tab can surface them.
