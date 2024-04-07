FROM node:20-slim AS base

# Set the working directory in the container
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies with pnpm
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the Vue.js application
RUN pnpm run build

# Use an Nginx image to serve the built application
FROM nginx:latest

# Copy the built Vue.js application files into Nginx's web server directory
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80
