var express = require('express');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session: req.session });
});

router.post('/login', function(request, response, next) {
  var user_email_address = request.body.user_email_address;
  var user_password = request.body.user_password;

  if (user_email_address && user_password) {
    var query = `
      SELECT * FROM user_login 
      WHERE user_email = ?`; 

    database.query(query, [user_email_address], function(error, data) {
      if (error) {
        console.error('Database query error:', error);
        response.send('Error accessing database');
        return;
      }

      if (data.length > 0) {
        var passwordMatch = false;

        for (var count = 0; count < data.length; count++) {
          if (data[count].user_password === user_password) {
            passwordMatch = true;
            request.session.user_id = data[count].user_id;
            break; 
          }
        }

        if (passwordMatch) {
          response.redirect('/');
        } else {
          response.send('Incorrect Password');
        }
      } else {
        response.send('Incorrect Email Address');
      }
    });
  } else {
    response.send('Please Enter Email Address and Password Details');
  }
});

router.get('/logout', function(request, response, next) {
  request.session.destroy();
  response.redirect('/');
});

module.exports = router;
