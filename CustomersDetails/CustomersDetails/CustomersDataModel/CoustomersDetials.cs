using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
namespace CustomersDetails.CustomersData
{
    
    [Keyless]
    public class CoustomersDetials
    {
        
        public string CustomerID { get; set; }
        public string? Country { get; set; }
        public string? City { get; set; }

    }
}
