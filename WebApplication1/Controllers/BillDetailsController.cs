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
    public class BillDetailsController : ControllerBase
    {
        
        // GET: BillController
        private IBillDetailsBUS _IBillDetailsBUS;
        public BillDetailsController(IBillDetailsBUS billDetailsBUS)
        {
            _IBillDetailsBUS = billDetailsBUS;
        }

        [Route("get-item")]
        [HttpGet]
        public IEnumerable<BillDetails> GetDatabAll()
        {
            return _IBillDetailsBUS.GetBillDetails();
        }
        [Route("create-item")]
        [HttpPost]
        public string CreateBillDetails([FromBody] List<BillDetails> billDetails)
        {
            if (billDetails != null)
            {
                foreach (var item in billDetails)
                {
                    _IBillDetailsBUS.CreateBillDetails(item);
                }
            }
           
            return "Thêm thành công";
        }
    }
}
