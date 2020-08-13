import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-startsWith-dynamic-validator',
    templateUrl: './starts-with-dynamic.component.html'
})
export class StartsWithDynamicValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/validators/startsWith/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var user = { name:'', department:'', profession:'', taskId:'', company:'', skill:'',  }
			this.userFormGroup = this.formBuilder.group(user,formBuilderConfiguration);
		})
    }
}
