# Stage 1: Install Dependencies
FROM oven/bun:latest AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --production=false # Install dev dependencies during build

# Stage 2: Build the Application
FROM oven/bun:latest AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN bun run build # Assuming your build script is named "build"

# Stage 3: Production Image
FROM oven/bun:latest AS production
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --production # Install only production dependencies
COPY --from=builder /app/dist ./dist #Or /app/build, adjust as needed

# Expose the port your app listens on (if necessary)
EXPOSE 3000

# Run the application
CMD ["bun", "run", "start"] #Or just ["bun", "start"]