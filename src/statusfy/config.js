module.exports = {
  "title": "Léo Corporation",
  "name": "leo_corporation",
  "description": "Status page of Léo Corporation",
  "defaultLocale": "en",
  "manifest": true,
  "baseUrl": "https://status.leocorporation.dev",
  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "file": "en.json"
    }
  ],
  content: {
    frontMatterFormat: 'yaml',
    systems: [
      'website',
      'update-system',
      'xalyus-store',
      'gavilya-services'
    ]
  },
  theme: {
    links: {
      en: {
        contact: "https://leocorporation.dev/",
        support: "https://leocorporation.dev/",
        home: "https://leocorporation.dev/",
        privacy: "https://privacy.leocorporation.dev/",
        legal: "https://privacy.leocorporation.dev/"
      }
    }
  },
  notifications: {
    twitter: {
      en: "LeoCorpNews"
    }
  }
}