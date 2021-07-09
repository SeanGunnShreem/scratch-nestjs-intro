import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {MongooseModule} from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost:27017/Product'),
GraphQLModule.forRoot({typePaths: ['./**/**/*.graphql'],
installSubscriptionHandlers: true,})],//MongoDB datebase loc
  /*controllers: [AppController],
  providers: [AppService],*/
  controllers: [],
  providers: [],
})
export class AppModule {}
