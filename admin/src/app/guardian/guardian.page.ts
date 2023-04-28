import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.page.html',
  styleUrls: ['./guardian.page.scss'],
})
export class GuardianPage implements OnInit {

  list:any = []
  showList:any = []

  constructor(private router: Router, private firestore:AngularFireDatabase,
    ) { }

  ngOnInit() {
    this.loadguardianList()
  }
  newguardian(){
    this.router.navigate(['register-guardian']);
  }
  loadguardianList(){
    let ab = this.firestore.list("/guardian");
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
        this.showList = this.list.filter((item) => { return item.nic.indexOf(searchText) > -1})
        console.log("showlist ", this.showList);
      }
    
    }


