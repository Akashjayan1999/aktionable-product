#!/bin/bash
npm run build
rm -rf deploy
mkdir deploy
cp -r .next/standalone/* deploy/
cp -r .next/static deploy/.next/static
cp -r public deploy/public 2>/dev/null || true
echo "Deployment package ready in ./deploy"