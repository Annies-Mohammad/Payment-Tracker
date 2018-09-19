using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using MT103Parser.Services;

namespace MT103Parser
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your swift message:");
            //var swiftMessage = Console.ReadLine();
            var swiftMessage = "{1:F01BOFAUS6SZSFX0000000000}{2:I103SCBLPKKXXXXXN}{3:{108:P481100015551}}{4:\r\n:20:P48110001555\r\n:23B:CRED\r\n:23E:CORT\r\n:32A:180420PKR291201,00\r\n:33B:PKR291201,00\r\n:50K:/14077957PKR1\r\nNATALIE BRADLEY\r\n9 LAKE VISTA EDGEWATER 6027 AU\r\n6027\r\n:52A:BOFAUS6SSFX\r\n:53B:/15961198801\r\n:57D:/SONEPKKA\r\nSONERI BANK PVT LTD SHOP NO 2, P\r\nLOT NO 30,\r\nQAZI COURT PK PK\r\nCITY UNKNOWN .. PK\r\n:59:/PK52SONE0006602012679085\r\nRM SALT\r\n9 LAKE VISTA\r\nEDGEWATER 6027 AU\r\n:70:REF:00014077957PKR1 GIFTEDANGELZ\r\n:71A:OUR\r\n:72:/RECEVRES/AU\r\n-}\r\n";
            var messageParser = new MessageParser();
            var parsedSwiftMessage = messageParser.SWIFTParserSingle(swiftMessage);
            Console.WriteLine(parsedSwiftMessage.BasicHeaderBlock);
            Console.WriteLine(parsedSwiftMessage.ApplicationHeaderBlock);
            foreach (var fileContent in parsedSwiftMessage.FileMessages.FileContent)
            {
                //Console.WriteLine(fileContent.ElementIndex);
                //Console.WriteLine(fileContent.ElementKey);
                //Console.WriteLine(fileContent.ElementValue);

                Console.WriteLine(fileContent.ElementName + ": " + fileContent.ElementValue);
                
            }
            Console.WriteLine();
            Console.ReadLine();


        }
    }
}
