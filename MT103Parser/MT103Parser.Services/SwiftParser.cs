using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MT103Parser.Services
{
    public class SwiftParser
    {
        public string BasicHeaderBlock { get; set; }
        public string ApplicationHeaderBlock { get; set; }
        public string UserHeaderBlock { get; set; }
        public MTmessages FileMessages { get; set; }
        public string TrailerBlock { get; set; }
        public List<Error> Errors { get; set; }
        public bool hasError { get; set; }
    }
    public class MTmessages
    {
        public List<Element> FileContent { get; set; }
        public List<Error> Errors { get; set; }
        public bool hasError { get; set; }
    }
    public class Element
    {
        public int ElementIndex { get; set; }
        public string ElementKey { get; set; }
        public string ElementValue { get; set; }
        public string ElementName { get; set; }
    }
    public class Error
    {
        public int ErrorIndex { get; set; }
        public string ErrorName { get; set; }
        public string ErrorDescripation { get; set; }
    }
}
