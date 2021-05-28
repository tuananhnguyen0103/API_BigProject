using BLL.Interfaces;
using DAL;
using DAL.Interfaces;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BLL
{
    public partial class BillDetailsBUS : IBillDetailsBUS
    {
        private IBillDetailDAL _res;
        public BillDetailsBUS(IBillDetailDAL ItemGroupRes)
        {
            _res = ItemGroupRes;
        }
        public List<BillDetails> GetBillDetails()
        {
            return _res.GetBillDetails();
        }
        public bool CreateBillDetails(BillDetails billDetails)
        {
            return _res.CreateBillDetails(billDetails);
        }
    }
}
