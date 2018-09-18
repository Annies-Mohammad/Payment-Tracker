using MimeKit;
using MailKit.Net.Smtp;
using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using MailKit.Security;
using PaymentTracker_BLL;
using PaymentTracker_BLL.Mail.Dto;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace PaymentTracker_BLL.Mail.Impl
{
    public class MailMethods : IMailMethods
    {
        public MailMethods()
        {
         
        }

        public string SendMail(MailDto mail)
        {
            try
            {
                Execute().Wait();

                return "Completed";
            }
            catch(Exception ex)
            {
                return "Something went wrong!"+ ex.Message;
            }
        }
      
        private void TransmitEmail(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
                string domain = "ofx.com";
                client.LocalDomain = domain;
                string server = "smtp.office365.com";
                int portN = 587;
                client.Connect(server, portN, SecureSocketOptions.Auto);
                client.Send(message);
                client.Disconnect(true);
            }
        }

        static async Task Execute()
        {
            var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");
            var client = new SendGridClient("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");
            var from = new EmailAddress("annies.mohammad@ofx.com", "Example User");
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