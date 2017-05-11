  https://github.com/angular/angular-cli/wiki

  https://github.com/AgoraBinaria
  https://github.com/AcademiaBinaria
 
 ------------------------------------------------------------------ 
 01-BASE
 
 ng new cash-flow -is -it -p cf -st
 npm i milligram --save
 npm -- run ng g m core/layout --routing
 ng g c core/layout/shell --flat --export
 ng g c core/layout/top-bar
 ng g c core/layout/main-content

 ng serve -o
 npm start
 
 ------------------------------------------------------------------
 02-SPA
 npm start

 // basic
 ng g m pages/home
 ng g c pages/home/home --flat --export
 
 // delegated
 ng g m pages/about --routing
 ng g c pages/about/about --flat

 // lazy
 ng g m pages/operations --routing
 ng g c pages/operations/operations --flat

 // nested
 ng g c pages/operations/new
 ng g c pages/operations/list

------------------------------------------------------------------
03-DATA
 npm start

 ng g s routes/operations/data/operations --spec false

 ng g class routes/operations/data/operation.model 

 ng g c routes/operations/list/row
 
------------------------------------------------------------------ 
 04-REACTIVE
  npm start

 ReactiveForms
 
 ng g m core/shared
 ng g s core/shared/forms/validators --spec false
 ng g s core/shared/forms/tools --spec false
 ng g c core/shared/forms/error
 ng g c core/shared/forms/control

 import { ReactiveFormsModule } from '@angular/forms';

 import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 import { Observable } from 'rxjs/Observable';
 
------------------------------------------------------------------ 
 05-HTTP
  npm start

 ReactiveForms
 
 ng g m core/shared
 ng g s core/shared/forms/validators --spec false
 ng g s core/shared/forms/tools --spec false
 ng g c core/shared/forms/error
 ng g c core/shared/forms/control

 import { ReactiveFormsModule } from '@angular/forms';

 import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 import { Observable } from 'rxjs/Observable';

------------------------------------------------------------------