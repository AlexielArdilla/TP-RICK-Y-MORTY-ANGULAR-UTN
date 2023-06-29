import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  myForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ["", [Validators.required]],
      apellido: ["", Validators.required],
      email: ["", Validators.required],
      telefono: [""],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  registrarse() {
    console.log(this.myForm.value);
    alert("Registro exitoso");
  }
}
