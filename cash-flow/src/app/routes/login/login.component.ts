import { FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-login',
  template: `
    <form [formGroup]="loginForm"
        (ngSubmit)="onSubmit()"
        class="container">
    <section name="email-control">
      <label for="email">Email:</label>
      <input formControlName="email"
             type="email" />
      <small *ngIf="loginForm.get('email').invalid"
             class="float-right">
             email is required
      </small>
    </section>
    <section name="password-control">
      <label for="password">Password:</label>
      <input formControlName="password"
             type="password" />
      <small *ngIf="loginForm.get('password').invalid"
             class="float-right">
             password is required
      </small>
    </section>
    <button type="submit"
            [disabled]="loginForm.invalid">Log In</button>
    </form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup

  constructor(public http: Http, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.http
      .post('pub/usuarios', credentials)
      .subscribe(r => {
        const token = r.json();
        localStorage.setItem('token', token);
      });
  }
}
