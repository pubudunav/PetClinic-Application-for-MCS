import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list:any = []
  showList:any = []
  constructor(private route:ActivatedRoute,  private firestore:AngularFireDatabase) {
    this.route.params.subscribe((params) => {
      let nic = params["id"]
      this.loadAllVac(nic)
    })
  }

  loadAllVac(nic){
    // load all vacs

    let ab = this.firestore.list("/vaccineCard");
    ab.valueChanges().subscribe((val) => {
      this.list = val;
      this.showList = this.list.filter((item) => { return item.nic.indexOf(nic) > -1});
      console.log("list ", this.showList)
  })

  }
}
