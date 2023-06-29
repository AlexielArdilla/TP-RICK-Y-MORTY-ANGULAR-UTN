import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  misProductos: any = [];

  constructor(private productosService: ProductosService) {

    this.productosService.getAll()
      .subscribe((data: any) => {

        this.misProductos = data.results;
        console.log("Mis productos:", this.misProductos);
      });

  }

}
