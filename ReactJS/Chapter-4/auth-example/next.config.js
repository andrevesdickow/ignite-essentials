module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
