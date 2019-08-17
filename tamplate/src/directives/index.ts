const requireContext = require.context(".", false, /\.js$/);

export default (Vue: any) => {
  requireContext.keys().forEach(path => {
    if (path.indexOf("index") === -1) {
      const requireItem = requireContext(path).default;
      Vue.directive(requireItem.name, requireItem.instance);
    }
  });
};
