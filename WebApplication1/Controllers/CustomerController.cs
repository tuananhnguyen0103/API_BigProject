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
    public class CustomerController : ControllerBase
    {
        private ICustomerBUS _ICustomerBUS;
        public CustomerController(ICustomerBUS customerBUS)
        {
            _ICustomerBUS = customerBUS;
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
        public IEnumerable<Customers> GetDatabAll()
        {
            return _ICustomerBUS.GetCustomers();
        }
        [Route("create-item")]
        [HttpPost]
        public Customers CreateCustomer([FromForm] Customers customers)
        {
            _ICustomerBUS.CreateCustomer(customers);
            return customers;
        }
    }
}
