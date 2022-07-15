import { Controller, Get, HttpStatus, NotFoundException, Param, Query, Res } from '@nestjs/common';
import { Producto } from './entity/producto.entity';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    constructor(private readonly productoService: ProductoService) {}

    @Get()
    obtenerProductosxTipo(@Query('genero') genero: string, @Query('tipo') tipo: string) {
        return this.productoService.obtenerProductosxTipo(genero, tipo);
    }

    @Get(':id')
    async obtenerProducto(@Res() res, @Param('id') idProducto: number): Promise<Producto> {
        const producto =  await this.productoService.obtenerProducto(idProducto);

        if(!producto) throw new NotFoundException('El producto no existe');
        
        return res.status(HttpStatus.OK).json(producto);
    }

    @Get('/busquedaTipo/:genero')
    busquedaTipo(@Param('genero') genero: string) {
        return this.productoService.busquedaTipo(genero);
    }

}
