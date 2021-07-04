using Microsoft.AspNetCore.Mvc;

namespace premium_calculator_app.Controllers
{
    public class PremiumController : Controller
    {
        [HttpGet("get-Occupations")]
        public IActionResult GetOccupations()
        {
            return View();
        }
    }
}
