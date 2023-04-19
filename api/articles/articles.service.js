const Article = require('./articles.schema')

class ArticleService {
  create(data) {
    const article = new Article(data)
    return article.save()
  }

  update(id, data) {
    const article = Article.findByIdAndUpdate(id, data, {
      new: true
    })
    return article
  }

  delete(id) {
    return Article.findByIdAndDelete(id)
  }
}

module.exports = new ArticleService()