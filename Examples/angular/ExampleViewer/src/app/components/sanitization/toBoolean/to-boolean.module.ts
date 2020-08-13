import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToBooleanDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/toBoolean/to-boolean-decorators-extended.module";


import { TO_BOOLEAN_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/toBoolean/to-boolean.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TO_BOOLEAN_ROUTING } from "src/app/components/sanitization/toBoolean/to-boolean.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TO_BOOLEAN_ROUTING ,ToBooleanDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TO_BOOLEAN_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ToBooleanModule { }



