// @ts-check
import NodeSassGlobImporter from "node-sass-glob-importer";
import { cgEndpoint } from "./src/lib/gql/constants.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  sassOptions: {
    importer: NodeSassGlobImporter(),
  },
  async rewrites() {
    return [
      {
        source: "/api/graphql-client",
        destination: cgEndpoint.href, // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
