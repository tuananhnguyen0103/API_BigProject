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
    public class BillController : ControllerBase
    {
        // GET: BillController
        private IBillBUS _IBillBUS;
        public BillController(IBillBUS billBUS)
        {
            _IBillBUS = billBUS;
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
        public IEnumerable<Bill> GetDatabAll()
        {
            return _IBillBUS.GetBills();
        }
        [Route("create-item")]
        [HttpPost]
        public Bill CreateBill([FromBody] Bill bill)
        {
            DateTime dateTime = DateTime.Now;
            DateTime dateTime_Eastern = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.FindSystemTimeZoneById("SE Asia Standard Time"));
            string DateBuy = String.Format("{0:yyyy'-'MM'-'dd' 'HH':'mm':'ss'.'fff}", dateTime_Eastern);
            _IBillBUS.CreateBill(bill, DateBuy);
            return bill;
        }
    }
}
