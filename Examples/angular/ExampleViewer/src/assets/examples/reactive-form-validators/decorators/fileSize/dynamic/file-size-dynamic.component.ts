import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormBuilderConfiguration,} from '@rxweb/reactive-form-validators';

import { UserInfo } from './user-info.model';

@Component({
    selector: 'app-fileSize-dynamic',
    templateUrl: './file-size-dynamic.component.html'
})
export class FileSizeDynamicComponent implements OnInit {
    userInfoFormGroup: FormGroup
				fileTypes = [ "Picture", "Document",];

    constructor(
        private formBuilder: RxFormBuilder,private http: HttpClient    ) { }

    ngOnInit() {
        let userInfo = new UserInfo();
        let formBuilderConfiguration = new FormBuilderConfiguration();
		this.http.get('https://rxwebioassets.blob.core.windows.net/$web/examples/reactive-form-validators/decorators/fileSize/dynamic/dynamic.json?v=' + environment.appVersion).subscribe(dynamic => {
            formBuilderConfiguration.dynamicValidation = JSON.parse(JSON.stringify(dynamic));
			this.userInfoFormGroup = this.formBuilder.formGroup(userInfo,formBuilderConfiguration);
        })
    }
}
