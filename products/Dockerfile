FROM node:16

# Set the working directory inside the container
WORKDIR /app/products

# Copy only the package.json first (best practice to cache dependencies separately)
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the service
EXPOSE 8002

# Start the application
CMD ["npm", "start"]
