FROM node:22-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm exec prisma generate
RUN pnpm run build
EXPOSE 3001
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/infrastructure/http/server.js"]