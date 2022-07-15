"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./entity/producto.entity");
let ProductoService = class ProductoService {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async obtenerProductosxTipo(genero, tipo) {
        return await this.productoRepository.createQueryBuilder("producto")
            .where('producto.genero = :g', { g: genero })
            .andWhere('producto.tipo = :t', { t: tipo })
            .getMany();
    }
    async obtenerProducto(idProducto) {
        const producto = await this.productoRepository.findOneById(idProducto);
        if (!producto) {
            throw new common_1.NotFoundException("El producto no existe");
        }
        return producto;
    }
    async busquedaTipo(genero) {
        return await this.productoRepository.createQueryBuilder("p.tipo")
            .distinctOn(["p.tipo"])
            .from(producto_entity_1.Producto, "p")
            .where('p.genero = :g', { g: genero })
            .orderBy("p.tipo")
            .getMany();
    }
};
ProductoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map