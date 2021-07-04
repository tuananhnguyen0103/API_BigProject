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
        public List<Bill> GetBillsStateDone()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetAllBillStateDone");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<Bill>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<Bill> GetBillsByMonth(int month)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetAllBillByMonth",
               "@Month", month);
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
            var id = 0;
            try
            {
                var result = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetLastCustomer");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                id= result.ConvertTo<Customers>().FirstOrDefault().Id;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "AddToBill",
                "@IdCus", id,
                "@Total", bill.BillTotal,
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
        public bool UpdateBillWhenUpdate(Bill bill, int idBill)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "UpdateBillWhenUpdate",
                "@IdBill", idBill,
                "@BillTotal", bill.BillTotal,
                "@BillState",bill.BillState,
                "@BillDescription",bill.BillDescription);

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
        public Bill GetBillById(int idBill)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "[GetBillById]",
                    "@IdBill", idBill);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<Bill>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
