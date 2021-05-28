using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class Products
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public string Description { get; set; }
        public int Quantity { get; set; }
        public int IdCategories { get; set; }
    }
}
