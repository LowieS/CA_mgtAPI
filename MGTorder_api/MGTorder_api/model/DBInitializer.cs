using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MGTorder_api.model
{
    public class DBInitializer
    {
        static Customer Willem;
        static Customer Lowie;
        static Card TestCard;
        static Card TestCard2;
        static Order TestOrder;
        public static void Initialize(LibraryContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();


            
            if (!context.customers.Any())
            {
                List<Card> testlist = new List<Card>();
                
                Willem = new Customer()
                {
                    //ID = 69,
                    Username = "Humassa",
                    Password="Admin",
                    
                    

                };
                Lowie= new Customer()
                {
                    //ID = 69,
                    Username = "Lowiegie",
                    Password = "Beest",

                    

                };
               


                TestCard = new Card()
                {
                    Name = "Master of Cruelties",
                    Set = "DGM",
                    Amount = 5

                };
                TestCard2 = new Card()
                {
                    Name = "Master of Diversion",
                    Set="M14",
                    Amount=2

                };
                testlist.Add(TestCard);
                testlist.Add(TestCard2);
                TestOrder = new Order()
                {
                    thisCustomer = Lowie,
                    myCards = testlist
                    
                };
                context.orders.Add(TestOrder);
                context.customers.Add(Willem);
                context.customers.Add(Lowie);

                context.cards.Add(TestCard);
                context.cards.Add(TestCard2);
                context.SaveChanges();
            }
        }
    }
}
