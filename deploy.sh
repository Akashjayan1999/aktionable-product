#!/bin/bash

# Colors for output
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Building Next.js application...${NC}"
npm run build

echo -e "${YELLOW}Cleaning previous deployment...${NC}"
if [ -d "deploy" ]; then
    rm -rf deploy
fi

echo -e "${YELLOW}Creating deployment package...${NC}"
mkdir -p deploy

# Copy standalone files
cp -r .next/standalone/* deploy/

# Create .next directory in deploy
mkdir -p deploy/.next

# Copy static files
cp -r .next/static deploy/.next/static

# IMPORTANT: Copy the entire .next folder structure for dynamic routes
if [ -d ".next/server" ]; then
    cp -r .next/server deploy/.next/server
fi

# Copy public folder if it exists
if [ -d "public" ]; then
    cp -r public deploy/public
fi

# Copy package.json (needed for dependencies info)
if [ -f "package.json" ]; then
    cp package.json deploy/package.json
fi

# Copy environment file if it exists
if [ -f ".env.local" ]; then
    cp .env.local deploy/.env.local
    echo -e "${GREEN}Copied .env.local to deployment package${NC}"
fi

echo -e "${GREEN}Deployment package ready in ./deploy${NC}"
echo -e "${CYAN}To run: cd deploy && node server.js${NC}"