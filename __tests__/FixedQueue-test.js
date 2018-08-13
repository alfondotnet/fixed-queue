import FixedQueue from "../FixedQueue";

describe("FixedQueue", () => {
  it("initializing the class works", () => {
    const queue = new FixedQueue({
      size: 2,
      initialValues: ["A", "B", "C"]
    });

    expect(queue.values()).toEqual(["B", "C"]);
  });

  it("can push new elements", () => {
    const queue = new FixedQueue({
      size: 5,
      initialValues: ["A", "B", "C"]
    });

    const newQueue = queue.push("D", "E", "F");

    expect(newQueue.values()).toEqual(["B", "C", "D", "E", "F"]);
  });
});
