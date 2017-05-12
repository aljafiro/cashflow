import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './forms/error/error.component';
import { ControlComponent } from './forms/control/control.component';
import { HttpService } from "app/core/shared/http.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [ErrorComponent, ControlComponent],
  providers: [
    {
      provide: Http,
      useClass: HttpService,
      deps: [XHRBackend, RequestOptions]
    }
  ]
})
export class SharedModule { }
