using Microsoft.AspNetCore.Mvc;
using Mission4Practice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MIssion4Practice.Controllers
{
    public class viewzController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult gradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult gradeCalculator(gradeCalcClass model)
        {
            return View();
        }
    }
}
