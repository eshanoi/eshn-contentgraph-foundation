// @ts-check
import NodeSassGlobImporter from 'node-sass-glob-importer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    importer: NodeSassGlobImporter(),
  },
}

export default nextConfig
