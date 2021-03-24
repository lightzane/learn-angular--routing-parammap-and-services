import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  getRaces() { return this.races }
  

  private races = [
    {
      'name':'Amarr',
      'description': 'Amarr, a theocratic society ruled by the Amarr Empress, is the largest and oldest empire in New Eden. The Amarr are generally highly educated, devoutly religious, and are ruled by an authoritarian nobility. Despite the setbacks they have encountered in recent history, the Amarr still boast the most socially stable empire and the most powerful military.',
      'specialties': ['Lasers','Drones','Armor']
    },
    {
      'name':'Gallente',
      'description': 'Freedom comes above all else in the eyes of the Gallente, who have contributed to human society with a group of the most outstanding leaders, scientists, and businessmen in modern history. The Gallente Federation welcomes immigrants more than any other empire – the huge demand for labor, diverse cultural atmosphere, and humane immigration policies attract people of all ethnicities, beliefs, and skin colors.',
      'specialties': ['Railguns','Drones','Armor']
    },
    {
      'name':'Caldari',
      'description': 'The Caldari State was founded on the tenets of patriotism and hard work. With these ideals as their guiding principles, its early leaders fought hard to achieve greatness. Today, the Caldari State has become a powerful corporate dictatorship. Ruthless and efficient in the boardroom as well as on the battlefield, the Caldari are living emblems of strength, persistence, and dignity.',
      'specialties': ['Missiles','Railguns','Shields']
    },
    {
      'name':'Minmatar',
      'description': 'The Minmatar Republic was founded more than a century ago in the Great Rebellion, supported by the Gallente Federation. Only a quarter of all Minmatar live in the Republic, and the rest are scattered across all corners of New Eden, many still living under subjugation by the Amarr. Today, the Minmatar Republic is an empire with a strongly nomadic culture.',
      'specialties': ['Cannons','Shields','Armor']
    }
  ]
}
