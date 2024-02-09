const CarritoCompra = require('../index');

describe('Testing class CarritoCompra', ()=>{
    let newCarrito;
    //* automatically creates an instance before running each test
    beforeEach(() => {
        newCarrito = new CarritoCompra();

        let products = [
            {item: 'wine', price: 20, amount: 2},
            {item: 'cheese', price: 10, amount: 3}];

        newCarrito.agregarProducto(products[0]);
        newCarrito.agregarProducto(products[1]);
    });

    it('checks CarritoCompra class exists', ()=>{
        expect(newCarrito).toBeInstanceOf(CarritoCompra);
    });

    it('checks CarritoCompra has the asked methods', ()=>{
        expect(CarritoCompra.prototype).toHaveProperty('agregarProducto');
        expect(CarritoCompra.prototype).toHaveProperty('calcularTotal');
        expect(CarritoCompra.prototype).toHaveProperty('aplicarDescuento');
    });

    it('checks agregarProducto() adds a new product into the array', ()=>{
        expect(newCarrito.carrito).toHaveLength(2);
    });

    it('checks calcularTotal return the correct total purchase', ()=>{
        expect(newCarrito.calcularTotal()).toBe(70);
        //* 50 if you consider the wine added at the beforeEach()
    })
    it('check aplicarDescuento() applies the correct discount', ()=>{
        expect(newCarrito.aplicarDescuento(10)).toBe(63);
    })

})