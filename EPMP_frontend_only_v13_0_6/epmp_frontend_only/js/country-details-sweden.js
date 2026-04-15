(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('sweden', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary constitutional monarchy',
      nextElection: '13 September 2026'
    },
    overview: {
      keyFacts: [
        'Government and parliament data are now populated from current institutional sources and a poll-trend projection.',
        'Prime Minister Ulf Kristersson leads a Moderate-Christian Democrat-Liberal coalition that relies on Sweden Democrats support in the Riksdag.',
        'The parliament tab compares the current Riksdag with a polling-based scenario for an election held today.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Sweden.',
      system: 'Parliamentary constitutional monarchy',
      status: 'Coalition minority government with a formal cooperation arrangement in the Riksdag.',
      headOfState: {
        title: 'Head of state',
        name: 'King Carl XVI Gustaf'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Ulf Kristersson',
        party: 'Moderate Party'
      },
      governmentParties: 'Moderate Party, Christian Democrats and Liberal Party',
      supportArrangement: 'Cooperation with the Sweden Democrats in the Riksdag under the Tidö Agreement.',
      electionCycle: 'General elections every 4 years.',
      notes: 'The current coalition took office on 18 October 2022. The next regular general election is fixed for 13 September 2026.',
      keyParties: ['Moderate Party', 'Christian Democrats', 'Liberal Party', 'Sweden Democrats']
    },
    parliament: {
      chamber: 'Riksdag',
      current: {
        title: 'Current parliament',
        subtitle: 'Current seat distribution',
        chamber: 'Riksdag',
        totalSeats: 349,
        majority: 175,
        note: 'Official current composition of the Riksdag, including eight members without party designation.',
        parties: [
          { short: 'V', name: 'Left Party', seats: 22, color: '#8b0000' },
          { short: 'S', name: 'Social Democratic Party', seats: 106, color: '#d51c29' },
          { short: 'MP', name: 'Green Party', seats: 18, color: '#78c679' },
          { short: 'C', name: 'Centre Party', seats: 24, color: '#4f9621' },
          { short: 'L', name: 'Liberal Party', seats: 16, color: '#2f65ad' },
          { short: 'KD', name: 'Christian Democrats', seats: 19, color: '#2d2b73' },
          { short: 'M', name: 'Moderate Party', seats: 66, color: '#74add1' },
          { short: 'SD', name: 'Sweden Democrats', seats: 70, color: '#f2b94b' },
          { short: 'IND', name: 'Without party designation', seats: 8, color: '#7a8594' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll-based projection',
        chamber: 'Riksdag',
        totalSeats: 349,
        majority: 175,
        asOf: '12 April 2026',
        methodLabel: 'Poll trend to seats (threshold projection)',
        note: 'Seat projection based on the PolitPro poll trend. Parties below the 4% threshold are excluded from the projected chamber.',
        parties: [
          { short: 'V', name: 'Left Party', seats: 28, color: '#8b0000' },
          { short: 'S', name: 'Social Democrats', seats: 120, color: '#d51c29' },
          { short: 'MP', name: 'Green Party', seats: 22, color: '#78c679' },
          { short: 'C', name: 'Centre Party', seats: 22, color: '#4f9621' },
          { short: 'KD', name: 'Christian Democrats', seats: 18, color: '#2d2b73' },
          { short: 'M', name: 'Moderates', seats: 64, color: '#74add1' },
          { short: 'SD', name: 'Sweden Democrats', seats: 75, color: '#f2b94b' }
        ]
      }
    },
    news: [
      {
        title: 'Spring budget submitted to the Riksdag',
        date: '13 April 2026',
        source: 'Government Offices of Sweden',
        summary: 'The government presented its 2026 Spring Budget, framed around economic resilience and security, with measures worth SEK 7.7 billion for 2026.'
      },
      {
        title: 'Right bloc clarifies post-election strategy',
        date: '1 April 2026',
        source: 'Reuters',
        summary: 'Prime Minister Ulf Kristersson said the Moderates would seek to form a majority government with the Sweden Democrats after the September election, sharpening the coalition question for voters.'
      },
      {
        title: 'Liberals open the door to Sweden Democrats in government',
        date: '13 March 2026',
        source: 'Reuters',
        summary: 'The Liberal Party said it could accept the Sweden Democrats entering government after the election, reducing one of the right bloc\'s previous internal barriers.'
      }
    ]
  });
})();
