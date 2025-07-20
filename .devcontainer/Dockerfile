FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

# Set working directory
WORKDIR /workspace

# Optional: Copy package files early for caching
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

CMD ["npm", "run", "dev"]
