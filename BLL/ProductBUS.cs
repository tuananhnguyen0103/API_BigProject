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
    public partial class ProductBUS : IProductBUS
    {
        private IProductsDAL _res;
        public ProductBUS(IProductsDAL ItemGroupRes)
        {
            _res = ItemGroupRes;
        }
        public List<Products> GetProducts()
        {
            return _res.GetProducts();
        }
        public bool CreateProducts(Products products)
        {
            return _res.CreateProduct(products);
        }
        public Products GetAProductById(int idProduct)
        {
            return _res.GetAProductById(idProduct);
        }
        public bool UpdateProduct(Products products, int idProduct)
        {
            return _res.UpdateProduct(products, idProduct);
        }
    }
}
