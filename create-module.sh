#!/bin/bash

# Get module name from command line argument
MODULE_NAME=$1

# Create module directory
mkdir -p ./src/modules/${MODULE_NAME}/components ./src/modules/${MODULE_NAME}/services

# Create default files
touch ./src/modules/${MODULE_NAME}/index.tsx ./src/modules/${MODULE_NAME}/[id].tsx
touch ./src/modules/${MODULE_NAME}/components/index.tsx
touch ./src/modules/${MODULE_NAME}/services/create${MODULE_NAME}.ts
touch ./src/modules/${MODULE_NAME}/services/update${MODULE_NAME}.ts
touch ./src/modules/${MODULE_NAME}/services/delete${MODULE_NAME}.ts
touch ./src/modules/${MODULE_NAME}/services/get${MODULE_NAME}.ts

# Output success message
echo "Module ${MODULE_NAME} created successfully!"
