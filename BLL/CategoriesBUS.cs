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
    public partial class CategoriesBUS : ICategoriesBUS
    {
        private ICategoriesDAL _res;
        public CategoriesBUS(ICategoriesDAL ItemGroupRes)
        {
            _res = ItemGroupRes;
        }
        public List<Categories> GetCategories()
        {
            return _res.GetCategories();
        }
        public bool CreateCategories(Categories categories)
        {
            return _res.CreateCategories(categories);
        }
    }
}
