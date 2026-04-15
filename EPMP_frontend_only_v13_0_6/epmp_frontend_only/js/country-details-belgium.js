(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('belgium', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Federal parliamentary constitutional monarchy',
      nextElection: 'Next federal election expected by 2029 under the current parliamentary term'
    },
    overview: {
      keyFacts: [
        'Belgium now has full structured coverage across overview, government, parliament and news.',
        'The federal executive is led by King Philippe and Prime Minister Bart De Wever.',
        'The parliament tab uses the 150-seat Chamber of Representatives and labels the future diagram as an illustrative multi-region approximation rather than an exact forecast.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Belgium.',
      system: 'Federal parliamentary constitutional monarchy',
      status: 'Multi-party federal coalition under Bart De Wever.',
      headOfState: {
        title: 'Monarch',
        name: 'King Philippe'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Bart De Wever',
        party: 'N-VA'
      },
      governmentParties: 'N-VA, MR, Les Engagés, CD&V and Vooruit',
      supportArrangement: 'The “Arizona” coalition controls a parliamentary majority in the 150-seat Chamber, but Belgium’s linguistic and regional structure makes coalition management unusually complex.',
      cabinetSize: '15 ministers',
      electionCycle: 'Federal parliamentary term: normally 5 years.',
      notes: 'Belgian federal politics cannot be read as a simple national two-bloc contest. Regional and linguistic divisions matter, so projected seat diagrams are only broad approximations.',
      keyParties: ['N-VA', 'Vlaams Belang', 'MR', 'PS', 'Vooruit', 'Les Engagés', 'CD&V', 'PTB/PVDA']
    },
    parliament: {
      chamber: 'Chamber of Representatives',
      current: {
        title: 'Current parliament',
        subtitle: 'Current federal Chamber groups',
        chamber: 'Chamber of Representatives',
        totalSeats: 150,
        majority: 76,
        asOf: 'Current federal term',
        methodLabel: 'Official chamber totals',
        note: 'The current chamber reflects the post-2024 federal composition. Some smaller groups are merged into Others for readability.',
        parties: [
          { short: 'N-VA', name: 'N-VA', seats: 24, color: '#f0c341' },
          { short: 'VB', name: 'Vlaams Belang', seats: 20, color: '#e0b325' },
          { short: 'MR', name: 'MR', seats: 20, color: '#2a6db3' },
          { short: 'PS', name: 'PS', seats: 16, color: '#d14b4b' },
          { short: 'PTB', name: 'PTB/PVDA', seats: 15, color: '#c62828' },
          { short: 'LE', name: 'Les Engagés', seats: 14, color: '#f28e2b' },
          { short: 'VO', name: 'Vooruit', seats: 13, color: '#c51b7d' },
          { short: 'CD&V', name: 'CD&V', seats: 11, color: '#f1c453' },
          { short: 'OVLD', name: 'Open Vld', seats: 7, color: '#5aa6df' },
          { short: 'OTH', name: 'Others', seats: 10, color: '#7f8c8d' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Chamber of Representatives',
        totalSeats: 150,
        majority: 76,
        asOf: 'Poll trend as of 12 Apr 2026',
        methodLabel: 'Illustrative multi-region approximation',
        note: 'Belgium’s federal electoral system is region-based and linguistically segmented, so this chamber is an illustrative approximation from current trend data rather than a literal national seat forecast.',
        parties: [
          { short: 'N-VA', name: 'N-VA', seats: 28, color: '#f0c341' },
          { short: 'VB', name: 'Vlaams Belang', seats: 24, color: '#e0b325' },
          { short: 'MR', name: 'MR', seats: 18, color: '#2a6db3' },
          { short: 'PTB', name: 'PTB/PVDA', seats: 17, color: '#c62828' },
          { short: 'CD&V', name: 'CD&V', seats: 14, color: '#f1c453' },
          { short: 'PS', name: 'PS', seats: 14, color: '#d14b4b' },
          { short: 'VO', name: 'Vooruit', seats: 14, color: '#c51b7d' },
          { short: 'LE', name: 'Les Engagés', seats: 12, color: '#f28e2b' },
          { short: 'OVLD', name: 'Open Vld', seats: 9, color: '#5aa6df' }
        ]
      }
    },
    news: {
      summary: 'Recent Belgium briefing cards loaded.',
      items: [
        {
          title: 'Benelux and Luxembourg summit resets regional agenda',
          date: '3 Apr 2026',
          blurb: 'Prime Minister Bart De Wever used the Gäichel summit to underline coordination on competitiveness, energy and security among close regional partners.'
        },
        {
          title: 'Belgium pushes defence-industrial cooperation',
          date: '12 Mar 2026',
          blurb: 'The federal government linked security policy and industrial strategy at BEDEX, reflecting a broader European shift toward defence capability-building.'
        },
        {
          title: 'Competitiveness returns to the core of federal messaging',
          date: '11 Mar 2026',
          blurb: 'The new government placed competitiveness, productivity and business climate at the center of its federal economic narrative.'
        }
      ]
    }
  });
})();