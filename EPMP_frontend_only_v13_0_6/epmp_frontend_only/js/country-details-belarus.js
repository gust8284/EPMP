(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('belarus', {
  "meta": {
    "readiness": "full",
    "sections": [
      "overview",
      "government",
      "parliament",
      "news"
    ]
  },
  "summary": {
    "system": "Presidential republic",
    "nextElection": "Next parliamentary election expected in 2029; the current cycle is dominated by presidential control"
  },
  "overview": {
    "keyFacts": [
      "Belarus now uses a dedicated structured module for overview, government, parliament and news.",
      "Aleksandr Lukashenko remains the dominant political actor, with Aleksandr Turchin serving as prime minister.",
      "The parliament tab is presented as a controlled continuity view rather than a competitive democratic chamber model."
    ]
  },
  "government": {
    "summary": "Current executive structure loaded for Belarus.",
    "system": "Presidential republic",
    "status": "Presidentially dominated executive under Aleksandr Lukashenko.",
    "headOfState": {
      "title": "President",
      "name": "Aleksandr Lukashenko"
    },
    "headOfGovernment": {
      "title": "Prime Minister",
      "name": "Aleksandr Turchin"
    },
    "governmentParties": "Belarus does not operate as a competitive parliamentary party system in the same way as most other European states in this project.",
    "supportArrangement": "The executive is centred on presidential control over the Council of Ministers and state institutions.",
    "electionCycle": "Presidential term: 5 years. Parliamentary term: 5 years.",
    "notes": "Belarus is modelled here as a controlled political system with limited meaningful parliamentary competition.",
    "keyParties": [
      "Belaya Rus",
      "Communist Party of Belarus",
      "Liberal Democratic Party of Belarus",
      "pro-government independents"
    ]
  },
  "parliament": {
    "chamber": "House of Representatives",
    "current": {
      "title": "Current parliament",
      "subtitle": "Pro-government legislature",
      "chamber": "House of Representatives",
      "totalSeats": 110,
      "majority": 56,
      "asOf": "2024–2029 legislature",
      "methodLabel": "Current controlled legislature",
      "note": "This chamber reflects the broad composition of the current House of Representatives, which is dominated by pro-government forces rather than competitive opposition parties.",
      "parties": [
        {
          "short": "BR",
          "name": "Belaya Rus",
          "seats": 51,
          "color": "#2f6fb2"
        },
        {
          "short": "CPB",
          "name": "Communist Party of Belarus",
          "seats": 8,
          "color": "#d14343"
        },
        {
          "short": "LDPB",
          "name": "Liberal Democratic Party of Belarus",
          "seats": 4,
          "color": "#f0c341"
        },
        {
          "short": "LJ",
          "name": "Labour and Justice / other loyalist parties",
          "seats": 8,
          "color": "#8e5ea2"
        },
        {
          "short": "IND",
          "name": "Pro-government independents",
          "seats": 39,
          "color": "#7f8c8d"
        }
      ]
    },
    "projected": {
      "title": "If election were held today",
      "subtitle": "Continuity scenario",
      "chamber": "House of Representatives",
      "totalSeats": 110,
      "majority": 56,
      "asOf": "April 2026 continuity view",
      "methodLabel": "Non-competitive continuity scenario",
      "note": "No credible competitive poll-to-seat model is used here. The second chamber is a continuity-style view of the existing political order.",
      "parties": [
        {
          "short": "BR",
          "name": "Belaya Rus",
          "seats": 52,
          "color": "#2f6fb2"
        },
        {
          "short": "CPB",
          "name": "Communist Party of Belarus",
          "seats": 8,
          "color": "#d14343"
        },
        {
          "short": "LDPB",
          "name": "Liberal Democratic Party of Belarus",
          "seats": 4,
          "color": "#f0c341"
        },
        {
          "short": "LJ",
          "name": "Labour and Justice / other loyalist parties",
          "seats": 8,
          "color": "#8e5ea2"
        },
        {
          "short": "IND",
          "name": "Pro-government independents",
          "seats": 38,
          "color": "#7f8c8d"
        }
      ]
    }
  },
  "news": {
    "summary": "Recent Belarus briefing cards loaded.",
    "items": [
      {
        "title": "Lukashenko frames 2026 as a decisive year for Belarus",
        "date": "5 January 2026",
        "source": "BelTA / Belarus presidency",
        "summary": "The Belarusian leadership described 2026 as a strategically important year, stressing discipline, loyalty and state capacity."
      },
      {
        "title": "Aleksandr Turchin continues to reshape government personnel",
        "date": "10 April 2026",
        "source": "Council of Ministers of Belarus",
        "summary": "Prime Minister Aleksandr Turchin introduced new senior officials and kept economic management and state media oversight on the government agenda."
      },
      {
        "title": "Belarus prepares new embassy in North Korea",
        "date": "8 April 2026",
        "source": "Council of Ministers of Belarus",
        "summary": "The government said it would open an embassy in the DPRK by August 2026, reflecting Minsk’s continued external alignment choices."
      }
    ]
  }
});
})();
