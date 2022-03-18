

export class Dulce {

    nombre:String;
    tipo: Tipo;
    cantidad:number;
    vendido: number;
    costo:number;

    constructor (nombre: string, tipo:Tipo, cant:number, precio:number){
        this.nombre=nombre
        this.tipo= tipo;
        this.cantidad=cant;
        this.vendido=0;
        this.costo=precio;
    }

    generarFacturar(): string {
        return "hola "+ this.nombre;
    }

    Retirar(vendido:number){
        this.cantidad=this.cantidad-vendido;
        vendido+=vendido;
    }
}

export enum Tipo {Bombones, Chocolate, Gomitas, Chicles, Mentolados, Importados}