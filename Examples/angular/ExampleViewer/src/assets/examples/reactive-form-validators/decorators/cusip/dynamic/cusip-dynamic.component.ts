import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration,} from '@rxweb/reactive-form-validators';

import { CompanyInfo } from './company-info.model';

@Component({
    selector: 'app-cusip-dynamic',
    templateUrl: './cusip-dynamic.component.html'
})
export class CusipDynamicComponent implements OnInit {
    companyInfoFormGroup: FormGroup
				companyNames = [ "Google", "Microsoft",];

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        let companyInfo = new CompanyInfo();
        let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/decorators/cusip/dynamic/dynamic.json?v=' + environment.appVersion).subscribe(dynamic => {
            formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			this.companyInfoFormGroup = this.formBuilder.formGroup(companyInfo,formBuilderConfiguration);
        })
    }
}
