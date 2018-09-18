using System;
using System.Collections.Generic;
using System.Text;

namespace PaymentTracker_BLL.Mail.Dto
{
    public class MailDto
    {
        public string from { get; set; }
        public string to { get; set; }
        public string subject { get; set; }
        public string message { get; set; }
    }
}
