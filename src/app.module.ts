import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './components/producto/entity/producto.entity';

import { ProductoModule } from './components/producto/producto.module';

@Module({
  imports: [ProductoModule, ConfigModule.forRoot(), TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // This for development
      autoLoadEntities: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
