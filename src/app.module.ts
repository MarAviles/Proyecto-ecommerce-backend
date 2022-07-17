import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';

config()
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [],
      synchronize: true, // This for development
      autoLoadEntities: true,
    }),
    ProductoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
