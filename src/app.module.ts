import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './components/producto/entity/producto.entity';

import { ProductoModule } from './components/producto/producto.module';

@Module({
  imports: [ProductoModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ec2-3-217-14-181.compute-1.amazonaws.com',
    port: 5432,
    username: 'dldgtwurfjgvqg',
    password: 'ad444505e033da3763c1acf89d1870b5b71b768399f44867f9404b13462a1532',
    database: 'd2p3bde51uejl1',
    entities: [Producto],
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
