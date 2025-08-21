# Build stage
FROM node:20-alpine AS build

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Install a simple static file server to serve the built app
RUN npm install -g serve

WORKDIR /app

# Copy build output from previous stage
COPY --from=build /app/dist ./dist

# Cloud Run sets the PORT environment variable
ENV PORT=8080

# Expose the port for local development
EXPOSE 8080

# Start the server
CMD ["sh", "-c", "serve -s dist -l $PORT"]
