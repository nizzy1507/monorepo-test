/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@todo-liszt/components']);

module.exports = withTM({
  reactStrictMode: true,
});
