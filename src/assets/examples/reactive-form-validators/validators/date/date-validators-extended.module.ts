import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { DateCompleteValidatorComponent } from './complete/date-complete.component';
import { DateAllowISODateValidatorComponent } from './allowISODate/date-allow-i-s-o-date.component';
import { DateConditionalExpressionValidatorComponent } from './conditionalExpression/date-conditional-expression.component';
import { DateMessageValidatorComponent } from './message/date-message.component';
import { DateMessageKeyValidatorComponent } from './messageKey/date-message-key.component';
import { DateDynamicValidatorComponent } from './dynamic/date-dynamic.component';
import { DateAddValidatorComponent } from './add/date-add.component';

@NgModule({
  declarations: [
	DateCompleteValidatorComponent,
	DateAllowISODateValidatorComponent,
	DateConditionalExpressionValidatorComponent,
	DateMessageValidatorComponent,
	DateMessageKeyValidatorComponent,
	DateDynamicValidatorComponent,
	DateAddValidatorComponent,
  ],
entryComponents: [
	DateCompleteValidatorComponent,
	DateAllowISODateValidatorComponent,
	DateConditionalExpressionValidatorComponent,
	DateMessageValidatorComponent,
	DateMessageKeyValidatorComponent,
	DateDynamicValidatorComponent,
	DateAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	DateCompleteValidatorComponent,
	DateAllowISODateValidatorComponent,
	DateConditionalExpressionValidatorComponent,
	DateMessageValidatorComponent,
	DateMessageKeyValidatorComponent,
	DateDynamicValidatorComponent,
	DateAddValidatorComponent,
  ],

})
export class  DateValidatorsExtendedModule { }
