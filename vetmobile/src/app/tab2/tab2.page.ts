import { Component } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  list:any = []
showList:any = []

  constructor( private firestore:AngularFireDatabase,
    private router: Router, ) {}

    ngOnInit() {
      this.loadPetList()
      }
     
    
     loadPetList(){
    let ab = this.firestore.list("/pet");
    ab.valueChanges().subscribe((val) => {
      this.list = val;
      this.showList = val;
      console.log("list ", this.list)
    })
    console.log("list ", this.list)
      }
    
      newpet(){
        this.router.navigate(['register-pet']);
      }
    
      filterList(text){
        console.log("text s ", text.srcElement.value)
        let searchText = text.srcElement.value;
        this.showList = this.list.filter((item) => { return item.nic.indexOf(searchText) > -1})
        console.log("showlist ", this.showList);
      }
  
}
