import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToIntDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/toInt/to-int-decorators-extended.module";


import { TO_INT_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/sanitization/toInt/to-int.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { TO_INT_ROUTING } from "src/app/components/sanitization/toInt/to-int.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [TO_INT_ROUTING ,ToIntDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: TO_INT_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ToIntModule { }



