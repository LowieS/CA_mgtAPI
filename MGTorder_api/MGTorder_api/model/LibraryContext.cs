using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MGTorder_api.model
{
    public class LibraryContext : DbContext

    {
        public LibraryContext(DbContextOptions<LibraryContext> options)
                                    : base(options)
        {

        }
        public DbSet<Card> cards { get; set; }
        public DbSet<Customer> customers { get; set; }
        public DbSet<Order> orders { get; set; }

      
    }
}
