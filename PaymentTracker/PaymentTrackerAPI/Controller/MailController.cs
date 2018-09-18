using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;
using Newtonsoft.Json;
using PaymentTracker_BLL;
using PaymentTracker_BLL.Mail.Dto;

namespace PaymentTrackerAPI.Controller
{
     public class MailController 
    {

        private readonly IMailMethods _mailMethods;
        ///<summary>
        ///Sends e-mail to whom it is specified
        ///</summary>
        
        public MailController(IMailMethods mailMethods)
        {

            _mailMethods = mailMethods;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="mail"></param>
        /// <returns></returns>
        [Route("api/mail/send")]
        [HttpPost]
        public IActionResult SendMail([FromBody] MailDto mail)
        {
            
            return  JsonConverter.ser _mailMethods.SendMail(mail);
        }


    }
}