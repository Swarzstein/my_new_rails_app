module.exports = {
  presets: [
    [
      '@babel/preset-env', // preset-env: https://babeljs.io/docs/en/babel-preset-env
      {
        targets: {
          node: 'current', // node version
        },
      },
    ],
    '@babel/preset-react', // preset-react: https://babeljs.io/docs/en/babel-preset-react
  ],
};