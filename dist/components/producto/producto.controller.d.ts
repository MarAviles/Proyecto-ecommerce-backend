import { Producto } from './entity/producto.entity';
import { ProductoService } from './producto.service';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    obtenerProductosxTipo(genero: string, tipo: string): Promise<Producto[]>;
    obtenerProducto(res: any, idProducto: number): Promise<Producto>;
    busquedaTipo(genero: string): Promise<Producto[]>;
}
