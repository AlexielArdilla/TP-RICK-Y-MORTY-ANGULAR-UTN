import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myLogin: FormGroup
  constructor(private fb: FormBuilder) {
    this.myLogin = this.fb.group({
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  loguearse() {
    console.log(this.myLogin.value);
    alert("Login exitoso");
  }

}
