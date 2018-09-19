using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MT103Parser.Services
{
    public class MessageParser
    {
        private string _MessagesMessagesBody = "";

        public SwiftParser SWIFTParserSingle(string content)
        {
            SwiftParser fileSWift = new SwiftParser();
            fileSWift.Errors = new List<Error>();
            fileSWift.FileMessages = new MTmessages();
            fileSWift.hasError = false;
            ParserHeader(fileSWift, content);
            ParserBody(fileSWift, _MessagesMessagesBody);


            return fileSWift;

        }

        public List<SwiftParser> SWIFTParser(string content)
        {
            List<SwiftParser> AllFile = new List<SwiftParser>();
            string[] SeparatorsField = new string[] {"$"};

            string[] MessagesList = content.Split(SeparatorsField, StringSplitOptions.None);
            foreach (string messagecontent in MessagesList)
            {
                SwiftParser fileSWift = new SwiftParser();
                fileSWift.Errors = new List<Error>();
                fileSWift.FileMessages = new MTmessages();
                fileSWift.hasError = false;
                ParserHeader(fileSWift, messagecontent);
                ParserBody(fileSWift, _MessagesMessagesBody);
                AllFile.Add(fileSWift);
            }

            return AllFile;

        }

        public void ParserHeader(SwiftParser fileSWift, string Messages)
        {
            int ctIndex = Messages.IndexOf("}{", 1);
            if (ctIndex != -1)
            {
                fileSWift.BasicHeaderBlock = Messages.Substring(1, ctIndex - 1);

                int ctIndexAp = Messages.IndexOf("}{4:", ctIndex + 2);
                if (ctIndexAp != -1)
                {
                    fileSWift.ApplicationHeaderBlock = Messages.Substring(ctIndex + 2, ctIndexAp - ctIndex - 1);

                    int ctIndexBody = Messages.IndexOf("-}{", ctIndexAp + 2);
                    if (ctIndexBody != -1)
                    {
                        _MessagesMessagesBody = Messages.Substring(ctIndexAp + 6, ctIndexBody - ctIndexAp - 5);
                        fileSWift.TrailerBlock = Messages.Substring(ctIndexBody + 3, Messages.Length - ctIndexBody - 4);
                    }
                    else
                    {
                        _MessagesMessagesBody = Messages.Substring(ctIndexAp + 6, Messages.Length - 7 - ctIndexAp);
                        fileSWift.TrailerBlock = "";
                        Error e = new Error();
                        e.ErrorIndex = 0;
                        e.ErrorName = "TrailerBlock";
                        e.ErrorDescripation = "TrailerBlock not found";
                        fileSWift.Errors.Add(e);
                    }
                }
                else
                {
                    Error e = new Error();
                    e.ErrorIndex = 0;
                    e.ErrorName = "ApplicationHeaderBlock";
                    e.ErrorDescripation = "ApplicationHeaderBlock not found";
                    fileSWift.Errors.Add(e);
                }

            }
            else
            {
                Error e = new Error();
                e.ErrorIndex = 0;
                e.ErrorName = "BasicHeaderBlock";
                e.ErrorDescripation = "BasicHeaderBlock not found";
                fileSWift.Errors.Add(e);
                fileSWift.hasError = true;
            }


        }

        public void ParserBody(SwiftParser fileSWift, string MessagesBody)
        {
            int ct = 1;
            MTmessages mtFile = new MTmessages();
            mtFile.FileContent = new List<Element>();
            mtFile.Errors = new List<Error>();
            if (fileSWift.Errors == null)
            {
                fileSWift.Errors = new List<Error>();
            }

            string[] SeparatorsField = new string[] {Environment.NewLine + ":"};
            string sContent = MessagesBody.Remove(0, 1);
            string[] findata = sContent.Split(SeparatorsField, StringSplitOptions.None);
            foreach (string s1 in findata)
            {

                BindFile(mtFile, s1, ct);
                ct = ct + 1;
            }

            fileSWift.FileMessages = mtFile;
            if (mtFile.Errors.Count > 0)
            {
                fileSWift.Errors.AddRange(mtFile.Errors);
            }
        }

        private void BindFile(MTmessages mtFile, string value, int Lineindex)
        {
            char[] stringSeparators1 = ":".ToCharArray();
            string[] s3 = value.Split(stringSeparators1, 2);
            if (s3.Length == 2)
            {
                try
                {
                    mtFile.FileContent.Add(new Element
                    {
                        ElementIndex = Lineindex,
                        ElementKey = s3[0],
                        ElementValue = GetElementValue(s3[0], s3[1]),
                        ElementName = GetElementName(s3[0])
                    });
                }
                catch (Exception ex)
                {
                    Error e = new Error();
                    e.ErrorIndex = Lineindex;
                    e.ErrorName = value;
                    e.ErrorDescripation = ex.Message;
                    mtFile.Errors.Add(e);
                    mtFile.hasError = false;
                }
            }
            else
            {
                Error e = new Error();
                e.ErrorIndex = Lineindex;
                e.ErrorName = value;
                e.ErrorDescripation = "Invalied format";
                mtFile.Errors.Add(e);
                mtFile.hasError = false;
            }
        }

        private string GetElementName(string elementIndex)
        {
            switch (elementIndex)
            {
                case "20":
                    return "Transaction Reference Number";
                case "23B":
                    return "Bank Operation Code";
                case "23E":
                    return "Instruction Code";
                case "32A":
                    return "Value Date / Currency / Interbank Settled";
                case "33B":
                    return "Currency / Original Ordered Amount";
                case "50K":
                    return "Ordering Customer (Payer)";
                case "52A":
                    return "Ordering Institution (Payer's Bank)";
                case "53B":
                    return "Sender's Correspondent (Bank)";
                case "57D":
                    return "Account with Institution (Beneficiary's Bank)";
                case "59":
                    return "Beneficiary";
                case "70":
                    return "Remittance Information (Payment Reference)";
                case "71A":
                    return "Details of Charges (BEN / OUR / SHA)";
                case "72":
                    return "Sender to Receiver Information";
                default:
                    return elementIndex;
            }
        }

        private string GetElementValue(string elementIndex, string elementValue)
        {
            switch (elementIndex)
            {
                case "23E":
                    switch (elementValue)
                    {
                        case "CHQB": return "CHQB (Cheque)";
                        case "CORT": return "CORT (Corporate Trade)";
                        case "HOLD": return "HOLD (Hold)";
                        case "INTC": return "INTC (Intra-Company Payment)";
                        default: return elementValue;
                    }
                case "71A":
                    switch (elementValue)
                    {
                        case "OUR": return "OUR (Our customer charged)";
                        case "SHA": return "CORT (Shared charges)";
                        case "BEN": return "BEN (Beneficiary)";
                        default: return elementValue;
                    }

                default: return elementValue;
            }
        }
    }
}
