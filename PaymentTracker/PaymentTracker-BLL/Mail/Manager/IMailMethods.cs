using PaymentTracker_BLL.Mail.Dto;
using System.Collections.Generic;

namespace PaymentTracker_BLL
{
    public interface IMailMethods
    {
        string SendMail(MailDto mail);
    }
}
