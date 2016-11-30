/**
 * Cloud Function.
 *
 * @param {object} event The Cloud Functions event.
 * @param {function} The callback function.
 */

var request = require('request');
var config = require('config');
var chatworkConfigRoomId = config.Chatwork.room_id
var chatworkConfigApiToken = config.Chatwork.api_token

hexports.sendChatwork = function sendChatwork (req, res) {

  var options = {
    url: 'https://api.chatwork.com/v1/rooms/' + chatworkConfigRoomId + '/messages',
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      'X-ChatWorkToken': chatworkConfigApiToken,
    },
    form: { body : `${req.body.text}` }
  };
  // request Chatwork API
  request(options, recallback);

  function recallback(error, response, body) {
    if (error == true) {
      console.log(body);
    }
  }

};
