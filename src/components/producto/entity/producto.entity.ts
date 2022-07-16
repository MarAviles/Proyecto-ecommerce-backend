import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'productos'})
export class Producto {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombre: string;

    @Column()
    imagen: string;

    @Column()
    descripcion: string;

    @Column()
    stock: number;

    @Column()
    precio: number; 

    @Column()
    categoria: string;

    @Column()
    genero: string;
}