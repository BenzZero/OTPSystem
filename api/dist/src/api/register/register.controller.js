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

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

var register = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var _req$body, username, password, name, db, hash;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password, name = _req$body.name;
            _context2.prev = 1;

            if (!(username && password && name)) {
              _context2.next = 13;
              break;
            }

            _context2.next = 5;
            return (0, _db2.default)();

          case 5:
            db = _context2.sent;
            _context2.next = 8;
            return _bcrypt2.default.hash(password, _config2.default.saltRounds).then(function (hash) {
              return hash;
            });

          case 8:
            hash = _context2.sent;
            _context2.next = 11;
            return db.query('INSERT INTO users (username, password, name, role, status) VALUES (\'' + username + '\', \'' + hash + '\', \'' + name + '\', \'admin\', 1)', function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(err, results) {
                var token;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!err) {
                          _context.next = 2;
                          break;
                        }

                        throw err;

                      case 2:
                        token = (0, _signin2.default)({ id: results.insertId, username: username });
                        return _context.abrupt('return', res.json({ success: 'register success', token: token, name: name }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 11:
            _context2.next = 14;
            break;

          case 13:
            return _context2.abrupt('return', res.json({ error: 'required', username: username, password: password, name: name }));

          case 14:
            return _context2.abrupt('return', res);

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2['catch'](1);

            logErr.error(_context2.t0);
            return _context2.abrupt('return', res);

          case 21:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[1, 17]]);
  }));

  return function register(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

router.post('/', register);
module.exports = router;