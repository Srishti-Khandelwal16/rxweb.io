import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const DYNAMIC_COMPONENT_ROUTES: Routes = [
{
	path:'',
	component:PageComponent
}
];
export const DYNAMIC_COMPONENT_ROUTING = RouterModule.forChild(DYNAMIC_COMPONENT_ROUTES);
