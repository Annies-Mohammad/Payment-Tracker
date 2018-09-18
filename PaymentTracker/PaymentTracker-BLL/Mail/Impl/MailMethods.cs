using MimeKit;
using MailKit.Net.Smtp;
using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Data;
using MailKit.Security;
using PaymentTracker_BLL;
using PaymentTracker_BLL.Mail.Dto;

namespace PaymentTracker_BLL.Mail.Impl
{
    public class MailMethods : IMailMethods
    {
        public MailMethods()
        {
         
        }


        public void SendBatchJobMail(string filename)
        {
            MailDto mail = new MailDto();
            mail.to = "annies.mohammad@ofx.com";
            mail.from = "paymenttracker@rthealthfund.com.au";
            mail.subject = "RT Direct Debit Run";
            string[] lines = File.ReadAllLines(filename);
            foreach (var r in lines)
            {
                mail.message = mail.message + r + "<br />";
            }
            SendMail(mail);
        }

       

        public string SendMail(MailDto mail)
        {
            try
            {
                var emailMessage = new MimeMessage();
                emailMessage.From.Add(new MailboxAddress("", mail.from));
                foreach (string toAdd in mail.to.Split(';'))
                {
                    emailMessage.To.Add(new MailboxAddress("", toAdd));
                }
                //emailMessage.To.Add(new MailboxAddress("", mail.to));
                emailMessage.Subject = mail.subject;
                emailMessage.Body = new TextPart("html") { Text = mail.message };

                TransmitEmail(emailMessage);

                return "Completed";
            }
            catch(Exception ex)
            {
                return "Something went wrong!"+ ex.Message;
            }
        }

        public string SendDocumentMail(MailDto mail)
        {
            try
            {
                var emailMessage = new MimeMessage();
                emailMessage.From.Add(new MailboxAddress("", mail.from));
                foreach (string toAdd in mail.to.Split(';'))
                {
                    emailMessage.To.Add(new MailboxAddress("", toAdd));
                }
                //emailMessage.To.Add(new MailboxAddress("", mail.to));
                emailMessage.Subject = mail.subject;
                var textPart = new TextPart("html") { Text = mail.message };

                var multiPart = new Multipart("mixed");
                multiPart.Add(textPart);

              

                emailMessage.Body = multiPart;
                TransmitEmail(emailMessage);

                return "Completed";
            }
            catch (Exception ex)
            {
                return "Something went wrong!" + ex.Message;
            }
        }

        private void TransmitEmail(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
               /* string domain = MailSettings.localDomian;
                client.LocalDomain = domain;
                string server = MailSettings.server;
                int portN = MailSettings.port;
                client.Connect(server, portN, SecureSocketOptions.Auto);
                client.Send(message);
                client.Disconnect(true);*/
            }
        }

    }
}