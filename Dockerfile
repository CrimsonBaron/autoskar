# Use a Node.js base image with Bun pre-installed
FROM oven/bun:latest as base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and bun.lockb to the working directory
COPY package.json bun.lock ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the React application for production
RUN bun run build


# Start Nginx when the container runs
CMD ["bun", "run", "start"]