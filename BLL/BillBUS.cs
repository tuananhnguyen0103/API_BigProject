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
    public partial class BillBUS : IBillBUS
    {
        private IBillDAL _res;
        public BillBUS(IBillDAL ItemGroupRes)
        {
            _res = ItemGroupRes;
        }
        public List<Bill> GetBills()
        {
            return _res.GetBills();
        }
        public Bill GetBillById(int idBill)
        {
            return _res.GetBillById(idBill);
        }
        public bool CreateBill(Bill bill, string DateBuy)
        {
            return _res.CreateBill(bill, DateBuy);
        }
        public bool UpdateBillWhenUpdate(Bill bill,int idBill)
        {
            return _res.UpdateBillWhenUpdate(bill, idBill);
        }
    }
}
