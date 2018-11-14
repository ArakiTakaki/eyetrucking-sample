const moment = require("moment");

/**
 * アクセスログをテーブル形式で出力するmiddleware
 */
module.exports = function(req, res, next) {
  const table = {
    time: moment().format("YYYY/MM/DD hh:mm:ss"),
    url: req.originalUrl,
    type: req.method,
    ip: req.ip
  };
  console.table(table);
  next();
};
