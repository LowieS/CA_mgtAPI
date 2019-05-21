using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MGTorder_api.model
{
    public class Order
    {
        
        public int ID { get; set; }
        
        public Customer thisCustomer { get; set; }

        public ICollection<Card> myCards { get; set; }
    }
}
