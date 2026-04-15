(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('luxembourg', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary constitutional monarchy',
      nextElection: 'Next Chamber election due by 2028'
    },
    overview: {
      keyFacts: [
        'Luxembourg now uses a full structured module for overview, government, parliament and news.',
        'Prime Minister Luc Frieden heads the government under Grand Duke Guillaume V.',
        'The parliament tab compares the current 60-seat Chamber of Deputies with a cautious poll-based chamber projection.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Luxembourg.',
      system: 'Parliamentary constitutional monarchy',
      status: 'CSV–DP coalition government.',
      headOfState: {
        title: 'Head of state',
        name: 'Grand Duke Guillaume V'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Luc Frieden',
        party: 'Christian Social People’s Party (CSV)'
      },
      governmentParties: 'CSV and Democratic Party (DP).',
      supportArrangement: 'The government rests on a center-right coalition with a working majority in the Chamber of Deputies.',
      electionCycle: 'Parliamentary term: 5 years.',
      notes: 'Luxembourg’s politics remain relatively stable, but EU institutional debates, press-freedom questions and leadership transition in the monarchy shape the current context.',
      keyParties: ['CSV', 'DP', 'LSAP', 'ADR', 'The Greens', 'Pirate Party']
    },
    parliament: {
      chamber: 'Chamber of Deputies',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Chamber balance',
        chamber: 'Chamber of Deputies',
        totalSeats: 60,
        majority: 31,
        asOf: '2023 legislative election result',
        methodLabel: 'Current legislature balance',
        note: 'The current chamber is anchored to the latest legislative election result.',
        parties: [
          { short: 'CSV', name: 'CSV', seats: 21, color: '#f59e0b' },
          { short: 'DP', name: 'Democratic Party', seats: 14, color: '#2f6fb2' },
          { short: 'LSAP', name: 'LSAP', seats: 11, color: '#d14343' },
          { short: 'ADR', name: 'ADR', seats: 5, color: '#1f4e79' },
          { short: 'DG', name: 'The Greens', seats: 4, color: '#22c55e' },
          { short: 'PIR', name: 'Pirate Party', seats: 3, color: '#8b5cf6' },
          { short: 'DL', name: 'The Left', seats: 2, color: '#6b7280' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Chamber of Deputies',
        totalSeats: 60,
        majority: 31,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats (small-chamber approximation)',
        note: 'Luxembourg’s small chamber and district structure make this best read as a chamber-level approximation rather than a district forecast.',
        parties: [
          { short: 'CSV', name: 'CSV', seats: 16, color: '#f59e0b' },
          { short: 'DP', name: 'Democratic Party', seats: 12, color: '#2f6fb2' },
          { short: 'LSAP', name: 'LSAP', seats: 12, color: '#d14343' },
          { short: 'ADR', name: 'ADR', seats: 7, color: '#1f4e79' },
          { short: 'DG', name: 'The Greens', seats: 6, color: '#22c55e' },
          { short: 'DL', name: 'The Left', seats: 3, color: '#6b7280' },
          { short: 'PIR', name: 'Pirate Party', seats: 2, color: '#8b5cf6' },
          { short: 'LIB', name: 'Liberté', seats: 1, color: '#9ca3af' },
          { short: 'FOK', name: 'Fokus', seats: 1, color: '#4b5563' }
        ]
      }
    },
    news: [
      {
        title: 'Government reaffirms support for press freedom and institutional trust',
        date: '1 April 2026',
        source: 'Government of Luxembourg',
        summary: 'Luxembourg’s government used recent statements to underline support for media freedom and democratic legitimacy.'
      },
      {
        title: 'Chamber debates European institutional strategy',
        date: '18 March 2026',
        source: 'Chamber of Deputies',
        summary: 'Recent parliamentary debate highlighted Luxembourg’s continued focus on EU policy coordination and representation.'
      },
      {
        title: 'Monarchy transition remains part of the new political backdrop',
        date: 'October 2025 onward',
        source: 'Grand Ducal Court',
        summary: 'The accession of Grand Duke Guillaume V reshaped the state-symbolic backdrop without changing Luxembourg’s parliamentary fundamentals.'
      }
    ]
  });
})();
