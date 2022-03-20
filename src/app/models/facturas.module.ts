import { Dulce } from "./candy.model";

export class Facturas {

    id:number;
    persona: String;
    pedido:Dulce[]=[];
    fecha:Date;
    total:number;


    constructor (nombre:String,num:number){
        this.persona=nombre;
        this.id= num;
        let fecha = new Date();
    }

    agregar(dulce:Dulce){
        this.pedido.push(dulce);
    }

    setTotal(goukei:number){
        this.total=goukei;
    }
}