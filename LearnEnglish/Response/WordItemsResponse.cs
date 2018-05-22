using LearnEnglish.Vo;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnEnglish.Response
{
    public class WordItemsResponse : ResponseBase
    {
        [JsonProperty("words")]
        public List<Word> WordList { get; set; }
    }
}