import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const GREATER_THAN_LESS_THAN_FORM_ARRAY_ROUTES: Routes = [
{
	path:':typeName/:templateDrivenType',
	component:PageComponent
},
{
	path:':typeName',
	component:PageComponent
}

];
export const GREATER_THAN_LESS_THAN_FORM_ARRAY_ROUTING = RouterModule.forChild(GREATER_THAN_LESS_THAN_FORM_ARRAY_ROUTES);
