using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnEnglish.Vo
{
    public class Word
    {
        [JsonProperty("english")]
        public string English { get; set; }

        [JsonProperty("examples")]
        public List<Example> ExampleList { get; set; }
    }
}