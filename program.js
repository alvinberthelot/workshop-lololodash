var _ = require("lodash");

var worker = function(articles) {

  //var test = _.groupBy(articles, 'article');


  return _.chain(articles)
    .groupBy('article')
    .reduce(function(acc, articlesGB) {
      var monArticle = _.reduce(articlesGB, function(somme_articles, article){
        somme_articles.article = article.article;
        somme_articles.total_orders += article.quantity;
        return somme_articles;
      }, {total_orders: 0})
      acc.push(monArticle);
      return acc;
    }, [])
    .sortBy(function(articleGB){
      return articleGB.total_orders
    })
    .reverse()
    .value();
};

// export the worker function as a nodejs module
module.exports = worker;