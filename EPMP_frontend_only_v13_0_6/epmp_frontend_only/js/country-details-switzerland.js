(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('switzerland', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Federal directorial republic',
      nextElection: 'Next National Council election is expected in 2027, while referendums continue in between'
    },
    overview: {
      keyFacts: [
        'Switzerland now has full structured coverage across overview, government, parliament and news.',
        'The executive is not led by a prime minister; executive power is exercised collectively by the seven-member Federal Council.',
        'The parliament tab uses the National Council and labels the future chamber as an approximation, because Swiss politics also run through cantons and direct democracy.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Switzerland.',
      system: 'Federal directorial republic',
      status: 'Consensus-style collegial executive under the Federal Council.',
      headOfState: {
        title: 'President of the Confederation (2026)',
        name: 'Guy Parmelin',
        party: 'SVP/UDC'
      },
      headOfGovernment: {
        title: 'Federal Council',
        name: 'No separate prime minister – executive power is exercised collectively by the seven-member Federal Council'
      },
      governmentParties: 'Federal Council composition: 2 SVP/UDC, 2 SP/PS, 2 FDP/PLR and 1 The Centre',
      supportArrangement: 'Swiss executive politics do not depend on a single governing majority in the same way as Westminster-style systems; parliamentary bargaining and direct-democratic votes remain central.',
      cabinetSize: '7 federal councillors + Federal Chancellor',
      electionCycle: 'National Council term: 4 years. Federal Council elected by parliament. Frequent referendums shape policy in between.',
      notes: 'Switzerland is the strongest case in the project for showing that “government”, “parliament” and “public vote” are not the same arena.',
      keyParties: ['SVP/UDC', 'SP/PS', 'The Centre', 'FDP/PLR', 'Greens', 'GLP/PVL']
    },
    parliament: {
      chamber: 'National Council',
      current: {
        title: 'Current parliament',
        subtitle: 'Current National Council groups',
        chamber: 'National Council',
        totalSeats: 200,
        majority: 101,
        asOf: 'Current federal term',
        methodLabel: 'Official chamber totals',
        note: 'The current chamber uses the 200-seat National Council. Smaller parties are grouped under Others for readability.',
        parties: [
          { short: 'SVP', name: 'SVP/UDC', seats: 62, color: '#2a6db3' },
          { short: 'SP', name: 'SP/PS', seats: 41, color: '#d14b4b' },
          { short: 'MID', name: 'The Centre', seats: 29, color: '#f28e2b' },
          { short: 'FDP', name: 'FDP/PLR', seats: 28, color: '#1f8f55' },
          { short: 'GRN', name: 'Greens', seats: 23, color: '#4caf50' },
          { short: 'GLP', name: 'GLP/PVL', seats: 10, color: '#9ad04b' },
          { short: 'OTH', name: 'Others', seats: 7, color: '#7f8c8d' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'National Council',
        totalSeats: 200,
        majority: 101,
        asOf: 'Poll trend as of 12 Apr 2026',
        methodLabel: 'Illustrative national approximation',
        note: 'Swiss lower-house elections are canton-based and politics are heavily shaped by federalism and referendums, so this future chamber is only an illustrative national approximation.',
        parties: [
          { short: 'SVP', name: 'SVP/UDC', seats: 56, color: '#2a6db3' },
          { short: 'SP', name: 'SP/PS', seats: 36, color: '#d14b4b' },
          { short: 'MID', name: 'The Centre', seats: 30, color: '#f28e2b' },
          { short: 'FDP', name: 'FDP/PLR', seats: 28, color: '#1f8f55' },
          { short: 'GRN', name: 'Greens', seats: 16, color: '#4caf50' },
          { short: 'GLP', name: 'GLP/PVL', seats: 16, color: '#9ad04b' },
          { short: 'OTH', name: 'Others', seats: 18, color: '#7f8c8d' }
        ]
      }
    },
    news: {
      summary: 'Recent Switzerland briefing cards loaded.',
      items: [
        {
          title: 'Swiss–EU package sent to parliament',
          date: '13 Mar 2026',
          blurb: 'The Federal Council transmitted the updated Switzerland–EU package into the parliamentary process, opening a new phase in a long-running strategic question.'
        },
        {
          title: 'Anti-money-laundering strategy strengthened',
          date: '20 Mar 2026',
          blurb: 'The government advanced new anti-money-laundering measures as part of broader pressure to align Swiss oversight with international expectations.'
        },
        {
          title: 'Patriot procurement debate highlights defence friction',
          date: '2 Apr 2026',
          blurb: 'Questions over payment timing and procurement details in the Patriot programme illustrated the political sensitivity of Switzerland’s current defence modernisation path.'
        }
      ]
    }
  });
})();