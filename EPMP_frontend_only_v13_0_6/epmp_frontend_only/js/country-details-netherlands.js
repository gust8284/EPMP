(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('netherlands', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary constitutional monarchy',
      nextElection: 'House of Representatives election expected in 2029 unless the government falls earlier'
    },
    overview: {
      keyFacts: [
        'The Netherlands is now on the full structured country-data path for overview, government, parliament and news.',
        'The current executive is led by Prime Minister Rob Jetten under King Willem-Alexander.',
        'The parliament tab uses the current House of Representatives group totals and a poll-based proportional seat projection.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for the Netherlands.',
      system: 'Parliamentary constitutional monarchy',
      status: 'Minority coalition government led by Rob Jetten. The governing bloc does not hold an absolute majority in the 150-seat House of Representatives.',
      headOfState: {
        title: 'Monarch',
        name: 'King Willem-Alexander'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Rob Jetten',
        party: 'D66'
      },
      governmentParties: 'D66, VVD and CDA',
      supportArrangement: 'The coalition holds 66 of 150 seats in the House of Representatives, so it must negotiate outside support on major legislation.',
      electionCycle: 'The House of Representatives normally serves 4 years unless dissolved earlier.',
      notes: 'This is a minority coalition that took office after the October 2025 election and the February 2026 cabinet formation.',
      keyParties: ['D66', 'VVD', 'CDA', 'GL-PvdA', 'PVV']
    },
    parliament: {
      chamber: 'House of Representatives',
      current: {
        title: 'Current parliament',
        subtitle: 'Current House of Representatives groups',
        chamber: 'House of Representatives',
        totalSeats: 150,
        majority: 76,
        note: 'Current lower-house group totals. Several smaller groups are combined into a single “Other groups” block so the chamber remains readable.',
        parties: [
          { short: 'GL-PvdA', name: 'Green Left-Labour Party', seats: 20, color: '#cf5168' },
          { short: 'D66', name: 'Democrats 66', seats: 26, color: '#33a852' },
          { short: 'VVD', name: 'People’s Party for Freedom and Democracy', seats: 22, color: '#1f4fa3' },
          { short: 'CDA', name: 'Christian Democratic Appeal', seats: 18, color: '#2e8b57' },
          { short: 'JA21', name: 'JA21', seats: 9, color: '#5c6bc0' },
          { short: 'PVV', name: 'Party for Freedom', seats: 19, color: '#173f8a' },
          { short: 'FvD', name: 'Forum for Democracy', seats: 7, color: '#6d4c93' },
          { short: 'OTH', name: 'Other groups', seats: 29, color: '#8f9aa8' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend converted to seats',
        chamber: 'House of Representatives',
        totalSeats: 150,
        majority: 76,
        asOf: '12 April 2026',
        methodLabel: 'Poll trend to seats (PR approximation)',
        note: 'Illustrative House projection based on the PolitPro national poll trend and a proportional 150-seat allocation. This is a reasonable approximation for the Dutch lower house but it is still a model, not an official forecast.',
        parties: [
          { short: 'GL-PvdA', name: 'Green Left-Labour Party', seats: 23, color: '#cf5168' },
          { short: 'D66', name: 'Democrats 66', seats: 21, color: '#33a852' },
          { short: 'VVD', name: 'People’s Party for Freedom and Democracy', seats: 19, color: '#1f4fa3' },
          { short: 'CDA', name: 'Christian Democratic Appeal', seats: 16, color: '#2e8b57' },
          { short: 'JA21', name: 'JA21', seats: 14, color: '#5c6bc0' },
          { short: 'PVV', name: 'Party for Freedom', seats: 18, color: '#173f8a' },
          { short: 'FvD', name: 'Forum for Democracy', seats: 12, color: '#6d4c93' },
          { short: 'OTH', name: 'Other groups', seats: 27, color: '#8f9aa8' }
        ]
      }
    },
    news: [
      {
        title: 'Jetten cabinet formally takes office',
        date: '23 February 2026',
        source: 'Government of the Netherlands',
        summary: 'King Willem-Alexander swore in the Jetten government, formally installing the D66-VVD-CDA coalition after the October 2025 election.'
      },
      {
        title: 'New coalition begins governing from a lower-house minority',
        date: '24 February 2026',
        source: 'House of Representatives / DutchNews',
        summary: 'The new governing bloc starts from 66 of 150 seats in the lower house, which means every major package still depends on outside parliamentary support.'
      },
      {
        title: 'Government appeals climate ruling over Bonaire emissions goals',
        date: '10 April 2026',
        source: 'Reuters',
        summary: 'The Dutch government appealed a court ruling that ordered the state to set stronger climate targets for the Caribbean municipality of Bonaire.'
      }
    ]
  });
})();
