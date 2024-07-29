# Base Image
FROM node:22-alpine3.19

# Set working Directory
WORKDIR /app

# Copy packages to working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of application tot he working directory
COPY . .

# Run application
RUN npm run build