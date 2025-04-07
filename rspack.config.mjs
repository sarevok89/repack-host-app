import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as Repack from '@callstack/repack';
import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default env => {
  const {platform, mode} = env;

  return {
    context: __dirname,
    entry: './index.js',
    resolve: {
      ...Repack.getResolveOptions(),
    },
    // output: {
    //   uniqueName: 'repack-host-app',
    // },
    module: {
      rules: [
        ...Repack.getJsTransformRules(),
        ...Repack.getAssetTransformRules(),
      ],
    },
    plugins: [
      new Repack.RepackPlugin({
        platform,
      }),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'HostApp',
        filename: 'RepackHostApp.container.js.bundle',
        dts: false,
        remotes: {
          // ChildApp: `ChildApp@http://localhost:9000/${platform}/ChildApp.container.js.bundle`,
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '19.0.0',
            eager: true,
          },
          'react-native': {
            singleton: true,
            requiredVersion: '0.78.2',
            eager: true,
          },
          '@react-navigation/native': {
            singleton: true,
            requiredVersion: '^7.1.5',
            eager: true,
          },
          '@react-navigation/native-stack': {
            singleton: true,
            requiredVersion: '^7.3.9',
            eager: true,
          },
          'react-native-safe-area-context': {
            singleton: true,
            requiredVersion: '^5.3.0',
            eager: true,
          },
          'react-native-screens': {
            singleton: true,
            requiredVersion: '^4.10.0',
            eager: true,
          },
        }
        // shared: Object.fromEntries(
        //   Object.entries(pkg.dependencies).map(([dep, version]) => {
        //     return [
        //       dep,
        //       {singleton: true, eager: true, requiredVersion: version},
        //     ];
        //   }),
        // ),
      }),
      // Supports for new architecture - Hermes can also use JS, it's not a requirement,
      // it will still work the same but it's for performance optimization
      new Repack.plugins.HermesBytecodePlugin({
        enabled: mode === 'production',
        test: /\.(js)?bundle$/,
        exclude: /index.bundle$/,
      }),
    ],
  };
};
