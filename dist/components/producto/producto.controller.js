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
exports.ProductoController = void 0;
const common_1 = require("@nestjs/common");
const producto_service_1 = require("./producto.service");
let ProductoController = class ProductoController {
    constructor(productoService) {
        this.productoService = productoService;
    }
    obtenerProductosxTipo(genero, tipo) {
        return this.productoService.obtenerProductosxTipo(genero, tipo);
    }
    async obtenerProducto(res, idProducto) {
        const producto = await this.productoService.obtenerProducto(idProducto);
        if (!producto)
            throw new common_1.NotFoundException('El producto no existe');
        return res.status(common_1.HttpStatus.OK).json(producto);
    }
    busquedaTipo(genero) {
        return this.productoService.busquedaTipo(genero);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('genero')),
    __param(1, (0, common_1.Query)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "obtenerProductosxTipo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "obtenerProducto", null);
__decorate([
    (0, common_1.Get)('/busquedaTipo/:genero'),
    __param(0, (0, common_1.Param)('genero')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "busquedaTipo", null);
ProductoController = __decorate([
    (0, common_1.Controller)('producto'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controller.js.map