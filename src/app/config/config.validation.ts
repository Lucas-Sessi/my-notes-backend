// src/config/config.validation.ts
import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().required(),

  HABILITAR_SWAGGER: Joi.boolean().required(),

  URL_CORS: Joi.string().required(),

  JWT_SECRET: Joi.string().required(),
  JWT_TOKEN_EXPIRATION: Joi.string().required(),

  DATABASE_URL: Joi.string().required(),

  // UPLOAD_DIR: Joi.string().required(),
});
