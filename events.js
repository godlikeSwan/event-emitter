module.exports = class EventEmitter {
  constructor () {
    this.listeners = []
  }

  on (event, cb) {
    this.listeners.push({ event, cb })
  }

  emit (event, ...args) {
    this.listeners
      // .filter((listener) => listener.event === event)
      .forEach((listener) => {
        if (listener.event !== event) return
        listener.cb.apply(undefined, args)
    })
  }
}
