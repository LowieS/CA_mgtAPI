using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MGTorder_api.model
{
    public class Card
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Set { get; set; }
        public int Amount { get; set; }

        [JsonIgnore]
        public Order myOrder { get; set; }

    }
}
