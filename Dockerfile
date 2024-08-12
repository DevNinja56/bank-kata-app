# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

COPY tsconfig*.json ./

# Install dependencies
RUN npm install

RUN npm install -g serve

# Copy the rest of the application code
COPY src/ ./src/
COPY public/ ./public/

# Build the application
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start Nginx
CMD ["npm", "start"]
