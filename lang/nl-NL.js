export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        '404': 'Deze pagina is niet gevonden',
        title: 'A simple example',
        subtitle: "It's a blank-page. Start to build your'e page from here.",
        error_with_status: 'Er is iets fout gegaan',
        '404_subtitle': 'Je kan hier blijven of terug gaan naar de homepagina.',
        back: 'Terug naar home',
        error_without_status: 'An error occurred on the server',
        cookies_accept: 'Accepteren',
        cookies:
          'Wij maken gebruik van cookies om uw ervaring te optimaliseren. Lees',
        cookies2: 'hier',
        cookies3: 'meer.',
        en: 'Engels',
        nl: 'Nederlands',
        created_by: 'Gemaakt door'
      },
      brivka: {}
    })
  })
}
