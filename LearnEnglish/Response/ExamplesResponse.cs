using LearnEnglish.Vo;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnEnglish.Response
{
    public class ExamplesResponse: ResponseBase
    {
        [JsonProperty("examples")]
        public List<Example> ExampleList { get; set; }
    }
}