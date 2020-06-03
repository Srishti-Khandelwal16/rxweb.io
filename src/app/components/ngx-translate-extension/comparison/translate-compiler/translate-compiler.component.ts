import { OnInit, Component } from '@angular/core';
import * as Diff2Html from 'diff2html';
import * as Diff from 'diff'

@Component({
  templateUrl: './translate-compiler.component.html',
})
export class TranslateCompilerComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "translate-compiler", "title": "translate-compiler", "subLink": null }, { "id": "translate-compiler", "title": "translate-compiler", "subLink": null }];
  outputHtml: string;

  ngOnInit() {
    this.init();
  }

  init() {
      let ngxContent: any = "import { TestBed } from \"@angular\/core\/testing\";\r\nimport { Observable, of } from \"rxjs\";\r\nimport { TranslateCompiler, TranslateFakeCompiler, TranslateLoader, TranslateModule, TranslateService } from \"..\/src\/public_api\";\r\n\r\nlet translations: any = { LOAD: 'This is a test' };\r\n\r\nclass FakeLoader implements TranslateLoader {\r\n    getTranslation(lang: string): Observable<any> {\r\n        return of(translations);\r\n    }\r\n}\r\n\r\ndescribe('TranslateCompiler', () => {\r\n    let translate: TranslateService;\r\n\r\n    describe('with default TranslateFakeCompiler', () => {\r\n        beforeEach(() => {\r\n            TestBed.configureTestingModule({\r\n                imports: [\r\n                    TranslateModule.forRoot({\r\n                        loader: { provide: TranslateLoader, useClass: FakeLoader },\r\n                        compiler: { provide: TranslateCompiler, useClass: TranslateFakeCompiler }\r\n                    })\r\n                ],\r\n            });\r\n            translate = TestBed.get(TranslateService);\r\n\r\n            translate.use('en');\r\n        });\r\n\r\n        it('should use the correct compiler', () => {\r\n            expect(translate).toBeDefined();\r\n            expect(translate.compiler).toBeDefined();\r\n            expect(translate.compiler instanceof TranslateFakeCompiler).toBeTruthy();\r\n        });\r\n\r\n        it('should use the compiler on loading translations', () => {\r\n            translate.get('LOAD').subscribe((res: string) => {\r\n                expect(res).toBe('This is a test');\r\n            });\r\n        });\r\n\r\n        it('should use the compiler on manually adding a translation object', () => {\r\n            translate.setTranslation('en', { 'SET-TRANSLATION': 'A manually added translation' });\r\n            expect(translate.instant('SET-TRANSLATION')).toBe('A manually added translation');\r\n        });\r\n\r\n        it('should use the compiler on manually adding a single translation', () => {\r\n            translate.set('SET', 'Another manually added translation', 'en');\r\n            expect(translate.instant('SET')).toBe('Another manually added translation');\r\n        });\r\n    });\r\n\r\n    describe('with a custom compiler implementation', () => {\r\n        class CustomCompiler implements TranslateCompiler {\r\n            compile(value: string, lang: string): string {\r\n                return value + '|compiled';\r\n            }\r\n\r\n            compileTranslations(translation: any, lang: string): Object {\r\n                return Object.keys(translation).reduce((acc: any, key) => {\r\n                    acc[key] = () => translation[key] + '|compiled';\r\n                    return acc;\r\n                }, {});\r\n            }\r\n        }\r\n\r\n        beforeEach(() => {\r\n            TestBed.configureTestingModule({\r\n                imports: [\r\n                    TranslateModule.forRoot({\r\n                        loader: { provide: TranslateLoader, useClass: FakeLoader },\r\n                        compiler: { provide: TranslateCompiler, useClass: CustomCompiler }\r\n                    })\r\n                ],\r\n            });\r\n            translate = TestBed.get(TranslateService);\r\n\r\n            translate.use('en');\r\n        });\r\n\r\n        it('should use the correct compiler', () => {\r\n            expect(translate).toBeDefined();\r\n            expect(translate.compiler).toBeDefined();\r\n            expect(translate.compiler instanceof CustomCompiler).toBeTruthy();\r\n        });\r\n\r\n        it('should use the compiler on loading translations', () => {\r\n            translate.get('LOAD').subscribe((res: string) => {\r\n                expect(res).toBe('This is a test|compiled');\r\n            });\r\n        });\r\n\r\n        it('should use the compiler on manually adding a translation object', () => {\r\n            translate.setTranslation('en', { 'SET-TRANSLATION': 'A manually added translation' });\r\n            expect(translate.instant('SET-TRANSLATION')).toBe('A manually added translation|compiled');\r\n        });\r\n\r\n        it('should use the compiler on manually adding a single translation', () => {\r\n            translate.set('SET', 'Another manually added translation', 'en');\r\n            expect(translate.instant('SET')).toBe('Another manually added translation|compiled');\r\n        });\r\n    });\r\n});"
      let rxwebContent: any = "import { TestBed } from \"@angular\/core\/testing\";\r\nimport { Observable, of } from \"rxjs\";\r\nimport { TranslateCompiler, TranslateFakeCompiler, TranslateLoader, TranslateModule, TranslateService } from \"@rxweb\/ngx-translate-extension\";\r\nimport { RxTranslateModule } from \"@rxweb\/translate\"\r\n\r\nlet translations: any = { LOAD: 'This is a test' };\r\n\r\nclass FakeLoader implements TranslateLoader {\r\n    getTranslation(lang: string): Observable<any> {\r\n        return of(translations);\r\n    }\r\n}\r\n\r\ndescribe('TranslateCompiler', () => {\r\n    let translate: TranslateService;\r\n\r\n    describe('with default TranslateFakeCompiler', () => {\r\n        beforeEach(() => {\r\n            TestBed.configureTestingModule({\r\n                imports: [\r\n                    TranslateModule.forRoot({\r\n                        loader: { provide: TranslateLoader, useClass: FakeLoader },\r\n                        compiler: { provide: TranslateCompiler, useClass: TranslateFakeCompiler }\r\n                    })\r\n                    , RxTranslateModule.forRoot({\r\n                        isTest: true, \/\/ Only use this for spec.\r\n                        forNgxTranslate: true,\r\n                        cacheLanguageWiseObject: true,\r\n                    })\r\n                ],\r\n            });\r\n            translate = TestBed.get(TranslateService);\r\n\r\n            translate.use('en');\r\n        });\r\n\r\n        it('should use the correct compiler', () => {\r\n            expect(translate).toBeDefined();\r\n            expect(translate.compiler).toBeDefined();\r\n            expect(translate.compiler instanceof TranslateFakeCompiler).toBeTruthy();\r\n        });\r\n\r\n        it('should use the compiler on loading translations', () => {\r\n            translate.get('LOAD').subscribe((res: string) => {\r\n                expect(res).toBe('This is a test');\r\n            });\r\n        });\r\n\r\n        it('should use the compiler on manually adding a translation object', () => {\r\n            translate.setTranslation('en', { 'SET-TRANSLATION': 'A manually added translation' });\r\n            expect(translate.instant('SET-TRANSLATION')).toBe('A manually added translation');\r\n        });\r\n\r\n        it('should use the compiler on manually adding a single translation', () => {\r\n            translate.set('SET', 'Another manually added translation', 'en');\r\n            expect(translate.instant('SET')).toBe('Another manually added translation');\r\n        });\r\n    });\r\n\r\n    describe('with a custom compiler implementation', () => {\r\n        class CustomCompiler implements TranslateCompiler {\r\n            compile(value: string, lang: string): string {\r\n                return value + '|compiled';\r\n            }\r\n\r\n            compileTranslations(translation: any, lang: string): Object {\r\n                return Object.keys(translation).reduce((acc: any, key) => {\r\n                    acc[key] = () => translation[key] + '|compiled';\r\n                    return acc;\r\n                }, {});\r\n            }\r\n        }\r\n\r\n        beforeEach(() => {\r\n            TestBed.configureTestingModule({\r\n                imports: [\r\n                    TranslateModule.forRoot({\r\n                        loader: { provide: TranslateLoader, useClass: FakeLoader },\r\n                        compiler: { provide: TranslateCompiler, useClass: CustomCompiler }\r\n                    })\r\n                    , RxTranslateModule.forRoot({\r\n                        isTest: true,  \/\/ Only use this for spec.\r\n                        forNgxTranslate: true,\r\n                        cacheLanguageWiseObject: true,\r\n                    })\r\n                ],\r\n            });\r\n            translate = TestBed.get(TranslateService);\r\n\r\n            translate.use('en');\r\n        });\r\n\r\n        it('should use the correct compiler', () => {\r\n            expect(translate).toBeDefined();\r\n            expect(translate.compiler).toBeDefined();\r\n            expect(translate.compiler instanceof CustomCompiler).toBeTruthy();\r\n        });\r\n\r\n        it('should use the compiler on loading translations', () => {\r\n            translate.get('LOAD').subscribe((res: string) => {\r\n                expect(res).toBe('This is a test|compiled');\r\n            });\r\n        });\r\n\r\n        it('should use the compiler on manually adding a translation object', () => {\r\n            translate.setTranslation('en', { 'SET-TRANSLATION': 'A manually added translation' });\r\n            expect(translate.instant('SET-TRANSLATION')).toBe('A manually added translation|compiled');\r\n        });\r\n\r\n        it('should use the compiler on manually adding a single translation', () => {\r\n            translate.set('SET', 'Another manually added translation', 'en');\r\n            expect(translate.instant('SET')).toBe('Another manually added translation|compiled');\r\n        });\r\n    });\r\n});"

    var diff = Diff.createTwoFilesPatch("@ngx-translate", "@ngx-translate", ngxContent, rxwebContent);

    let outputHtml = Diff2Html.html(diff, {
      drawFileList: false, matching: 'lines', outputFormat: 'side-by-side'
    }); 
    this.outputHtml = outputHtml;
    var nameTitle = this.outputHtml.substring(476,525);

    this.outputHtml = this.outputHtml.replace(nameTitle,nameTitle +='<span class="d2h-file-name float-comparison-right">@rxweb/ngx-translate-extension</span> <a class="pl-1" href="https://github.com/rxweb/rxweb/blob/master/client-side/angular/test/ngx-translate-extension/translate.compiler.spec.ts"><i class="fa fa-github" aria-hidden="true"></i></a>');
    var gitlink = this.outputHtml.substring(476,525);
    this.outputHtml = this.outputHtml.replace(gitlink, gitlink+=`<a class="pl-1" href="https://github.com/ngx-translate/core/blob/master/projects/ngx-translate/core/tests/translate.compiler.spec.ts"><i class="fa fa-github" aria-hidden="true"></i></a>`)
  }
}
