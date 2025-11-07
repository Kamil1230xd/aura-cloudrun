# Use official Node image to build and run the Next.js app for Cloud Run
FROM node:18-slim AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-slim AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=8080
COPY --from=builder /app .
EXPOSE 8080
CMD ["npm","run","start"]
