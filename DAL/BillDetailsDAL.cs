using System;
using Model;
using DAL.Helper;
using DAL.Interfaces;
using System.Collections.Generic;
using System.Text;
using System.Linq;


namespace DAL
{
    public partial class BillDetailsDAL : IBillDetailDAL
    {
        private IDatabaseHelper _dbHelper;
        public BillDetailsDAL(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }
        public List<BillDetails> GetBillDetails()
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "GetAllBillDetails");
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<BillDetails>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public bool CreateBillDetails(BillDetails billDetails)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "AddToBillDetail",
                "@IdProduct", billDetails.IdProduct,
                "@Quantity", billDetails.Quantity,
                "@Total", billDetails.Total);

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
