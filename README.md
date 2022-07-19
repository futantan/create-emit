# create-emit

## Introduction

> Tiny 20 lines of functional event emitter/pubsub.

Comparing to other emitters, `create-emit` cares more about type safe.

## Installation

```sh
npm install --save create-emit
# or
yarn add create-emit
```


## Usage
```typescript
// create event with `string` type of payload
const sayHi = createEmit<string>()

// you can watch for the event to happen
const unsubscribe = sayHi.watch(console.log)

// fire the event with payload
sayHi('Peter') // Peter
sayHi('Drew')  // Drew
```
