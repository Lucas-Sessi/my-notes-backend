// src/config/config.validation.ts
import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().required(),

  HABILITAR_SWAGGER: Joi.boolean().required(),

  DATABASE_SISTEMAS_HOST: Joi.string().required(),
  DATABASE_SISTEMAS_PORT: Joi.number().default(3306),
  DATABASE_SISTEMAS_USER: Joi.string().required(),
  DATABASE_SISTEMAS_PASSWORD: Joi.string().required(),
  DATABASE_SISTEMAS_NAME: Joi.string().required(),

  DATABASE_ACESSO_HOST: Joi.string().required(),
  DATABASE_ACESSO_PORT: Joi.number().default(3306),
  DATABASE_ACESSO_USER: Joi.string().required(),
  DATABASE_ACESSO_PASSWORD: Joi.string().required(),
  DATABASE_ACESSO_NAME: Joi.string().required(),

  JWT_SECRET: Joi.string().required(),
  JWT_TOKEN_EXPIRATION: Joi.string().required(),

  ID_SISTEMA: Joi.number().required(),

  UPLOAD_DIR: Joi.string().required(),
});
