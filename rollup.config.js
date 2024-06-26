import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';

export default {
  input: 'dist/assets/index.js',
  output: {
    file: 'out/bundle.js',
    format: 'cjs',
    exports: 'named',
  },
  plugins: [
    peerDepsExternal(),
    // typescript({
    //   useTsconfigDeclarationDir: true,
    // }),
    css({ output: 'bundle.css' }),
  ],
};
