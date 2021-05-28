using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Model;
namespace BLL.Interfaces
{
    public partial interface IProductBUS
    {
        List<Products> GetProducts();

        bool CreateProducts(Products products);
    }
    
}
