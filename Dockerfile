# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install project dependencies
RUN npm install
# Copy the entire project directory to the working directory
COPY . .
# Build the Next.js app
RUN npm run build
# Set the environment variable for production
ENV NODE_ENV=production

# Expose the port on which the app will run (default is 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]