# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy tsconfig
COPY tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY src/ ./src/

# Build the TypeScript application
RUN npm run build

# Expose 5000 port your app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
