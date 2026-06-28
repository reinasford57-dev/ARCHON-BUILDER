import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '../../.env') });

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const config = {
  port: Number(process.env.PORT ?? 4000),
  apiUrl: process.env.API_URL ?? 'http://localhost:4000',
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
  appUrl: process.env.APP_URL ?? 'http://localhost:3000',
  jwtAccessSecret: requireEnv('JWT_ACCESS_SECRET'),
  jwtRefreshSecret: requireEnv('JWT_REFRESH_SECRET'),
  jwtEmailSecret: requireEnv('JWT_EMAIL_SECRET'),
  jwtResetSecret: requireEnv('JWT_RESET_SECRET'),
  sessionSecret: requireEnv('SESSION_SECRET'),
  databaseUrl: requireEnv('DATABASE_URL'),
  redisUrl: requireEnv('REDIS_URL'),
  storageProvider: process.env.STORAGE_PROVIDER ?? 'local',
  storageLocalPath: process.env.STORAGE_LOCAL_PATH ?? './storage',
  emailProvider: process.env.EMAIL_PROVIDER ?? 'console',
  emailFrom: process.env.EMAIL_FROM ?? 'archon@builder.com',
  smtpHost: process.env.SMTP_HOST ?? '',
  smtpPort: Number(process.env.SMTP_PORT ?? 587),
  smtpUser: process.env.SMTP_USER ?? '',
  smtpPass: process.env.SMTP_PASS ?? '',
  awsS3Endpoint: process.env.AWS_S3_ENDPOINT ?? '',
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  awsRegion: process.env.AWS_REGION ?? '',
  awsS3Bucket: process.env.AWS_S3_BUCKET ?? '',
  buildTimeout: Number(process.env.BUILD_TIMEOUT ?? 1800),
  buildMemoryLimit: process.env.BUILD_MEMORY_LIMIT ?? '4096m',
  buildCpuLimit: process.env.BUILD_CPU_LIMIT ?? '2',
  allowedOrigins: [process.env.FRONTEND_URL ?? 'http://localhost:3000'],
};
