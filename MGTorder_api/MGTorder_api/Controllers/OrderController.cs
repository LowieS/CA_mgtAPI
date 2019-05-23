using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MGTorder_api.model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MGTorder_api.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        public LibraryContext _context { get; set; }

        public OrderController(LibraryContext ctxt)
        {
            _context = ctxt;
        }
        /*
        [Route("{id}")]
        [HttpGet]
        public ActionResult<Order> GetOrder(int id)
        {
            var theOrder= _context.orders.Include(b => b.myCards)
                                        .SingleOrDefault(b => b.ID == id);
            theOrder = _context.orders.Include(b => b.thisCustomer)
                                        .SingleOrDefault(b => b.ID == id);
            return theOrder;
        }
        */
        
        [Route("{name}")]
        [Authorize]
        [HttpGet]
        public IList<Order> GetOrderbyname(string name)
        {

            IQueryable<Order> theOrder;
            theOrder=_context.orders.Include(b => b.thisCustomer).Include(b => b.myCards)
                                        .Where(b => b.thisCustomer.Username == name);
           
            return theOrder.ToList();
        }
        

        [HttpPost]
        public ActionResult<Order> PostOrder([FromBody]Order order)
        {
            Order theorder = new Order();
            theorder.thisCustomer= _context.customers.SingleOrDefault(b => b.ID == order.thisCustomer.ID);
            theorder.myCards = new List<Card>();
            foreach (Card item in order.myCards)
            {
                theorder.myCards.Add(_context.cards.SingleOrDefault(b => b.ID == item.ID));
            }
            _context.orders.Add(theorder);
            _context.SaveChanges();
            return Created("", order);
        }
    }
}