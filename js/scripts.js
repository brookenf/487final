//YOUTUBE API here
// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var playerInfoList = [{
    id: 'player1',//star is born trailer
    height: '390',
    width: '640',
    videoId: 'nSbzyEJ8X9E'
  }, {
      id: 'player2',//just dance
      height: '390',
      width: '640',
      videoId: '2Abk1jAONjw'
  }, {
      id: 'player3',//paparazzi
      height: '390',
      width: '640',
      videoId: 'd2smz_1L2_0'
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
  }, {
      id: 'player6',//aura
      height: '390',
      width: '640',
      videoId: 'V6qXX82I-Hs'
  }, {
      id: 'player7',//anything goes
      height: '390',
      width: '640',
      videoId: 'Fg1meK-IgOM'
  }, {
      id: 'player8',//million reasons
      height: '390',
      width: '640',
      videoId: 'en2D_5TzXCA'
  }, {
      id: 'player9',//the cure
      height: '390',
      width: '640',
      videoId: 'O8VadpIgvbw'
  }, {
      id: 'player10',//shallow
      height: '390',
      width: '640',
      videoId: 'bo_efYhYU2A'
  }, {
      id: 'player11',//til it happens to you
      height: '390',
      width: '640',
      videoId: 'ZmWBrN7QV6Y'
  }, {
      id: 'player12',//superbowl video
      height: '390',
      width: '640',
      videoId: 'txXwg712zw4'
  }];

  function onYouTubeIframeAPIReady() {
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

  // Get the modal
var modal = document.getElementById('just-dance');
var modal2 = document.getElementById('paparazzi');
var modal3 = document.getElementById('alejandro');
var modal4 = document.getElementById('edge-glory');
var modal5 = document.getElementById('aura');
var modal6 = document.getElementById('anything-goes');
var modal7 = document.getElementById('million-reasons');
var modal8 = document.getElementById('cure');
var modal9 = document.getElementById('shallow');
var modal9 = document.getElementById('ssuperbowl');
// Get the button that opens the modal
var btn = document.getElementById("show-vid");
var btn2 = document.getElementById("show-vid2");
var btn3 = document.getElementById("show-vid3");
var btn4 = document.getElementById("show-vid4");
var btn5 = document.getElementById("show-vid5");
var btn6 = document.getElementById("show-vid6");
var btn7 = document.getElementById("show-vid7");
var btn8 = document.getElementById("show-vid8");
var btn9 = document.getElementById("show-vid9");
var btn10 = document.getElementById("show-vid10");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}
btn7.onclick = function() {
    modal7.style.display = "block";
}
btn8.onclick = function() {
    modal8.style.display = "block";
}
btn9.onclick = function() {
    modal9.style.display = "block";
}
btn10.onclick = function() {
    modal10.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onclick = function(event2) {
    if (event2.target == modal2) {
        modal2.style.display = "none";
    }
}
window.onclick = function(event3) {
    if (event3.target == modal3) {
        modal3.style.display = "none";
    }
}
window.onclick = function(event4) {
    if (event4.target == modal4) {
        modal4.style.display = "none";
    }
}
window.onclick = function(event5) {
    if (event5.target == modal5) {
        modal5.style.display = "none";
    }
}
window.onclick = function(event6) {
    if (event6.target == modal6) {
        modal6.style.display = "none";
    }
}
window.onclick = function(event7) {
    if (event7.target == modal7) {
        modal7.style.display = "none";
    }
}
window.onclick = function(event8) {
    if (event8.target == modal8) {
        modal8.style.display = "none";
    }
}
window.onclick = function(event9) {
    if (event9.target == modal9) {
        modal9.style.display = "none";
    }
}
window.onclick = function(event10) {
    if (event10.target == modal10) {
        modal10.style.display = "none";
    }
}

$(function(){
  console.log('scripts loaded');

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
