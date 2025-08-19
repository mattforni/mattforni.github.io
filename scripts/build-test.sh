#!/bin/bash

echo "🧪 Testing build process..."
echo ""

# Clean previous build
echo "📁 Cleaning previous build..."
rm -rf build/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Build successful! Build directory created."
    echo "📊 Build size: $(du -sh build | cut -f1)"
    echo ""
    echo "🚀 Ready to deploy! Push to main branch to trigger GitHub Actions."
else
    echo "❌ Build failed!"
    exit 1
fi
