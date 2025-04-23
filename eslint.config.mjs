import config from '@ascendweb/eslint-config/next';

export default [
  {
    ignores: [...config.ignores],
  },
  config,
];
