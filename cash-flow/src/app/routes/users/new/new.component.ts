import { ToolsService } from './../../../core/shared/forms/tools.service';
import { ValidatorsService } from './../../../core/shared/forms/validators.service';
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

  constructor(public usersService: UsersService, public formBuilder: FormBuilder, public validatorsService: ValidatorsService, public toolsService: ToolsService) { }

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
      date: [this.validatorsService.getDateForControl(this.user.date), [Validators.required]],
    };
    return controls;
  }

  mustShowErrors(controlName: string) {
    return this.toolsService.mustShowErrors(this.userForm, controlName);
  }

  getControl(controlName: string): AbstractControl {
    return this.toolsService.getControl(this.userForm, controlName);
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

  onSubmit() {
    this.user = this.userForm.value;
    this.usersService.saveUser(this.user);
    this.createNewUser();
  }
}
