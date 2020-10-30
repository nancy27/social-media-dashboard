import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalfollowers:number;
  totalMedia:any ;
  checkbox:any;
  constructor() { 
    this.totalfollowers = 23004;
    this.totalMedia=[
         { "name" : "@nathanf" ,
           "total":1987 ,
           "tag":"Followers",
           "up": 12 ,
           "icon" : "fa-facebook-square",
           "color":"linear-gradient(to right , lightskyblue ,lightskyblue)",
           "colour":"lightskyblue",
           "footerColor":"green"
        },
        { "name" : "@nathanf" ,
           "total":1044 ,
           "tag":"Followers",
           "up": 99 ,
           "icon" : "fa-linkedin",
           "color":"linear-gradient(to right , lightskyblue ,lightskyblue)",
           "colour":"lightskyblue",
           "footerColor":"green"
        },
        { "name" : "@nathanf" ,
           "total":11000 ,
           "tag":"Followers",
           "up": 1099 ,
           "icon" : "fa-instagram",
           "color":"linear-gradient(to right, yellow , pink)",
           "colour":"pink",
           "footerColor":"green"
        },
        { "name" : "@nathanf" ,
           "total":8239 ,
           "tag":"Subscribers",
           "down": 144 ,
           "icon" : "fa-pinterest-square",
           "color":"linear-gradient(to right , red ,red)",
           "colour":"red",
           "footerColor":"red"
        }
    ]
    
      
  }

  ngOnInit(): void {
   this.checkbox = document.querySelector('input[name=theme]');

   this.checkbox.addEventListener('change', function() {
       if(this.checked) {
          
           document.documentElement.setAttribute('data-theme', 'dark')
       } else {
           
           document.documentElement.setAttribute('data-theme', 'light')
       }
   })
 
 }
  

  myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
}
