using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnEnglish.Request
{
    public class SkipRequest
    {
        [JsonProperty("word")]
        public string Word { get; set; }
    }
}