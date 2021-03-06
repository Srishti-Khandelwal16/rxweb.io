import { MinDateCompleteComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/complete/min-date-complete.component";
import { MinDateCompleteTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minDate/complete/min-date-complete.component";
import { MinDateCompleteTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minDate/complete/min-date-complete.component";
import { MinDateCompleteValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/complete/min-date-complete.component";
import { MinDateValueComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/value/min-date-value.component";
import { MinDateValueTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minDate/value/min-date-value.component";
import { MinDateValueTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minDate/value/min-date-value.component";
import { MinDateValueValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/value/min-date-value.component";
import { MinDateConditionalExpressionComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/conditionalExpression/min-date-conditional-expression.component";
import { MinDateConditionalExpressionTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minDate/conditionalExpression/min-date-conditional-expression.component";
import { MinDateConditionalExpressionTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minDate/conditionalExpression/min-date-conditional-expression.component";
import { MinDateConditionalExpressionValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/conditionalExpression/min-date-conditional-expression.component";
import { MinDateMessageComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/message/min-date-message.component";
import { MinDateMessageTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minDate/message/min-date-message.component";
import { MinDateMessageTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minDate/message/min-date-message.component";
import { MinDateMessageValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/message/min-date-message.component";
import { MinDateFieldNameComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/fieldName/min-date-field-name.component";
import { MinDateFieldNameTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minDate/fieldName/min-date-field-name.component";
import { MinDateFieldNameTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minDate/fieldName/min-date-field-name.component";
import { MinDateFieldNameValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/fieldName/min-date-field-name.component";
import { MinDateOperatorComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/operator/min-date-operator.component";
import { MinDateOperatorTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minDate/operator/min-date-operator.component";
import { MinDateOperatorTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minDate/operator/min-date-operator.component";
import { MinDateOperatorValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/operator/min-date-operator.component";
import { MinDateMessageKeyComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/messageKey/min-date-message-key.component";
import { MinDateMessageKeyTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minDate/messageKey/min-date-message-key.component";
import { MinDateMessageKeyTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minDate/messageKey/min-date-message-key.component";
import { MinDateMessageKeyValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/messageKey/min-date-message-key.component";
import { MinDateDynamicComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/dynamic/min-date-dynamic.component";
import { MinDateDynamicValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/dynamic/min-date-dynamic.component";
import { MinDateAddComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/add/min-date-add.component";
import { MinDateAddTemplateDrivenValidationDirectivesComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minDate/add/min-date-add.component";
import { MinDateAddTemplateDrivenValidationDecoratorsComponent } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minDate/add/min-date-add.component";
import { MinDateAddValidatorComponent } from "src/assets/examples/reactive-form-validators/validators/minDate/add/min-date-add.component";
import { MinDateEditComponent } from "src/assets/examples/reactive-form-validators/decorators/minDate/edit/min-date-edit.component";

export const MIN_DATE_COMPONENT_EXAMPLE_CONSTANT: { [key: string]: any } = {
	decorators:{
						complete : MinDateCompleteComponent,
						value : MinDateValueComponent,
						conditionalExpression : MinDateConditionalExpressionComponent,
						message : MinDateMessageComponent,
						fieldName : MinDateFieldNameComponent,
						operator : MinDateOperatorComponent,
						messageKey : MinDateMessageKeyComponent,
						dynamic : MinDateDynamicComponent,
						add : MinDateAddComponent,
						edit : MinDateEditComponent,
			  },
	template_driven_validation_directives:{
						complete : MinDateCompleteTemplateDrivenValidationDirectivesComponent,
						value : MinDateValueTemplateDrivenValidationDirectivesComponent,
						conditionalExpression : MinDateConditionalExpressionTemplateDrivenValidationDirectivesComponent,
						message : MinDateMessageTemplateDrivenValidationDirectivesComponent,
						fieldName : MinDateFieldNameTemplateDrivenValidationDirectivesComponent,
						operator : MinDateOperatorTemplateDrivenValidationDirectivesComponent,
						messageKey : MinDateMessageKeyTemplateDrivenValidationDirectivesComponent,
						add : MinDateAddTemplateDrivenValidationDirectivesComponent,
			  },
	template_driven_validation_decorators:{
						complete : MinDateCompleteTemplateDrivenValidationDecoratorsComponent,
						value : MinDateValueTemplateDrivenValidationDecoratorsComponent,
						conditionalExpression : MinDateConditionalExpressionTemplateDrivenValidationDecoratorsComponent,
						message : MinDateMessageTemplateDrivenValidationDecoratorsComponent,
						fieldName : MinDateFieldNameTemplateDrivenValidationDecoratorsComponent,
						operator : MinDateOperatorTemplateDrivenValidationDecoratorsComponent,
						messageKey : MinDateMessageKeyTemplateDrivenValidationDecoratorsComponent,
						add : MinDateAddTemplateDrivenValidationDecoratorsComponent,
			  },
	validators:{
						complete : MinDateCompleteValidatorComponent,
						value : MinDateValueValidatorComponent,
						conditionalExpression : MinDateConditionalExpressionValidatorComponent,
						message : MinDateMessageValidatorComponent,
						fieldName : MinDateFieldNameValidatorComponent,
						operator : MinDateOperatorValidatorComponent,
						messageKey : MinDateMessageKeyValidatorComponent,
						dynamic : MinDateDynamicValidatorComponent,
						add : MinDateAddValidatorComponent,
			  },
}