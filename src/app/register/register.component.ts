import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { User } from "./user";
import { NgxBrazil, NgxBrazilMASKS, NgxBrazilValidators } from "ngx-brazil";
import { CustomValidators } from "ngx-custom-validators";
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from "./generic-form-validation";
import { rangeLength } from "ngx-custom-validators/src/app/range-length/validator";
import { fromEvent, merge, Observable } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styles: ``,
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] | undefined;

  registerForm!: FormGroup;
  user!: User;
  formResult: string = "";

  masks = NgxBrazilMASKS;

  validationMessages: ValidationMessages = {};
  genericValidator: GenericValidator = new GenericValidator(
    this.validationMessages
  );
  displayMessage: DisplayMessage = {};

  constructor(private formBuilder: FormBuilder) {
    this.validationMessages = {
      name: {
        required: "Name is mandatory!",
        rangeLength: "Name must have between 3 and 20 characters",
      },
      cpf: {
        required: "CPF is mandatory!",
        cpf: "Invalid format",
      },
      email: {
        required: "E-mail is mandatory!",
        email: "Invalid e-mail address",
      },
      password: {
        required: "Password is mandatory!",
        rangeLength: "Password must have between 5 and 15 characters",
      },
      confirmPassword: {
        required: "Confirm Password is mandatory!",
        rangeLength: "Confirm Password must have between 5 and 15 characters",
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, CustomValidators.rangeLength([3, 20])]],
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

  ngAfterViewInit(): void {
    if (this.formInputElements) {
      let controlBlurs: Observable<any>[] = this.formInputElements.map(
        (formControl: ElementRef) =>
          fromEvent(formControl.nativeElement, "blur")
      );

      merge(...controlBlurs).subscribe(() => {
        this.displayMessage = this.genericValidator.processarMensagens(
          this.registerForm
        );
      });
    }
  }

  addUser() {
    if (this.registerForm.invalid) return;

    this.user = Object.assign({}, this.user, this.registerForm.value);
    this.formResult = JSON.stringify(this.registerForm.value);
  }
}
