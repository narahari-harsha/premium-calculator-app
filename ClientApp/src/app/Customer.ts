import { Occupation } from './occupation';

export class Customer {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public dateOfBirth: Date,
        public occupation: Occupation,
        public deathSumInsured: number,
        public deathPremium: string
      ) { }      
}
