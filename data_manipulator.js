$(document).ready(function() {
  var $body = $('body');

  function updateTweets() {
    var index = streams.home.length - 1;
    while (index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div><span class="createdAt"></span><button class="user"></button><span class="message"></span></div>');
      $tweet.find('.createdAt').text(tweet.created_at);
      $tweet.find('.user').val(tweet.user);
      $tweet.find('.user').text(tweet.user);
      $tweet.find('.message').text(tweet.message);
      // $tweet.text(tweet.created_at + '@' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($body);
      index -= 1;
    }
  }

  function filterUsers(selectedUser) {
  }

  //Update tweets button
  $("#updateTweets").click(function() {
    updateTweets();
  });

  //Filter based on user selected
  $(document).ready(function() {
    $('.user').click(function() {
      var selectedUser = this.value;
      $('.user').each(function(){
           if($(this).html()!==selectedUser)
                $(this).parent().hide();
           });
    });
  });


  //Initialize Page
  updateTweets();

});
