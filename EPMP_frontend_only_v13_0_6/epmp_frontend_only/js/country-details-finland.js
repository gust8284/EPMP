(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('finland', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Next Eduskunta election expected by 2027 unless parliament is dissolved earlier'
    },
    overview: {
      keyFacts: [
        'Finland now has full structured coverage across overview, government, parliament and news.',
        'The executive is led by President Alexander Stubb and Prime Minister Petteri Orpo.',
        'The parliament tab uses the 200-seat Eduskunta with both the current chamber and a poll-trend projection.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Finland.',
      system: 'Parliamentary republic',
      status: 'Centre-right majority government under Prime Minister Petteri Orpo.',
      headOfState: {
        title: 'President',
        name: 'Alexander Stubb'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Petteri Orpo',
        party: 'National Coalition Party'
      },
      governmentParties: 'National Coalition Party, Finns Party, Swedish People’s Party and Christian Democrats',
      supportArrangement: 'The Orpo government commands a working parliamentary majority in the Eduskunta.',
      electionCycle: 'Parliamentary term: 4 years. Presidential term: 6 years.',
      notes: 'Finnish coalition politics are disciplined by international security policy, fiscal consolidation debates and the country’s post-NATO strategic posture.',
      keyParties: ['National Coalition Party', 'Finns Party', 'Social Democratic Party', 'Centre Party', 'Greens', 'Left Alliance']
    },
    parliament: {
      chamber: 'Eduskunta',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Eduskunta seat distribution',
        chamber: 'Eduskunta',
        totalSeats: 200,
        majority: 101,
        asOf: 'Current parliamentary term',
        methodLabel: 'Official chamber totals',
        note: 'The current chamber uses the 200-seat Eduskunta and groups the two smallest mandates under Others for readability.',
        parties: [
          { short: 'KOK', name: 'National Coalition', seats: 48, color: '#2a6db3' },
          { short: 'PS', name: 'Finns Party', seats: 46, color: '#f0c341' },
          { short: 'SDP', name: 'Social Democrats', seats: 43, color: '#d14b4b' },
          { short: 'KESK', name: 'Centre', seats: 23, color: '#2f9a5d' },
          { short: 'VIHR', name: 'Greens', seats: 13, color: '#4caf50' },
          { short: 'VAS', name: 'Left Alliance', seats: 11, color: '#d33959' },
          { short: 'RKP', name: 'Swedish People’s Party', seats: 9, color: '#f1c453' },
          { short: 'KD', name: 'Christian Democrats', seats: 5, color: '#4e7fb0' },
          { short: 'OTH', name: 'Others', seats: 2, color: '#7f8c8d' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Eduskunta',
        totalSeats: 200,
        majority: 101,
        asOf: 'Poll trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats (national allocation)',
        note: 'This projection converts current national polling into a 200-seat Eduskunta using a simplified national allocation for readability.',
        parties: [
          { short: 'SDP', name: 'Social Democrats', seats: 49, color: '#d14b4b' },
          { short: 'KOK', name: 'National Coalition', seats: 35, color: '#2a6db3' },
          { short: 'KESK', name: 'Centre', seats: 28, color: '#2f9a5d' },
          { short: 'PS', name: 'Finns Party', seats: 27, color: '#f0c341' },
          { short: 'VAS', name: 'Left Alliance', seats: 22, color: '#d33959' },
          { short: 'VIHR', name: 'Greens', seats: 17, color: '#4caf50' },
          { short: 'RKP', name: 'Swedish People’s Party', seats: 8, color: '#f1c453' },
          { short: 'KD', name: 'Christian Democrats', seats: 7, color: '#4e7fb0' },
          { short: 'OTH', name: 'Others', seats: 7, color: '#7f8c8d' }
        ]
      }
    },
    news: {
      summary: 'Recent Finland briefing cards loaded.',
      items: [
        {
          title: 'Government prepares for March European Council',
          date: '18 Mar 2026',
          blurb: 'Prime Minister Petteri Orpo set out Finland’s positions ahead of the European Council, emphasizing competitiveness, security and Ukraine support.'
        },
        {
          title: 'Fiscal framework remains central domestic issue',
          date: '25 Feb 2026',
          blurb: 'Parliamentary discussion around medium-term fiscal targets continued to shape the balance between consolidation, welfare spending and growth policy.'
        },
        {
          title: 'Nordic and transatlantic coordination stays high',
          date: '10 Mar 2026',
          blurb: 'Finland continued close coordination with Nordic partners and Canada, underscoring its security-focused foreign policy since joining NATO.'
        }
      ]
    }
  });
})();