import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  producto: any;

  constructor(private activatedRoute: ActivatedRoute,
    private productosService: ProductosService) {

    const id: any = activatedRoute.snapshot.paramMap.get("id");
    console.log("ID", id);
    const producto = this.getProducto(id);
  }

  async getProducto(id: string) {
    this.producto = await this.productosService.getById(id)
      .subscribe((data: any) => {
        this.producto = data;
      });
  }



}
