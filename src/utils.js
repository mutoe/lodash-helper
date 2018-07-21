/**
 * localStorage helper
 */
export const lstore = {
  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    try {
      return JSON.parse(window.localStorage.getItem(key))
    } catch (e) {
      return window.localStorage.getItem(key)
    }
  },
  clear (key) {
    if (key) window.localStorage.removeItem(key)
    else window.localStorage.clear()
  },
}
