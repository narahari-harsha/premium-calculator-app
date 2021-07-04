using Microsoft.AspNetCore.Mvc;
using premium_calculator_app.Models;
using premium_calculator_app.Services.Interfaces;
using System.Collections.Generic;

namespace premium_calculator_app.Controllers
{
    public class OccupationController : Controller
    {
        private readonly IOccupationService _occupationService;

        public OccupationController(IOccupationService occupationService)
        {
            _occupationService = occupationService;
        }

        [HttpGet("all")]
        public List<Occupation> Get()
        {
            return _occupationService.GetOccupations();
        }
    }
}
