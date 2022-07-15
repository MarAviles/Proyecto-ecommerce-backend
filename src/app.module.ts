import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './components/producto/entity/producto.entity';

import { ProductoModule } from './components/producto/producto.module';

@Module({
  imports: [ProductoModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Legendary_132206',
    database: 'ecommerce',
    entities: [Producto],
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
