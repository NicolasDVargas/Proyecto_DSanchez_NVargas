import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Facturas } from 'src/app/models/facturas.module';

@Component({
  selector: 'app-la-factura',
  templateUrl: './la-factura.component.html',
  styleUrls: ['./la-factura.component.css']
})
export class LaFacturaComponent implements OnInit {

  @Input('value') value:Facturas;
  @Output() valorEnvio :EventEmitter <string>= new EventEmitter<string>();
  public factura : Facturas;
  constructor(public rout:Router) { }

  ngOnInit(): void {
  }

  recibirFactura(facturaR:Facturas){
    this.factura=facturaR;
  }

  volver(){
    this.rout.navigateByUrl("./verFacts")
  }
}
