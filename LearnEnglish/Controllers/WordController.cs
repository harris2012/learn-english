using LearnEnglish.Repository;
using LearnEnglish.Request;
using LearnEnglish.Response;
using LearnEnglish.Vo;
using Savory.Utility.WebClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LearnEnglish.Controllers
{
    public class WordController : ApiController
    {
        VocabularyRepository repository = new VocabularyRepository();

        [HttpPost]
        public WordItemsResponse Items(WordItemsRequest request)
        {
            WordItemsResponse response = new WordItemsResponse();

            var entityList = repository.GetVocabularyList();
            if (entityList != null && entityList.Count > 0)
            {
                var wordList = new List<Word>();
                foreach (var entity in entityList)
                {
                    Word word = new Word();

                    word.English = entity.Word;
                    word.ExampleList = GetExamples(entity.Word);

                    wordList.Add(word);
                }
                response.WordList = wordList;
            }

            response.Status = 1;

            return response;
        }

        private List<Example> GetExamples(string word)
        {
            string host = string.Format("http://p1yyo3qx9.bkt.clouddn.com/vocabulary/{0}.txt", word);

            SavoryWebClient client = new SavoryWebClient();
            client.Host = host;
            client.HttpMethod = Savory.Utility.WebClient.HttpMethod.Get;
            client.SerializeMode = SerializeMode.Json;

            var examples = client.Request<List<Example>>();

            foreach (var example in examples)
            {
                example.Sentences = example.English.Split(new string[] { word }, StringSplitOptions.None).ToList();
            }

            return examples;
        }

        public SkipResponse Skip(SkipRequest request)
        {
            SkipResponse response = new SkipResponse();

            repository.Skip(request.Word);

            response.Status = 1;
            return response;
        }

        public KnownResponse Known(KnownRequest request)
        {
            KnownResponse response = new KnownResponse();

            repository.Known(request.Word);

            response.Status = 1;
            return response;
        }

        public MaybeResponse Maybe(MaybeRequest request)
        {
            MaybeResponse response = new MaybeResponse();

            repository.Maybe(request.Word);

            response.Status = 1;
            return response;
        }
    }
}
