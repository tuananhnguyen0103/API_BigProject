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
    public partial class  CustomerBUS :ICustomerBUS
    {
        private ICustomerDAL _res;
        public CustomerBUS(ICustomerDAL ItemGroupRes)
        {
            _res = ItemGroupRes;
        }
        public List<Customers> GetCustomers()
        {
            return _res.GetCustomers();
        }
        public bool CreateCustomer(Customers customers)
        {
            return _res.CreateCustomer(customers);
        }
        public Customers GetInfoCustomerById(int IdBill)
        {
            return _res.GetInfoCustomerById(IdBill);
        }
        public bool UpdateCustomerById(Customers customers, int IdBill)
        {
            return _res.UpdateCustomerById(customers, IdBill);
        }
    }
}
