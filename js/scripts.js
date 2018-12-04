//YOUTUBE API here
// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var chosenId = '';
  var modals = document.getElementsByClassName('modal');
  for (var j = 0; j < modals.length; j++) {
    console.log(modals[j]);
    $('#just-dance').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').show();
      $('#player4').hide();
      $('#player5').hide();
      $('#player6').hide();
      $('#player7').hide();
      $('#player8').hide();
      $('#player9').hide();
      $('#player10').hide();
      $('#player11').hide();
    });
    $('#alejandro').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').show();
      $('#player5').hide();
      $('#player6').hide();
      $('#player7').hide();
      $('#player8').hide();
      $('#player9').hide();
      $('#player10').hide();
      $('#player11').hide();
    });
    $('#edge-glory').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').hide();
      $('#player5').show();
      $('#player6').hide();
      $('#player7').hide();
      $('#player8').hide();
      $('#player9').hide();
      $('#player10').hide();
      $('#player11').hide();
      $('#player12').hide();
    });
    $('#paparazzi').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').hide();
      $('#player5').hide();
      $('#player6').show();
      $('#player7').hide();
      $('#player8').hide();
      $('#player9').hide();
      $('#player10').hide();
      $('#player11').hide();
      $('#player12').hide();
    });
    $('#aura').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').hide();
      $('#player5').hide();
      $('#player6').hide();
      $('#player7').show();
      $('#player8').hide();
      $('#player9').hide();
      $('#player10').hide();
      $('#player11').hide();
      $('#player12').hide();
    });
    $('#anything-goes').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').hide();
      $('#player5').hide();
      $('#player6').hide();
      $('#player7').hide();
      $('#player8').show();
      $('#player9').hide();
      $('#player10').hide();
      $('#player11').hide();
      $('#player12').hide();
    });
    $('#million-reasons').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').hide();
      $('#player5').hide();
      $('#player6').hide();
      $('#player7').hide();
      $('#player8').hide();
      $('#player9').show();
      $('#player10').hide();
      $('#player11').hide();
      $('#player12').hide();
    });
    $('#cure').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').hide();
      $('#player5').hide();
      $('#player6').hide();
      $('#player7').hide();
      $('#player8').hide();
      $('#player9').hide();
      $('#player10').show();
      $('#player11').hide();
      $('#player12').hide();
    });
    $('#superbowl').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').hide();
      $('#player5').hide();
      $('#player6').hide();
      $('#player7').hide();
      $('#player8').hide();
      $('#player9').hide();
      $('#player10').hide();
      $('#player11').show();
      $('#player12').hide();
    });
    $('#shallow').click(function(){
      $('.modal').css('display', 'block');
      $('#player2').hide();
      $('#player4').hide();
      $('#player5').hide();
      $('#player6').hide();
      $('#player7').hide();
      $('#player8').hide();
      $('#player9').hide();
      $('#player10').hide();
      $('#player11').hide();
      $('#player12').show();
    });
  }//end of modal for loop

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var playerInfoList = [{
    id: 'player1',//star is born trailer
    height: '390',
    width: '640',
    videoId: 'nSbzyEJ8X9E'
  }, {
      id: 'player2',//Just Dance
      height: '390',
      width: '640',
      videoId: '2Abk1jAONjw'
  }, {
      id: 'player3',//til it happens to you
      height: '390',
      width: '640',
      videoId: 'ZmWBrN7QV6Y'
  }, {
      id: 'player4',//alejandro
      height: '390',
      width: '640',
      videoId: 'niqrrmev4mA'
  }, {
      id: 'player5',//edge of glory
      height: '390',
      width: '640',
      videoId: 'QeWBS0JBNzQ'
  },{
      id: 'player6',//paparazzi
      height: '390',
      width: '640',
      videoId: 'd2smz_1L2_0'
  },{
      id: 'player7',//aura
      height: '390',
      width: '640',
      videoId: 'V6qXX82I-Hs'
  },{
      id: 'player8',//anything goes
      height: '390',
      width: '640',
      videoId: 'Fg1meK-IgOM'
  },{
      id: 'player9',//million reasons
      height: '390',
      width: '640',
      videoId: 'en2D_5TzXCA'
  },{
      id: 'player10',//cure
      height: '390',
      width: '640',
      videoId: 'O8VadpIgvbw'
  },{
      id: 'player11',//superbowl
      height: '390',
      width: '640',
      videoId: 'txXwg712zw4'
  },{
      id: 'player12',//shallow
      height: '390',
      width: '640',
      videoId: 'bo_efYhYU2A'
  }];

  function onYouTubeIframeAPIReady() {
    //Get the chosenId based on the place in the timeline
      if (typeof playerInfoList === 'undefined') return;

      for (var i = 0; i < playerInfoList.length; i++) {
          var curplayer = createPlayer(playerInfoList[i]);
          players[i] = curplayer;
      }
  }

  var players = new Array();

  function createPlayer(playerInfo) {
      return new YT.Player(playerInfo.id, {
          height: playerInfo.height,
          width: playerInfo.width,
          videoId: playerInfo.videoId,
      });
  }

$(function(){
  console.log('scripts loaded');

  $('.close').click(function(){
    $('.modal').css('display', 'none');
  });
  //Timeline
  (function() {

    // VARIABLES
    const timeline = document.querySelector(".timeline ol"),
      elH = document.querySelectorAll(".timeline li > div"),
      arrows = document.querySelectorAll(".timeline .arrows .arrow"),
      arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
      arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
      firstItem = document.querySelector(".timeline li:first-child"),
      lastItem = document.querySelector(".timeline li:last-child"),
      xScrolling = 280,
      disabledClass = "disabled";

    // START
    window.addEventListener("load", init);

    function init() {
      setEqualHeights(elH);
      animateTl(xScrolling, arrows, timeline);
      setSwipeFn(timeline, arrowPrev, arrowNext);
      setKeyboardFn(arrowPrev, arrowNext);
    }

    // SET EQUAL HEIGHTS
    function setEqualHeights(el) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        const singleHeight = el[i].offsetHeight;

        if (counter < singleHeight) {
          counter = singleHeight;
        }
      }

      for (let i = 0; i < el.length; i++) {
        el[i].style.height = `${counter}px`;
      }
    }

    // CHECK IF AN ELEMENT IS IN VIEWPORT
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // SET STATE OF PREV/NEXT ARROWS
    function setBtnState(el, flag = true) {
      if (flag) {
        el.classList.add(disabledClass);
      } else {
        if (el.classList.contains(disabledClass)) {
          el.classList.remove(disabledClass);
        }
        el.disabled = false;
      }
    }

    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function() {
          if (!arrowPrev.disabled) {
            arrowPrev.disabled = true;
          }
          if (!arrowNext.disabled) {
            arrowNext.disabled = true;
          }
          const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
          if (counter === 0) {
            tl.style.transform = `translateX(-${scrolling}px)`;
          } else {
            const tlStyle = getComputedStyle(tl);
            // add more browser prefixes if needed here
            const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
            const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
            tl.style.transform = `translateX(${values}px)`;
          }

          setTimeout(() => {
            isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
            isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
          }, 1100);

          counter++;
        });
      }
    }

    // ADD BASIC KEYBOARD FUNCTIONALITY
    function setKeyboardFn(prev, next) {
      document.addEventListener("keydown", (e) => {
        if ((e.which === 37) || (e.which === 39)) {
          const timelineOfTop = timeline.offsetTop;
          const y = window.pageYOffset;
          if (timelineOfTop !== y) {
            window.scrollTo(0, timelineOfTop);
          }
          if (e.which === 37) {
            prev.click();
          } else if (e.which === 39) {
            next.click();
          }
        }
      });
    }

  })();

  //initializing card flip
  $('.card').click(function(){
    $(this).toggleClass('flipped');
  });

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
      moviesHtml += '<div class="movies-intro flex">';
        moviesHtml += '<h1>A Star Is Born</h1>';
        moviesHtml += '<p>The film <em>A Star Is Born</em>  tells the story of an actor down on his luck who discovers a talented woman that eventually becomes his muse. Through his guidance, she reaches stardom even as his own career wanes.</p>';
        moviesHtml += '<p>The original 1937 film starred Janet Gaynor and Fredric March. It was remade in 1954 as a musical starring Judy Garland and James Mason. In 1976, Barbara Streisand and Kris Kristofferson. The 1976 version introduced us to a singer instead of an actor but followed the same plotline.</p>';
        moviesHtml += '<p>Bradley Cooper, in the role of director, brought Lady Gaga to star as his leading lady. Devoid of her usual blonde locks, Gaga stars as the unknown singer who is discovered by Cooper and eventually becomes a big star through his help and guidance.</p>';
      moviesHtml += '</div>';
      movies.sort(function(a,b){
        return a.Year - b.Year
      });
      console.log(movies);
      movies.forEach(function(movie){
        if((movie.Year == '1937' ||movie.Year == '1954' || movie.Year == '1976' || movie.Year == '2018') && movie.Poster != 'N/A'){
            moviesHtml += '<a class="posters flex"target="_blank" href="https://www.imdb.com/title/' + movie.imdbID + '/">';
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

  //news API
  var myNewsKey = config.MY_NEWSKEY;
  var newsUrl = 'https://newsapi.org/v2/everything?q=Lady+Gaga&sortBy=relevancy&pageSize=3&apiKey=' + myNewsKey;
  var newsUrl2 = 'https://newsapi.org/v2/everything?q=A+Star+is+Born&sortBy=relevancy&pageSize=3&apiKey=' + myNewsKey;
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
          newsHtml += '<a href="' + article.url + '" target="_blank">';
          newsHtml += '<div class="latest-news flex">';
            newsHtml += '<img class="thumbnail" src="' + article.urlToImage + '">';
              newsHtml += '<div class="text">';
                newsHtml += '<h2 class="headline">' + article.title + '</h2>';
                newsHtml += '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
              newsHtml += '</div>';//text
            newsHtml += '</div>';//latest-news
          newsHtml += '</a>';
          $('#results').html(newsHtml);
        });
      }
    });//end of AJAX
  }//end of urlArray for loop
});//end of document.ready
