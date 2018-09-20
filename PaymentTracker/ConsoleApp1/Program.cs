using System;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Threading.Tasks;
namespace ConsoleApp1
{
  public  class Program
    {
        static void Main(string[] args)
        {
           
           
            ExecuteFinal().Wait();
            Execute().Wait();

        }
       
        static async Task ExecuteFinal()
        {
            var apiKey1 = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");
            var client1 =
                new SendGridClient("");
            var from1 = new EmailAddress("customer.service@ofx.com", "OFX | Customer Service ");
            var subject1 = "OFX | Transfer sent to receipient";
            var to1 = new EmailAddress("Sammy.Won@ofx.com", "Track-r");
            //annies.mohammad @ofx.com; ola.Salem @ofx.com; Huy.VanVu @ofx.com;Sammy.Won @ofx.com 
            var plainTextContent1 = "and easy to do anywhere, even with C#";
            var htmlContent1 = System.IO.File.ReadAllText(@"C:\dev\Payment-Tracker\PaymentTracker\ConsoleApp1\2.html");
            var msg1 = MailHelper.CreateSingleEmail(from1, to1, subject1, plainTextContent1, htmlContent1);
            var response1 = await client1.SendEmailAsync(msg1);

        }
        static async Task Execute()
        {

            var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");
            var client = new SendGridClient("");
            var from = new EmailAddress("customer.service@ofx.com", "OFX | Customer Service ");
            var subject = "OFX | Payment Receipt (MT103)";
            var to = new EmailAddress("Sammy.Won@ofx.com", "Track-r");
            //annies.mohammad @ofx.com; ola.Salem @ofx.com; Huy.VanVu @ofx.com;Sammy.Won @ofx.com 
            var plainTextContent = "and easy to do anywhere, even with C#";
            var htmlContent = System.IO.File.ReadAllText(@"C:\dev\Payment-Tracker\PaymentTracker\ConsoleApp1\1.html");
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }
    }
}
