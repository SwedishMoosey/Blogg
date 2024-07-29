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

# Install `nodemon` globally to watch for file changes
RUN npm install -g nodemon

# Build application
RUN npm run build

# Start application
ENV HOST=0.0.0.0 PORT=80 NODE_ENV=development
CMD ["npx", "next", "dev"]