import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
