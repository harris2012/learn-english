using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnEnglish.Request
{
    public class KnwonRequest
    {
        [JsonProperty("word")]
        public string Word { get; set; }
    }
}