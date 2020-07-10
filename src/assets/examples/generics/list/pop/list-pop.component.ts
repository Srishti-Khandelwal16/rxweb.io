import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-pop',
  templateUrl: './list-pop.component.html'
})

export class ListPopComponent implements OnInit {
    result:any;
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

   ngOnInit() {
   this.items.pop();
  }  
}