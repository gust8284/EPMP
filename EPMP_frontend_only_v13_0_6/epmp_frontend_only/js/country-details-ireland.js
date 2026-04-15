(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('ireland', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Next Dáil election due by 2029'
    },
    overview: {
      keyFacts: [
        'Ireland now uses a full structured module for overview, government, parliament and news.',
        'Taoiseach Micheál Martin heads the government under President Catherine Connolly.',
        'Because Ireland elects the Dáil by STV, the future chamber view is explicitly marked as an illustrative proportional approximation rather than a literal constituency forecast.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Ireland.',
      system: 'Parliamentary republic',
      status: 'Fianna Fáil–Fine Gael coalition with independent support.',
      headOfState: {
        title: 'President',
        name: 'Catherine Connolly'
      },
      headOfGovernment: {
        title: 'Taoiseach',
        name: 'Micheál Martin',
        party: 'Fianna Fáil'
      },
      governmentParties: 'Fianna Fáil and Fine Gael, supported by a bloc of independents.',
      supportArrangement: 'The government depends on a coalition agreement and external or aligned independent backing rather than a single-party majority.',
      electionCycle: 'Dáil term: up to 5 years. Presidential term: 7 years.',
      notes: 'Irish politics in 2026 are shaped by coalition durability, housing pressures and positioning ahead of Ireland’s next EU Council Presidency role.',
      keyParties: ['Fianna Fáil', 'Sinn Féin', 'Fine Gael', 'Social Democrats', 'Labour', 'Aontú']
    },
    parliament: {
      chamber: 'Dáil Éireann',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Dáil balance',
        chamber: 'Dáil Éireann',
        totalSeats: 174,
        majority: 88,
        asOf: '2024 general election result',
        methodLabel: 'Current legislature balance',
        note: 'The current chamber is anchored to the latest general election outcome and groups several independent deputies together for readability.',
        parties: [
          { short: 'FF', name: 'Fianna Fáil', seats: 48, color: '#4caf50' },
          { short: 'SF', name: 'Sinn Féin', seats: 39, color: '#2e7d32' },
          { short: 'FG', name: 'Fine Gael', seats: 38, color: '#2196f3' },
          { short: 'SD', name: 'Social Democrats', seats: 11, color: '#c2185b' },
          { short: 'LAB', name: 'Labour', seats: 11, color: '#ef4444' },
          { short: 'II', name: 'Independent Ireland', seats: 4, color: '#f59e0b' },
          { short: 'PBP', name: 'Solidarity–PBP', seats: 3, color: '#7c3aed' },
          { short: 'AON', name: 'Aontú', seats: 2, color: '#7b3f00' },
          { short: 'GP', name: 'Green Party', seats: 1, color: '#22c55e' },
          { short: 'IND', name: 'Independents / others', seats: 17, color: '#9ca3af' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Illustrative national projection',
        chamber: 'Dáil Éireann',
        totalSeats: 174,
        majority: 88,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Illustrative proportional approximation',
        note: 'Ireland uses STV in multi-seat constituencies, so a realistic seat map cannot be derived directly from national polling. This view is a proportional illustration built from current poll shares, not a constituency-level forecast.',
        parties: [
          { short: 'SF', name: 'Sinn Féin', seats: 40, color: '#2e7d32' },
          { short: 'FF', name: 'Fianna Fáil', seats: 31, color: '#4caf50' },
          { short: 'FG', name: 'Fine Gael', seats: 30, color: '#2196f3' },
          { short: 'SD', name: 'Social Democrats', seats: 15, color: '#c2185b' },
          { short: 'AON', name: 'Aontú', seats: 10, color: '#7b3f00' },
          { short: 'II', name: 'Independent Ireland', seats: 10, color: '#f59e0b' },
          { short: 'LAB', name: 'Labour', seats: 7, color: '#ef4444' },
          { short: 'GP', name: 'Green Party', seats: 5, color: '#22c55e' },
          { short: 'PBP', name: 'Solidarity–PBP', seats: 5, color: '#7c3aed' },
          { short: 'OTH', name: 'Others / independents', seats: 21, color: '#9ca3af' }
        ]
      }
    },
    news: [
      {
        title: 'Government steps up planning for Ireland’s next EU Council Presidency role',
        date: '11 March 2026',
        source: 'Government of Ireland',
        summary: 'The Irish government outlined planning priorities for its upcoming EU Council Presidency preparations, tying them to competitiveness and security.'
      },
      {
        title: 'Taoiseach uses Washington visit to stress Ireland-US ties',
        date: '17 March 2026',
        source: 'Government of Ireland',
        summary: 'Micheál Martin used St Patrick’s period engagements to reinforce the government’s diplomatic and economic messaging abroad.'
      },
      {
        title: 'Fuel-tax relief and cost pressures remain central domestic issue',
        date: '12 April 2026',
        source: 'Reuters',
        summary: 'The government faced pressure over living costs and transport pricing, keeping affordability high on the domestic political agenda.'
      }
    ]
  });
})();
