FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

# Set working directory
WORKDIR /workspace

# Copy package files early for caching
COPY package.json package-lock.json ./

# Install the packages defined inside the package json files.
RUN npm install

# Copy rest of the app
COPY . .

CMD ["npm", "run", "dev"]
