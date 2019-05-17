using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MGTorder_api.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MGTorder_api.Controllers
{
    [Route("api/Cards")]
    [ApiController]
    public class CardController : ControllerBase
    {
        public LibraryContext _context { get; set; }

        public CardController(LibraryContext ctxt)
        {
            _context = ctxt;
        }
        [HttpGet]
        public List<Card> GetCards()
        {
            return _context.cards.ToList();
        }


        
}
}