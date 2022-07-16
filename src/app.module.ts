import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './components/producto/entity/producto.entity';

import { ProductoModule } from './components/producto/producto.module';

@Module({
  imports: [ProductoModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ec2-44-197-128-108.compute-1.amazonaws.com',
    port: 5432,
    username: 'gxrqqyyovlswww',
    password: 'b083501040c4b5a78c7c5f79b86c345c3877b9300116b56c8489020e162906bb',
    database: 'd5t8pdtttq8t64',
    entities: [Producto],
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
