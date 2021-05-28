using System;
using Model;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public partial interface IProductsDAL
    {
        List<Products> GetProducts();
        bool CreateProduct(Products products);
    }
   
}
