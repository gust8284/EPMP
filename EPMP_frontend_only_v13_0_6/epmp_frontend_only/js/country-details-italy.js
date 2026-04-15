(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('italy', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Current legislature runs to 2027 unless parliament is dissolved earlier'
    },
    overview: {
      keyFacts: [
        'Italy is now on the full structured country-data path for overview, government, parliament and news.',
        'The current executive is led by Prime Minister Giorgia Meloni, with President Sergio Mattarella as head of state.',
        'The parliament tab focuses on the Chamber of Deputies and distinguishes current seat totals from an illustrative polling-based future map.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Italy.',
      system: 'Parliamentary republic',
      status: 'Majority coalition government led by Giorgia Meloni.',
      headOfState: {
        title: 'President',
        name: 'Sergio Mattarella'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Giorgia Meloni',
        party: "Fratelli d'Italia"
      },
      governmentParties: "Fratelli d'Italia, Lega, Forza Italia and Noi Moderati",
      supportArrangement: 'The government rests on a clear centre-right parliamentary majority in the Chamber of Deputies.',
      electionCycle: 'The Chamber of Deputies normally serves 5 years unless dissolved earlier.',
      notes: 'Italy’s cabinet base is stable by current standards, but coalition management and electoral-law debate remain live political issues.',
      keyParties: ["Fratelli d'Italia", 'Partito Democratico', 'Movimento 5 Stelle', 'Forza Italia', 'Lega']
    },
    parliament: {
      chamber: 'Chamber of Deputies',
      current: {
        title: 'Current parliament',
        subtitle: 'Current Chamber of Deputies groups',
        chamber: 'Chamber of Deputies',
        totalSeats: 400,
        majority: 201,
        note: 'Current lower-house group totals from the Camera dei deputati. A few small components inside the Mixed Group are not shown separately.',
        parties: [
          { short: 'AVS', name: 'Alleanza Verdi e Sinistra', seats: 10, color: '#53a653' },
          { short: 'AZ', name: 'Azione', seats: 10, color: '#f4a259' },
          { short: 'PD', name: 'Partito Democratico', seats: 70, color: '#d45087' },
          { short: 'M5S', name: 'Movimento 5 Stelle', seats: 49, color: '#f1c453' },
          { short: 'FI', name: 'Forza Italia', seats: 54, color: '#3f6ad8' },
          { short: 'LEGA', name: 'Lega', seats: 61, color: '#2d6a4f' },
          { short: 'NM', name: 'Noi Moderati', seats: 8, color: '#7db3ff' },
          { short: 'FDI', name: "Fratelli d'Italia", seats: 117, color: '#173f8a' },
          { short: 'OTH', name: 'Others / Mixed', seats: 21, color: '#8f9aa8' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Illustrative poll-based projection',
        chamber: 'Chamber of Deputies',
        totalSeats: 400,
        majority: 201,
        asOf: '12 April 2026',
        methodLabel: 'Illustrative proportional approximation',
        note: 'Illustrative Chamber projection from the PolitPro national poll trend. Real Italian seat allocation depends on the mixed electoral system and coalition mechanics, so this should be read as directional rather than exact.',
        parties: [
          { short: 'PD', name: 'Partito Democratico', seats: 89, color: '#d45087' },
          { short: 'AVS', name: 'Alleanza Verdi e Sinistra', seats: 26, color: '#53a653' },
          { short: 'M5S', name: 'Movimento 5 Stelle', seats: 49, color: '#f1c453' },
          { short: 'AZ', name: 'Azione', seats: 12, color: '#f4a259' },
          { short: 'FI', name: 'Forza Italia', seats: 33, color: '#3f6ad8' },
          { short: 'LEGA', name: 'Lega', seats: 29, color: '#2d6a4f' },
          { short: 'FDI', name: "Fratelli d'Italia", seats: 114, color: '#173f8a' },
          { short: 'OTH', name: 'Others', seats: 48, color: '#8f9aa8' }
        ]
      }
    },
    news: [
      {
        title: 'Coalition parties agree on electoral-law overhaul outline',
        date: '26 February 2026',
        source: 'Reuters',
        summary: 'Italy’s ruling parties agreed on the broad shape of an electoral-law overhaul, keeping institutional engineering on the political agenda.'
      },
      {
        title: 'Justice referendum campaign becomes a test for the government',
        date: '19 March 2026',
        source: 'Reuters',
        summary: 'A justice-related referendum campaign became an early political test for Giorgia Meloni’s coalition and for relations inside the Italian centre-right.'
      },
      {
        title: 'Government confronts weaker growth and external economic pressure',
        date: '9 April 2026',
        source: 'Reuters',
        summary: 'Rome faced a tougher economic backdrop as growth expectations softened and geopolitical shocks fed pressure on public-finance planning.'
      }
    ]
  });
})();
