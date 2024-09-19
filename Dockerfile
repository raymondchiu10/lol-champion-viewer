# Use the official Node.js image as the base image
FROM node:20.9.0-bullseye-slim AS development

# Set the working directory inside the container
WORKDIR /app

# Copy dependency definitions
COPY package*.json .

# Install dependencies
RUN npm i --silent

# Get all the code needed to run the app
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["npm", "run", "dev"]
