using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TaskTracker.Controllers
{
    public class ModuleController : Controller
    {
        public ActionResult HomePage()
        {
            return View();
        }
        
        public ActionResult AboutPage()
        {
            return View();
        }
    }
}