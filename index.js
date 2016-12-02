/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

var request = require('request');
var config = require('config');
var chatworkConfigRoomId = config.Chatwork.room_id;
var chatworkConfigApiToken = config.Chatwork.api_token;

exports.sendChatwork = function sendChatwork (req, res) {
  var options = {
    url: 'https://api.chatwork.com/v1/rooms/' + chatworkConfigRoomId + '/messages',
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
      'X-ChatWorkToken': chatworkConfigApiToken,
    },
    form: { body : `from_slack [${req.body.user_name}]: ${req.body.text}` }
  };
  // request Chatwork API
  request(options, callback);

  function callback(error, response, body) {
    if (error == true) {
      console.log(body);
    }
  }

  res.send('ok');
};
