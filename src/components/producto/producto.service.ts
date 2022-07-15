import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entity/producto.entity';

@Injectable()
export class ProductoService {

    constructor(@InjectRepository(Producto) private readonly productoRepository: Repository<Producto>) {}

    async obtenerProductosxTipo(genero: string, tipo: string) {
        return await this.productoRepository.createQueryBuilder("producto")
                     .where('producto.genero = :g', { g: genero })
                     .andWhere('producto.tipo = :t', { t: tipo })
                     .getMany();
    }

    async obtenerProducto(idProducto: number): Promise<Producto> {
        const producto =  await this.productoRepository.findOneById(idProducto);
        
        if(!producto){
            throw new NotFoundException("El producto no existe");
        }
              
        return producto;
    }

    async busquedaTipo(genero: string){  
        return await this.productoRepository.createQueryBuilder("p.tipo")
                     .distinctOn(["p.tipo"])
                     .from(Producto, "p")
                     .where('p.genero = :g', { g: genero })
                     .orderBy("p.tipo")
                     .getMany();                  
    }

}
