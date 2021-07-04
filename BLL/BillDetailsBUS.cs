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
        public List<BillDetails> GetBillDetailsById(int IdBill)
        {
            return _res.GetBillDetailsById(IdBill);
        }
        public bool DeleteBillDetailsWhenUpdate(int idBill)
        {
            return _res.DeleteBillDetailsWhenUpdate(idBill);
        }
        public bool CreateBillDetailsWhenUpdate(BillDetails billDetails)
        {
            return _res.CreateBillDetailsWhenUpdate(billDetails);
        }
        
    }
}
