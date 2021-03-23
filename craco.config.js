const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // Modify stock variables in ant design
              // "@primary-color": "#1DA57A"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
