'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _db = require('../../config/db');

var _db2 = _interopRequireDefault(_db);

var _signin = require('../../config/signin');

var _signin2 = _interopRequireDefault(_signin);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var logErr = _log4js2.default.getLogger('error');

var router = _express2.default.Router();

var login = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var _req$body, username, password, db;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            _context.prev = 1;
            _context.next = 4;
            return (0, _db2.default)();

          case 4:
            db = _context.sent;

            if (!(username && password)) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return db.query('SELECT * FROM users WHERE username = \'' + username + '\'', function (err, results) {
              if (err) throw err;
              if (results.length > 0) {
                var loginStatus = _bcrypt2.default.compareSync(password, results[0].password);
                if (loginStatus) {
                  var token = (0, _signin2.default)({ id: results[0].id, username: username });
                  return res.json({ success: 'login success', token: token, id: results[0].id, username: results[0].username, name: results[0].name, role: results[0].role });
                }
              }
              return res.json({ error: 'login failed' });
            });

          case 8:
            _context.next = 11;
            break;

          case 10:
            return _context.abrupt('return', res.json({ error: 'required', username: username, password: password }));

          case 11:
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](1);

            logErr.error(_context.t0);
            return _context.abrupt('return', res);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 13]]);
  }));

  return function login(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

router.post('/', login);
module.exports = router;