import { OnInit, Component } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: './getting-started.component.html',
  })
  export class StorageGettingStartedComponent implements OnInit {
    codeContent:any;
  showComponent: boolean = false;
  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null },{ "id": "getting-started", "title": "Quick Start", "subLink": null }];  
  pageTitle:any = this.rightSidebarLinks[0];
  titleData: any = { codeContent: {} };
  


  constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http
    ) {
      this.applicationBroadCaster.topSubscriber.subscribe(t => {
        this.titleData = t;
      })
    }

  ngOnInit(): void {
    document.title = "Getting Started Storage - RxWeb Docs";
    this.http.get('https://rxwebioassets.blob.core.windows.net/$web/json/generator/rxweb-storage/storage-install.json').subscribe(response => {
      this.codeContent = response.json();
      this.showComponent = true;
});
 
    this.applicationBroadCaster.topSubject.next(this.pageTitle);
  }
      
  }