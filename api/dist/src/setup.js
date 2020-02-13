'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use((0, _cors2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());

  app.use((0, _expressValidator2.default)({
    customValidators: {
      isArray: function isArray(value) {
        return Array.isArray(value);
      },
      arrayNotEmpty: function arrayNotEmpty(array) {
        return array.length > 0;
      }
    }
  }));

  setupRoutes(app);
  invalidRoute(app);
  app.use(_errorHandler2.default);
};

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _errorHandler = require('./config/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkToken = function checkToken(req, res, next) {
  var token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    _jsonwebtoken2.default.verify(token, _config2.default.secretKey, function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded.username;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

var setupRoutes = function setupRoutes(app) {
  console.log(_config2.default);
  app.use('/' + _config2.default.apiName + '/login', require('./api/login/login.controller'));
  app.use('/' + _config2.default.apiName + '/register', require('./api/register/register.controller'));
  app.use('/' + _config2.default.apiName + '/checkToken', checkToken, require('./api/checkToken/checkToken.controller'));
  app.use('/' + _config2.default.apiName + '/messages', checkToken, require('./api/messages/messages.controller'));
  app.use('/' + _config2.default.apiName + '/setting_account', checkToken, require('./api/setting_account/setting_account.controller'));
  app.use('/' + _config2.default.apiName + '/files-apk', checkToken, require('./api/files-apk/files-apk.controller'));
  app.ws('/' + _config2.default.apiName + '/socket/messages/:token', require('./ws'));
};

var invalidRoute = function invalidRoute(app) {
  app.use(function (req, res, next) {
    var error = new Error();
    error.message = 'Invalid route';
    error.status = 404;
    next(error);
  });
};