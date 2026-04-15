(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('austria', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Federal parliamentary republic',
      nextElection: 'Next National Council election is expected by 2029'
    },
    overview: {
      keyFacts: [
        'Austria now has full structured coverage across overview, government, parliament and news.',
        'The executive is led by President Alexander Van der Bellen and Chancellor Christian Stocker.',
        'The current government is a coalition of ÖVP, SPÖ and NEOS, while the parliament tab compares the present National Council with a poll-based projection.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Austria.',
      system: 'Federal parliamentary republic',
      status: 'Three-party coalition government under Chancellor Christian Stocker.',
      headOfState: {
        title: 'President',
        name: 'Alexander Van der Bellen'
      },
      headOfGovernment: {
        title: 'Federal Chancellor',
        name: 'Christian Stocker',
        party: 'ÖVP'
      },
      governmentParties: 'ÖVP, SPÖ and NEOS',
      supportArrangement: 'The governing coalition holds a clear parliamentary majority even though the FPÖ finished first in the 2024 election.',
      electionCycle: 'National Council term: normally 5 years.',
      notes: 'Austria’s current government emerged only after extended coalition talks. That makes the gap between election ranking and governing power especially important to explain clearly in the UI.',
      keyParties: ['FPÖ', 'ÖVP', 'SPÖ', 'NEOS', 'Greens']
    },
    parliament: {
      chamber: 'National Council',
      current: {
        title: 'Current parliament',
        subtitle: 'Current National Council groups',
        chamber: 'National Council',
        totalSeats: 183,
        majority: 92,
        asOf: 'Current federal term',
        methodLabel: 'Official chamber totals',
        note: 'The current chamber uses the post-2024 National Council composition.',
        parties: [
          { short: 'FPÖ', name: 'FPÖ', seats: 57, color: '#2a6db3' },
          { short: 'ÖVP', name: 'ÖVP', seats: 51, color: '#1f8f55' },
          { short: 'SPÖ', name: 'SPÖ', seats: 41, color: '#d14b4b' },
          { short: 'NEOS', name: 'NEOS', seats: 18, color: '#e97ac2' },
          { short: 'GRN', name: 'Greens', seats: 16, color: '#4caf50' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'National Council',
        totalSeats: 183,
        majority: 92,
        asOf: 'Poll trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats (threshold projection)',
        note: 'This projection applies a simple national threshold-style conversion. Austria’s real provincial allocation can shift the exact seat balance.',
        parties: [
          { short: 'FPÖ', name: 'FPÖ', seats: 72, color: '#2a6db3' },
          { short: 'ÖVP', name: 'ÖVP', seats: 39, color: '#1f8f55' },
          { short: 'SPÖ', name: 'SPÖ', seats: 36, color: '#d14b4b' },
          { short: 'GRN', name: 'Greens', seats: 21, color: '#4caf50' },
          { short: 'NEOS', name: 'NEOS', seats: 15, color: '#e97ac2' }
        ]
      }
    },
    news: {
      summary: 'Recent Austria briefing cards loaded.',
      items: [
        {
          title: 'Government targets fuel-price relief measures',
          date: '18 Mar 2026',
          blurb: 'Austria’s coalition advanced measures aimed at easing fuel-price pressure, tying consumer relief to a broader cost-of-living agenda.'
        },
        {
          title: 'Industry and competitiveness move up the agenda',
          date: '11 Feb 2026',
          blurb: 'The chancellery increasingly framed industrial resilience, energy costs and business conditions as central economic priorities.'
        },
        {
          title: 'Coalition leaders set early 2026 priorities',
          date: '13 Jan 2026',
          blurb: 'The new coalition used early coordination meetings to lock in priorities after a difficult government-formation period.'
        }
      ]
    }
  });
})();