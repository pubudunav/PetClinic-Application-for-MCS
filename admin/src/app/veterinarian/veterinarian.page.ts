import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinarian',
  templateUrl: './veterinarian.page.html',
  styleUrls: ['./veterinarian.page.scss'],
})
export class VeterinarianPage implements OnInit {
  list:any = []
  showList:any = []

  constructor(private router: Router, private firestore:AngularFireDatabase,
    ) { }

    ngOnInit() {
      this.loadvetList()
      }
     
    
     loadvetList(){
    let ab = this.firestore.list("/vet");
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

  
  newvet(){
    
    this.router.navigate(['register-vet']);
  }

}
