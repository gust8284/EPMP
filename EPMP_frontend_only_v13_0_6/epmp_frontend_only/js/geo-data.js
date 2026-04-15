(function () {
  window.EPMPGeoData = {
    overlays: {
      'eu-members': {
        label: 'EU members',
        shortLabel: 'EU',
        color: '#6ea8ff',
        description: 'Official EU member states on this map.',
        ids: [
          'austria', 'belgium', 'bulgaria', 'croatia', 'cyprus', 'czechia', 'denmark', 'estonia',
          'finland', 'france', 'germany', 'greece', 'hungary', 'ireland', 'italy', 'latvia',
          'lithuania', 'luxembourg', 'malta', 'netherlands', 'poland', 'portugal', 'romania',
          'slovakia', 'slovenia', 'spain', 'sweden'
        ]
      },
      'eu-aspiring': {
        label: 'EU aspiring',
        shortLabel: 'EU track',
        color: '#f6c453',
        description: 'Candidate countries plus Kosovo as a potential candidate on the official EU enlargement track.',
        ids: [
          'albania', 'bosnia-and-herzegovina', 'moldova', 'montenegro', 'north-macedonia',
          'serbia', 'turkey', 'ukraine', 'kosovo', 'georgia'
        ]
      },
      'euro-area': {
        label: 'Euro area',
        shortLabel: 'Euro',
        color: '#34d399',
        description: 'Official euro area members only. This excludes non-EU countries that use the euro unilaterally.',
        ids: [
          'austria', 'belgium', 'bulgaria', 'croatia', 'cyprus', 'estonia', 'finland', 'france',
          'germany', 'greece', 'ireland', 'italy', 'latvia', 'lithuania', 'luxembourg', 'malta',
          'netherlands', 'portugal', 'slovakia', 'slovenia', 'spain'
        ]
      },
      schengen: {
        label: 'Schengen',
        shortLabel: 'Schengen',
        color: '#a78bfa',
        description: 'Schengen states shown on this map. Malta and Liechtenstein are outside the current SVG scope.',
        ids: [
          'austria', 'belgium', 'bulgaria', 'croatia', 'czechia', 'denmark', 'estonia', 'finland',
          'france', 'germany', 'greece', 'hungary', 'iceland', 'italy', 'latvia', 'lithuania',
          'luxembourg', 'malta', 'netherlands', 'norway', 'poland', 'portugal', 'romania', 'slovakia',
          'slovenia', 'spain', 'sweden', 'switzerland', 'liechtenstein'
        ]
      },
      nato: {
        label: 'NATO',
        shortLabel: 'NATO',
        color: '#fb7185',
        description: 'European NATO Allies shown on this map.',
        ids: [
          'albania', 'belgium', 'bulgaria', 'croatia', 'czechia', 'denmark', 'estonia', 'finland',
          'france', 'germany', 'greece', 'hungary', 'iceland', 'italy', 'latvia', 'lithuania',
          'luxembourg', 'montenegro', 'netherlands', 'north-macedonia', 'norway', 'poland',
          'portugal', 'romania', 'slovakia', 'slovenia', 'spain', 'sweden', 'turkey', 'united-kingdom'
        ]
      }
    }
  };
})();
