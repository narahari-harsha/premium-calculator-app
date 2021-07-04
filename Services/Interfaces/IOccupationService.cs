using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using premium_calculator_app.Models;

namespace premium_calculator_app.Services.Interfaces
{
    public interface IOccupationService
    {
        List<Occupation> GetOccupations();
    }
}
