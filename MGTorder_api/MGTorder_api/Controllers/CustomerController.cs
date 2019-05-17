using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MGTorder_api.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MGTorder_api.Controllers
{
    [Route("api/Customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        public LibraryContext _context { get; set; }

        public CustomerController(LibraryContext ctxt)
        {
            _context = ctxt;
        }
        [HttpGet]
        public List<Customer> GetCustomers()
        {
            return _context.customers.ToList();
        }
        [Route("{name}")]
        [HttpGet]
        public Customer getCustomer(string name)
        {

            Customer thisCustomer = _context.customers.FirstOrDefault(b => b.Username == name);
            return thisCustomer;
        }

    }
}