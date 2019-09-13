import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
  input: 'src/button.js',
  external: ['react'],
  output: {
      format: 'cjs',
      name: 'button',
      globals: {
          react: 'React'
      }
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}
export default config