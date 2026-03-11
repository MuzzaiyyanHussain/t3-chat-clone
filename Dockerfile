# ---------- Stage 1: Dependencies ----------
FROM node:20-slim AS deps

WORKDIR /app

RUN apt-get update && apt-get install -y openssl

COPY package*.json ./

RUN npm install --ignore-scripts


# ---------- Stage 2: Builder ----------
FROM node:20-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y openssl

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npm run build


# ---------- Stage 3: Production ----------
FROM node:20-slim AS runner

WORKDIR /app

RUN apt-get update && apt-get install -y openssl

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

CMD ["npm", "start"]