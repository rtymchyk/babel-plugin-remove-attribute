export default function() {
  return {
    visitor: {
      JSXAttribute(path, state) {
        const attribute = state.opts.attribute;

        if (path.node.name.name === attribute) {
          path.remove();
        }
      }
    }
  };
}
