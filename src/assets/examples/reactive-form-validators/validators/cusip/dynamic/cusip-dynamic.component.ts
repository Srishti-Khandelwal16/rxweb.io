import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-cusip-dynamic-validator',
    templateUrl: './cusip-dynamic.component.html'
})
export class CusipDynamicValidatorComponent implements OnInit {
    companyInfoFormGroup: FormGroup

				companyNames = [ "Google", "Microsoft",];
	
	
	
	
	
	
	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/validators/cusip/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var companyInfo = { companyName:'', oracleCorporationCusipCode:'', googleIncCusipCode:'', microsoftCorporationCusipCode:'', appleIncCusipCode:'', amazonCorporationCusipCode:'',  }
			this.companyInfoFormGroup = this.formBuilder.group(companyInfo,formBuilderConfiguration);
		})
    }
}
