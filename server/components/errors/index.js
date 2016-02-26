/**
 * Error responses
 */

'use strict';

module.exports[404] = function pageNotFound(req, res) {
  var viewFilePath = '404';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  res.status(result.status);
<<<<<<< HEAD
  res.render(viewFilePath, {}, function(err, html) {
    if (err) {
      return res.json(result, result.status);
    }

    res.send(html);
=======
  res.render(viewFilePath, function (err) {
    if (err) { return res.json(result, result.status); }

    res.render(viewFilePath);
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  });
};
