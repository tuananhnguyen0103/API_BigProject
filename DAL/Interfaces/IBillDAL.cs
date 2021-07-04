using System;
using Model;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public partial interface IBillDAL
    {
        List<Bill> GetBills();
        bool CreateBill(Bill bill, string DateBuy);
        Bill GetBillById(int idBill);
        bool UpdateBillWhenUpdate(Bill bill,int idBill);
    }
}
