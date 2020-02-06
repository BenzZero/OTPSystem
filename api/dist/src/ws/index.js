'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _index = require('../../index');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _db = require('../config/db');

var _db2 = _interopRequireDefault(_db);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var logErr = _log4js2.default.getLogger('error');

var broadcast = function broadcast(clients, messages) {
  clients.forEach(function (client) {
    client.send(messages);
  });
};

var messages = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ws, req) {
    var token, tokenmd5;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('Client connected..');
            token = req.params.token;


            if (token) {
              if (token.startsWith('sms')) {
                tokenmd5 = token.slice(3, token.length);

                if (tokenmd5 !== (0, _md2.default)('sms#systemotp')) {
                  ws.send('400');
                  ws.close();
                }
              } else {
                _jsonwebtoken2.default.verify(token, _config2.default.secretKey, function (err, decoded) {
                  if (err) {
                    ws.send('400');
                    ws.close();
                  }
                });
              }
            }

            ws.on('message', function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(msg) {
                var db, _JSON$parse, _messages, type, bankname, money, otp;

                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _db2.default)();

                      case 2:
                        db = _context.sent;
                        _context.prev = 3;
                        _JSON$parse = JSON.parse(msg), _messages = _JSON$parse.messages, type = _JSON$parse.type, bankname = _JSON$parse.bankname, money = _JSON$parse.money, otp = _JSON$parse.otp;

                        console.log(_messages, type, bankname, money, otp);

                        if (!(_messages && type && bankname)) {
                          _context.next = 9;
                          break;
                        }

                        _context.next = 9;
                        return db.query('INSERT INTO messages (messages, type, bankname, money, otp, users_id) VALUES (\'' + _messages + '\', \'' + type + '\', \'' + bankname + '\', \'' + (money || '') + '\', \'' + (otp || '') + '\', 1)', function (err, results) {
                          if (!err) {
                            console.log('scc');
                            broadcast(_index.aWss.clients, msg);
                          } else {
                            console.log('err');
                            ws.send('400');
                          }
                          console.log(err);
                        });

                      case 9:
                        _context.next = 15;
                        break;

                      case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](3);

                        logErr.error(_context.t0);
                        console.log(_context.t0);

                      case 15:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined, [[3, 11]]);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

            ws.on('close', function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(msg) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log('disconnected');

                      case 1:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, undefined);
              }));

              return function (_x4) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function messages(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = messages;