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

        public ActionResult LoginPage()
        {
            return View();
        }

        public ActionResult RegistrationPage()
        {
            return View();
        }

        public ActionResult ContactPage()
        {
            return View();
        }

        // message  controller
        public string GetMessage()
        {
            return "Welcome to the Task Tracker!";   
        }


    }
}