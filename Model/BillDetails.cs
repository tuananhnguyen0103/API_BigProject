using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class BillDetails
    {
        public int Id { get; set; }
        public int IdProduct { get; set; }
        public int Quantity { get; set; }
        public int Total { get; set; }
        public int IdBill { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }
    }
}
