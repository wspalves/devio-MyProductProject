import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-register-form-group",
  templateUrl: "./register-form-group.component.html",
  styles: ``,
})
export class RegisterFormGroupComponent implements OnInit {
  registerForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl,
      cpf: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl,
    });
  }

  addUser() {
    let form = this.registerForm.value;
  }
}
