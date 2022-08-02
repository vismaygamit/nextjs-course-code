const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      eslint: {
        ignoreDuringBuilds: true,
      },
      env: {
        mongodb_username: "vismay",
        mongodb_password: "Tanvi8758116124",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "vismay",
      mongodb_password: "Tanvi8758116124",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
