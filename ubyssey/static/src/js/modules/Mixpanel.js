module.exports = {
  pageView: function(type, article, index) {
    var evt = {
      'Page Title': document.title,
      'URL': window.location.pathname,
      'Page Type': type || 'page'
    };

    if (type === 'article') {
      evt['Headline'] = article.data('headline');
      evt['Author'] = article.data('author');
      evt['Section'] = article.data('section');
    }

    if (index) {
      evt['Scroll Depth'] = index;
    }

    mixpanel.track('Page View', evt);
  },

  shareArticle: function(platform, article) {
    mixpanel.track('Share Article', {
      'Social Platform': platform,
      'Headline': article.data('headline'),
      'Author': article.data('author'),
      'Section': article.data('section')
    });
  }
}
