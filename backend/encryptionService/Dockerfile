FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application files to the container
COPY . .

# Expose the port your Express.js app is listening on (if any)
EXPOSE 3333

# Start your Node.js application when the container starts
CMD ["node", "app.js"]