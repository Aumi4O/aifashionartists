import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Constrain file tracing to the project directory
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
