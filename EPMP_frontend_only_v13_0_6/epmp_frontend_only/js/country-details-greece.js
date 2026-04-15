(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('greece', {
    meta: {
      readiness: 'full',
      sections: ['overview', 'government', 'parliament', 'news']
    },
    summary: {
      system: 'Parliamentary republic',
      nextElection: 'Next parliamentary election due by 2027'
    },
    overview: {
      keyFacts: [
        'Greece now uses a full structured module for overview, government, parliament and news.',
        'Prime Minister Kyriakos Mitsotakis leads the government under President Constantine Tassoulas.',
        'The parliament tab compares the current 300-seat Hellenic Parliament with a poll-based lower-house projection for a vote held today.'
      ]
    },
    government: {
      summary: 'Current executive structure loaded for Greece.',
      system: 'Parliamentary republic',
      status: 'Single-party New Democracy government.',
      headOfState: {
        title: 'President',
        name: 'Constantine Tassoulas'
      },
      headOfGovernment: {
        title: 'Prime Minister',
        name: 'Kyriakos Mitsotakis',
        party: 'New Democracy'
      },
      governmentParties: 'New Democracy.',
      supportArrangement: 'The government holds a parliamentary majority but remains under pressure from corruption allegations, institutional reform debates and opposition fragmentation.',
      electionCycle: 'Parliamentary term: 4 years. Presidential term: 5 years.',
      notes: 'Greek politics in 2026 remain dominated by New Democracy’s attempt to retain control while PASOK rises and SYRIZA remains weakened.',
      keyParties: ['New Democracy', 'PASOK', 'SYRIZA', 'KKE', 'Greek Solution', 'Plefsi Eleftherias']
    },
    parliament: {
      chamber: 'Hellenic Parliament',
      current: {
        title: 'Current parliament',
        subtitle: 'Current seat balance',
        chamber: 'Hellenic Parliament',
        totalSeats: 300,
        majority: 151,
        asOf: '2023 parliamentary election result',
        methodLabel: 'Current legislature balance',
        note: 'The current chamber is anchored to the latest parliamentary election outcome.',
        parties: [
          { short: 'ND', name: 'New Democracy', seats: 158, color: '#2f6fb2' },
          { short: 'SYR', name: 'SYRIZA', seats: 48, color: '#d14343' },
          { short: 'PAS', name: 'PASOK', seats: 32, color: '#22c55e' },
          { short: 'KKE', name: 'KKE', seats: 20, color: '#b91c1c' },
          { short: 'SPA', name: 'Spartans', seats: 12, color: '#7c2d12' },
          { short: 'EL', name: 'Greek Solution', seats: 12, color: '#1f4e79' },
          { short: 'NIKI', name: 'NIKI', seats: 10, color: '#4b5563' },
          { short: 'PE', name: 'Plefsi Eleftherias', seats: 8, color: '#8b5cf6' }
        ]
      },
      projected: {
        title: 'If election were held today',
        subtitle: 'Poll trend to seats',
        chamber: 'Hellenic Parliament',
        totalSeats: 300,
        majority: 151,
        asOf: 'PolitPro trend as of 12 Apr 2026',
        methodLabel: 'Poll trend to seats',
        note: 'The projected chamber follows the current national polling trend and should be read as a parliamentary approximation under Greece’s current electoral rules.',
        parties: [
          { short: 'ND', name: 'New Democracy', seats: 137, color: '#2f6fb2' },
          { short: 'PAS', name: 'PASOK', seats: 48, color: '#22c55e' },
          { short: 'EL', name: 'Greek Solution', seats: 28, color: '#1f4e79' },
          { short: 'PE', name: 'Plefsi Eleftherias', seats: 27, color: '#8b5cf6' },
          { short: 'KKE', name: 'KKE', seats: 25, color: '#b91c1c' },
          { short: 'SYR', name: 'SYRIZA', seats: 15, color: '#d14343' },
          { short: 'FL', name: 'Voice of Freedom', seats: 10, color: '#f59e0b' },
          { short: 'M25', name: 'MeRA25', seats: 10, color: '#6b7280' }
        ]
      }
    },
    news: [
      {
        title: 'Mitsotakis reshuffles cabinet to steady government',
        date: '3 April 2026',
        source: 'Reuters',
        summary: 'The prime minister reshuffled ministers in an effort to reinforce the government after political pressure and dissatisfaction over performance.'
      },
      {
        title: 'Farm-subsidy fraud probe intensifies political pressure',
        date: '6 April 2026',
        source: 'Reuters',
        summary: 'A widening investigation into alleged misuse of EU farm funds sharpened scrutiny on administrative controls and political accountability.'
      },
      {
        title: 'Government pursues constitutional and institutional reforms',
        date: '2 February 2026',
        source: 'Reuters',
        summary: 'Athens advanced proposals on parliamentary immunity and public-sector tenure as part of a broader reform pitch.'
      }
    ]
  });
})();
