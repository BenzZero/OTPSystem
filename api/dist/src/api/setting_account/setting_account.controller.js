'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _db = require('../../config/db');

var _db2 = _interopRequireDefault(_db);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var logErr = _log4js2.default.getLogger('error');

var router = _express2.default.Router();

var setting_account_get = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var id, db;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.decoded.id;

            console.log(id);
            _context.next = 5;
            return (0, _db2.default)();

          case 5:
            db = _context.sent;
            _context.next = 8;
            return db.query('SELECT username, name, role, status FROM users WHERE id = ' + id, function (err, results) {
              if (err) throw err;
              return res.json(results);
            });

          case 8:
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](0);

            logErr.error(_context.t0);
            return _context.abrupt('return', res);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 10]]);
  }));

  return function setting_account_get(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var setting_account_set = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    var _req$body, name, password, passwordConfirm, id, db, hash;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, password = _req$body.password, passwordConfirm = _req$body.passwordConfirm;

            if (!(password === passwordConfirm)) {
              _context2.next = 12;
              break;
            }

            id = req.decoded.id;
            _context2.next = 6;
            return (0, _db2.default)();

          case 6:
            db = _context2.sent;
            _context2.next = 9;
            return _bcrypt2.default.hash(password, _config2.default.saltRounds).then(function (hash) {
              return hash;
            });

          case 9:
            hash = _context2.sent;
            _context2.next = 12;
            return db.query('UPDATE users SET name=\'' + name + '\', password=\'' + hash + '\' WHERE id = ' + id, function (err, results) {
              if (err) throw err;
              return res.json(results);
            });

          case 12:
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2['catch'](0);

            logErr.error(_context2.t0);
            return _context2.abrupt('return', res);

          case 18:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 14]]);
  }));

  return function setting_account_set(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

router.get('/', setting_account_get);
router.post('/', setting_account_set);
module.exports = router;