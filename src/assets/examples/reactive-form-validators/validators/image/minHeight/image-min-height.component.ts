import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-image-minHeight-validator',
    templateUrl: './image-min-height.component.html'
})
export class ImageMinHeightValidatorComponent implements OnInit {
    userInfoFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            voterId:['', RxwebValidators.image({minHeight:10  ,maxHeight:100  ,minWidth:10  ,maxWidth:10 })], 
        });
    }
}
