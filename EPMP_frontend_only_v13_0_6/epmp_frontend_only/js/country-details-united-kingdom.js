(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('united-kingdom', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary constitutional monarchy',
      nextElection: 'Next general election expected by 2029 under the current parliamentary term'
    },
    overview: {
      keyFacts: [
        'The United Kingdom is now on the full structured country-data path for overview, government, parliament and news.',
        'The current executive is led by Prime Minister Keir Starmer under King Charles III.',
        'The parliament tab uses the House of Commons and clearly labels the future diagram as an illustrative national-vote approximation rather than a constituency forecast.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for the United Kingdom.',
      system: 'Parliamentary constitutional monarchy',
      status: 'Single-party majority Labour government.',
      headOfState: {
        title: 'Monarch',
        name: 'King Charles III'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Keir Starmer',
        party: 'Labour'
      },
      governmentParties: 'Labour',
      supportArrangement: 'Labour governs alone with a large Commons majority.',
      electionCycle: 'The House of Commons can last up to 5 years before a general election is required.',
      notes: 'The current government has strong formal control of the Commons, but current national polling is much weaker than its parliamentary position.',
      keyParties: ['Labour', 'Conservative', 'Liberal Democrats', 'Reform UK', 'SNP', 'Green']
    },
    parliament: {
      chamber: 'House of Commons',
      current: {
        title: 'Current parliament',
        subtitle: 'Current House of Commons party strengths',
        chamber: 'House of Commons',
        totalSeats: 650,
        majority: 326,
        note: 'Current Commons party strengths. Some small parties and office-holders are combined into a single “Others” block for readability.',
        parties: [
          { short: 'LAB', name: 'Labour', seats: 403, color: '#e15759' },
          { short: 'CON', name: 'Conservative', seats: 116, color: '#1f4fa3' },
          { short: 'LD', name: 'Liberal Democrat', seats: 72, color: '#f1c453' },
          { short: 'REF', name: 'Reform UK', seats: 8, color: '#00a7e1' },
          { short: 'SNP', name: 'Scottish National Party', seats: 9, color: '#f6c700' },
          { short: 'OTH', name: 'Others', seats: 42, color: '#8f9aa8' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Illustrative poll-based projection',
        chamber: 'House of Commons',
        totalSeats: 650,
        majority: 326,
        asOf: '8 April 2026',
        methodLabel: 'Illustrative proportional approximation',
        note: 'Illustrative Commons map derived from a national vote-share poll. Real UK general-election outcomes depend on constituency-by-constituency first-past-the-post contests, so this is directional rather than predictive.',
        parties: [
          { short: 'LAB', name: 'Labour', seats: 104, color: '#e15759' },
          { short: 'CON', name: 'Conservative', seats: 111, color: '#1f4fa3' },
          { short: 'LD', name: 'Liberal Democrat', seats: 71, color: '#f1c453' },
          { short: 'REF', name: 'Reform UK', seats: 162, color: '#00a7e1' },
          { short: 'SNP', name: 'Scottish National Party', seats: 20, color: '#f6c700' },
          { short: 'GRN', name: 'Green', seats: 130, color: '#2e8b57' },
          { short: 'OTH', name: 'Others', seats: 52, color: '#8f9aa8' }
        ]
      }
    },
    news: [
      {
        title: 'Government faces parliamentary test over alignment with EU standards',
        date: '13 April 2026',
        source: 'Reuters',
        summary: 'Keir Starmer faced a politically sensitive vote connected to regulatory alignment with the EU, highlighting continued strains inside the post-Brexit settlement.'
      },
      {
        title: 'Chagos deal pauses under court pressure',
        date: '11 April 2026',
        source: 'Reuters',
        summary: 'A court intervention paused the government’s Chagos Islands transfer plan, producing a fresh foreign-policy and legal headache for Downing Street.'
      },
      {
        title: 'Starmer argues Britain needs a new path after Middle East tensions',
        date: '9 April 2026',
        source: 'Reuters',
        summary: 'The prime minister used widening regional tensions to argue that the UK needs a new economic and strategic direction, linking security with domestic renewal.'
      }
    ]
  });
})();
