FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY shopping/package*.json ./shopping/

# Install dependencies for the shopping service
RUN npm install --prefix shopping

# Copy the shopping service code
COPY shopping ./shopping

# Expose the service port
EXPOSE 8003

# Start the service
CMD ["npm", "start", "--prefix", "shopping"]
