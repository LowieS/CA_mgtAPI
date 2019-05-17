using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MGTorder_api.model
{
    public class Customer
    {
        public int ID { get; set; }
        public string Username { get; set; }

        public string Password { private get; set; }

        public ICollection<Order> Myorders { get; set; }
    }
}
