import {  fileSize, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@fileSize({maxSize:100  ,messageKey:'fileSizeMessageKey' }) 
	excelFile: string;
	
	
}
