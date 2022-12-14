const path = require('path');

const projectRoot = __dirname;

// store path to workspace root, in our case, one level above /projects
const workspaceRoot = path.resolve(projectRoot, '../../');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },

  // watch not only our mobile folder, but also root's folders
  // this will include @common
  watchFolders: [path.resolve(__dirname, workspaceRoot)],
  resolver: {
    nodeModulesPaths: [
      // Tell metro to resolve modules in /mobile folder
      // and if not found, then try to find modules in workspace
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
    ],
    // And to make thing above work:
    disableHierarchicalLookup: true,
  },
};
