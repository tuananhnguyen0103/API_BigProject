using System;
using Model;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public partial interface IBillDetailDAL
    {
        List<BillDetails> GetBillDetails();
        bool CreateBillDetails(BillDetails billDetails);
    }
}
