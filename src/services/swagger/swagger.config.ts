import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeName } from 'swagger-themes';

export class Swagger {
  setup(app) {
    const defaultThemeSwagger = process.env.SWAGGER_THEME || 'dark';
    const theme = new SwaggerTheme();

    const config = new DocumentBuilder()
      .setTitle('Portal')
      .setDescription('Descrição sobre api do Portal')
      .setVersion('3.0')
      .addTag('Portal. Aqui vamos gerenciar as rotas da aplicação Portal')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        'access-token',
      )
      .build();

    const optionsTheme = {
      explorer: true,
      customCss: theme.getBuffer(defaultThemeSwagger as SwaggerThemeName),
    };

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, optionsTheme);
  }
}
