import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from './controller/producto.controller';
import { Producto } from './entity/producto.entity';
import { ProductoService } from './service/producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
