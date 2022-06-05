using CustomersDetails.Context;
using CustomersDetails.CustomersData;
using CustomersDetails.DTO;
using CustomersDetails.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomersDetails.Services
{
    public class CustomerServices
    {

        private NorthwindContext _context;

        public CustomerServices(NorthwindContext context)
        {
            this._context = context;
        }

        public async Task<List<CustomerDTO>> GetCoustomerDetails()
        {
            // CoustomersDetials? abc = new();

            //var CusDetails = await _context.Customers.Select(e => new CustomerDTO
            //{
            //    Country = e.Country,
            //    City = e.City,
            //    CustomerID = e.CustomerID,
            //    Count = _context.Customers.
            //    Count(c => c.Country == e.Country)
            //}).ToListAsync();
            //return CusDetails;

            var customerDetails= await _context.Customers.GroupBy(g => new {g.Country,g.City}).Select(g=>new CustomerDTO
            {
                Country=g.Key.Country, 
                City=g.Key.City,
                Count = g.Count()
            }).ToListAsync();

            return customerDetails;

        }

        /*public async Task<int> GetCount()
        {
            //CoustomersDetials? abc = new();

            //var det=abc.CustomerID;




        //    var CusDetails = await _context.Customers.Select(e => new CustomerDTO
        //    {
        //        CustomerID = e.CustomerID.Count()

               

        //    //var result = from element in abc.CustomerID
        //    //             orderby element descending
        //    //             select element;
        //    //var count = result.Count();


        //}).ToListAsync();
        //        return CusDetails;
        //    //return det;
        }*/

        //var QSCount = (from num in intNumbers
        //               select num).Count();


        


    }

}
