'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var logErr = _log4js2.default.getLogger('error');
var router = _express2.default.Router();

var filesApkAll = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _fs2.default.readdir(_path2.default.resolve(__dirname, '../../..', 'public/files/apk'), 'utf8', function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(err, files) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt('return', res.json({ files: files }));

                      case 1:
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

          case 3:
            _context2.next = 9;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2['catch'](0);

            logErr.error(_context2.t0);
            return _context2.abrupt('return', res);

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 5]]);
  }));

  return function filesApkAll(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var filesApkName = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
    var name, pathFile, file;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            name = req.params.name;
            pathFile = _path2.default.join(__dirname, '../../..', 'public/files/apk', name);
            file = _path2.default.resolve(pathFile);

            res.download(file);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            logErr.error(_context3.t0);
            return _context3.abrupt('return', res);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 7]]);
  }));

  return function filesApkName(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

router.get('/:name', filesApkName);
router.get('/', filesApkAll);
module.exports = router;