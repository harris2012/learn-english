using LearnEnglish.Repository.Entity;
using Savory.Dapper;
using System;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Linq;
using System.Web;

namespace LearnEnglish.Repository
{
    public class VocabularyRepository
    {
        public List<VocabularyEntity> GetVocabularyList()
        {
            using (var sqliteConn = ConnectionProvider.GetSqliteConn())
            {
                var sql = "SELECT Word FROM Vocabulary WHERE IKnowIt IS NULL AND SkipCount IS NULL AND Maybe IS NULL limit 10";

                return sqliteConn.Query<VocabularyEntity>(sql).ToList();
            }
        }


        public void Skip(string word)
        {
            var sql = "Update Vocabulary Set SkipCount = 1 WHERE Word = @Word";

            using (var sqliteConn = ConnectionProvider.GetSqliteConn())
            {
                sqliteConn.Execute(sql, new { Word = word });
            }
        }

        public void Known(string word)
        {
            var sql = "Update Vocabulary Set IKnowIt = 1 WHERE Word = @Word";

            using (var sqliteConn = ConnectionProvider.GetSqliteConn())
            {
                sqliteConn.Execute(sql, new { Word = word });
            }
        }

        public void Maybe(string word)
        {
            var sql = "Update Vocabulary Set Maybe = 1 WHERE Word = @Word";

            using (var sqliteConn = ConnectionProvider.GetSqliteConn())
            {
                sqliteConn.Execute(sql, new { Word = word });
            }
        }
    }
}