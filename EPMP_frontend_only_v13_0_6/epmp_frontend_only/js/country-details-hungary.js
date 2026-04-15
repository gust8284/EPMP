(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('hungary', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'The next parliamentary election has just taken place; a transfer of power is now pending'
    },
    overview: {
      keyFacts: [
        'Hungary is included here as a transition-phase full module because the April 2026 election has already reset the parliamentary map but the executive transfer is still underway.',
        'President Tamás Sulyok remains head of state. The outgoing Orbán government is still in caretaker mode while Péter Magyar prepares to take office.',
        'The parliament tab uses the official 2026 election result for the current chamber and a same-day poll-trend projection for the hypothetical “held today” view.'
      ]
    },
    government: {
      summary: 'Hungary is in an immediate post-election transition.',
      system: 'Parliamentary republic',
      status: 'Executive power is in transition after TISZA defeated Fidesz on 12 April 2026.',
      headOfState: {
        title: 'President',
        name: 'Tamás Sulyok'
      },
      headOfGovernment: {
        title: 'Prime Minister-designate',
        name: 'Péter Magyar',
        party: 'TISZA'
      },
      governmentParties: 'Incoming governing force: TISZA. Outgoing caretaker administration: Fidesz-KDNP under Viktor Orbán.',
      supportArrangement: 'TISZA won a two-thirds parliamentary supermajority in the election. Orbán remains only until the formal transfer of executive power.',
      electionCycle: 'National Assembly term: 4 years.',
      notes: 'This profile intentionally distinguishes between the newly elected parliament and the still-unfolding executive handover.',
      keyParties: ['TISZA', 'Fidesz-KDNP', 'Mi Hazánk']
    },
    parliament: {
      chamber: 'National Assembly',
      current: {
        title: 'Current parliament',
        subtitle: '2026 election result',
        chamber: 'National Assembly',
        totalSeats: 199,
        majority: 100,
        asOf: 'Official result, 12 Apr 2026',
        methodLabel: 'Official election result',
        note: 'This chamber view reflects the official 2026 parliamentary election result. It shows the new legislature that will underpin the next government.',
        parties: [
          { short: 'TISZA', name: 'TISZA', seats: 138, color: '#1d4ed8' },
          { short: 'FID', name: 'Fidesz-KDNP', seats: 55, color: '#f59e0b' },
          { short: 'MH', name: 'Mi Hazánk', seats: 6, color: '#15803d' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'National Assembly',
        totalSeats: 199,
        majority: 100,
        asOf: 'PolitPro trend as of 13 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'This panel keeps the standard EPMP comparison view even though the election happened yesterday. The poll-trend seat model therefore reads as an immediate hypothetical check rather than a medium-term forecast.',
        parties: [
          { short: 'TISZA', name: 'TISZA', seats: 106, color: '#1d4ed8' },
          { short: 'FID', name: 'Fidesz-KDNP', seats: 83, color: '#f59e0b' },
          { short: 'MH', name: 'Mi Hazánk', seats: 10, color: '#15803d' }
        ]
      }
    },
    news: [
      {
        title: 'Orbán concedes defeat after 16 years in power',
        date: '12 April 2026',
        source: 'Reuters',
        summary: 'Viktor Orbán acknowledged defeat after TISZA won a landslide, ending the Fidesz era and opening the way for a pro-EU reset in Budapest.'
      },
      {
        title: 'Magyar sets out anti-corruption and rule-of-law agenda',
        date: '13 April 2026',
        source: 'Reuters',
        summary: 'Péter Magyar said his government would target corruption, judicial rollback and media capture as part of a broader attempt to unlock frozen EU funds.'
      },
      {
        title: 'Markets and regional capitals react to the political reset',
        date: '13 April 2026',
        source: 'Reuters',
        summary: 'The forint and Hungarian equities rose after the result, while neighbouring leaders and EU officials read the outcome as a major shift in Central European politics.'
      }
    ]
  });
})();
