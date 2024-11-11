# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR '/app'

# Copy the entire application to the working directory
COPY . .

# Install app dependencies
RUN npm install

# Expose the port on which the app will run (default for React is 3000)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]