import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { ResultInfo } from './result-info.model';

@Component({
    selector: 'app-minNumber-edit',
    templateUrl: './min-number-edit.component.html'
})
export class MinNumberEditComponent implements OnInit {
    resultInfoFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/decorators/minNumber/edit/result-info-data.json?v=' + environment.appVersion).subscribe(resultInfo => {
            this.resultInfoFormGroup = this.formBuilder.formGroup<ResultInfo>(ResultInfo,resultInfo);
        })
    }
}
