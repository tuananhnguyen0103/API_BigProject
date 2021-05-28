using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using Model;

namespace BLL.Interfaces
{
    public partial interface ICategoriesBUS
    {
        List<Categories> GetCategories();

        bool CreateCategories(Categories categories);
    }
}
