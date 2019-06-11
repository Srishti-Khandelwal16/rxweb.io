import { Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter,AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AppCodeComponent } from "src/app/components/shared/app-code/app-code.component";
import { ElementRef } from "@angular/core";
import { ComponentFactoryResolver } from "@angular/core";
import { ViewContainerRef } from "@angular/core";
import { ComponentView } from "src/app/domain/view";
import { ViewChild } from "@angular/core";
import { CodeExampleComponent } from "src/app/components/shared/code-example/code-example.component";
import { StackBlitzService } from "src/app/components/shared/stackblitz/stackblitz.service";

@Component({
  selector: 'app-example-runner',
  templateUrl: './app-example-runner.component.html',
  entryComponents: [AppCodeComponent,CodeExampleComponent]
})

export class AppExampleRunnerComponent implements OnInit {
  @Input() title: string;
  @Input() refComponent: string;
  @Input() decoratorName: string;
  @Input() exampleName: string;
  @Input() typeName: string;
  @Input() content:any;
  @Input() showTab:boolean;
  @Input() templateDrivenType:string;
  showElement: any = {};
  tabArray: any = {};
  activeTab: string;
  showComponent: boolean = false;
  constructor(
  ) {
  }
  ngOnInit(): void {
    this.showElement = false;
    if(this.decoratorName == "async" || this.decoratorName == "prop" || this.decoratorName == "propArray" || this.decoratorName == "propObject" )
    {
      this.showElement = true;
    }
    this.tabArray = []; 
    if(this.content && this.showTab){
      if (this.content.model != null)
        this.tabArray.push({ "tabName": "Model", "tabItem": "model", "content": this.content.model })
      if (this.content.component != null)
        this.tabArray.push({ "tabName": "Component", "tabItem": "component", "content": this.content.component })
      if (JSON.stringify(this.content.json) !== JSON.stringify({}))
      {
        var jsonObject = this.content.json;
        if (jsonObject) {
          for (var prop in jsonObject) {
            if (jsonObject.hasOwnProperty(prop)) {
              this.tabArray.push({ "tabName": prop, "tabItem": prop, "content": jsonObject[prop] })
            }
          }
        }
      }
      if (this.content.html != null)
        this.tabArray.push({ "tabName": "Html", "tabItem": "html", "content": this.content.html })
      this.activeTab = this.tabArray[0].tabName;
    }
  }
  openStackblitz(){
     var stackBlitz = new StackBlitzService();
     let form = stackBlitz.buildForm(this.decoratorName,this.exampleName,this.typeName,this.templateDrivenType,this.content,this.title)
     document.body.appendChild(form);
     form.submit();
     document.body.removeChild(form);
  }
}

