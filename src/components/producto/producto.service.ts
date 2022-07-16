import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entity/producto.entity';

@Injectable()
export class ProductoService {

    constructor(@InjectRepository(Producto) private readonly productoRepository: Repository<Producto>) {}

    async obtenerProductosxTipo(genero: string, categoria: string) {
        return await this.productoRepository.createQueryBuilder("producto")
                     .where('producto.genero = :g', { g: genero })
                     .andWhere('producto.categoria = :c', { c: categoria })
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
        return await this.productoRepository.createQueryBuilder("p.categoria")
                     .distinctOn(["p.categoria"])
                     .from(Producto, "p")
                     .where('p.genero = :g', { g: genero })
                     .orderBy("p.categoria")
                     .getMany();                  
    }

}
