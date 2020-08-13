import { OnInit, Component } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';

import { TranslateService } from '@rxweb/ngx-translate-extension';
import { translate, RxTranslation } from '@rxweb/translate';


declare const Prism;
declare const $;

declare function Gifffer(): any;



@Component({
    templateUrl: './getting-started.component.html',
})
export class NgxTranslateExtensionGettingStartedComponent implements OnInit {

    showComponent: boolean = false;
    rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null }, { "id": "getting-started", "title": "Getting Started", "subLink": null }];
    pageTitle: any = this.rightSidebarLinks[0];


    htmlBinding: any = `<div class="badge badge-warning">{{global.greetMessage}}</div>`;
    titleData: any = { codeContent: {} };
    mainTab: string = "translate"
    importModule: any = `RxTranslateModule.forRoot({
          cacheLanguageWiseObject: true,
          globalFilePath: "https://rxwebioassets.blob.core.windows.net/$web/i18n/{{language-code}}/global.{{language-code}}.json",
          filePath: "https://rxwebioassets.blob.core.windows.net/$web/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json"
      })`
    mapTranslate: any = `export class UserComponent{

   @translate() global: { [key: string]: any } 
  
}
`
    isVideoClick: boolean = false;
    enJsonFile: any = `{
  "pageWiseTitle": "Resolve Translation Page Wise",
  "placeholder": {
    "firstName": "Enter your first name"
  },
  "text": {
    "firstName": "First Name",
    "create": "Create Account"
  }
}`
    get day() {
        var currentHour = (new Date()).getHours();
        return currentHour < 12 ? 'Good Morning' : 'Good Day';
    }

    code: any = `{
  "morningText":"Good Morning",
  "goodDayText":"Good Day",
  "conditionalText":"this.day == 'Good Day' ? 
  this.global.goodDayText : this.global.morningText",
  "greetMessage":"Hey! {{global.conditionalText}},
   I hope you are doing well 🙃. You can translate me by selecting",
  }`;
    frcode: any = `{
  "title":"Traduire avec RxWeb"
}`
    constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http, private rxTranslation: RxTranslation, public translate: TranslateService
    ) {
        translate.addLangs(['en', 'es', 'fr']);
        translate.setDefaultLang('en');

        translate.use('en');
        this.applicationBroadCaster.topSubscriber.subscribe(t => {
            this.titleData = t;
        })
    }



    changeLanguage(languageCode) {
        this.rxTranslation.change(languageCode);
    }

    @translate()
    global: { [key: string]: any }
    languageIdentifier: string = 'javascript';
    ngOnInit(): void {
        this.code = Prism.highlight(this.code, Prism.languages['json'], 'json');
        this.frcode = Prism.highlight(this.frcode, Prism.languages['json'], 'json');
        this.mapTranslate = Prism.highlight((this.mapTranslate), Prism.languages[this.languageIdentifier]);
        this.htmlBinding = Prism.highlight(this.htmlBinding, Prism.languages['html'], 'html');
        document.title = "Getting Started Translate - RxWeb Docs";
        this.showComponent = true;
        this.applicationBroadCaster.topSubject.next(this.pageTitle);
        this.giffer();
    }

    giffer() {
        setTimeout(() => { Gifffer(); }, 10)
    }

    changeTab(tab: string) {
        this.mainTab = tab;
        this.giffer()
    }
}
