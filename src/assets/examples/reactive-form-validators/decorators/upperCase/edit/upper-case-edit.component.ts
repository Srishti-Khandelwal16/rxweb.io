import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { Location } from './location.model';

@Component({
    selector: 'app-upperCase-edit',
    templateUrl: './upper-case-edit.component.html'
})
export class UpperCaseEditComponent implements OnInit {
    locationFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/decorators/upperCase/edit/location-data.json?v=' + environment.appVersion).subscribe(location => {
            this.locationFormGroup = this.formBuilder.formGroup<Location>(Location,location);
        })
    }
}
