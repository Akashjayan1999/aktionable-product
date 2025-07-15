import type { NextConfig } from 'next';

const routesInfo: Record<string, string[]> = {
  contraktai: ["projects", "ai-lawyer", "requests", "create-contraktai", "legal-document-creation"],
  adoptiq: ["projects", "chats", "actionable-bot", "create-projects"],
  medusaai: ["projects"]
};

const nextConfig: NextConfig = {
  async rewrites() {
    const rewrites: { source: string; destination: string }[] = [];
    
    // Allow valid routes and their sub-paths
    for (const [module, items] of Object.entries(routesInfo)) {
      for (const item of items) {
        rewrites.push({
          source: `/${module}/${item}/:path*`,
          destination: `/${module}/${item}/:path*`
        });
      }
    }
    
    // Catch invalid routes
    for (const module of Object.keys(routesInfo)) {
      rewrites.push({
        source: `/${module}/:path*`,
        destination: '/404'
      });
    }
    
    return rewrites;
  },
  output: "standalone",
};

export default nextConfig;
