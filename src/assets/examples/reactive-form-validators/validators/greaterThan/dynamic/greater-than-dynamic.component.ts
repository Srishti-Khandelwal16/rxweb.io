import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-greaterThan-dynamic-validator',
    templateUrl: './greater-than-dynamic.component.html'
})
export class GreaterThanDynamicValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/validators/greaterThan/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var user = { age:'', retiermentAge:'', memberAge:'', voterAge:'', otherAge:'', joiningAge:'',  }
			this.userFormGroup = this.formBuilder.group(user,formBuilderConfiguration);
		})
    }
}
