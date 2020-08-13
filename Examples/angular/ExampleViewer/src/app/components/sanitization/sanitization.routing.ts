import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const SANITIZATION_ROUTES: Routes = [
{
	path:'blacklist',
	loadChildren: './blacklist/blacklist.module#BlacklistModule',
},
{
	path:'ltrim',
	loadChildren: './ltrim/ltrim.module#LtrimModule',
},
{
	path:'rtrim',
	loadChildren: './rtrim/rtrim.module#RtrimModule',
},
{
	path:'stripLow',
	loadChildren: './stripLow/strip-low.module#StripLowModule',
},
{
	path:'toBoolean',
	loadChildren: './toBoolean/to-boolean.module#ToBooleanModule',
},
{
	path:'toDate',
	loadChildren: './toDate/to-date.module#ToDateModule',
},
{
	path:'toDouble',
	loadChildren: './toDouble/to-double.module#ToDoubleModule',
},
{
	path:'toFloat',
	loadChildren: './toFloat/to-float.module#ToFloatModule',
},
{
	path:'toInt',
	loadChildren: './toInt/to-int.module#ToIntModule',
},
{
	path:'toString',
	loadChildren: './toString/to-string.module#ToStringModule',
},
{
	path:'trim',
	loadChildren: './trim/trim.module#TrimModule',
},
{
	path:'whitelist',
	loadChildren: './whitelist/whitelist.module#WhitelistModule',
},
{
	path:'escape',
	loadChildren: './escape/escape.module#EscapeModule',
},
{
	path:'sanitize',
	loadChildren: './sanitize/sanitize.module#SanitizeModule',
},
{
	path:'prefix',
	loadChildren: './prefix/prefix.module#PrefixModule',
},
{
	path:'suffix',
	loadChildren: './suffix/suffix.module#SuffixModule',
},
];
export const SANITIZATION_ROUTING = RouterModule.forChild(SANITIZATION_ROUTES);
