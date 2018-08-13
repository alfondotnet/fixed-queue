// @flow

type FixedQueueArgs = { size: number, initialValues?: Array<any> };

const DEFAULT_SIZE = 100;

class FixedQueue<T> {
  _queue: Array<any>;
  _fixedSize: number;

  constructor(args: FixedQueueArgs) {
    const initialValues = args.initialValues || [];
    this._fixedSize = args.size || 0;

    this._queue = initialValues.slice(
      initialValues.length - this._fixedSize,
      initialValues.length
    );
  }

  // TODO: Perhaps a mutable version of push is valuable?
  push(...values: Array<T>): FixedQueue<T> {
    const newQueueValues = [...this._queue, ...values];
    const newQueue = new FixedQueue({ size: 0, initialValues: [] });
    newQueue._queue = newQueueValues.slice(
      newQueueValues.length - this._fixedSize,
      newQueueValues.length
    );
    newQueue._fixedSize = this._fixedSize;
    return newQueue;
  }

  values() {
    return this._queue;
  }
}

export default FixedQueue;
