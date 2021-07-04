using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Model;

namespace BLL.Interfaces
{
    public partial interface IBillBUS
    {
        List<Bill> GetBills();
        bool CreateBill(Bill bill, string DateBuy);
        Bill GetBillById(int idBill);
        bool UpdateBillWhenUpdate(Bill bill,int idBill);
    }
}
