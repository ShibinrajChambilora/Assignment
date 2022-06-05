using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using CustomersDetails.CustomersData;
using Microsoft.EntityFrameworkCore;
using CustomersDetails.Services;

namespace CustomersDetails.Controllers
{


    [ApiController]

    public class CustomerController : ControllerBase
    {
        CustomerServices customerServices;
        private readonly JWTAuthenticationManager _jwtAuthenticationManager;

        public CustomerController(JWTAuthenticationManager _jwtAuthenticationManager, CustomerServices customerServices)
        {
            this._jwtAuthenticationManager = _jwtAuthenticationManager;
            this.customerServices = customerServices;
        }



            [Authorize]
            [Route("api/GetCoustomerDetails")]      
            [HttpGet]
            public async Task<IActionResult> GetCoustomerDetails()

            {
            var Custemer = await customerServices.GetCoustomerDetails();
            return (Ok(Custemer));

        }


        [AllowAnonymous]
        [HttpPost("Authorize")]
        public async Task<ActionResult> LogIn([FromBody]User usr)
        {
            var token = _jwtAuthenticationManager.Authenticate(usr.username, usr.password);
            if(token == null)
            {
                return Unauthorized();  
            }
            return Ok(new AccessToken() { a_token = token });
        }
    }

    public class User
    {
        public string username { get; set; }
        public string password { get; set; }
    }

    public class AccessToken
    {
        public string a_token { get; set; }
    }
}

