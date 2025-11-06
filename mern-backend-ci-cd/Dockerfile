# syntax=docker/dockerfile:1
FROM node:20-alpine AS base
WORKDIR /app

# Install only production dependencies in the final image
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
