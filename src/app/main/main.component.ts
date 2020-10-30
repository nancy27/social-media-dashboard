import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todayOverview:any;
  people: any[] = [
    {
      name: "facebook"      
    },
    {
      name: "linkedin" 
    },
    {
      name: "pinterest"   
    },
    {
      name: "instagram"
    }]
  constructor() {
    this.todayOverview=[

      { "name":"facebook",
        "heading":"Page Views",
        "icon":"fa-facebook-square",
        "count":87,
        "up":"3%"
    },{
      "name":"facebook",
      "heading":"Likes",
        "icon":"fa-facebook-square",
        "count":52,
        "down":"2%"
    },{
      "name":"instagram",
      "heading":"Likes",
        "icon":"fa-instagram",
        "count":5462,
        "up":"2257%"
    },{
      "name":"instagram",
      "heading":"Likes",
        "icon":"fa-instagram",
        "count":52000,
        "up":"1375%"
    },{
      "name":"linkedin",
      "heading":"Retweets",
        "icon":"fa-linkedin",
        "count":117,
        "up":"303%"
    },{
      "name":"linkedin",
      "heading":"Likes",
      "icon":"fa-linkedin",
      "count":507,
      "down":"553%"
    },{
      "name":"pinterest",
      "heading":"Likes",
      "icon":"fa-pinterest-square",
      "count":107,
      "down":"19%"
    },{
      "name":"pinterest",
      "heading":"Total Views",
      "icon":"fa-pinterest-square",
      "count":1407,
      "down":"12%"
    }
  ]
   }

  ngOnInit(): void {
  }

  getColor(name) {
    switch (name) {
      case "facebook":
        return "deepskyblue";
      case "linkedin":
        return "deepskyblue";
      case "pinterest":
        return "#ff4d4d";
        case "instagram":
          return "hotpink";
    }
  }
}
