import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';
import { FormBuilderConfiguration,RxFormBuilder} from '@rxweb/reactive-form-validators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-maxNumber-dynamic-validator',
    templateUrl: './max-number-dynamic.component.html'
})
export class MaxNumberDynamicValidatorComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder , private http: HttpClient )
	{ }

    ngOnInit() {
		let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/validators/maxNumber/dynamic/dynamic.json?v='+environment.appVersion).subscribe(dynamic => {
			formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			var subjectDetails = { subjectCode:'', maximumMarks:'', obtainedMarks:'', passingMarks:'', practicalMarks:'', disciplineMarks:'',  }
			this.subjectDetailsFormGroup = this.formBuilder.group(subjectDetails,formBuilderConfiguration);
		})
    }
}
