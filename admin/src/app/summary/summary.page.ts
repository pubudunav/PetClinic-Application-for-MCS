import { Component, OnInit } from '@angular/core';
import { AppointmentVet } from '../shared/Appointment';
import { Appointment } from '../shared/Appointment';
import { User } from '../shared/model';
import { Guardian } from '../shared/model';
import { Vet } from '../shared/model';
import { Pet } from '../shared/model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {


  petlist:any = []
  vetlist:any = []
  guardianlist:any = []
  cardlist:any = []
  appointmentlist:any = []
showList:any = []

  constructor(private firestore:AngularFireDatabase,
    private router: Router) { }

  ngOnInit() {
    this.loadPetList()
    this.loadvetList()
    this.loadguardianList()
    this.appointmentList()
    this.vaccinecardList()
  }
  loadPetList(){
    let ab = this.firestore.list("/pet");
    ab.valueChanges().subscribe((val) => {
      this.petlist = val;
      this.showList = val;
      console.log("list ", this.petlist)
      var petcount = this.petlist.length;
       
 //console.log('count',petcount);
    })
    console.log("list ", this.petlist)

      }
    
      loadvetList(){
        let ab = this.firestore.list("/vet");
        ab.valueChanges().subscribe((val) => {
          this.vetlist = val;
          this.showList = val;
          console.log("list ", this.vetlist)
          var petcount = this.vetlist.length;
           
     //console.log('count',petcount);
        })
        console.log("list ", this.vetlist)
    
          }

          loadguardianList(){
            let ab = this.firestore.list("/guardian");
            ab.valueChanges().subscribe((val) => {
              this.guardianlist = val;
              this.showList = val;
              console.log("list ", this.guardianlist)
              var petcount = this.guardianlist.length;
               
         //console.log('count',petcount);
            })
            console.log("list ", this.guardianlist)
        
              }
    
              vaccinecardList(){
                let ab = this.firestore.list("/vaccineCard");
                ab.valueChanges().subscribe((val) => {
                  this.cardlist = val;
                  this.showList = val;
                  console.log("list ", this.cardlist)
                  var petcount = this.cardlist.length;
                   
             //console.log('count',petcount);
                })
                console.log("list ", this.guardianlist)
            
                  }

                  appointmentList(){
                    let ab = this.firestore.list("/appointmentVet");
                    ab.valueChanges().subscribe((val) => {
                      this.appointmentlist = val;
                      this.showList = val;
                      console.log("list ", this.appointmentlist)
                      var petcount = this.appointmentlist.length;
                       
                 //console.log('count',petcount);
                    })
                    console.log("list ", this.appointmentlist)
                
                      }
 
}
