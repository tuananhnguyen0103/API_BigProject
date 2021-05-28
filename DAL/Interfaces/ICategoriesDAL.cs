using System;
using Model;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public partial interface ICategoriesDAL
    {
        List<Categories> GetCategories();
        bool CreateCategories(Categories categories);
    }
}
