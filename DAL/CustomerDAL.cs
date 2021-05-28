using System;
using Model;
using DAL.Helper;
using DAL.Interfaces;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace DAL
{
    public class CustomerDAL : ICustomerDAL
    {
        private IDatabaseHelper _dbHelper;
        public CustomerDAL(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public List<Customers> GetCustomers()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetAllCustomer");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<Customers>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool CreateCustomer(Customers customers)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "AddCustomer",
                "@NameCus", customers.CustomerName,
                "@EmailCus", customers.CustomerEmail,
                "@PhoneCus", customers.CustomerPhone,
                "@AddressCus", customers.CustomerAddress);

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
