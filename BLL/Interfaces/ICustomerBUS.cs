using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Model;

namespace BLL.Interfaces
{
    public partial interface ICustomerBUS
    {
        List<Customers> GetCustomers();
        bool CreateCustomer(Customers customers);
        Customers GetInfoCustomerById(int IdBill);
        bool UpdateCustomerById(Customers customers, int IdBill);
    }
}
