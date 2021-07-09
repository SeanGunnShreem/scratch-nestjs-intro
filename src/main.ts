import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {HttpExceptionFilter} from './products/Utilities/Filters/http-exception.filter';
import {ValidationExceptionFilter} from './products/Utilities/Filters/validation-exception.filter';
import {ValidationPipe} from './products/Utilities/Pipes/validation.pipe';
async function bootstrap() {
//  const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets('public');
  app.setBaseViewsDir('views');
  /*app.useStaticAssets(join(__dirname), '..', 'public');
  app.setBaseViewsDir(join(__dirname), '..', 'views');*/
  //app.setViewEngine('pug');
  app.setViewEngine('hbs');
  //Filters/Http execptions
  app.useGlobalFilters(new ValidationExceptionFilter());
  //Pipes validation
  app.useGlobalPipes(new ValidationPipe());

  //Swagger
  const swaggerConfig = new DocumentBuilder()
  .setTitle('Product API')
  .setDescription('Product API CRUD/Validation')
  .setVersion('1.0')
  .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, doc);

  await app.listen(3000);
}
bootstrap();
