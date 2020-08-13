import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { AttandanceDetail } from './attandance-detail.model';

@Component({
    selector: 'app-time-edit',
    templateUrl: './time-edit.component.html'
})
export class TimeEditComponent implements OnInit {
    attandanceDetailFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/decorators/time/edit/attandance-detail-data.json?v=' + environment.appVersion).subscribe(attandanceDetail => {
            this.attandanceDetailFormGroup = this.formBuilder.formGroup<AttandanceDetail>(AttandanceDetail,attandanceDetail);
        })
    }
}
