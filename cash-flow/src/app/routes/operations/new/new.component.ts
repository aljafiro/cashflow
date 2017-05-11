import { ToolsService } from './../../../core/shared/forms/tools.service';
import { ValidatorsService } from './../../../core/shared/forms/validators.service';
import { Operation } from './../data/operation.model';
import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'jfr-new',
  templateUrl: './new.component.html',
  styles: []
})

export class NewComponent implements OnInit {
  public operation : Operation;
  public operationForm: FormGroup;

  constructor(public operationsService: OperationsService, public formBuilder: FormBuilder, public validatorsService: ValidatorsService, public toolsService: ToolsService) { }

  ngOnInit() {
    this.createNewOperation();
    this.buildForm();
  }

  createNewOperation() {
    this.operation = this.operationsService.newOperation();
  }
  
  buildForm() {
    const controls = this.initializeControls();
    this.operationForm = this.formBuilder.group(controls);
  }

  initializeControls() {
    const controls = {
      description: [this.operation.description, Validators.required],
      amount: [this.operation.amount, [Validators.required, this.validatorsService.positiveNumber]],
      date: [this.validatorsService.getDateForControl(this.operation.date), [Validators.required]],
    };
    return controls;
  }

  mustShowErrors(controlName: string) {
    return this.toolsService.mustShowErrors(this.operationForm, controlName);
  }

  getControl(controlName: string): AbstractControl {
    return this.toolsService.getControl(this.operationForm, controlName);
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
    this.operation = this.operationForm.value;
    this.operationsService.saveOperation(this.operation);
    this.createNewOperation();
  }
}
