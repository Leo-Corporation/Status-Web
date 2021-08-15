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
  },
  head: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap' }
    ]
  }
}