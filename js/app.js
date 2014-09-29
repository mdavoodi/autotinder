var tinder = require('tinderjs').TinderClient;
var _ = require('underscore');

// Process URL and grab token
var url = process.argv[3];
url = url.split('access_token=');
url = url[1].split('&');

var access_token = url[0];
var facebook_id = process.argv[2];

var client = new tinder();
var count = 0;
var interval;


client.authorize(access_token, facebook_id, function(){
  interval = setInterval(function() {

  if (!client.isAuthorized) {
    console.log('Token is invalid. Please get another.');
  }
  client.getRecommendations(10, function(error, data){
    if (data && data.message === "recs timeout") {
      console.log('Recommendations timeout');
      return;
    }
    console.log(data);
   if(data != null) {
    _.chain(data.results)
      .each(function(v,k) {
        console.log(v.name);
        client.like(v._id, function(error, data) {
          count++;
          console.log('Count: ' + count);
          if (data && data.matched) {
            console.log('MATCHED!');
            console.log(user);
          }
        //   if (data.matched) {
        //     bot.client.sendMessage(
        //       id,
        //       "You're gorgeous. Let's adventure"
        //     );
        //   }
        });
      });
    }
    });
  }, 5000);
});

/**
function TinderBomb() {

}

module.exports = TinderBomb;
**/
