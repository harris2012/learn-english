using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnEnglish.Vo
{
    /// <summary>
    /// 例句
    /// </summary>
    public class Example
    {
        /// <summary>
        /// 英文句子
        /// </summary>
        [JsonProperty("en")]
        public string English { get; set; }

        /// <summary>
        /// 断句
        /// </summary>
        [JsonProperty("sentences")]
        public List<string> Sentences { get; set; }

        /// <summary>
        /// 中文翻译
        /// </summary>
        [JsonProperty("cn")]
        public string Chinese { get; set; }

        /// <summary>
        /// 来源
        /// </summary>
        [JsonProperty("href")]
        public string ReferenceHref { get; set; }

        /// <summary>
        /// 文字
        /// </summary>
        [JsonProperty("text")]
        public string ReferenceText { get; set; }
    }
}