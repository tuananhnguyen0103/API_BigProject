using System;
using Model;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public partial interface ICustomerDAL
    {
        List<Customers> GetCustomers();

        bool CreateCustomer(Customers customers);
        Customers GetInfoCustomerById(int IdBill);
        bool UpdateCustomerById(Customers customers, int IdBill);
    }
}
