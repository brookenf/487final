$(function(){
  console.log('scripts loaded');
  var myOMBDKey = config.MY_OMDBKEY;
  var html = '';
  var omdbUrl = 'https://www.omdbapi.com/?apikey='+ myOMBDKey + '&s=harry+potter';
  var movieData = [];
  var songsData= [];
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: movieData,
    url: omdbUrl,
    success: function(movieData){
      console.log(movieData);
    },//end of success
    error: function(msg){
      console.log('You have messed up somewhere');
    }//end of error
  });//end of AJAX request

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
