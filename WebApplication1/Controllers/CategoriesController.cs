using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Model;

namespace AlcoholAPI_BTL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private ICategoriesBUS _ICategoriesBUS;
        public CategoriesController(ICategoriesBUS CategoriesBUS)
        {
            _ICategoriesBUS = CategoriesBUS;
        }

        //[Route("create-item")]
        //[HttpPost]
        //public Categories CreateItem([FromBody] Categories model)
        //{
        //    _ICategoriesBUS.Create(model);
        //    return model;
        //}
        [Route("get-item")]
        [HttpGet]
        public IEnumerable<Categories> GetDatabAll()
        {
            return _ICategoriesBUS.GetCategories();
        }
        [Route("create-item")]
        [HttpPost]
        public Categories CreateCategories([FromBody] Categories categories)
        {
            _ICategoriesBUS.CreateCategories(categories);
            return categories;
        }
    }
}
