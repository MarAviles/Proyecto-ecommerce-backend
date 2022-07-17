import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { Res } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Producto } from '../entity/producto.entity';
import { ProductoService } from '../service/producto.service';

@Controller('producto')
export class ProductoController {

    constructor(private readonly productoService: ProductoService) {}

    @Get()
    async obtenerProductos(): Promise<Producto[]> {
    return this.productoService.obtenerProductos();
    }

    @Get('/:obtenerProductosxCategoria')
    obtenerProductosxCategoria(@Query('genero') genero: string, @Query('categoria') categoria: string) {
        return this.productoService.obtenerProductosxCategoria(genero, categoria);
    }

    @Get('/obtenerProducto/:id')
    async obtenerProducto(@Res() res: any, @Param('id') idProducto: number): Promise<Producto> {
        const producto =  await this.productoService.obtenerProducto(idProducto);

        if(!producto) throw new NotFoundException('El producto no existe');
        
        return res.status(HttpStatus.OK).json(producto);
    }

    @Get('/obtenerCategorias/:genero')
    obtenerCategorias(@Param('genero') genero: string) {
        return this.productoService.obtenerCategorias(genero);
    }

}
