export default class Cookies {
  static set(name, value, config) {
    const opts = {
      source: document,
      path: '/',
      ...config
    }

    let c = name + "=" + value + ";"
    if (opts.days) {
      const d = new Date
      d.setTime(d.getTime() + 24*60*60*1000*opts.days)
      c += `expires=${d.toGMTString()};`
    }
    if (opts.path) {
      c += `path=${opts.path};`
    }
    (opts.source).cookie = c
  }

  static get(name, source) {
    source = !source ? document : source
    const v = source.cookie && source.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
  }

  static delete(name, source) {
    this.set(name, '', {
      days: -1,
      source
    })
  }
}