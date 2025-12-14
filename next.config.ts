import withPWA from 'next-pwa';

const nextConfig = {
  reactCompiler: true,
  turbopack: {},
};

export default withPWA({
  dest: 'public',
})(nextConfig);
