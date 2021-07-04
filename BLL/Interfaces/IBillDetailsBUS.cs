using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Model;

namespace BLL.Interfaces
{
    public partial interface IBillDetailsBUS
    {
        List<BillDetails> GetBillDetails();
        bool CreateBillDetails(BillDetails billDetails);
        List<BillDetails> GetBillDetailsById(int IdBill);
        bool DeleteBillDetailsWhenUpdate(int idBill);
        bool CreateBillDetailsWhenUpdate(BillDetails billDetails);
        
    }
}
