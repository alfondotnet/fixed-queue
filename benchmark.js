const { FixedQueue } = require("./dist/index");

var timer = function(name) {
  var start = new Date();
  return {
    stop: function() {
      var end = new Date();
      var time = end.getTime() - start.getTime();
      console.log("Timer:", name, "finished in", time, "ms");
    }
  };
};

var sizeSample = 100000;
var initialValues = Array.apply(null, { length: sizeSample }).fill(
  "0",
  0,
  sizeSample
);

var t = timer("FixedQueue benchmark");

var queue = new FixedQueue({
  size: Math.floor(sizeSample / 1.5),
  initialValues
});

for (var i = 0; i <= 10000; i++) queue.push(3);

t.stop();

var t = timer("Normal array benchmark");

var array = [...initialValues];
for (var i = 0; i <= 10000; i++) array.push(initialValues);

t.stop();
