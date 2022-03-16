import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigateByUrl('./home')
  }

  cerrarSesion(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}
