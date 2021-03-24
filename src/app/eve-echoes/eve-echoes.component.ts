import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'
import { RaceService } from './race.service';

@Component({
  selector: 'app-eve-echoes',
  templateUrl: './eve-echoes.component.html',
  styleUrls: ['./eve-echoes.component.css']
})
export class EveEchoesComponent implements OnInit {

  raceselected:string
  race

  constructor(private route:ActivatedRoute, private router:Router, private _raceService:RaceService) { }

  ngOnInit(): void {
    // This will only update once so it is better to use ParamMap Observables
    //this.raceselected = this.route.snapshot.paramMap.get('race')

    // use this
    this.route.paramMap.subscribe( (params) => {
      this.raceselected = params.get('race')
      this.getRaceDetails(this.raceselected)
      
      if (this.race == null) {
        this.router.navigate([`pagenotfound`])
      }
    })
  }

  getRaceDetails(racename:string) {
    this._raceService.getRaces().forEach( (race)=> {
      if (race.name.toLowerCase() == racename.toLowerCase()) {
        this.race = race
      }
    })
  }

}
