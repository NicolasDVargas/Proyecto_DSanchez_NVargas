import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/models/cliente.model';
import { Facturas } from 'src/app/models/facturas.module';
import { ClienteService } from 'src/app/servicios/clientes.service';
import { LaFacturaComponent } from '../la-factura/la-factura.component';

@Component({
  selector: 'app-ver-facturas',
  templateUrl: './ver-facturas.component.html',
  styleUrls: ['./ver-facturas.component.css']
})
export class VerFacturasComponent implements OnInit {
  @ViewChild(LaFacturaComponent) hijo: LaFacturaComponent;
  public factura : Facturas ;
  public Usuario : cliente = new cliente;
  constructor(public router:Router,public _clienteService: ClienteService) {
    this.Usuario=_clienteService.actual;
    this.factura=_clienteService.actual.factura;
  }

  ngOnInit(): void {
  }

  elegir(factura:Facturas){
    this.hijo.recibirFactura(factura);
    this.router.navigateByUrl("./laFactura");
  }

}
