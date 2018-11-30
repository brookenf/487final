//YOUTUBE API here
// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('movie-trailer', {
      height: '360',
      width: '640',
      videoId: 'nSbzyEJ8X9E'
    });
  }


$(function(){
  console.log('scripts loaded');

  //First AJAX using OMBD
  var myOMBDKey = config.MY_OMDBKEY;
  var moviesHtml = '';
  var omdbUrl = 'https://www.omdbapi.com/?apikey='+ myOMBDKey + '&s=a+star+is+born';
  var movieData = [];
  var songsData= [];
  var movies = [];
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: movieData,
    url: omdbUrl,
    success: function(movieData){
      movies = movieData.Search;
      moviesHtml += '<h2>A Star is Born</h2>';
      movies.sort(function(a,b){
        return a.Year - b.Year
      });
      console.log(movies);
      movies.forEach(function(movie){
        if((movie.Year == '1937' ||movie.Year == '1954' || movie.Year == '1976' || movie.Year == '2018') && movie.Poster != 'N/A'){
          moviesHtml += '<div class="posters flex">';
            moviesHtml += '<a target="_blank" href="https://www.imdb.com/title/' + movie.imdbID + '/">';
              moviesHtml += '<img class=poster-img alt="A Star is Born poster" src="'+ movie.Poster + '" />';
            moviesHtml += '</a>';
          moviesHtml += '</div>';
          $('.movies').html(moviesHtml);
        }
      });//end of movies for each
    },//end of success
    error: function(msg){
      console.log('You have messed up somewhere');
    }//end of error
  });//end of AJAX request

  var myNewsKey = config.MY_NEWSKEY;
  var newsUrl = 'https://newsapi.org/v2/everything?q=A+Star+is+Born&sortBy=publishedAt&apiKey=' + myNewsKey;
  var newsUrl2 = 'https://newsapi.org/v2/everything?q=Lady+Gaga&sortBy=publishedAt&apiKey=' + myNewsKey;
  var urlArray = [newsUrl, newsUrl2];
  var newsData = [];
  var newsHtml = '';
  var articles = [];
  var i = '';

  for (i = 0; i < urlArray.length; i++) {
    //MAKE AJAX call
    $.ajax({
      type: 'GET',
      url: urlArray[i],
      dataType: 'json',
      async:true,
      data: newsData,
      success: function(newsData){
        articles = newsData.articles;

        articles.forEach(function(article){
          console.log(article.title);
          newsHtml += '<div class="latest-news flex">';
            newsHtml += '<a href="' + article.url + '" target="_blank">';
            newsHtml += '<img class="thumbnail" src="' + article.urlToImage + '">';
            newsHtml += '<div class="text">';
            newsHtml += '<h2 class="headline">' + article.title + '</h2>';
            newsHtml += '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
            newsHtml += '</a>';
            newsHtml += '</div>';//text
          newsHtml += '</div>';//latest-news
          $('#results').html(newsHtml);
        });
      }
    });//end of AJAX
  }//end of urlArray for loop

  //second API ajax request
  // $.ajax({
  //   type: 'GET',
  //   dataType: 'json',
  //   data: songsData,
  //   url: itunesUrl,
  //   success: function(songsData){
  //     console.log(songsData);
  //   },//end of success
  //   error: function(msg){
  //     console.log('Please try again');
  //   }//end of error
  // });//end of AJAX request
});//end of document.ready
