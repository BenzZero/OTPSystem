'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('../../config/db');

var _db2 = _interopRequireDefault(_db);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var logErr = _log4js2.default.getLogger('error');
var router = _express2.default.Router();

var messages = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var type, db;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            type = req.query.type;
            _context.next = 4;
            return (0, _db2.default)();

          case 4:
            db = _context.sent;
            _context.next = 7;
            return db.query('SELECT id, messages, bankname, type, money, otp, createdAt FROM messages ' + (type ? 'WHERE TYPE=\'' + type + '\'' : '') + ' ORDER BY id DESC LIMIT 5', function (err, results) {
              if (err) throw err;
              return res.json(results.reverse());
            });

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);

            logErr.error(_context.t0);
            return _context.abrupt('return', res);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 9]]);
  }));

  return function messages(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

router.get('/', messages);
module.exports = router;