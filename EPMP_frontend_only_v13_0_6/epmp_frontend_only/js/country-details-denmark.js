(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('denmark', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary constitutional monarchy',
      nextElection: 'Next Folketing election is due by 2030, though the immediate issue is post-election government formation after the March 2026 vote'
    },
    overview: {
      keyFacts: [
        'Denmark now runs on the full structured country-data path for overview, government, parliament and news.',
        'The March 2026 election produced a fragmented Folketing with no majority bloc, leaving Mette Frederiksen in a caretaker/formateur role under King Frederik X.',
        'The parliament tab shows the current Folketing and a poll-based mainland projection that keeps the four North Atlantic seats grouped separately.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Denmark.',
      system: 'Parliamentary constitutional monarchy',
      status: 'Caretaker Social Democratic-led government after a fragmented March 2026 election.',
      headOfState: {
        title: 'Monarch',
        name: 'King Frederik X'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Mette Frederiksen',
        party: 'Social Democrats'
      },
      governmentParties: 'Outgoing caretaker alignment: Social Democrats, Venstre and Moderates.',
      supportArrangement: 'No bloc won a majority in the 24 March 2026 election. Frederiksen remains in a caretaker/formateur position while coalition bargaining continues.',
      electionCycle: 'The Folketing can sit for up to 4 years, but early elections are possible at any time.',
      notes: 'Danish politics now combine a fragmented mainland party system with four North Atlantic seats from Greenland and the Faroe Islands, which matter at the margin in close parliaments.',
      keyParties: ['Social Democrats', 'Green Left', 'Venstre', 'Liberal Alliance', 'Danish People’s Party', 'Moderates']
    },
    parliament: {
      chamber: 'Folketing',
      current: {
        title: 'Current parliament',
        subtitle: '2026 Folketing seat distribution',
        chamber: 'Folketing',
        totalSeats: 179,
        majority: 90,
        asOf: '24 Mar 2026 election result',
        methodLabel: 'Official election result',
        note: 'The current chamber is based on the 24 March 2026 Folketing election, including the four North Atlantic seats.',
        parties: [
          { short: 'S', name: 'Social Democrats', seats: 38, color: '#d14b4b' },
          { short: 'SF', name: 'Green Left', seats: 20, color: '#c51b7d' },
          { short: 'V', name: 'Venstre', seats: 18, color: '#2a6db3' },
          { short: 'LA', name: 'Liberal Alliance', seats: 16, color: '#5aa6df' },
          { short: 'DF', name: 'Danish People’s Party', seats: 16, color: '#f0c341' },
          { short: 'M', name: 'Moderates', seats: 14, color: '#8e5ea2' },
          { short: 'C', name: 'Conservatives', seats: 13, color: '#1f8f55' },
          { short: 'EL', name: 'Red-Green Alliance', seats: 11, color: '#cc2f4e' },
          { short: 'RV', name: 'Social Liberals', seats: 10, color: '#7a4bb7' },
          { short: 'DD', name: 'Denmark Democrats', seats: 10, color: '#e08a2e' },
          { short: 'OTH', name: 'Alternative + North Atlantic parties', seats: 13, color: '#7f8c8d' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Folketing',
        totalSeats: 179,
        majority: 90,
        asOf: 'Poll trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats (mainland projection)',
        note: 'The poll-based chamber converts mainland national polling into seats for 175 seats, then keeps the four North Atlantic mandates grouped under Others.',
        parties: [
          { short: 'S', name: 'Social Democrats', seats: 38, color: '#d14b4b' },
          { short: 'SF', name: 'Green Left', seats: 21, color: '#c51b7d' },
          { short: 'DF', name: 'Danish People’s Party', seats: 19, color: '#f0c341' },
          { short: 'V', name: 'Venstre', seats: 16, color: '#2a6db3' },
          { short: 'LA', name: 'Liberal Alliance', seats: 16, color: '#5aa6df' },
          { short: 'C', name: 'Conservatives', seats: 14, color: '#1f8f55' },
          { short: 'M', name: 'Moderates', seats: 13, color: '#8e5ea2' },
          { short: 'EL', name: 'Red-Green Alliance', seats: 12, color: '#cc2f4e' },
          { short: 'RV', name: 'Social Liberals', seats: 11, color: '#7a4bb7' },
          { short: 'DD', name: 'Denmark Democrats', seats: 10, color: '#e08a2e' },
          { short: 'OTH', name: 'Alternative + North Atlantic parties', seats: 9, color: '#7f8c8d' }
        ]
      }
    },
    news: {
      summary: 'Recent Denmark briefing cards loaded.',
      items: [
        {
          title: 'Fragmented election leaves no clear majority',
          date: '24 Mar 2026',
          blurb: 'The 2026 Folketing election produced a highly fragmented parliament, leaving government formation open and increasing the leverage of smaller parties.'
        },
        {
          title: 'Frederiksen stays on as caretaker while talks continue',
          date: '25 Mar 2026',
          blurb: 'Mette Frederiksen remained in a caretaker/formateur role after the vote, with coalition bargaining centered on whether a broad centrist arrangement can be rebuilt or replaced.'
        },
        {
          title: 'North Atlantic seats still matter at the margin',
          date: '25 Mar 2026',
          blurb: 'Greenlandic and Faroese mandates again became relevant to parliamentary arithmetic, including Naleraq taking its first Folketing seat from Greenland.'
        }
      ]
    }
  });
})();