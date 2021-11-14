import View from '@ioc:Adonis/Core/View'

View.global('trucate', (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '&hellip;' : str
})
