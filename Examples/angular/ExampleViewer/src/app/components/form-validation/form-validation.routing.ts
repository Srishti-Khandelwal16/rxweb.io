import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const FORM_VALIDATION_ROUTES: Routes = [
{
	path:'allOf',
	loadChildren: './allOf/all-of.module#AllOfModule',
},
{
	path:'alpha',
	loadChildren: './alpha/alpha.module#AlphaModule',
},
{
	path:'alphaNumeric',
	loadChildren: './alphaNumeric/alpha-numeric.module#AlphaNumericModule',
},
{
	path:'async',
	loadChildren: './async/async.module#AsyncModule',
},
{
	path:'ascii',
	loadChildren: './ascii/ascii.module#AsciiModule',
},
{
	path:'choice',
	loadChildren: './choice/choice.module#ChoiceModule',
},
{
	path:'compose',
	loadChildren: './compose/compose.module#ComposeModule',
},
{
	path:'compare',
	loadChildren: './compare/compare.module#CompareModule',
},
{
	path:'contains',
	loadChildren: './contains/contains.module#ContainsModule',
},
{
	path:'cusip',
	loadChildren: './cusip/cusip.module#CusipModule',
},
{
	path:'creditCard',
	loadChildren: './creditCard/credit-card.module#CreditCardModule',
},
{
	path:'dataUri',
	loadChildren: './dataUri/data-uri.module#DataUriModule',
},
{
	path:'date',
	loadChildren: './date/date.module#DateModule',
},
{
	path:'different',
	loadChildren: './different/different.module#DifferentModule',
},
{
	path:'digit',
	loadChildren: './digit/digit.module#DigitModule',
},
{
	path:'email',
	loadChildren: './email/email.module#EmailModule',
},
{
	path:'endsWith',
	loadChildren: './endsWith/ends-with.module#EndsWithModule',
},
{
	path:'even',
	loadChildren: './even/even.module#EvenModule',
},
{
	path:'extension',
	loadChildren: './extension/extension.module#ExtensionModule',
},
{
	path:'factor',
	loadChildren: './factor/factor.module#FactorModule',
},
{
	path:'fileSize',
	loadChildren: './fileSize/file-size.module#FileSizeModule',
},
{
	path:'file',
	loadChildren: './file/file.module#FileModule',
},
{
	path:'greaterThanEqualTo',
	loadChildren: './greaterThanEqualTo/greater-than-equal-to.module#GreaterThanEqualToModule',
},
{
	path:'greaterThan',
	loadChildren: './greaterThan/greater-than.module#GreaterThanModule',
},
{
	path:'grid',
	loadChildren: './grid/grid.module#GridModule',
},
{
	path:'hexColor',
	loadChildren: './hexColor/hex-color.module#HexColorModule',
},
{
	path:'ip',
	loadChildren: './ip/ip.module#IpModule',
},
{
	path:'image',
	loadChildren: './image/image.module#ImageModule',
},
{
	path:'json',
	loadChildren: './json/json.module#JsonModule',
},
{
	path:'latitude',
	loadChildren: './latitude/latitude.module#LatitudeModule',
},
{
	path:'latLong',
	loadChildren: './latLong/lat-long.module#LatLongModule',
},
{
	path:'leapYear',
	loadChildren: './leapYear/leap-year.module#LeapYearModule',
},
{
	path:'lessThanEqualTo',
	loadChildren: './lessThanEqualTo/less-than-equal-to.module#LessThanEqualToModule',
},
{
	path:'lessThan',
	loadChildren: './lessThan/less-than.module#LessThanModule',
},
{
	path:'longitude',
	loadChildren: './longitude/longitude.module#LongitudeModule',
},
{
	path:'lowerCase',
	loadChildren: './lowerCase/lower-case.module#LowerCaseModule',
},
{
	path:'mac',
	loadChildren: './mac/mac.module#MacModule',
},
{
	path:'mask',
	loadChildren: './mask/mask.module#MaskModule',
},
{
	path:'maxDate',
	loadChildren: './maxDate/max-date.module#MaxDateModule',
},
{
	path:'maxLength',
	loadChildren: './maxLength/max-length.module#MaxLengthModule',
},
{
	path:'maxNumber',
	loadChildren: './maxNumber/max-number.module#MaxNumberModule',
},
{
	path:'minDate',
	loadChildren: './minDate/min-date.module#MinDateModule',
},
{
	path:'minLength',
	loadChildren: './minLength/min-length.module#MinLengthModule',
},
{
	path:'minNumber',
	loadChildren: './minNumber/min-number.module#MinNumberModule',
},
{
	path:'noneOf',
	loadChildren: './noneOf/none-of.module#NoneOfModule',
},
{
	path:'notEmpty',
	loadChildren: './notEmpty/not-empty.module#NotEmptyModule',
},
{
	path:'numeric',
	loadChildren: './numeric/numeric.module#NumericModule',
},
{
	path:'odd',
	loadChildren: './odd/odd.module#OddModule',
},
{
	path:'oneOf',
	loadChildren: './oneOf/one-of.module#OneOfModule',
},
{
	path:'password',
	loadChildren: './password/password.module#PasswordModule',
},
{
	path:'pattern',
	loadChildren: './pattern/pattern.module#PatternModule',
},
{
	path:'port',
	loadChildren: './port/port.module#PortModule',
},
{
	path:'primeNumber',
	loadChildren: './primeNumber/prime-number.module#PrimeNumberModule',
},
{
	path:'range',
	loadChildren: './range/range.module#RangeModule',
},
{
	path:'rule',
	loadChildren: './rule/rule.module#RuleModule',
},
{
	path:'required',
	loadChildren: './required/required.module#RequiredModule',
},
{
	path:'requiredTrue',
	loadChildren: './requiredTrue/required-true.module#RequiredTrueModule',
},
{
	path:'fileSize',
	loadChildren: './fileSize/file-size.module#FileSizeModule',
},
{
	path:'startsWith',
	loadChildren: './startsWith/starts-with.module#StartsWithModule',
},
{
	path:'time',
	loadChildren: './time/time.module#TimeModule',
},
{
	path:'maxTime',
	loadChildren: './maxTime/max-time.module#MaxTimeModule',
},
{
	path:'minTime',
	loadChildren: './minTime/min-time.module#MinTimeModule',
},
{
	path:'unique',
	loadChildren: './unique/unique.module#UniqueModule',
},
{
	path:'upperCase',
	loadChildren: './upperCase/upper-case.module#UpperCaseModule',
},
{
	path:'url',
	loadChildren: './url/url.module#UrlModule',
},
];
export const FORM_VALIDATION_ROUTING = RouterModule.forChild(FORM_VALIDATION_ROUTES);
