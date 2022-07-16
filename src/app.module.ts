import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './components/producto/entity/producto.entity';

import { ProductoModule } from './components/producto/producto.module';

@Module({
  imports: [ProductoModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ec2-3-217-14-181.compute-1.amazonaws.com',
    port: 5432,
    username: 'cpiqgpwxgxmqjp',
    password: '9cffcba54244496f881342b3473dda500f4ec86d09e45ebc8140a1b095644e70',
    database: 'd4s3lg2c9olatn',
    extra: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    entities: [Producto],
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
