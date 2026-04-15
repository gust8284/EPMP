(function () {
  if (!window.EPMPCountryData) return;

  window.EPMPCountryData.registerCountryDetail('serbia', {
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
    "system": "Parliamentary republic",
    "nextElection": "Next parliamentary election due by 2027, though early-election pressure has risen"
  },
  "overview": {
    "keyFacts": [
      "Serbia now uses a dedicated structured module for overview, government, parliament and news.",
      "Aleksandar Vučić remains president while Đuro Macut serves as prime minister after the 2025 government reshuffle.",
      "The parliament tab uses a simplified 250-seat bloc map because the current legislature is heavily shaped by the SNS majority and the protest-driven political crisis."
    ]
  },
  "government": {
    "summary": "Current executive structure loaded for Serbia.",
    "system": "Parliamentary republic",
    "status": "SNS-dominated governing system under President Aleksandar Vučić and Prime Minister Đuro Macut.",
    "headOfState": {
      "title": "President",
      "name": "Aleksandar Vučić"
    },
    "headOfGovernment": {
      "title": "Prime Minister",
      "name": "Đuro Macut",
      "party": "SNS-backed"
    },
    "governmentParties": "Government supported by the SNS-led parliamentary majority and partners.",
    "supportArrangement": "Macut took office after the previous prime minister resigned during anti-government protests, but the governing majority still rests on Vučić’s parliamentary bloc.",
    "electionCycle": "Parliamentary term: 4 years. Presidential term: 5 years.",
    "notes": "Serbia in 2026 is defined by mass protest politics, questions over early elections and the continued dominance of the president over the broader system.",
    "keyParties": [
      "SNS-led majority",
      "Serbia Against Violence / successor opposition",
      "SPS",
      "NADA",
      "minority lists"
    ]
  },
  "parliament": {
    "chamber": "National Assembly",
    "current": {
      "title": "Current parliament",
      "subtitle": "Simplified current bloc map",
      "chamber": "National Assembly",
      "totalSeats": 250,
      "majority": 126,
      "asOf": "Current 2024–2028 legislature",
      "methodLabel": "Simplified current bloc balance",
      "note": "This chart simplifies the 250-seat National Assembly around the governing SNS-led majority, other parliamentary opposition and smaller lists.",
      "parties": [
        {
          "short": "SNS",
          "name": "SNS-led majority",
          "seats": 156,
          "color": "#123a7a"
        },
        {
          "short": "OPP",
          "name": "Main opposition bloc",
          "seats": 65,
          "color": "#d14343"
        },
        {
          "short": "SPS",
          "name": "Socialists",
          "seats": 18,
          "color": "#f0c341"
        },
        {
          "short": "NADA",
          "name": "Conservative opposition and smaller lists",
          "seats": 11,
          "color": "#7f8c8d"
        }
      ]
    },
    "projected": {
      "title": "If election were held today",
      "subtitle": "Crisis-era continuity scenario",
      "chamber": "National Assembly",
      "totalSeats": 250,
      "majority": 126,
      "asOf": "April 2026 continuity view",
      "methodLabel": "Illustrative continuity scenario",
      "note": "Because Serbia is in an active political crisis, this second chamber is a continuity-style estimate rather than a fresh poll-based seat simulation.",
      "parties": [
        {
          "short": "SNS",
          "name": "SNS-led majority",
          "seats": 138,
          "color": "#123a7a"
        },
        {
          "short": "OPP",
          "name": "Main opposition bloc",
          "seats": 82,
          "color": "#d14343"
        },
        {
          "short": "SPS",
          "name": "Socialists",
          "seats": 18,
          "color": "#f0c341"
        },
        {
          "short": "OTH",
          "name": "Other lists",
          "seats": 12,
          "color": "#7f8c8d"
        }
      ]
    }
  },
  "news": {
    "summary": "Recent Serbia briefing cards loaded.",
    "items": [
      {
        "title": "Macut appointed prime minister",
        "date": "16 April 2025",
        "source": "Reuters / Government of Serbia",
        "summary": "Parliament approved Đuro Macut as prime minister after the previous premier resigned amid political pressure and protests."
      },
      {
        "title": "Vučić launches consultations amid continuing crisis",
        "date": "2 April 2026",
        "source": "Reuters",
        "summary": "President Vučić invited parties for talks as anti-government protests persisted and opposition groups demanded more meaningful political change."
      },
      {
        "title": "Government continues symbolic public-outreach messaging while unrest simmers",
        "date": "8–10 April 2026",
        "source": "Government of Serbia",
        "summary": "Official government activity has continued, but the wider political environment remains dominated by the legitimacy crisis triggered by the station-roof disaster and protest wave."
      }
    ]
  }
});
})();
