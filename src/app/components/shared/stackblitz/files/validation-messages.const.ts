import { ErrorMessageBindingStrategy } from "@rxweb/reactive-form-validators";

export const VALIDATION_MESSAGES:{[key:string]:any} =  {
    "internationalization": {
        "dateFormat": "dmy",
        "seperator": "/"
      },
      "validationMessage": {
        "allOf": "Please select all options",
        "onlyAlpha": "Only alphabets are allowed.",
        "zipCode": "Please enter zipcode.",
        "onlyDigit": "Only digit are allowed.",
        "alpha": "Only alphabets are allowed.",
        "alphaNumeric": "Only Alpha Numerics are allowed.",
        "ascii": "Please enter an ascii code",
        "choice": "Please choose options according to minLength and maxLength",
        "contains": "Input does not contain defined string",
        "compare": "Input does not match",
        "creditCard": "Input is not in the credit card format",
        "dataUri": "Please enter a proper data Uri",
        "different": "Please enter different values",
        "digit": "Only digits are allowed",
        "email": "Invalid email format",
        "endsWith": "Please enter a valid input",
        "even": "Please enter an even number",
        "factor": "Please enter valid factors",
        "fileSize": "Please enter a valid size of file",
        "greaterThan": "Input should be greater than pre defined field",
        "greaterThanEqualTo": "Input should be greater than or equal to pre defined field",
        "grid": "Input should be a proper GRid number",
        "hexColor": "Invalid Hex Color format",
        "json": "Invalid json format",
        "latitude": "Please enter a valid latitude",
        "latLong": "Please enter a valid latLong",
        "leapYear": "Please enter a valid leap year",
        "lessThan": "Input should be less than pre defined field",
        "lessThanEqualTo": "Input should be less than or equal to pre defined field",
        "longitude": "Please enter a valid longitude",
        "lowerCase": "Input must be in lower case",
        "mac": "Invalid mac format",
        "maxLength": "Input exceeds the maximum length",
        "maxNumber": "Maximum number is not matched.",
        "maxDate": "Input date exceed the maximum date",
        "minDate": "Input date is less than the minimum date.",
        "minLength": "Input is less than the minimum length",
        "minNumber": "Minimum number is not matched.",
        "noneOf": "You can not select any option",
        "numeric": "Please enter valid number",
        "odd": "Please enter an odd number",
        "oneOf": "You must select any one option",
        "password": "Input does not match the password requirements",
        "pattern": "Input does not match the pattern requirements",
        "port": "Please enter a valid port number",
        "primeNumber": "Please enter a valid prime number",
        "range": "Input exceeds the range",
        "required": "This field is required",
        "startsWith": "Please enter a valid input",
        "time": "Input must be a proper time",
        "upperCase": "Input must be in Uppercase",
        "url": "Input must be an url",
        "extension": "Enter a valid extension.",
        "file": "Enter valid file count",
        "image": "Enter valid file height and width",
        "unique": "Enter unique value in the input",
        "ip": "Enter correct ip address.",
        "compose": "Please enter valid value",
        "maxTime": "Maximum time does not matched",
      "minTime": "Minimum time does not matched",
        "composeMessageKey":"Please enter valid inputs",
        "cusip": "Enter a valid cusip code",
        "date": "Please enter a valid date.",
        "async": "Enter valid value",
        "notEmpty": "You cannot keep this field empty.",
        "allOfMessageKey": "Your selected options must match the requirement of config values",
        "noneOfMessageKey": "Your selected options must not include the values passed in config values",
        "alphaMessageKey": "The input must only be in alphabets",
        "alphaNumericMessageKey": "The input enterred must only be in alpha-numerics",
        "asciiMessageKey": "The input enterred must be in the proper ascii format.",
        "compareMessageKey": "The input enterred must be same as the input in the above field",
        "containsMessageKey": "The input enterred must contain the substring mentioned in config parameter",
        "creditCardMessageKey": "The input enterred must be a card number.",
        "cusipMessageKey": "The input enterred must be a valid cusip code.",
        "dataUriMessageKey": "The input enterred must be a valid data uri.",
        "dateMessageKey": "The input enterred must be in a proper date format.",
        "differentMessageKey": "The input enterred must be different from the input in the above field",
        "digitMessageKey": "The input enterred must be a digit.",
        "emailMessageKey": "The input enterred must be in a proper email format",
        "endsWithMessageKey": "The input enterred must endsWith the substring mentioned in config parameter",
        "evenMessageKey": "The input enterred must be a proper even number",
        "extensionMessageKey": "Uploaded file must be in a proper extension",
        "factorMessageKey": "The input enterred must be a proper factor",
        "fileMessageKey": "Uploaded files must be in the range mentioned in the config parameter",
        "fileSizeMessageKey": "Uploaded files must be of the proper size",
        "greaterThanMessageKey": "The input enterred must be greater than value passed in config parameter.",
        "greaterThanEqualToMessageKey": "The input enterred must be greater than or equal to value passed in config parameter.",
        "gridMessageKey": "The input enterred must be a proper Global Release Identifier",
        "hexColorMessageKey": "The input enterred must be a valid hexcolor",
        "imageMessageKey": "Uploaded files must be of the proper configuration based on config values",
        "ipMessageKey": "The input enterred must be a proper IP",
        "jsonMessageKey": "The input enterred must be in a proper json format",
        "latitudeMessageKey": "The input enterred must be a proper latitude value",
        "latLongMessageKey": "The input enterred must be a proper latitude and longitude value",
        "leapYearMessageKey": "The input enterred must be a proper leap year",
        "lessThanMessageKey": "The input enterred must be less than the field mentioned in config parameter",
        "lessThanEqualToMessageKey": "The input enterred must be less than or equal to the field mentioned in config parameter",
        "longitudeMessageKey": "The input enterred must be a proper longitude value",
        "lowerCaseMessageKey": "The input enterred must be in lowercase only",
        "macMessageKey": "The input enterred must be a proper mac address",
        "maxDateMessageKey": "The input date enterred must be less than the value mentioned in config",
        "minDateMessageKey": "The input date enterred must be greater than the value mentioned in config",
        "maxLengthMessageKey": "The input enterred can have maximum 20 characters",
        "minLengthMessageKey": "The input enterred must have minimum 6 characters",
        "maxNumberMessageKey": "The input enterred must be less than or equal to the config value",
        "minNumberMessageKey": "The input enterred must be greater than or equal to the config value",
        "notEmptyMessageKey": "You must enter input in this field",
        "numericMessageKey": "The input enterred must be according to the config parameters",
        "oddMessageKey": "The input enterred must be a proper odd number",
        "passwordMessageKey": "The input enterred must be a valid password",
        "patternMessageKey": "The input enterred must be according to the regex passed in config parameter",
        "portMessageKey": "The input enterred must be a valid port number",
        "primeNumberMessageKey": "The input enterred must be a valid prime number",
        "rangeMessageKey": "The input enterred must be in a proper range",
        "requiredMessageKey": "You can not leave this field empty",
        "startsWithMessageKey": "The input enterred must startsWith the substring mentioned in config parameter",
        "timeMessageKey": "The input enterred must be a valid time format",
        "upperCaseMessageKey": "The input enterred must be in upper case only",
        "urlMessageKey": "The input enterred must be in a valid url format only",
        "choiceMessageKey": "The input selected must be in the range provided in cofig value",
        "oneOfMessageKey": "Your selected options must include atleast one of the values passed in config values",
        "uniqueMessageKey":"Enterred value must be unique",
        "maxTimeMessageKey": "The input time enterred must be less than the value mentioned in config",
        "minTimeMessageKey": "The input time enterred must be greater than the value mentioned in config"
      },
      "reactiveForm": {
        "errorMessageBindingStrategy": 
          ErrorMessageBindingStrategy.OnSubmit
    }
}