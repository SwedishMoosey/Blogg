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

# Build application
RUN npm run build

# Start application
ENV HOST=0.0.0.0 PORT=80 NODE_ENV=production
CMD ["npx", "next", "start"]