import { OccupationRating } from './occupation-rating';

export class Occupation {
    constructor(
        public name: string,
        public occupationRating: OccupationRating
      ) { }
}
