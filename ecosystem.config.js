module.exports = {
  apps: [
    {
      name: 'controle-vegetal',
      script: 'dist/main.js',
    env: {
      NODE_ENV: 'DEV',
    },
  },
]
};