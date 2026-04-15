(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('slovenia', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Next National Assembly election is expected in 2030'
    },
    overview: {
      keyFacts: [
        'Slovenia now uses a full structured module for all major EPMP tabs.',
        'President Nataša Pirc Musar remains head of state. Robert Golob remains prime minister, but he is now negotiating coalition renewal after the March 2026 election.',
        'The parliament tab reflects the March 2026 result and the current poll-trend projection, which still shows no easy majority bloc.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Slovenia.',
      system: 'Parliamentary republic',
      status: 'Caretaker/outgoing Golob administration while post-election coalition talks continue.',
      headOfState: {
        title: 'President',
        name: 'Nataša Pirc Musar'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Robert Golob',
        party: 'Freedom Movement (GS)'
      },
      governmentParties: 'Outgoing coalition: Freedom Movement (GS), Social Democrats (SD), and The Left (Levica).',
      supportArrangement: 'No party or bloc won a majority in the 22 March 2026 election. Golob is seeking a broader arrangement excluding SDS.',
      electionCycle: 'National Assembly term: 4 years.',
      notes: 'The executive should be read as transitional: Golob remains in office, but coalition talks and parliamentary bargaining will determine the durable governing formula.',
      keyParties: ['Freedom Movement', 'SDS', 'NSi/SLS/FOKUS', 'Demokrati', 'SD', 'Levica/Vesna']
    },
    parliament: {
      chamber: 'National Assembly',
      current: {
        title: 'Current parliament',
        subtitle: '2026 election result',
        chamber: 'National Assembly',
        totalSeats: 90,
        majority: 46,
        asOf: 'Official result, 22 Mar 2026',
        methodLabel: 'Official election result',
        note: 'The current chamber uses the March 2026 election result. Two seats are reserved for the Italian and Hungarian national communities and are grouped separately here.',
        parties: [
          { short: 'GS', name: 'Freedom Movement', seats: 29, color: '#1d4ed8' },
          { short: 'SDS', name: 'Slovenian Democratic Party', seats: 28, color: '#1f2937' },
          { short: 'NSi', name: 'NSi / SLS / FOKUS', seats: 9, color: '#0f766e' },
          { short: 'SD', name: 'Social Democrats', seats: 6, color: '#dc2626' },
          { short: 'DEM', name: 'Demokrati', seats: 6, color: '#2563eb' },
          { short: 'LEV', name: 'Levica / Vesna', seats: 5, color: '#7c3aed' },
          { short: 'RES', name: 'Resnica', seats: 5, color: '#f59e0b' },
          { short: 'MIN', name: 'Minority deputies', seats: 2, color: '#9ca3af' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'National Assembly',
        totalSeats: 90,
        majority: 46,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'This projection follows the PolitPro Slovenia trend and its seat model. It still implies a hung parliament, with several medium-sized actors acting as kingmakers.',
        parties: [
          { short: 'GS', name: 'Freedom Movement', seats: 29, color: '#1d4ed8' },
          { short: 'SDS', name: 'Slovenian Democratic Party', seats: 29, color: '#1f2937' },
          { short: 'NSi', name: 'NSi / SLS / FOKUS', seats: 9, color: '#0f766e' },
          { short: 'DEM', name: 'Demokrati', seats: 7, color: '#2563eb' },
          { short: 'SD', name: 'Social Democrats', seats: 6, color: '#dc2626' },
          { short: 'RES', name: 'Resnica', seats: 5, color: '#f59e0b' },
          { short: 'LEV', name: 'Levica / Vesna', seats: 5, color: '#7c3aed' }
        ]
      }
    },
    news: [
      {
        title: 'Golob opens broad coalition talks after cliffhanger vote',
        date: '27 March 2026',
        source: 'Reuters',
        summary: 'Robert Golob invited parties other than SDS to discuss a broad post-election government after GS finished just ahead of SDS in the March election.'
      },
      {
        title: 'Election leaves no obvious majority bloc',
        date: '23 March 2026',
        source: 'Reuters',
        summary: 'Slovenia’s election produced a nearly tied result between GS and SDS, with smaller parties becoming decisive for government formation.'
      },
      {
        title: 'Campaign framed by foreign-interference accusations and energy stress',
        date: '19 March 2026',
        source: 'Reuters',
        summary: 'Before the vote, the campaign hardened around alleged foreign meddling, corruption claims and the energy squeeze created by the wider regional crisis.'
      }
    ]
  });
})();
