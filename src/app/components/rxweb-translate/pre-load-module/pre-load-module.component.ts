import { Component, NgModule } from '@angular/core';
import { translate, RxTranslateModule } from '@rxweb/translate';
import { RouterModule } from '@angular/router';

@Component({
    templateUrl: './pre-load-module.component.html',
})
export class PreLoadModuleComponent {
    @translate() global: any;

}

@NgModule({
    declarations: [PreLoadModuleComponent],
    imports: [
        RouterModule.forChild([{ path: '', component: PreLoadModuleComponent }]),
        RxTranslateModule.forRoot({
            preloadingStrategy: true,
            cacheLanguageWiseObject: true,
            globalFilePath: "https://rxwebioassets.blob.core.windows.net/$web/i18n/{{language-code}}/global.{{language-code}}.json",
            filePath: "https://rxwebioassets.blob.core.windows.net/$web/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json"
        })
    ],
})
export class PreLoadModule { }
