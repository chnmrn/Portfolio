using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class PlaygroundController : Controller
    {
        // GET: PlaygroundController
        public ActionResult Playground()
        {
            return View();
        }

        // GET: PlaygroundController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PlaygroundController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PlaygroundController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PlaygroundController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PlaygroundController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PlaygroundController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PlaygroundController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
