/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

// Cria o plugin do next-intl
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

// Encadeia os plugins
export default withNextIntl(nextConfig);
