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

        [HttpPost]
        public ActionResult<Customer> PostOrder([FromBody]Customer customer)
        {
            
           Customer thisCustomer = _context.customers.FirstOrDefault(b => b.Username == customer.Username);
            if (thisCustomer == null)
            {
                _context.customers.Add(customer);
                _context.SaveChanges();
                return Created("", customer);
            }
            else
            {
                return thisCustomer;
            }

            
        }

        [Route("{naam}")]
        [HttpPut]
        public List<Customer> UpdateDuts([FromBody] Customer nieuwe)
        {

            _context.customers.Update(nieuwe);




            _context.SaveChanges();
            return _context.customers.ToList();
        }

        [Route("{id}")]
        [HttpDelete]
        public List<Customer> DelCus(int id)
        {

            Customer customer = _context.customers.ToList().First(list2 => list2.ID == id);
            _context.customers.Remove(customer);
            _context.SaveChanges();
            return _context.customers.ToList();
        }

    }
}