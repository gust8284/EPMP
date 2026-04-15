(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('russia', {
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
    "nextElection": "Next State Duma election due in 2026"
  },
  "overview": {
    "keyFacts": [
      "Russia now uses a dedicated structured module for overview, government, parliament and news.",
      "Vladimir Putin remains president and Mikhail Mishustin remains prime minister.",
      "The parliament tab follows the current State Duma distribution and a continuity-style second chamber rather than a competitive democratic poll-to-seats model."
    ]
  },
  "government": {
    "summary": "Current executive structure loaded for Russia.",
    "system": "Semi-presidential republic",
    "status": "Presidentially dominated executive under Vladimir Putin.",
    "headOfState": {
      "title": "President",
      "name": "Vladimir Putin"
    },
    "headOfGovernment": {
      "title": "Prime Minister",
      "name": "Mikhail Mishustin"
    },
    "governmentParties": "United Russia anchors the parliamentary majority and supports the presidential executive.",
    "supportArrangement": "The presidential centre dominates political decision-making, with the cabinet and Duma majority aligned to the Kremlin.",
    "electionCycle": "Presidential term: 6 years. State Duma term: 5 years.",
    "notes": "This module treats Russia as a heavily managed political system rather than a fully open competitive parliamentary arena.",
    "keyParties": [
      "United Russia",
      "Communist Party",
      "A Just Russia",
      "LDPR",
      "New People"
    ]
  },
  "parliament": {
    "chamber": "State Duma",
    "current": {
      "title": "Current parliament",
      "subtitle": "Current State Duma distribution",
      "chamber": "State Duma",
      "totalSeats": 450,
      "majority": 226,
      "asOf": "Current 2021–2026 legislature",
      "methodLabel": "Current legislature balance",
      "note": "The current chamber follows the present State Duma balance dominated by United Russia and other systemic parties.",
      "parties": [
        {
          "short": "ER",
          "name": "United Russia",
          "seats": 324,
          "color": "#123a7a"
        },
        {
          "short": "CPRF",
          "name": "Communist Party",
          "seats": 57,
          "color": "#d14343"
        },
        {
          "short": "SRZP",
          "name": "A Just Russia — For Truth",
          "seats": 28,
          "color": "#f0c341"
        },
        {
          "short": "LDPR",
          "name": "LDPR",
          "seats": 21,
          "color": "#38a3a5"
        },
        {
          "short": "NP",
          "name": "New People",
          "seats": 15,
          "color": "#8e5ea2"
        },
        {
          "short": "OTH",
          "name": "Minor parties and independents",
          "seats": 5,
          "color": "#7f8c8d"
        }
      ]
    },
    "projected": {
      "title": "If election were held today",
      "subtitle": "Continuity scenario",
      "chamber": "State Duma",
      "totalSeats": 450,
      "majority": 226,
      "asOf": "April 2026 continuity view",
      "methodLabel": "Managed-system continuity scenario",
      "note": "No credible competitive poll-to-seat model is used here. The second chamber is a continuity-style view ahead of the scheduled 2026 Duma election.",
      "parties": [
        {
          "short": "ER",
          "name": "United Russia",
          "seats": 320,
          "color": "#123a7a"
        },
        {
          "short": "CPRF",
          "name": "Communist Party",
          "seats": 58,
          "color": "#d14343"
        },
        {
          "short": "SRZP",
          "name": "A Just Russia — For Truth",
          "seats": 30,
          "color": "#f0c341"
        },
        {
          "short": "LDPR",
          "name": "LDPR",
          "seats": 22,
          "color": "#38a3a5"
        },
        {
          "short": "NP",
          "name": "New People",
          "seats": 15,
          "color": "#8e5ea2"
        },
        {
          "short": "OTH",
          "name": "Minor parties and independents",
          "seats": 5,
          "color": "#7f8c8d"
        }
      ]
    }
  },
  "news": {
    "summary": "Recent Russia briefing cards loaded.",
    "items": [
      {
        "title": "Mishustin leads Russian delegation at Digital Qazaqstan forum",
        "date": "27 March 2026",
        "source": "Government of Russia",
        "summary": "Prime Minister Mishustin used regional meetings in Kazakhstan to stress technology, trade and Eurasian integration themes."
      },
      {
        "title": "Government maintains economic-management messaging amid war conditions",
        "date": "March–April 2026",
        "source": "Government of Russia",
        "summary": "Official government communications continue to focus on economic management, transport, energy and external coordination while the broader system remains war-shaped."
      },
      {
        "title": "State prepares for 2026 Duma cycle under managed political conditions",
        "date": "2026",
        "source": "Russian official institutions",
        "summary": "The next State Duma election is due in 2026, but the political field remains tightly controlled and highly asymmetric."
      }
    ]
  }
});
})();
