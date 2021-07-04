import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../Customer';
import { Occupation } from '../occupation';
import { OccupationRating } from '../occupation-rating';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css']
})
export class CalculatePremiumComponent implements OnInit {
  @Input() model: Customer = new Customer('', 0, new Date(1991, 7, 10),new Occupation("Author", new OccupationRating("White Collar", 1.25)), 100000, "");
  deathPremium:string = "";
  age:string="20";

  occupations:Occupation[] = [
    new Occupation("Cleaner", new OccupationRating("Light Manual",1.5)),
    new Occupation("Doctor", new OccupationRating("Professional",1.0)),
    new Occupation("Author", new OccupationRating("White Collar",1.25)),
    new Occupation("Farmer", new OccupationRating("Heavy Manual",1.75)),
    new Occupation("Mechanic", new OccupationRating("Heavy Manual",1.75)),
    new Occupation("Florist", new OccupationRating("Light Manual",1.5))
];

  constructor() { }

  ngOnInit(): void {
  }

  public onDateOfBirthSelect(event:any) {
    
    if(this.model){
      const dateOfBirth = new Date(event["year"], event["month"], event["day"]);
      const timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
      this.model.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);    
      this.age = this.model.age.toString();
    }
  }

  public onOccupationChange(event:any){
    
    var selectedOccupation = event.target.options[event.target.options.selectedIndex].innerHTML;
    this.model.occupation = this.occupations.filter(o=>o.name == selectedOccupation)[0];
    setTimeout(() => {
      this.onSubmit();      
    }, 100);
  }

  public onSubmit() {
    
    if(this.model){
      this.model.deathPremium = this.getPremium();
      this.deathPremium = this.getPremium();      
    }
  }

  private getPremium(){
    if(this.model){
      var premium = (this.model.deathSumInsured * this.model.occupation.occupationRating.factor * this.model.age) / (1000 * 12);
      return premium.toFixed(2);
    }
    return "";
  }
}
