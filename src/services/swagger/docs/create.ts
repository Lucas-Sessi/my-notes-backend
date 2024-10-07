import { HttpStatus } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiHeader,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function createApiDecorator(
  apiBodyDto: any,
  ApiResponseEntity: any,
): MethodDecorator {
  const decorators = [
    ApiBearerAuth('access-token'),
    ApiBody({ type: apiBodyDto }),
    ApiResponse({ type: ApiResponseEntity, status: HttpStatus.CREATED }),
    ApiUnauthorizedResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Unauthorized',
              },
            },
          },
        },
      },
    }),
    ApiBadRequestResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Bad Request',
              },
            },
          },
        },
      },
    }),
    ApiConflictResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'This user already exists!',
              },
            },
          },
        },
      },
    }),
    ApiNotFoundResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Not Found',
              },
            },
          },
        },
      },
    }),
    ApiInternalServerErrorResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Internal Server Error',
              },
            },
          },
        },
      },
    }),
  ];

  return (
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    for (const decorator of decorators) {
      decorator(target, propertyKey, descriptor);
    }
  };
}

export function createApiDecoratorPublic(
  apiBodyDto: any,
  ApiResponseEntity: any,
): MethodDecorator {
  const decorators = [
    ApiBody({ type: apiBodyDto }),
    ApiResponse({ type: ApiResponseEntity, status: HttpStatus.CREATED }),
    ApiUnauthorizedResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Unauthorized',
              },
            },
          },
        },
      },
    }),
    ApiBadRequestResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Bad Request',
              },
            },
          },
        },
      },
    }),
    ApiConflictResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'This user already exists!',
              },
            },
          },
        },
      },
    }),
    ApiNotFoundResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Not Found',
              },
            },
          },
        },
      },
    }),
    ApiInternalServerErrorResponse({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Internal Server Error',
              },
            },
          },
        },
      },
    }),
  ];

  return (
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    for (const decorator of decorators) {
      decorator(target, propertyKey, descriptor);
    }
  };
}
