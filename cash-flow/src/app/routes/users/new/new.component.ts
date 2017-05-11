import { AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from './../data/user.model';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UsersService } from './../data/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jfr-new',
  templateUrl: './new.component.html',
  styles: []
})

export class NewComponent implements OnInit {
  public user : User;
  public userForm: FormGroup;

  constructor(public usersService: UsersService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createNewUser();
    this.buildForm();
  }

  createNewUser() {
    this.user = this.usersService.newUser();
  }
  
  buildForm() {
    const controls = this.initializeControls();
    this.userForm = this.formBuilder.group(controls);
  }

  initializeControls() {
    const controls = {
      description: [this.user.description, Validators.required],
      name: [this.user.name, [Validators.required]],
      date: [this.getDateForControl(this.user.date), [Validators.required]],
    };
    return controls;
  }

  mustShowErrors(controlName: string) {
    let hasErrorsToShow = false;
    const control = this.getControl(controlName);
    const hasChanges = control.dirty || control.touched;
    if (hasChanges) {
      hasErrorsToShow = control.errors != null;
    }
    return hasErrorsToShow;
  }

  getControl(controlName: string): AbstractControl {
    return this.userForm.controls[controlName];
  }

  getControlErrors(controlName: string): string {
    let controlErrors = "";
    const control = this.getControl(controlName);
    if (control && control.errors) {
      Object.keys(control.errors).forEach(error => {
        controlErrors += error;
      });
    }
    return controlErrors;
  }

  positiveNumber(control: AbstractControl) {
    let error = null;
    if (control.value !== undefined && (isNaN(control.value) || control.value < 0)) {
      error = { 'positive': 'Must be a positive number' };
    }
    return error;
  }

  getDateForControl(date: Date): string {
    return date.toISOString().substring(0, 10)
  }

  onSubmit() {
    this.user = this.userForm.value;
    this.usersService.saveUser(this.user);
    this.createNewUser();
  }
}
