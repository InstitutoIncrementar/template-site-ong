/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site 100% estático: o build gera a pasta `out/`, que o Netlify publica.
  output: 'export',
  // Sem servidor de otimização de imagens num site estático.
  images: { unoptimized: true },
}

export default nextConfig
