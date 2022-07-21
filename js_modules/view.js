const view = (function () {
  const test = "View";
  const tester = function () {
    return `Hello from ${test}`;
  };
  return {
    tester,
  };
})();

export default view;
