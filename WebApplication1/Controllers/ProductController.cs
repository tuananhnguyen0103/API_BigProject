﻿using System;
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
    public class ProductController : ControllerBase
    {
        private IProductBUS _IProductBUS;
        public ProductController(IProductBUS productBUS)
        {
            _IProductBUS = productBUS;
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
        public IEnumerable<Products> GetDatabAll()
        {
            return _IProductBUS.GetProducts();
        }
        [Route("get-item/{idProduct}")]
        [HttpGet]
        public Products GetAProductById(int idProduct)
        {
            return _IProductBUS.GetAProductById(idProduct);
        }

        [Route("create-item")]
        [HttpPost]
        public Products CreateProducts([FromBody] Products products)
        {
            _IProductBUS.CreateProducts(products);
            return products;
        }
        [Route("update-item/{idProduct}")]
        [HttpPost]
        public Products UpdateProducts([FromForm] Products products, int idProduct)
        {
            _IProductBUS.UpdateProduct(products, idProduct);
            return products;
        }
    }
}
