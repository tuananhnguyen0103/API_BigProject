using System;
using Model;
using DAL.Helper;
using DAL.Interfaces;
using System.Collections.Generic;
using System.Text;
using System.Linq;


namespace DAL
{
    public partial class BillDAL : IBillDAL
    {
        private IDatabaseHelper _dbHelper;
        public BillDAL(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public List<Bill> GetBills()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetAllBill");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<Bill>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool CreateBill(Bill bill, string DateBuy)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "AddToBill",
                "@IdCus", bill.IdCustomer,
                "@Total", bill.BillTotal,
                "@Desc", bill.BillDescription,
                "@DateBuy",DateBuy);

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
