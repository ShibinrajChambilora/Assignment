
using CustomersDetails.CustomersData;
using Microsoft.EntityFrameworkCore;

namespace CustomersDetails.Context
{
    public class CustomersDbContext: DbContext
    {
        public CustomersDbContext(DbContextOptions<CustomersDbContext> options) : base(options)
        {

        }
        public DbSet<CoustomersDetials> Customers { get; set; }
    }
}
