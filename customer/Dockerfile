FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY customer/package*.json ./customer/

# Install dependencies for the customer service
RUN npm install --prefix customer

# Copy the customer service code
COPY customer ./customer

# Expose the service port
EXPOSE 8001

# Start the service
CMD ["npm", "start", "--prefix", "customer"]
