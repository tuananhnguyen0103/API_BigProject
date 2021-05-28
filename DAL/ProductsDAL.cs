using System;
using Model;
using DAL.Helper;
using DAL.Interfaces;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace DAL
{
    public class ProductsDAL : IProductsDAL
    {
        private IDatabaseHelper _dbHelper;
        public ProductsDAL(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public List<Products> GetProducts()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetAllProduct");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<Products>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool CreateProduct(Products products)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "[AddProduct]",
                "@ProductName", products.Name,
                "@ProductDes", products.Description,
                "@ProductPrice", products.Price,
                "@ProductQuantity",products.Quantity,
                "@IdCate",products.IdCategories);

                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
