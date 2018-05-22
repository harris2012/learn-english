using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LearnEnglish.Repository.Entity
{
    /// <summary>
    /// 词汇
    /// </summary>
    public class VocabularyEntity
    {
        /// <summary>
        /// 单词
        /// </summary>
        public string Word { get; set; }

        /// <summary>
        /// 这词我会
        /// </summary>
        public int? IKnowIt { get; set; }

        /// <summary>
        /// 有点印象
        /// </summary>
        public int? Maybe { get; set; }

        /// <summary>
        /// 跳过的次数
        /// </summary>
        public int? SkipCount { get; set; }
    }
}