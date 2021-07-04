using premium_calculator_app.Models;
using premium_calculator_app.Services.Interfaces;
using System.Collections.Generic;

namespace premium_calculator_app.Services
{
    public class OccupationService: IOccupationService
    {
        public List<Occupation> GetOccupations()
        {
            return new List<Occupation>()
            {
                new Occupation()
                    {Name = "Cleaner", OccupationRating = new OccupationRating() {Name = "Light Manual", Factor = 1.5}},
                new Occupation()
                    {Name = "Doctor", OccupationRating = new OccupationRating() {Name = "Professional", Factor = 1.0}},
                new Occupation()
                    {Name = "Author", OccupationRating = new OccupationRating() {Name = "White Collar", Factor = 1.25}},
                new Occupation()
                    {Name = "Farmer", OccupationRating = new OccupationRating() {Name = "Heavy Manual", Factor = 1.75}},
                new Occupation()
                {
                    Name = "Mechanic", OccupationRating = new OccupationRating() {Name = "Heavy Manual", Factor = 1.75}
                },
                new Occupation()
                    {Name = "Florist", OccupationRating = new OccupationRating() {Name = "Light Manual", Factor = 1.5}}
            };
        }
    }
}
