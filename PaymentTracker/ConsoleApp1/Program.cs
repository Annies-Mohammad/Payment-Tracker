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
            Console.WriteLine("Hello World!");
            Execute().Wait();
            Console.Read();
        }
        static async Task Execute()
        {
            var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");
            var client = new SendGridClient("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");
            var from = new EmailAddress("Huy.VanVu@ofx.com", "Example User");
            var subject = "Payment tracker stage 1";
            var to = new EmailAddress("Jessica.Crocker@ofx.com", "Example User");
            //annies.mohammad @ofx.com; ola.Salem @ofx.com; Huy.VanVu @ofx.com;Sammy.Won @ofx.com 
            var plainTextContent = "and easy to do anywhere, even with C#";
            var htmlContent = letterContent();
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }

        internal static string letterContent()
        {
            string text = System.IO.File.ReadAllText(@"C:\dev\Payment-Tracker\PaymentTracker\ConsoleApp1\TextFile1.txt");
            return text;
        }
    }
}
