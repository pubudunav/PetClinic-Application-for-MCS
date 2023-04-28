import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vaccine-card',
  templateUrl: './vaccine-card.page.html',
  styleUrls: ['./vaccine-card.page.scss'],
})
export class VaccineCardPage implements OnInit {
  list:any = []
  showList:any = []
  constructor(private firestore:AngularFireDatabase,
    private router: Router,) { }

  ngOnInit() {
    this.loadvaccineList()
  }
  loadvaccineList(){
    let ab = this.firestore.list("/vaccineCard");
    ab.valueChanges().subscribe((val) => {
      this.list = val;
      this.showList = val;
      console.log("list ", this.list)
    })
    console.log("list ", this.list)
      }
    
     
    
      filterList(text){
        console.log("text s ", text.srcElement.value)
        let searchText = text.srcElement.value;
        this.showList = this.list.filter((item) => { return item.pid.indexOf(searchText) > -1})
        console.log("showlist ", this.showList);
      }
}
