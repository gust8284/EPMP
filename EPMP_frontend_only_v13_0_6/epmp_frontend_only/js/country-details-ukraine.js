(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('ukraine', {
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
    "system": "Semi-presidential republic",
    "nextElection": "National elections remain suspended while martial law continues"
  },
  "overview": {
    "keyFacts": [
      "Ukraine now uses a dedicated structured module for overview, government, parliament and news.",
      "Volodymyr Zelenskyy remains president while Yuliia Svyrydenko serves as prime minister.",
      "The parliament tab uses a broad 450-seat Verkhovna Rada map and an emergency-era continuity scenario because wartime conditions make normal election modelling inappropriate."
    ]
  },
  "government": {
    "summary": "Current executive structure loaded for Ukraine.",
    "system": "Semi-presidential republic",
    "status": "Wartime executive under President Volodymyr Zelenskyy and Prime Minister Yuliia Svyrydenko.",
    "headOfState": {
      "title": "President",
      "name": "Volodymyr Zelenskyy"
    },
    "headOfGovernment": {
      "title": "Prime Minister",
      "name": "Yuliia Svyrydenko"
    },
    "governmentParties": "Government rests on the presidential executive and the Servant of the People-dominated legislature assembled under wartime conditions.",
    "supportArrangement": "Martial law and the Russian invasion continue to shape all normal political and electoral processes.",
    "electionCycle": "Normal constitutional election cycles are suspended while martial law remains in force.",
    "notes": "Ukraine’s political system in 2026 cannot be interpreted through a normal peacetime election lens. State capacity, defence production and external support dominate the agenda.",
    "keyParties": [
      "Servant of the People",
      "European Solidarity",
      "Batkivshchyna",
      "Holos",
      "deputy groups and independents"
    ]
  },
  "parliament": {
    "chamber": "Verkhovna Rada",
    "current": {
      "title": "Current parliament",
      "subtitle": "Broad wartime Rada map",
      "chamber": "Verkhovna Rada",
      "totalSeats": 450,
      "majority": 226,
      "asOf": "Current wartime legislature",
      "methodLabel": "Broad current legislature balance",
      "note": "This chamber simplifies the current Verkhovna Rada into major factions, deputy groups and independents under wartime conditions.",
      "parties": [
        {
          "short": "SOTP",
          "name": "Servant of the People",
          "seats": 235,
          "color": "#22c55e"
        },
        {
          "short": "ES",
          "name": "European Solidarity",
          "seats": 27,
          "color": "#2f6fb2"
        },
        {
          "short": "BAT",
          "name": "Batkivshchyna",
          "seats": 24,
          "color": "#d14343"
        },
        {
          "short": "HOL",
          "name": "Holos",
          "seats": 20,
          "color": "#f0c341"
        },
        {
          "short": "GRP",
          "name": "Deputy groups",
          "seats": 56,
          "color": "#38a3a5"
        },
        {
          "short": "OTH",
          "name": "Other factions and independents",
          "seats": 88,
          "color": "#7f8c8d"
        }
      ]
    },
    "projected": {
      "title": "If election were held today",
      "subtitle": "Emergency-era continuity scenario",
      "chamber": "Verkhovna Rada",
      "totalSeats": 450,
      "majority": 226,
      "asOf": "April 2026 continuity view",
      "methodLabel": "Wartime continuity scenario",
      "note": "Because Ukraine remains under martial law, no normal competitive poll-to-seat projection is presented here. The second chamber is a continuity-style emergency scenario.",
      "parties": [
        {
          "short": "SOTP",
          "name": "Servant of the People",
          "seats": 220,
          "color": "#22c55e"
        },
        {
          "short": "ES",
          "name": "European Solidarity",
          "seats": 32,
          "color": "#2f6fb2"
        },
        {
          "short": "BAT",
          "name": "Batkivshchyna",
          "seats": 25,
          "color": "#d14343"
        },
        {
          "short": "HOL",
          "name": "Holos",
          "seats": 19,
          "color": "#f0c341"
        },
        {
          "short": "GRP",
          "name": "Deputy groups",
          "seats": 60,
          "color": "#38a3a5"
        },
        {
          "short": "OTH",
          "name": "Other factions and independents",
          "seats": 94,
          "color": "#7f8c8d"
        }
      ]
    }
  },
  "news": {
    "summary": "Recent Ukraine briefing cards loaded.",
    "items": [
      {
        "title": "Zelenskyy keeps defence production and exchanges at centre of messaging",
        "date": "11–13 April 2026",
        "source": "President of Ukraine",
        "summary": "Recent presidential addresses stressed weapons production, prisoner exchanges and the continuing search for security guarantees and peace terms."
      },
      {
        "title": "Svyrydenko government highlights domestic arms production and energy resilience",
        "date": "2026",
        "source": "Government of Ukraine",
        "summary": "Prime Minister Yuliia Svyrydenko has continued to link reconstruction, education, energy resilience and defence-industrial output."
      },
      {
        "title": "Martial law continues to suspend normal election politics",
        "date": "2026",
        "source": "Ukrainian institutional context",
        "summary": "Ukraine’s political system continues to operate under wartime legal and security constraints, which blocks a normal electoral calendar."
      }
    ]
  }
});
})();
