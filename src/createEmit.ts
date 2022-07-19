export interface Emit<Payload = void> {
  (v: Payload): void
  watch: (cb: (v: Payload) => void) => () => void
  currentPayload?: Payload
}

export const createEmit = <Payload = void>(): Emit<Payload> => {
  let watchers: Array<(v: Payload) => void> = []
  const instance: Emit<Payload> = (v: Payload) => {
    instance.currentPayload = v
    watchers.forEach(cb => cb(v))
  }
  instance.watch = cb => {
    watchers.push(cb)
    return () => {
      watchers = watchers.filter(v => v !== cb)
    }
  }
  return instance
}
