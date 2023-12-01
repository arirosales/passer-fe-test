import { Component } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent {
  tabsList = [
    { name: 'Ocupaciones', action: 'ocupaciones' },
    { name: 'Países', action: 'paises' },
    { name: 'Identificaciones', action: 'identificaciones' },
    // Agrega más pestañas según sea necesario
  ];
  constructor() {
    console.log(this.tabsList);
  }
  // Puedes agregar más opciones o lógica según sea necesario
}