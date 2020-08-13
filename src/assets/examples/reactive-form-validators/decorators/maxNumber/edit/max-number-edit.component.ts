import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { SubjectDetails } from './subject-details.model';

@Component({
    selector: 'app-maxNumber-edit',
    templateUrl: './max-number-edit.component.html'
})
export class MaxNumberEditComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/decorators/maxNumber/edit/subject-details-data.json?v=' + environment.appVersion).subscribe(subjectDetails => {
            this.subjectDetailsFormGroup = this.formBuilder.formGroup<SubjectDetails>(SubjectDetails,subjectDetails);
        })
    }
}
