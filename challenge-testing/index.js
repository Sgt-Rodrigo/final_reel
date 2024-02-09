class CarritoCompra {
    constructor(carrito = []){
        this.carrito = carrito;
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
    }

    calcularTotal() {
        let total = 0;
        for(let item of this.carrito){
           let subtotal= item.amount * item.price;
            total += subtotal
        }
        return total
    }

    aplicarDescuento(porcentaje) {
        let total = this.calcularTotal();
        let discount = (porcentaje * total) / 100;
        return total - discount
    }


}


module.exports = CarritoCompra;