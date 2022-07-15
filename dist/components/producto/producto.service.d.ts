import { Repository } from 'typeorm';
import { Producto } from './entity/producto.entity';
export declare class ProductoService {
    private readonly productoRepository;
    constructor(productoRepository: Repository<Producto>);
    obtenerProductosxTipo(genero: string, tipo: string): Promise<Producto[]>;
    obtenerProducto(idProducto: number): Promise<Producto>;
    busquedaTipo(genero: string): Promise<Producto[]>;
}
