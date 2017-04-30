$(document).ready(function() {
  var $body = $('body');
  var tweetCounter = 0;
  var endingIndex = 0;

  function updateTweets() {
    var index = streams.home.length - 1;
    while (index >= endingIndex) {
      var tweet = streams.home[index];
      var dateTime = tweet.created_at;
      var timePassed = jQuery.timeago(dateTime);
      var $tweet = $('<div><a class="user"></a><span class="createdAt"></span><p><span class="message"></span></p></span></div>');
      $tweet.find('.createdAt').text(dateTime);
      $tweet.find('.user').val(tweet.user);
      $tweet.find('.user').text(tweet.user);
      $tweet.find('.message').text('"'+tweet.message+'"');
      $tweet.find('.timePassed').text(timePassed);
      $tweet.appendTo("#tweetBody");
      index -= 1;
    }
    endingIndex= streams.home.length;
  }

  function filterUsers(selectedUser) {
    $('.user').each(function(){
         if($(this).html()!==selectedUser)
              $(this).parent().hide();
         });
  }

  //Update tweets button
  $("#updateTweets").click(function() {
    //need to show unhide tweets on update
    updateTweets();
    $(document).ready(function() {
      $('.user').click(function() {
        var selectedUser = this.value;
        filterUsers(selectedUser);

      });
    });

  });

  //Filter based on user selected
  $(document).ready(function() {
    $('.user').click(function() {
      var selectedUser = this.value;
      filterUsers(selectedUser);

      $("time.timeago").timeago();

    });
  });


  //Initialize Page
  updateTweets();

});
