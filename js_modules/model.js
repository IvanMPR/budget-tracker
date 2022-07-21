const model = (function () {
  const test = "Model";
  const tester = function () {
    return `Hello from ${test}`;
  };
  return {
    tester,
  };
})();

export default model;
