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
    }
}
