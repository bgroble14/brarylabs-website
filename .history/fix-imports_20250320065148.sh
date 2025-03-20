#!/bin/bash

# Fix import paths in UI components
find src/components/ui -type f -name "*.tsx" -exec sed -i '' 's|@/lib/utils|../../lib/utils|g' {} \;
find src/components/ui -type f -name "*.tsx" -exec sed -i '' 's|@/components/ui/|../|g' {} \;
find src/components/ui -type f -name "*.tsx" -exec sed -i '' 's|@/hooks/use-toast|../../hooks/use-toast|g' {} \;

echo "Import paths fixed" 