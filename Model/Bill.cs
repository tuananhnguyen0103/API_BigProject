using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class Bill
    {
        public int Id { get; set; }

        public int IdCustomer { get; set; }

        public int BillTotal { get; set; }
        public string BillDescription { get; set; }
        public string BillDateBuy { get; set; }
        public string CustomerAddress { get; set; }
        public string CustomerName { get; set; }

        public string BillState { get; set; }
    }
}
