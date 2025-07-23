# 1. Base Image
FROM node:20-alpine

# 2. Set Working Directory
WORKDIR /app

# 3. Install pnpm
RUN npm install -g pnpm

# 4. Copy package manifests
COPY package.json pnpm-lock.yaml ./

# 5. Install Dependencies
RUN pnpm install

# 6. Copy application code
COPY . .

# 7. Expose port
EXPOSE 3000

# 8. Start the app
CMD ["pnpm", "dev"] 