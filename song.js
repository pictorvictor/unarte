var ms = [800, 400, 500, 300];

module.exports = function (t) {
  var m = ms[Math.floor(t * 8) % ms.length];
  return (
    0 +
    clamp(
      sin_(sin(100) + sin(50), sin(1) + sin(4) * 0.1 + 0.5) *
        0.2 *
        (1 - saw(8)) *
        0.5 *
        Math.pow((1 - saw(4)) * 0.5, 4) *
        4
    ) +
    sin_(sin(400 * m) + sin(1) * 0.1, sin(1) / 8 + 0.5) *
      0.2 *
      Math.pow((1 - saw(8)) * 0.5, 4) +
    tri_(m + tri(200), sin(1) * 0.5 + 0.5) *
      0.4 *
      Math.pow((1 - saw(1)) * 0.5, 4) *
      Math.pow((1 - saw(0.5)) * 0.5, 4)
  );

  function tri_(x, t) {
    return Math.abs(1 - (t % (1 / x)) * x * 2) * 2 - 1;
  }
  function tri(x) {
    return tri_(x, t);
  }
  function saw_(x, t) {
    return (t % (1 / x)) * x * 2 - 1;
  }
  function saw(x) {
    return saw_(x, t);
  }
  function sin_(x, t) {
    return Math.sin(2 * Math.PI * t * x);
  }
  function sin(x) {
    return sin_(x, t);
  }
  function sq_(x, t) {
    return (t * x) % 1 < 0.5 ? -1 : 1;
  }
  function sq(x) {
    return sq_(x, t);
  }
  function clamp(x) {
    return Math.max(-1, Math.min(1, x));
  }
};
