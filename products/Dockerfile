FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY products/package*.json ./products/

# Install dependencies for the products service
RUN npm install --prefix products

# Copy the products service code
COPY products ./products

# Expose the service port
EXPOSE 8002

# Start the service
CMD ["npm", "start", "--prefix", "products"]
