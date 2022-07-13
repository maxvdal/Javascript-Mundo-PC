class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

   get tipoEntrada(){
       return this._tipoEntrada;
   } 
   set tipoEntrada(tipoEntrada) {
       this._tipoEntrada = tipoEntrada;
   }

   get marca(){
       return this._marca;
   }
   set marca(marca){
       this._marca = marca;
   }
}



class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `Teclado: ${this._idTeclado} [Entrada ${this._tipoEntrada}] [Marca ${this._marca}]`;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `Raton: ${this._idRaton} [Entrada ${this._tipoEntrada}] [Marca ${this._marca}]`;
    }
}

class Monitor{

    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    
    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: ${this._idMonitor} [Marca ${this._marca}] [Tamaño ${this._tamaño}]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora= ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `Número ${this._idComputadora} \n Nombre: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`
    }
}


class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = [];
    }
    
    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadora.push(computadora);
    }
    
    mostrarOrden() {
        let computadorasOrden = '';
        for (let computadora of this._computadora){
            computadorasOrden += `\n ${computadora}`;
            }
        console.log(`Orden Número ${this._idOrden} \n Computadoras: ${computadorasOrden}`);
        }
    }

let monitor1 = new Monitor('Samsung', '40 pulgadas');
let teclado1 = new Teclado('USB', 'Razer');
let raton1 = new Raton('Blutu', 'Logitech');

let monitor2 = new Monitor('LG', '35 pulgadas');
let teclado2 = new Teclado('Cable', 'Genius');
let raton2 = new Raton('Cable', 'Genius');

let monitor3 = new Monitor('Philips', '24 pulgadas');
let teclado3 = new Teclado('Cable', 'Razer');
let raton3 = new Raton('Cable', 'Logitech');

let computadora1 = new Computadora('Gamer', monitor1, teclado1, raton1);
let computadora2 = new Computadora('Maxi', monitor2, teclado2, raton2);
let computadora3 = new Computadora('Trabajo', monitor3, teclado3, raton3);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();