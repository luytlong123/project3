export const config = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  aws_access_key_id: "AKIASTNO3K4OONASVBZQ",
  aws_secret_access_key: "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",
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
