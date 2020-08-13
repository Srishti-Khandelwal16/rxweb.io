import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-date-dynamic-validator',
    templateUrl: './date-dynamic.component.html'
})
export class DateDynamicValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/validators/date/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var userInfo = { birthDate:'', registrationDate:'', admissionDate:'', enrollmentDate:'', allocationDate:'', confirmationDate:'',  }
			this.userInfoFormGroup = this.formBuilder.group(userInfo,formBuilderConfiguration);
		})
    }
}
