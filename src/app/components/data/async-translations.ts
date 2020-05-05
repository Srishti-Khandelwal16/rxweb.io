export const ASYNC_TRANSLATIONS = [
    {
        "name": "src",
        "type": "folder",
        "exampleType": "async",
        "childrens": [
            {
                "name": "app",
                "type": "folder",
                "childrens": [
                    {
                        "name": "global",
                        "type": "folder",
                        "childrens": [
                            {
                                "name": "global.component.ts",
                                "type": "file",
                                "active": true,
                                "contentType": 'typescript',
                                "ref": "async",
                                "content": "import { Component } from \"@angular\/core\";\r\nimport { HttpClient } from \"@angular\/common\/http\";\r\nimport { translate,RxTranslateModule,RxTranslation,asyncTranslate } from \"@rxweb\/translate\";\r\nimport { CountryService } from \".\/country.service\";\r\n\r\n@Component({\r\n  templateUrl: \".\/global.component.html\"\r\n})\r\nexport class GlobalComponent {\r\n\r\n  @translate()\r\n  global: { [key: string]: any };\r\n\r\n  @asyncTranslate({\r\n    serviceModel: CountryService,\r\n    serviceMethod: CountryService.prototype.get\r\n  })\r\n  countries: any;\r\n  \r\n}"
                            },
                            {
                                "name": "global.component.html",
                                "type": "file",
                                "ref": "async",
                                "contentType": 'html',
                                "content": "<h4 class=\"example-title\">{{global.asyncTitle}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5 form-font-size\">\r\n  <div>\r\n    <select name=\"control\" class=\"form-control\">\r\n      <option *ngFor=\"let item of countries | async\" [value]=\"item.countryId\">{{item.countryName}}<\/option>\r\n    <\/select>\r\n  <\/div>\r\n<\/form>"
                            },
                            {
                                "name": "country.service.ts",
                                "type": "file",
                                "ref": "async",
                                "contentType": 'typescript',
                                "content": "import { translate, RxTranslateModule, RxTranslation } from \"@rxweb\/translate\";\r\nimport { HttpClient } from \"@angular\/common\/http\";\r\nimport { Injectable } from \"@angular\/core\";\r\n\r\n@Injectable({\r\n  providedIn: 'root',\r\n})\r\nexport class CountryService {\r\n\r\n  constructor(private http: HttpClient, private rxTranslation: RxTranslation) {}\r\n\r\n  get() { \r\n    return this.http.get(\"assets\/i18n\/\" + this.rxTranslation.language + \"\/countries.\" + this.rxTranslation.language + \".json\")\r\n  }\r\n}\r\n\r\n\/\/ Register this CountryService provider in the providers property in your root module."
                            }
                        ]
                    }
                ]
            },
            {
                "name": "assets",
                "type": "folder",
                "childrens": [
                    {
                        "name": "i18n",
                        "type": "folder",
                        "childrens": [{
                            "name": "en",
                            "type": "folder",
                            "childrens": [
                                {
                                    "name": "countries.en.json",
                                    "type": "file",
                                    "contentType": 'json',
                                    "ref": "async",
                                    "content": "[\r\n    {\r\n      \"countryName\": \"India\",\r\n      \"countryId\": 1\r\n    },\r\n    {\r\n      \"countryName\": \"Japan\",\r\n      \"countryId\": 2\r\n    },\r\n    {\r\n      \"countryName\": \"China\",\r\n      \"countryId\": 3\r\n    },\r\n    {\r\n      \"countryName\": \"Singapore\",\r\n      \"countryId\": 4\r\n    }\r\n  ]"
                                },
                                {
                                    "name": "global.en.json",
                                    "type": "file",
                                    "contentType": 'json',
                                    "ref": "async",
                                    "content": "{\r\n  \"asyncTitle\": \"Async Translation\"\r\n}"
                                }
                            ]
                        }, {
                            "name": "fr",
                            "type": "folder",
                            "childrens": [
                                {
                                    "name": "countries.fr.json",
                                    "type": "file",
                                    "contentType": 'json',
                                    "ref": "async",
                                    "content": "[\r\n    {\r\n      \"countryName\": \"Inde\",\r\n      \"countryId\": 1\r\n    },\r\n    {\r\n      \"countryName\": \"Japon\",\r\n      \"countryId\": 2\r\n    },\r\n    {\r\n      \"countryName\": \"Chine\",\r\n      \"countryId\": 3\r\n    },\r\n    {\r\n      \"countryName\": \"Singapour\",\r\n      \"countryId\": 4\r\n    }\r\n  ]"

                                },
                                {
                                    "name": "global.fr.json",
                                    "type": "file",
                                    "contentType": 'json',
                                    "ref": "async",
                                    "content": "{\r\n  \"asyncTitle\": \"Traduction de l'async\"\r\n}"
                                }
                            ]
                        }
                        ]
                    }
                ]
            },
            {
                "name": "rxweb.module.ts",
                "contentType": 'typescript',
                "type": "file", "ref": "async",
                "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
            }
        ]
    }
]