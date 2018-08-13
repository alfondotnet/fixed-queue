## @alfonsoperez/fixed-queue

[![npm version](https://badge.fury.io/js/%40alfonsoperez%2Ffixed-queue.svg)](https://badge.fury.io/js/%40alfonsoperez%2Ffixed-queue)

A simple immutable Fixed Queue

#### Installation

```
yarn add @alfonsoperez/fixed-queue
```

or

```
npm install @alfonsoperez/fixed-queue --save
```

#### Usage

```
import { FixedQueue } from "@alfonsoperez/fixed-queue";

const queue = new FixedQueue({
  size: 3,
  initialValues: ["A", "B"]
});

queue
  .push("C", "D")
  .values(); // ["B", "C", "D"]
```
