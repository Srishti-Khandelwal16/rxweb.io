import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { AddressInfo } from './address-info.model';

@Component({
    selector: 'app-alpha-allowWhiteSpace-template-driven-validation-decorators',
    templateUrl: './alpha-allow-white-space.component.html'
})
export class AlphaAllowWhiteSpaceTemplateDrivenValidationDecoratorsComponent implements OnInit {
    addressinfo: AddressInfo
	
    constructor(
    ) { }

    ngOnInit() {
       this.addressinfo= new AddressInfo()
    }
}
