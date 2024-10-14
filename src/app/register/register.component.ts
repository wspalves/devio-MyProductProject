import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { User } from "./user";
import { NgxBrazil, NgxBrazilMASKS, NgxBrazilValidators } from "ngx-brazil";
import { CustomValidators } from "ngx-custom-validators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styles: ``,
})
export class RegisterComponent {
  registerForm!: FormGroup;
  user!: User;
  formResult: string = "";

  masks = NgxBrazilMASKS;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [
        "",
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ],
      cpf: ["", [Validators.required, NgxBrazilValidators.cpf]],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, CustomValidators.rangeLength([6, 15])],
      ],
      confirmPassword: [
        "",
        [Validators.required, CustomValidators.rangeLength([6, 15])],
      ],
    });
  }

  addUser() {
    if (this.registerForm.invalid) return;

    this.user = Object.assign({}, this.user, this.registerForm.value);
    this.formResult = JSON.stringify(this.registerForm.value);
  }
}
