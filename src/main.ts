import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import {HttpExceptionFilter} from './products/Utilities/Filters/http-exception.filter';
import {ValidationExceptionFilter} from './products/Utilities/Filters/validation-exception.filter';
import {ValidationPipe} from './products/Utilities/Pipes/validation.pipe';
async function bootstrap() {
//  const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname), '..', 'public');
  app.setBaseViewsDir(join(__dirname), '..', 'views');
  //app.setViewEngine('pug');
  app.setViewEngine('hbs');
  
  app.useGlobalFilters(new ValidationExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
