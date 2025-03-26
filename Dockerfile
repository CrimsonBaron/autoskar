# Use a Node.js base image with Bun pre-installed
FROM oven/bun:latest as base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and bun.lockb to the working directory
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the React application for production
RUN bun run build

# Use a lightweight Nginx image for serving the built application
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=base /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]