FROM node:16

# Set working directory
WORKDIR /app/shopping

# Copy package.json and package-lock.json (if present)
COPY package.json .

# Install dependencies for the shopping service
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the service port
EXPOSE 8003

# Start the service
CMD ["npm", "start"]
