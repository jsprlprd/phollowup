(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global.Dropdown = factory(global.jQuery,global.Popper,global.Util));
}(this, (function ($,Popper,Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var cov_nnobgjulu = function () {
    var path = "C:\\Users\\Jasper Lepardo\\Desktop\\bootstrap-4.1.3\\js\\src\\dropdown.js",
        hash = "e8509000d67ef5566db962d55d6c3dd532dc07db",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "C:\\Users\\Jasper Lepardo\\Desktop\\bootstrap-4.1.3\\js\\src\\dropdown.js",
      statementMap: {
        "0": {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 492,
            column: 13
          }
        },
        "1": {
          start: {
            line: 19,
            column: 35
          },
          end: {
            line: 19,
            column: 45
          }
        },
        "2": {
          start: {
            line: 20,
            column: 35
          },
          end: {
            line: 20,
            column: 42
          }
        },
        "3": {
          start: {
            line: 21,
            column: 35
          },
          end: {
            line: 21,
            column: 48
          }
        },
        "4": {
          start: {
            line: 22,
            column: 35
          },
          end: {
            line: 22,
            column: 49
          }
        },
        "5": {
          start: {
            line: 23,
            column: 35
          },
          end: {
            line: 23,
            column: 46
          }
        },
        "6": {
          start: {
            line: 24,
            column: 35
          },
          end: {
            line: 24,
            column: 45
          }
        },
        "7": {
          start: {
            line: 25,
            column: 35
          },
          end: {
            line: 25,
            column: 37
          }
        },
        "8": {
          start: {
            line: 26,
            column: 35
          },
          end: {
            line: 26,
            column: 37
          }
        },
        "9": {
          start: {
            line: 27,
            column: 35
          },
          end: {
            line: 27,
            column: 36
          }
        },
        "10": {
          start: {
            line: 28,
            column: 35
          },
          end: {
            line: 28,
            column: 37
          }
        },
        "11": {
          start: {
            line: 29,
            column: 35
          },
          end: {
            line: 29,
            column: 37
          }
        },
        "12": {
          start: {
            line: 30,
            column: 35
          },
          end: {
            line: 30,
            column: 36
          }
        },
        "13": {
          start: {
            line: 31,
            column: 35
          },
          end: {
            line: 31,
            column: 108
          }
        },
        "14": {
          start: {
            line: 33,
            column: 16
          },
          end: {
            line: 42,
            column: 3
          }
        },
        "15": {
          start: {
            line: 44,
            column: 20
          },
          end: {
            line: 53,
            column: 3
          }
        },
        "16": {
          start: {
            line: 55,
            column: 19
          },
          end: {
            line: 61,
            column: 3
          }
        },
        "17": {
          start: {
            line: 63,
            column: 24
          },
          end: {
            line: 72,
            column: 3
          }
        },
        "18": {
          start: {
            line: 74,
            column: 18
          },
          end: {
            line: 80,
            column: 3
          }
        },
        "19": {
          start: {
            line: 82,
            column: 22
          },
          end: {
            line: 88,
            column: 3
          }
        },
        "20": {
          start: {
            line: 98,
            column: 6
          },
          end: {
            line: 98,
            column: 30
          }
        },
        "21": {
          start: {
            line: 99,
            column: 6
          },
          end: {
            line: 99,
            column: 27
          }
        },
        "22": {
          start: {
            line: 100,
            column: 6
          },
          end: {
            line: 100,
            column: 46
          }
        },
        "23": {
          start: {
            line: 101,
            column: 6
          },
          end: {
            line: 101,
            column: 45
          }
        },
        "24": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 102,
            column: 43
          }
        },
        "25": {
          start: {
            line: 104,
            column: 6
          },
          end: {
            line: 104,
            column: 31
          }
        },
        "26": {
          start: {
            line: 110,
            column: 6
          },
          end: {
            line: 110,
            column: 20
          }
        },
        "27": {
          start: {
            line: 114,
            column: 6
          },
          end: {
            line: 114,
            column: 20
          }
        },
        "28": {
          start: {
            line: 118,
            column: 6
          },
          end: {
            line: 118,
            column: 24
          }
        },
        "29": {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 126,
            column: 7
          }
        },
        "30": {
          start: {
            line: 125,
            column: 8
          },
          end: {
            line: 125,
            column: 14
          }
        },
        "31": {
          start: {
            line: 128,
            column: 23
          },
          end: {
            line: 128,
            column: 68
          }
        },
        "32": {
          start: {
            line: 129,
            column: 23
          },
          end: {
            line: 129,
            column: 61
          }
        },
        "33": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 131,
            column: 28
          }
        },
        "34": {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        },
        "35": {
          start: {
            line: 134,
            column: 8
          },
          end: {
            line: 134,
            column: 14
          }
        },
        "36": {
          start: {
            line: 137,
            column: 28
          },
          end: {
            line: 139,
            column: 7
          }
        },
        "37": {
          start: {
            line: 140,
            column: 24
          },
          end: {
            line: 140,
            column: 58
          }
        },
        "38": {
          start: {
            line: 142,
            column: 6
          },
          end: {
            line: 142,
            column: 34
          }
        },
        "39": {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 146,
            column: 7
          }
        },
        "40": {
          start: {
            line: 145,
            column: 8
          },
          end: {
            line: 145,
            column: 14
          }
        },
        "41": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 178,
            column: 7
          }
        },
        "42": {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 156,
            column: 9
          }
        },
        "43": {
          start: {
            line: 155,
            column: 10
          },
          end: {
            line: 155,
            column: 93
          }
        },
        "44": {
          start: {
            line: 158,
            column: 31
          },
          end: {
            line: 158,
            column: 44
          }
        },
        "45": {
          start: {
            line: 160,
            column: 8
          },
          end: {
            line: 169,
            column: 9
          }
        },
        "46": {
          start: {
            line: 161,
            column: 10
          },
          end: {
            line: 161,
            column: 35
          }
        },
        "47": {
          start: {
            line: 162,
            column: 15
          },
          end: {
            line: 169,
            column: 9
          }
        },
        "48": {
          start: {
            line: 163,
            column: 10
          },
          end: {
            line: 163,
            column: 51
          }
        },
        "49": {
          start: {
            line: 166,
            column: 10
          },
          end: {
            line: 168,
            column: 11
          }
        },
        "50": {
          start: {
            line: 167,
            column: 12
          },
          end: {
            line: 167,
            column: 56
          }
        },
        "51": {
          start: {
            line: 174,
            column: 8
          },
          end: {
            line: 176,
            column: 9
          }
        },
        "52": {
          start: {
            line: 175,
            column: 10
          },
          end: {
            line: 175,
            column: 55
          }
        },
        "53": {
          start: {
            line: 177,
            column: 8
          },
          end: {
            line: 177,
            column: 88
          }
        },
        "54": {
          start: {
            line: 184,
            column: 6
          },
          end: {
            line: 187,
            column: 7
          }
        },
        "55": {
          start: {
            line: 186,
            column: 8
          },
          end: {
            line: 186,
            column: 65
          }
        },
        "56": {
          start: {
            line: 189,
            column: 6
          },
          end: {
            line: 189,
            column: 27
          }
        },
        "57": {
          start: {
            line: 190,
            column: 6
          },
          end: {
            line: 190,
            column: 55
          }
        },
        "58": {
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 192,
            column: 47
          }
        },
        "59": {
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 195,
            column: 53
          }
        },
        "60": {
          start: {
            line: 199,
            column: 6
          },
          end: {
            line: 199,
            column: 43
          }
        },
        "61": {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 37
          }
        },
        "62": {
          start: {
            line: 201,
            column: 6
          },
          end: {
            line: 201,
            column: 26
          }
        },
        "63": {
          start: {
            line: 202,
            column: 6
          },
          end: {
            line: 202,
            column: 23
          }
        },
        "64": {
          start: {
            line: 203,
            column: 6
          },
          end: {
            line: 206,
            column: 7
          }
        },
        "65": {
          start: {
            line: 204,
            column: 8
          },
          end: {
            line: 204,
            column: 30
          }
        },
        "66": {
          start: {
            line: 205,
            column: 8
          },
          end: {
            line: 205,
            column: 27
          }
        },
        "67": {
          start: {
            line: 210,
            column: 6
          },
          end: {
            line: 210,
            column: 43
          }
        },
        "68": {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 213,
            column: 7
          }
        },
        "69": {
          start: {
            line: 212,
            column: 8
          },
          end: {
            line: 212,
            column: 37
          }
        },
        "70": {
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 223,
            column: 8
          }
        },
        "71": {
          start: {
            line: 220,
            column: 8
          },
          end: {
            line: 220,
            column: 30
          }
        },
        "72": {
          start: {
            line: 221,
            column: 8
          },
          end: {
            line: 221,
            column: 31
          }
        },
        "73": {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 222,
            column: 21
          }
        },
        "74": {
          start: {
            line: 227,
            column: 6
          },
          end: {
            line: 231,
            column: 7
          }
        },
        "75": {
          start: {
            line: 233,
            column: 6
          },
          end: {
            line: 237,
            column: 7
          }
        },
        "76": {
          start: {
            line: 239,
            column: 6
          },
          end: {
            line: 239,
            column: 19
          }
        },
        "77": {
          start: {
            line: 243,
            column: 6
          },
          end: {
            line: 248,
            column: 7
          }
        },
        "78": {
          start: {
            line: 244,
            column: 23
          },
          end: {
            line: 244,
            column: 68
          }
        },
        "79": {
          start: {
            line: 245,
            column: 8
          },
          end: {
            line: 247,
            column: 9
          }
        },
        "80": {
          start: {
            line: 246,
            column: 10
          },
          end: {
            line: 246,
            column: 58
          }
        },
        "81": {
          start: {
            line: 249,
            column: 6
          },
          end: {
            line: 249,
            column: 23
          }
        },
        "82": {
          start: {
            line: 253,
            column: 30
          },
          end: {
            line: 253,
            column: 57
          }
        },
        "83": {
          start: {
            line: 254,
            column: 22
          },
          end: {
            line: 254,
            column: 42
          }
        },
        "84": {
          start: {
            line: 257,
            column: 6
          },
          end: {
            line: 268,
            column: 7
          }
        },
        "85": {
          start: {
            line: 258,
            column: 8
          },
          end: {
            line: 258,
            column: 37
          }
        },
        "86": {
          start: {
            line: 259,
            column: 8
          },
          end: {
            line: 261,
            column: 9
          }
        },
        "87": {
          start: {
            line: 260,
            column: 10
          },
          end: {
            line: 260,
            column: 42
          }
        },
        "88": {
          start: {
            line: 262,
            column: 13
          },
          end: {
            line: 268,
            column: 7
          }
        },
        "89": {
          start: {
            line: 263,
            column: 8
          },
          end: {
            line: 263,
            column: 39
          }
        },
        "90": {
          start: {
            line: 264,
            column: 13
          },
          end: {
            line: 268,
            column: 7
          }
        },
        "91": {
          start: {
            line: 265,
            column: 8
          },
          end: {
            line: 265,
            column: 38
          }
        },
        "92": {
          start: {
            line: 266,
            column: 13
          },
          end: {
            line: 268,
            column: 7
          }
        },
        "93": {
          start: {
            line: 267,
            column: 8
          },
          end: {
            line: 267,
            column: 43
          }
        },
        "94": {
          start: {
            line: 269,
            column: 6
          },
          end: {
            line: 269,
            column: 22
          }
        },
        "95": {
          start: {
            line: 273,
            column: 6
          },
          end: {
            line: 273,
            column: 59
          }
        },
        "96": {
          start: {
            line: 277,
            column: 25
          },
          end: {
            line: 277,
            column: 27
          }
        },
        "97": {
          start: {
            line: 278,
            column: 6
          },
          end: {
            line: 288,
            column: 7
          }
        },
        "98": {
          start: {
            line: 279,
            column: 8
          },
          end: {
            line: 285,
            column: 9
          }
        },
        "99": {
          start: {
            line: 280,
            column: 10
          },
          end: {
            line: 283,
            column: 11
          }
        },
        "100": {
          start: {
            line: 284,
            column: 10
          },
          end: {
            line: 284,
            column: 21
          }
        },
        "101": {
          start: {
            line: 287,
            column: 8
          },
          end: {
            line: 287,
            column: 47
          }
        },
        "102": {
          start: {
            line: 290,
            column: 27
          },
          end: {
            line: 301,
            column: 7
          }
        },
        "103": {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 308,
            column: 7
          }
        },
        "104": {
          start: {
            line: 305,
            column: 8
          },
          end: {
            line: 307,
            column: 9
          }
        },
        "105": {
          start: {
            line: 309,
            column: 6
          },
          end: {
            line: 309,
            column: 25
          }
        },
        "106": {
          start: {
            line: 315,
            column: 6
          },
          end: {
            line: 330,
            column: 8
          }
        },
        "107": {
          start: {
            line: 316,
            column: 19
          },
          end: {
            line: 316,
            column: 41
          }
        },
        "108": {
          start: {
            line: 317,
            column: 24
          },
          end: {
            line: 317,
            column: 66
          }
        },
        "109": {
          start: {
            line: 319,
            column: 8
          },
          end: {
            line: 322,
            column: 9
          }
        },
        "110": {
          start: {
            line: 320,
            column: 10
          },
          end: {
            line: 320,
            column: 44
          }
        },
        "111": {
          start: {
            line: 321,
            column: 10
          },
          end: {
            line: 321,
            column: 38
          }
        },
        "112": {
          start: {
            line: 324,
            column: 8
          },
          end: {
            line: 329,
            column: 9
          }
        },
        "113": {
          start: {
            line: 325,
            column: 10
          },
          end: {
            line: 327,
            column: 11
          }
        },
        "114": {
          start: {
            line: 326,
            column: 12
          },
          end: {
            line: 326,
            column: 62
          }
        },
        "115": {
          start: {
            line: 328,
            column: 10
          },
          end: {
            line: 328,
            column: 24
          }
        },
        "116": {
          start: {
            line: 334,
            column: 6
          },
          end: {
            line: 337,
            column: 7
          }
        },
        "117": {
          start: {
            line: 336,
            column: 8
          },
          end: {
            line: 336,
            column: 14
          }
        },
        "118": {
          start: {
            line: 339,
            column: 22
          },
          end: {
            line: 339,
            column: 84
          }
        },
        "119": {
          start: {
            line: 340,
            column: 6
          },
          end: {
            line: 384,
            column: 7
          }
        },
        "120": {
          start: {
            line: 341,
            column: 23
          },
          end: {
            line: 341,
            column: 65
          }
        },
        "121": {
          start: {
            line: 342,
            column: 24
          },
          end: {
            line: 342,
            column: 52
          }
        },
        "122": {
          start: {
            line: 343,
            column: 30
          },
          end: {
            line: 345,
            column: 9
          }
        },
        "123": {
          start: {
            line: 347,
            column: 8
          },
          end: {
            line: 349,
            column: 9
          }
        },
        "124": {
          start: {
            line: 348,
            column: 10
          },
          end: {
            line: 348,
            column: 42
          }
        },
        "125": {
          start: {
            line: 351,
            column: 8
          },
          end: {
            line: 353,
            column: 9
          }
        },
        "126": {
          start: {
            line: 352,
            column: 10
          },
          end: {
            line: 352,
            column: 18
          }
        },
        "127": {
          start: {
            line: 355,
            column: 29
          },
          end: {
            line: 355,
            column: 42
          }
        },
        "128": {
          start: {
            line: 356,
            column: 8
          },
          end: {
            line: 358,
            column: 9
          }
        },
        "129": {
          start: {
            line: 357,
            column: 10
          },
          end: {
            line: 357,
            column: 18
          }
        },
        "130": {
          start: {
            line: 360,
            column: 8
          },
          end: {
            line: 364,
            column: 9
          }
        },
        "131": {
          start: {
            line: 363,
            column: 10
          },
          end: {
            line: 363,
            column: 18
          }
        },
        "132": {
          start: {
            line: 366,
            column: 26
          },
          end: {
            line: 366,
            column: 60
          }
        },
        "133": {
          start: {
            line: 367,
            column: 8
          },
          end: {
            line: 367,
            column: 36
          }
        },
        "134": {
          start: {
            line: 368,
            column: 8
          },
          end: {
            line: 370,
            column: 9
          }
        },
        "135": {
          start: {
            line: 369,
            column: 10
          },
          end: {
            line: 369,
            column: 18
          }
        },
        "136": {
          start: {
            line: 374,
            column: 8
          },
          end: {
            line: 376,
            column: 9
          }
        },
        "137": {
          start: {
            line: 375,
            column: 10
          },
          end: {
            line: 375,
            column: 68
          }
        },
        "138": {
          start: {
            line: 378,
            column: 8
          },
          end: {
            line: 378,
            column: 57
          }
        },
        "139": {
          start: {
            line: 380,
            column: 8
          },
          end: {
            line: 380,
            column: 51
          }
        },
        "140": {
          start: {
            line: 381,
            column: 8
          },
          end: {
            line: 383,
            column: 56
          }
        },
        "141": {
          start: {
            line: 389,
            column: 23
          },
          end: {
            line: 389,
            column: 59
          }
        },
        "142": {
          start: {
            line: 391,
            column: 6
          },
          end: {
            line: 393,
            column: 7
          }
        },
        "143": {
          start: {
            line: 392,
            column: 8
          },
          end: {
            line: 392,
            column: 49
          }
        },
        "144": {
          start: {
            line: 395,
            column: 6
          },
          end: {
            line: 395,
            column: 41
          }
        },
        "145": {
          start: {
            line: 407,
            column: 6
          },
          end: {
            line: 412,
            column: 7
          }
        },
        "146": {
          start: {
            line: 411,
            column: 8
          },
          end: {
            line: 411,
            column: 14
          }
        },
        "147": {
          start: {
            line: 414,
            column: 6
          },
          end: {
            line: 414,
            column: 28
          }
        },
        "148": {
          start: {
            line: 415,
            column: 6
          },
          end: {
            line: 415,
            column: 29
          }
        },
        "149": {
          start: {
            line: 417,
            column: 6
          },
          end: {
            line: 419,
            column: 7
          }
        },
        "150": {
          start: {
            line: 418,
            column: 8
          },
          end: {
            line: 418,
            column: 14
          }
        },
        "151": {
          start: {
            line: 421,
            column: 23
          },
          end: {
            line: 421,
            column: 59
          }
        },
        "152": {
          start: {
            line: 422,
            column: 23
          },
          end: {
            line: 422,
            column: 57
          }
        },
        "153": {
          start: {
            line: 424,
            column: 6
          },
          end: {
            line: 433,
            column: 7
          }
        },
        "154": {
          start: {
            line: 426,
            column: 8
          },
          end: {
            line: 429,
            column: 9
          }
        },
        "155": {
          start: {
            line: 427,
            column: 25
          },
          end: {
            line: 427,
            column: 67
          }
        },
        "156": {
          start: {
            line: 428,
            column: 10
          },
          end: {
            line: 428,
            column: 36
          }
        },
        "157": {
          start: {
            line: 431,
            column: 8
          },
          end: {
            line: 431,
            column: 32
          }
        },
        "158": {
          start: {
            line: 432,
            column: 8
          },
          end: {
            line: 432,
            column: 14
          }
        },
        "159": {
          start: {
            line: 435,
            column: 20
          },
          end: {
            line: 435,
            column: 82
          }
        },
        "160": {
          start: {
            line: 437,
            column: 6
          },
          end: {
            line: 439,
            column: 7
          }
        },
        "161": {
          start: {
            line: 438,
            column: 8
          },
          end: {
            line: 438,
            column: 14
          }
        },
        "162": {
          start: {
            line: 441,
            column: 18
          },
          end: {
            line: 441,
            column: 45
          }
        },
        "163": {
          start: {
            line: 443,
            column: 6
          },
          end: {
            line: 445,
            column: 7
          }
        },
        "164": {
          start: {
            line: 444,
            column: 8
          },
          end: {
            line: 444,
            column: 15
          }
        },
        "165": {
          start: {
            line: 447,
            column: 6
          },
          end: {
            line: 449,
            column: 7
          }
        },
        "166": {
          start: {
            line: 448,
            column: 8
          },
          end: {
            line: 448,
            column: 15
          }
        },
        "167": {
          start: {
            line: 451,
            column: 6
          },
          end: {
            line: 453,
            column: 7
          }
        },
        "168": {
          start: {
            line: 452,
            column: 8
          },
          end: {
            line: 452,
            column: 17
          }
        },
        "169": {
          start: {
            line: 455,
            column: 6
          },
          end: {
            line: 455,
            column: 26
          }
        },
        "170": {
          start: {
            line: 465,
            column: 2
          },
          end: {
            line: 476,
            column: 6
          }
        },
        "171": {
          start: {
            line: 470,
            column: 6
          },
          end: {
            line: 470,
            column: 28
          }
        },
        "172": {
          start: {
            line: 471,
            column: 6
          },
          end: {
            line: 471,
            column: 29
          }
        },
        "173": {
          start: {
            line: 472,
            column: 6
          },
          end: {
            line: 472,
            column: 55
          }
        },
        "174": {
          start: {
            line: 475,
            column: 6
          },
          end: {
            line: 475,
            column: 25
          }
        },
        "175": {
          start: {
            line: 484,
            column: 2
          },
          end: {
            line: 484,
            column: 40
          }
        },
        "176": {
          start: {
            line: 485,
            column: 2
          },
          end: {
            line: 485,
            column: 35
          }
        },
        "177": {
          start: {
            line: 486,
            column: 2
          },
          end: {
            line: 489,
            column: 3
          }
        },
        "178": {
          start: {
            line: 487,
            column: 4
          },
          end: {
            line: 487,
            column: 35
          }
        },
        "179": {
          start: {
            line: 488,
            column: 4
          },
          end: {
            line: 488,
            column: 36
          }
        },
        "180": {
          start: {
            line: 491,
            column: 2
          },
          end: {
            line: 491,
            column: 17
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 12,
              column: 18
            },
            end: {
              line: 12,
              column: 19
            }
          },
          loc: {
            start: {
              line: 12,
              column: 25
            },
            end: {
              line: 492,
              column: 1
            }
          },
          line: 12
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 97,
              column: 4
            },
            end: {
              line: 97,
              column: 5
            }
          },
          loc: {
            start: {
              line: 97,
              column: 33
            },
            end: {
              line: 105,
              column: 5
            }
          },
          line: 97
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 109,
              column: 4
            },
            end: {
              line: 109,
              column: 5
            }
          },
          loc: {
            start: {
              line: 109,
              column: 25
            },
            end: {
              line: 111,
              column: 5
            }
          },
          line: 109
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 113,
              column: 4
            },
            end: {
              line: 113,
              column: 5
            }
          },
          loc: {
            start: {
              line: 113,
              column: 25
            },
            end: {
              line: 115,
              column: 5
            }
          },
          line: 113
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 117,
              column: 4
            },
            end: {
              line: 117,
              column: 5
            }
          },
          loc: {
            start: {
              line: 117,
              column: 29
            },
            end: {
              line: 119,
              column: 5
            }
          },
          line: 117
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 123,
              column: 4
            },
            end: {
              line: 123,
              column: 5
            }
          },
          loc: {
            start: {
              line: 123,
              column: 13
            },
            end: {
              line: 196,
              column: 5
            }
          },
          line: 123
        },
        "6": {
          name: "(anonymous_6)",
          decl: {
            start: {
              line: 198,
              column: 4
            },
            end: {
              line: 198,
              column: 5
            }
          },
          loc: {
            start: {
              line: 198,
              column: 14
            },
            end: {
              line: 207,
              column: 5
            }
          },
          line: 198
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 209,
              column: 4
            },
            end: {
              line: 209,
              column: 5
            }
          },
          loc: {
            start: {
              line: 209,
              column: 13
            },
            end: {
              line: 214,
              column: 5
            }
          },
          line: 209
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 218,
              column: 4
            },
            end: {
              line: 218,
              column: 5
            }
          },
          loc: {
            start: {
              line: 218,
              column: 25
            },
            end: {
              line: 224,
              column: 5
            }
          },
          line: 218
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 219,
              column: 39
            },
            end: {
              line: 219,
              column: 40
            }
          },
          loc: {
            start: {
              line: 219,
              column: 50
            },
            end: {
              line: 223,
              column: 7
            }
          },
          line: 219
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 226,
              column: 4
            },
            end: {
              line: 226,
              column: 5
            }
          },
          loc: {
            start: {
              line: 226,
              column: 23
            },
            end: {
              line: 240,
              column: 5
            }
          },
          line: 226
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 242,
              column: 4
            },
            end: {
              line: 242,
              column: 5
            }
          },
          loc: {
            start: {
              line: 242,
              column: 22
            },
            end: {
              line: 250,
              column: 5
            }
          },
          line: 242
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 252,
              column: 4
            },
            end: {
              line: 252,
              column: 5
            }
          },
          loc: {
            start: {
              line: 252,
              column: 20
            },
            end: {
              line: 270,
              column: 5
            }
          },
          line: 252
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 272,
              column: 4
            },
            end: {
              line: 272,
              column: 5
            }
          },
          loc: {
            start: {
              line: 272,
              column: 20
            },
            end: {
              line: 274,
              column: 5
            }
          },
          line: 272
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 276,
              column: 4
            },
            end: {
              line: 276,
              column: 5
            }
          },
          loc: {
            start: {
              line: 276,
              column: 23
            },
            end: {
              line: 310,
              column: 5
            }
          },
          line: 276
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 279,
              column: 24
            },
            end: {
              line: 279,
              column: 25
            }
          },
          loc: {
            start: {
              line: 279,
              column: 34
            },
            end: {
              line: 285,
              column: 9
            }
          },
          line: 279
        },
        "16": {
          name: "(anonymous_16)",
          decl: {
            start: {
              line: 314,
              column: 4
            },
            end: {
              line: 314,
              column: 5
            }
          },
          loc: {
            start: {
              line: 314,
              column: 36
            },
            end: {
              line: 331,
              column: 5
            }
          },
          line: 314
        },
        "17": {
          name: "(anonymous_17)",
          decl: {
            start: {
              line: 315,
              column: 23
            },
            end: {
              line: 315,
              column: 24
            }
          },
          loc: {
            start: {
              line: 315,
              column: 35
            },
            end: {
              line: 330,
              column: 7
            }
          },
          line: 315
        },
        "18": {
          name: "(anonymous_18)",
          decl: {
            start: {
              line: 333,
              column: 4
            },
            end: {
              line: 333,
              column: 5
            }
          },
          loc: {
            start: {
              line: 333,
              column: 30
            },
            end: {
              line: 385,
              column: 5
            }
          },
          line: 333
        },
        "19": {
          name: "(anonymous_19)",
          decl: {
            start: {
              line: 387,
              column: 4
            },
            end: {
              line: 387,
              column: 5
            }
          },
          loc: {
            start: {
              line: 387,
              column: 42
            },
            end: {
              line: 396,
              column: 5
            }
          },
          line: 387
        },
        "20": {
          name: "(anonymous_20)",
          decl: {
            start: {
              line: 399,
              column: 4
            },
            end: {
              line: 399,
              column: 5
            }
          },
          loc: {
            start: {
              line: 399,
              column: 41
            },
            end: {
              line: 456,
              column: 5
            }
          },
          line: 399
        },
        "21": {
          name: "(anonymous_21)",
          decl: {
            start: {
              line: 469,
              column: 52
            },
            end: {
              line: 469,
              column: 53
            }
          },
          loc: {
            start: {
              line: 469,
              column: 69
            },
            end: {
              line: 473,
              column: 5
            }
          },
          line: 469
        },
        "22": {
          name: "(anonymous_22)",
          decl: {
            start: {
              line: 474,
              column: 51
            },
            end: {
              line: 474,
              column: 52
            }
          },
          loc: {
            start: {
              line: 474,
              column: 58
            },
            end: {
              line: 476,
              column: 5
            }
          },
          line: 474
        },
        "23": {
          name: "(anonymous_23)",
          decl: {
            start: {
              line: 486,
              column: 26
            },
            end: {
              line: 486,
              column: 27
            }
          },
          loc: {
            start: {
              line: 486,
              column: 38
            },
            end: {
              line: 489,
              column: 3
            }
          },
          line: 486
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          }, {
            start: {
              line: 124,
              column: 6
            },
            end: {
              line: 126,
              column: 7
            }
          }],
          line: 124
        },
        "1": {
          loc: {
            start: {
              line: 124,
              column: 10
            },
            end: {
              line: 124,
              column: 81
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 124,
              column: 10
            },
            end: {
              line: 124,
              column: 32
            }
          }, {
            start: {
              line: 124,
              column: 36
            },
            end: {
              line: 124,
              column: 81
            }
          }],
          line: 124
        },
        "2": {
          loc: {
            start: {
              line: 133,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 133,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          }, {
            start: {
              line: 133,
              column: 6
            },
            end: {
              line: 135,
              column: 7
            }
          }],
          line: 133
        },
        "3": {
          loc: {
            start: {
              line: 144,
              column: 6
            },
            end: {
              line: 146,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 144,
              column: 6
            },
            end: {
              line: 146,
              column: 7
            }
          }, {
            start: {
              line: 144,
              column: 6
            },
            end: {
              line: 146,
              column: 7
            }
          }],
          line: 144
        },
        "4": {
          loc: {
            start: {
              line: 149,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 149,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }, {
            start: {
              line: 149,
              column: 6
            },
            end: {
              line: 178,
              column: 7
            }
          }],
          line: 149
        },
        "5": {
          loc: {
            start: {
              line: 154,
              column: 8
            },
            end: {
              line: 156,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 154,
              column: 8
            },
            end: {
              line: 156,
              column: 9
            }
          }, {
            start: {
              line: 154,
              column: 8
            },
            end: {
              line: 156,
              column: 9
            }
          }],
          line: 154
        },
        "6": {
          loc: {
            start: {
              line: 160,
              column: 8
            },
            end: {
              line: 169,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 160,
              column: 8
            },
            end: {
              line: 169,
              column: 9
            }
          }, {
            start: {
              line: 160,
              column: 8
            },
            end: {
              line: 169,
              column: 9
            }
          }],
          line: 160
        },
        "7": {
          loc: {
            start: {
              line: 162,
              column: 15
            },
            end: {
              line: 169,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 162,
              column: 15
            },
            end: {
              line: 169,
              column: 9
            }
          }, {
            start: {
              line: 162,
              column: 15
            },
            end: {
              line: 169,
              column: 9
            }
          }],
          line: 162
        },
        "8": {
          loc: {
            start: {
              line: 166,
              column: 10
            },
            end: {
              line: 168,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 166,
              column: 10
            },
            end: {
              line: 168,
              column: 11
            }
          }, {
            start: {
              line: 166,
              column: 10
            },
            end: {
              line: 168,
              column: 11
            }
          }],
          line: 166
        },
        "9": {
          loc: {
            start: {
              line: 174,
              column: 8
            },
            end: {
              line: 176,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 174,
              column: 8
            },
            end: {
              line: 176,
              column: 9
            }
          }, {
            start: {
              line: 174,
              column: 8
            },
            end: {
              line: 176,
              column: 9
            }
          }],
          line: 174
        },
        "10": {
          loc: {
            start: {
              line: 184,
              column: 6
            },
            end: {
              line: 187,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 184,
              column: 6
            },
            end: {
              line: 187,
              column: 7
            }
          }, {
            start: {
              line: 184,
              column: 6
            },
            end: {
              line: 187,
              column: 7
            }
          }],
          line: 184
        },
        "11": {
          loc: {
            start: {
              line: 184,
              column: 10
            },
            end: {
              line: 185,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 184,
              column: 10
            },
            end: {
              line: 184,
              column: 52
            }
          }, {
            start: {
              line: 185,
              column: 9
            },
            end: {
              line: 185,
              column: 60
            }
          }],
          line: 184
        },
        "12": {
          loc: {
            start: {
              line: 203,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 203,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          }, {
            start: {
              line: 203,
              column: 6
            },
            end: {
              line: 206,
              column: 7
            }
          }],
          line: 203
        },
        "13": {
          loc: {
            start: {
              line: 211,
              column: 6
            },
            end: {
              line: 213,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 211,
              column: 6
            },
            end: {
              line: 213,
              column: 7
            }
          }, {
            start: {
              line: 211,
              column: 6
            },
            end: {
              line: 213,
              column: 7
            }
          }],
          line: 211
        },
        "14": {
          loc: {
            start: {
              line: 243,
              column: 6
            },
            end: {
              line: 248,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 243,
              column: 6
            },
            end: {
              line: 248,
              column: 7
            }
          }, {
            start: {
              line: 243,
              column: 6
            },
            end: {
              line: 248,
              column: 7
            }
          }],
          line: 243
        },
        "15": {
          loc: {
            start: {
              line: 245,
              column: 8
            },
            end: {
              line: 247,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 245,
              column: 8
            },
            end: {
              line: 247,
              column: 9
            }
          }, {
            start: {
              line: 245,
              column: 8
            },
            end: {
              line: 247,
              column: 9
            }
          }],
          line: 245
        },
        "16": {
          loc: {
            start: {
              line: 257,
              column: 6
            },
            end: {
              line: 268,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 257,
              column: 6
            },
            end: {
              line: 268,
              column: 7
            }
          }, {
            start: {
              line: 257,
              column: 6
            },
            end: {
              line: 268,
              column: 7
            }
          }],
          line: 257
        },
        "17": {
          loc: {
            start: {
              line: 259,
              column: 8
            },
            end: {
              line: 261,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 259,
              column: 8
            },
            end: {
              line: 261,
              column: 9
            }
          }, {
            start: {
              line: 259,
              column: 8
            },
            end: {
              line: 261,
              column: 9
            }
          }],
          line: 259
        },
        "18": {
          loc: {
            start: {
              line: 262,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 262,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          }, {
            start: {
              line: 262,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          }],
          line: 262
        },
        "19": {
          loc: {
            start: {
              line: 264,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 264,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          }, {
            start: {
              line: 264,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          }],
          line: 264
        },
        "20": {
          loc: {
            start: {
              line: 266,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 266,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          }, {
            start: {
              line: 266,
              column: 13
            },
            end: {
              line: 268,
              column: 7
            }
          }],
          line: 266
        },
        "21": {
          loc: {
            start: {
              line: 278,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 278,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          }, {
            start: {
              line: 278,
              column: 6
            },
            end: {
              line: 288,
              column: 7
            }
          }],
          line: 278
        },
        "22": {
          loc: {
            start: {
              line: 282,
              column: 15
            },
            end: {
              line: 282,
              column: 54
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 282,
              column: 15
            },
            end: {
              line: 282,
              column: 48
            }
          }, {
            start: {
              line: 282,
              column: 52
            },
            end: {
              line: 282,
              column: 54
            }
          }],
          line: 282
        },
        "23": {
          loc: {
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 308,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 308,
              column: 7
            }
          }, {
            start: {
              line: 304,
              column: 6
            },
            end: {
              line: 308,
              column: 7
            }
          }],
          line: 304
        },
        "24": {
          loc: {
            start: {
              line: 317,
              column: 24
            },
            end: {
              line: 317,
              column: 66
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 317,
              column: 53
            },
            end: {
              line: 317,
              column: 59
            }
          }, {
            start: {
              line: 317,
              column: 62
            },
            end: {
              line: 317,
              column: 66
            }
          }],
          line: 317
        },
        "25": {
          loc: {
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 322,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 322,
              column: 9
            }
          }, {
            start: {
              line: 319,
              column: 8
            },
            end: {
              line: 322,
              column: 9
            }
          }],
          line: 319
        },
        "26": {
          loc: {
            start: {
              line: 324,
              column: 8
            },
            end: {
              line: 329,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 324,
              column: 8
            },
            end: {
              line: 329,
              column: 9
            }
          }, {
            start: {
              line: 324,
              column: 8
            },
            end: {
              line: 329,
              column: 9
            }
          }],
          line: 324
        },
        "27": {
          loc: {
            start: {
              line: 325,
              column: 10
            },
            end: {
              line: 327,
              column: 11
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 325,
              column: 10
            },
            end: {
              line: 327,
              column: 11
            }
          }, {
            start: {
              line: 325,
              column: 10
            },
            end: {
              line: 327,
              column: 11
            }
          }],
          line: 325
        },
        "28": {
          loc: {
            start: {
              line: 334,
              column: 6
            },
            end: {
              line: 337,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 334,
              column: 6
            },
            end: {
              line: 337,
              column: 7
            }
          }, {
            start: {
              line: 334,
              column: 6
            },
            end: {
              line: 337,
              column: 7
            }
          }],
          line: 334
        },
        "29": {
          loc: {
            start: {
              line: 334,
              column: 10
            },
            end: {
              line: 335,
              column: 62
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 334,
              column: 10
            },
            end: {
              line: 334,
              column: 15
            }
          }, {
            start: {
              line: 334,
              column: 20
            },
            end: {
              line: 334,
              column: 60
            }
          }, {
            start: {
              line: 335,
              column: 8
            },
            end: {
              line: 335,
              column: 30
            }
          }, {
            start: {
              line: 335,
              column: 34
            },
            end: {
              line: 335,
              column: 61
            }
          }],
          line: 334
        },
        "30": {
          loc: {
            start: {
              line: 347,
              column: 8
            },
            end: {
              line: 349,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 347,
              column: 8
            },
            end: {
              line: 349,
              column: 9
            }
          }, {
            start: {
              line: 347,
              column: 8
            },
            end: {
              line: 349,
              column: 9
            }
          }],
          line: 347
        },
        "31": {
          loc: {
            start: {
              line: 347,
              column: 12
            },
            end: {
              line: 347,
              column: 43
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 347,
              column: 12
            },
            end: {
              line: 347,
              column: 17
            }
          }, {
            start: {
              line: 347,
              column: 21
            },
            end: {
              line: 347,
              column: 43
            }
          }],
          line: 347
        },
        "32": {
          loc: {
            start: {
              line: 351,
              column: 8
            },
            end: {
              line: 353,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 351,
              column: 8
            },
            end: {
              line: 353,
              column: 9
            }
          }, {
            start: {
              line: 351,
              column: 8
            },
            end: {
              line: 353,
              column: 9
            }
          }],
          line: 351
        },
        "33": {
          loc: {
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          }, {
            start: {
              line: 356,
              column: 8
            },
            end: {
              line: 358,
              column: 9
            }
          }],
          line: 356
        },
        "34": {
          loc: {
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 364,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 364,
              column: 9
            }
          }, {
            start: {
              line: 360,
              column: 8
            },
            end: {
              line: 364,
              column: 9
            }
          }],
          line: 360
        },
        "35": {
          loc: {
            start: {
              line: 360,
              column: 12
            },
            end: {
              line: 362,
              column: 44
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 360,
              column: 12
            },
            end: {
              line: 360,
              column: 17
            }
          }, {
            start: {
              line: 360,
              column: 22
            },
            end: {
              line: 360,
              column: 44
            }
          }, {
            start: {
              line: 361,
              column: 12
            },
            end: {
              line: 361,
              column: 56
            }
          }, {
            start: {
              line: 361,
              column: 60
            },
            end: {
              line: 361,
              column: 82
            }
          }, {
            start: {
              line: 361,
              column: 86
            },
            end: {
              line: 361,
              column: 113
            }
          }, {
            start: {
              line: 362,
              column: 12
            },
            end: {
              line: 362,
              column: 44
            }
          }],
          line: 360
        },
        "36": {
          loc: {
            start: {
              line: 368,
              column: 8
            },
            end: {
              line: 370,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 368,
              column: 8
            },
            end: {
              line: 370,
              column: 9
            }
          }, {
            start: {
              line: 368,
              column: 8
            },
            end: {
              line: 370,
              column: 9
            }
          }],
          line: 368
        },
        "37": {
          loc: {
            start: {
              line: 374,
              column: 8
            },
            end: {
              line: 376,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 374,
              column: 8
            },
            end: {
              line: 376,
              column: 9
            }
          }, {
            start: {
              line: 374,
              column: 8
            },
            end: {
              line: 376,
              column: 9
            }
          }],
          line: 374
        },
        "38": {
          loc: {
            start: {
              line: 391,
              column: 6
            },
            end: {
              line: 393,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 391,
              column: 6
            },
            end: {
              line: 393,
              column: 7
            }
          }, {
            start: {
              line: 391,
              column: 6
            },
            end: {
              line: 393,
              column: 7
            }
          }],
          line: 391
        },
        "39": {
          loc: {
            start: {
              line: 395,
              column: 13
            },
            end: {
              line: 395,
              column: 41
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 395,
              column: 13
            },
            end: {
              line: 395,
              column: 19
            }
          }, {
            start: {
              line: 395,
              column: 23
            },
            end: {
              line: 395,
              column: 41
            }
          }],
          line: 395
        },
        "40": {
          loc: {
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          }, {
            start: {
              line: 407,
              column: 6
            },
            end: {
              line: 412,
              column: 7
            }
          }],
          line: 407
        },
        "41": {
          loc: {
            start: {
              line: 407,
              column: 10
            },
            end: {
              line: 410,
              column: 92
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 408,
              column: 10
            },
            end: {
              line: 410,
              column: 56
            }
          }, {
            start: {
              line: 410,
              column: 59
            },
            end: {
              line: 410,
              column: 92
            }
          }],
          line: 407
        },
        "42": {
          loc: {
            start: {
              line: 408,
              column: 10
            },
            end: {
              line: 410,
              column: 56
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 408,
              column: 10
            },
            end: {
              line: 408,
              column: 39
            }
          }, {
            start: {
              line: 408,
              column: 43
            },
            end: {
              line: 408,
              column: 73
            }
          }, {
            start: {
              line: 409,
              column: 9
            },
            end: {
              line: 409,
              column: 43
            }
          }, {
            start: {
              line: 409,
              column: 47
            },
            end: {
              line: 409,
              column: 79
            }
          }, {
            start: {
              line: 410,
              column: 10
            },
            end: {
              line: 410,
              column: 55
            }
          }],
          line: 408
        },
        "43": {
          loc: {
            start: {
              line: 417,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 417,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          }, {
            start: {
              line: 417,
              column: 6
            },
            end: {
              line: 419,
              column: 7
            }
          }],
          line: 417
        },
        "44": {
          loc: {
            start: {
              line: 417,
              column: 10
            },
            end: {
              line: 417,
              column: 63
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 417,
              column: 10
            },
            end: {
              line: 417,
              column: 23
            }
          }, {
            start: {
              line: 417,
              column: 27
            },
            end: {
              line: 417,
              column: 63
            }
          }],
          line: 417
        },
        "45": {
          loc: {
            start: {
              line: 424,
              column: 6
            },
            end: {
              line: 433,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 424,
              column: 6
            },
            end: {
              line: 433,
              column: 7
            }
          }, {
            start: {
              line: 424,
              column: 6
            },
            end: {
              line: 433,
              column: 7
            }
          }],
          line: 424
        },
        "46": {
          loc: {
            start: {
              line: 424,
              column: 10
            },
            end: {
              line: 425,
              column: 88
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 424,
              column: 10
            },
            end: {
              line: 424,
              column: 19
            }
          }, {
            start: {
              line: 424,
              column: 24
            },
            end: {
              line: 424,
              column: 54
            }
          }, {
            start: {
              line: 424,
              column: 58
            },
            end: {
              line: 424,
              column: 87
            }
          }, {
            start: {
              line: 425,
              column: 11
            },
            end: {
              line: 425,
              column: 19
            }
          }, {
            start: {
              line: 425,
              column: 24
            },
            end: {
              line: 425,
              column: 54
            }
          }, {
            start: {
              line: 425,
              column: 58
            },
            end: {
              line: 425,
              column: 87
            }
          }],
          line: 424
        },
        "47": {
          loc: {
            start: {
              line: 426,
              column: 8
            },
            end: {
              line: 429,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 426,
              column: 8
            },
            end: {
              line: 429,
              column: 9
            }
          }, {
            start: {
              line: 426,
              column: 8
            },
            end: {
              line: 429,
              column: 9
            }
          }],
          line: 426
        },
        "48": {
          loc: {
            start: {
              line: 437,
              column: 6
            },
            end: {
              line: 439,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 437,
              column: 6
            },
            end: {
              line: 439,
              column: 7
            }
          }, {
            start: {
              line: 437,
              column: 6
            },
            end: {
              line: 439,
              column: 7
            }
          }],
          line: 437
        },
        "49": {
          loc: {
            start: {
              line: 443,
              column: 6
            },
            end: {
              line: 445,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 443,
              column: 6
            },
            end: {
              line: 445,
              column: 7
            }
          }, {
            start: {
              line: 443,
              column: 6
            },
            end: {
              line: 445,
              column: 7
            }
          }],
          line: 443
        },
        "50": {
          loc: {
            start: {
              line: 443,
              column: 10
            },
            end: {
              line: 443,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 443,
              column: 10
            },
            end: {
              line: 443,
              column: 42
            }
          }, {
            start: {
              line: 443,
              column: 46
            },
            end: {
              line: 443,
              column: 55
            }
          }],
          line: 443
        },
        "51": {
          loc: {
            start: {
              line: 447,
              column: 6
            },
            end: {
              line: 449,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 447,
              column: 6
            },
            end: {
              line: 449,
              column: 7
            }
          }, {
            start: {
              line: 447,
              column: 6
            },
            end: {
              line: 449,
              column: 7
            }
          }],
          line: 447
        },
        "52": {
          loc: {
            start: {
              line: 447,
              column: 10
            },
            end: {
              line: 447,
              column: 72
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 447,
              column: 10
            },
            end: {
              line: 447,
              column: 44
            }
          }, {
            start: {
              line: 447,
              column: 48
            },
            end: {
              line: 447,
              column: 72
            }
          }],
          line: 447
        },
        "53": {
          loc: {
            start: {
              line: 451,
              column: 6
            },
            end: {
              line: 453,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 451,
              column: 6
            },
            end: {
              line: 453,
              column: 7
            }
          }, {
            start: {
              line: 451,
              column: 6
            },
            end: {
              line: 453,
              column: 7
            }
          }],
          line: 451
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0,
        "59": 0,
        "60": 0,
        "61": 0,
        "62": 0,
        "63": 0,
        "64": 0,
        "65": 0,
        "66": 0,
        "67": 0,
        "68": 0,
        "69": 0,
        "70": 0,
        "71": 0,
        "72": 0,
        "73": 0,
        "74": 0,
        "75": 0,
        "76": 0,
        "77": 0,
        "78": 0,
        "79": 0,
        "80": 0,
        "81": 0,
        "82": 0,
        "83": 0,
        "84": 0,
        "85": 0,
        "86": 0,
        "87": 0,
        "88": 0,
        "89": 0,
        "90": 0,
        "91": 0,
        "92": 0,
        "93": 0,
        "94": 0,
        "95": 0,
        "96": 0,
        "97": 0,
        "98": 0,
        "99": 0,
        "100": 0,
        "101": 0,
        "102": 0,
        "103": 0,
        "104": 0,
        "105": 0,
        "106": 0,
        "107": 0,
        "108": 0,
        "109": 0,
        "110": 0,
        "111": 0,
        "112": 0,
        "113": 0,
        "114": 0,
        "115": 0,
        "116": 0,
        "117": 0,
        "118": 0,
        "119": 0,
        "120": 0,
        "121": 0,
        "122": 0,
        "123": 0,
        "124": 0,
        "125": 0,
        "126": 0,
        "127": 0,
        "128": 0,
        "129": 0,
        "130": 0,
        "131": 0,
        "132": 0,
        "133": 0,
        "134": 0,
        "135": 0,
        "136": 0,
        "137": 0,
        "138": 0,
        "139": 0,
        "140": 0,
        "141": 0,
        "142": 0,
        "143": 0,
        "144": 0,
        "145": 0,
        "146": 0,
        "147": 0,
        "148": 0,
        "149": 0,
        "150": 0,
        "151": 0,
        "152": 0,
        "153": 0,
        "154": 0,
        "155": 0,
        "156": 0,
        "157": 0,
        "158": 0,
        "159": 0,
        "160": 0,
        "161": 0,
        "162": 0,
        "163": 0,
        "164": 0,
        "165": 0,
        "166": 0,
        "167": 0,
        "168": 0,
        "169": 0,
        "170": 0,
        "171": 0,
        "172": 0,
        "173": 0,
        "174": 0,
        "175": 0,
        "176": 0,
        "177": 0,
        "178": 0,
        "179": 0,
        "180": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0],
        "21": [0, 0],
        "22": [0, 0],
        "23": [0, 0],
        "24": [0, 0],
        "25": [0, 0],
        "26": [0, 0],
        "27": [0, 0],
        "28": [0, 0],
        "29": [0, 0, 0, 0],
        "30": [0, 0],
        "31": [0, 0],
        "32": [0, 0],
        "33": [0, 0],
        "34": [0, 0],
        "35": [0, 0, 0, 0, 0, 0],
        "36": [0, 0],
        "37": [0, 0],
        "38": [0, 0],
        "39": [0, 0],
        "40": [0, 0],
        "41": [0, 0],
        "42": [0, 0, 0, 0, 0],
        "43": [0, 0],
        "44": [0, 0],
        "45": [0, 0],
        "46": [0, 0, 0, 0, 0, 0],
        "47": [0, 0],
        "48": [0, 0],
        "49": [0, 0],
        "50": [0, 0],
        "51": [0, 0],
        "52": [0, 0],
        "53": [0, 0]
      },
      _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = (cov_nnobgjulu.s[0]++, function ($$$1) {
    cov_nnobgjulu.f[0]++;

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = (cov_nnobgjulu.s[1]++, 'dropdown');
    var VERSION = (cov_nnobgjulu.s[2]++, '4.1.3');
    var DATA_KEY = (cov_nnobgjulu.s[3]++, 'bs.dropdown');
    var EVENT_KEY = (cov_nnobgjulu.s[4]++, "." + DATA_KEY);
    var DATA_API_KEY = (cov_nnobgjulu.s[5]++, '.data-api');
    var JQUERY_NO_CONFLICT = (cov_nnobgjulu.s[6]++, $$$1.fn[NAME]);
    var ESCAPE_KEYCODE = (cov_nnobgjulu.s[7]++, 27); // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = (cov_nnobgjulu.s[8]++, 32); // KeyboardEvent.which value for space key

    var TAB_KEYCODE = (cov_nnobgjulu.s[9]++, 9); // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = (cov_nnobgjulu.s[10]++, 38); // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = (cov_nnobgjulu.s[11]++, 40); // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = (cov_nnobgjulu.s[12]++, 3); // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = (cov_nnobgjulu.s[13]++, new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE));
    var Event = (cov_nnobgjulu.s[14]++, {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
      KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    });
    var ClassName = (cov_nnobgjulu.s[15]++, {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      DROPRIGHT: 'dropright',
      DROPLEFT: 'dropleft',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left',
      POSITION_STATIC: 'position-static'
    });
    var Selector = (cov_nnobgjulu.s[16]++, {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
    });
    var AttachmentMap = (cov_nnobgjulu.s[17]++, {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end',
      RIGHT: 'right-start',
      RIGHTEND: 'right-end',
      LEFT: 'left-start',
      LEFTEND: 'left-end'
    });
    var Default = (cov_nnobgjulu.s[18]++, {
      offset: 0,
      flip: true,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    });
    var DefaultType = (cov_nnobgjulu.s[19]++, {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    });

    var Dropdown =
    /*#__PURE__*/
    function () {
      function Dropdown(element, config) {
        cov_nnobgjulu.f[1]++;
        cov_nnobgjulu.s[20]++;
        this._element = element;
        cov_nnobgjulu.s[21]++;
        this._popper = null;
        cov_nnobgjulu.s[22]++;
        this._config = this._getConfig(config);
        cov_nnobgjulu.s[23]++;
        this._menu = this._getMenuElement();
        cov_nnobgjulu.s[24]++;
        this._inNavbar = this._detectNavbar();
        cov_nnobgjulu.s[25]++;

        this._addEventListeners();
      } // Getters


      var _proto = Dropdown.prototype;

      // Public
      _proto.toggle = function toggle() {
        cov_nnobgjulu.f[5]++;
        cov_nnobgjulu.s[29]++;

        if ((cov_nnobgjulu.b[1][0]++, this._element.disabled) || (cov_nnobgjulu.b[1][1]++, $$$1(this._element).hasClass(ClassName.DISABLED))) {
          cov_nnobgjulu.b[0][0]++;
          cov_nnobgjulu.s[30]++;
          return;
        } else {
          cov_nnobgjulu.b[0][1]++;
        }

        var parent = (cov_nnobgjulu.s[31]++, Dropdown._getParentFromElement(this._element));
        var isActive = (cov_nnobgjulu.s[32]++, $$$1(this._menu).hasClass(ClassName.SHOW));
        cov_nnobgjulu.s[33]++;

        Dropdown._clearMenus();

        cov_nnobgjulu.s[34]++;

        if (isActive) {
          cov_nnobgjulu.b[2][0]++;
          cov_nnobgjulu.s[35]++;
          return;
        } else {
          cov_nnobgjulu.b[2][1]++;
        }

        var relatedTarget = (cov_nnobgjulu.s[36]++, {
          relatedTarget: this._element
        });
        var showEvent = (cov_nnobgjulu.s[37]++, $$$1.Event(Event.SHOW, relatedTarget));
        cov_nnobgjulu.s[38]++;
        $$$1(parent).trigger(showEvent);
        cov_nnobgjulu.s[39]++;

        if (showEvent.isDefaultPrevented()) {
          cov_nnobgjulu.b[3][0]++;
          cov_nnobgjulu.s[40]++;
          return;
        } else {
          cov_nnobgjulu.b[3][1]++;
        } // Disable totally Popper.js for Dropdown in Navbar


        cov_nnobgjulu.s[41]++;

        if (!this._inNavbar) {
          cov_nnobgjulu.b[4][0]++;
          cov_nnobgjulu.s[42]++;

          /**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
          if (typeof Popper === 'undefined') {
            cov_nnobgjulu.b[5][0]++;
            cov_nnobgjulu.s[43]++;
            throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
          } else {
            cov_nnobgjulu.b[5][1]++;
          }

          var referenceElement = (cov_nnobgjulu.s[44]++, this._element);
          cov_nnobgjulu.s[45]++;

          if (this._config.reference === 'parent') {
            cov_nnobgjulu.b[6][0]++;
            cov_nnobgjulu.s[46]++;
            referenceElement = parent;
          } else {
            cov_nnobgjulu.b[6][1]++;
            cov_nnobgjulu.s[47]++;

            if (Util.isElement(this._config.reference)) {
              cov_nnobgjulu.b[7][0]++;
              cov_nnobgjulu.s[48]++;
              referenceElement = this._config.reference; // Check if it's jQuery element

              cov_nnobgjulu.s[49]++;

              if (typeof this._config.reference.jquery !== 'undefined') {
                cov_nnobgjulu.b[8][0]++;
                cov_nnobgjulu.s[50]++;
                referenceElement = this._config.reference[0];
              } else {
                cov_nnobgjulu.b[8][1]++;
              }
            } else {
              cov_nnobgjulu.b[7][1]++;
            }
          } // If boundary is not `scrollParent`, then set position to `static`
          // to allow the menu to "escape" the scroll parent's boundaries
          // https://github.com/twbs/bootstrap/issues/24251


          cov_nnobgjulu.s[51]++;

          if (this._config.boundary !== 'scrollParent') {
            cov_nnobgjulu.b[9][0]++;
            cov_nnobgjulu.s[52]++;
            $$$1(parent).addClass(ClassName.POSITION_STATIC);
          } else {
            cov_nnobgjulu.b[9][1]++;
          }

          cov_nnobgjulu.s[53]++;
          this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
        } else {
          cov_nnobgjulu.b[4][1]++;
        } // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


        cov_nnobgjulu.s[54]++;

        if ((cov_nnobgjulu.b[11][0]++, 'ontouchstart' in document.documentElement) && (cov_nnobgjulu.b[11][1]++, $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0)) {
          cov_nnobgjulu.b[10][0]++;
          cov_nnobgjulu.s[55]++;
          $$$1(document.body).children().on('mouseover', null, $$$1.noop);
        } else {
          cov_nnobgjulu.b[10][1]++;
        }

        cov_nnobgjulu.s[56]++;

        this._element.focus();

        cov_nnobgjulu.s[57]++;

        this._element.setAttribute('aria-expanded', true);

        cov_nnobgjulu.s[58]++;
        $$$1(this._menu).toggleClass(ClassName.SHOW);
        cov_nnobgjulu.s[59]++;
        $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
      };

      _proto.dispose = function dispose() {
        cov_nnobgjulu.f[6]++;
        cov_nnobgjulu.s[60]++;
        $$$1.removeData(this._element, DATA_KEY);
        cov_nnobgjulu.s[61]++;
        $$$1(this._element).off(EVENT_KEY);
        cov_nnobgjulu.s[62]++;
        this._element = null;
        cov_nnobgjulu.s[63]++;
        this._menu = null;
        cov_nnobgjulu.s[64]++;

        if (this._popper !== null) {
          cov_nnobgjulu.b[12][0]++;
          cov_nnobgjulu.s[65]++;

          this._popper.destroy();

          cov_nnobgjulu.s[66]++;
          this._popper = null;
        } else {
          cov_nnobgjulu.b[12][1]++;
        }
      };

      _proto.update = function update() {
        cov_nnobgjulu.f[7]++;
        cov_nnobgjulu.s[67]++;
        this._inNavbar = this._detectNavbar();
        cov_nnobgjulu.s[68]++;

        if (this._popper !== null) {
          cov_nnobgjulu.b[13][0]++;
          cov_nnobgjulu.s[69]++;

          this._popper.scheduleUpdate();
        } else {
          cov_nnobgjulu.b[13][1]++;
        }
      }; // Private


      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        cov_nnobgjulu.f[8]++;
        cov_nnobgjulu.s[70]++;
        $$$1(this._element).on(Event.CLICK, function (event) {
          cov_nnobgjulu.f[9]++;
          cov_nnobgjulu.s[71]++;
          event.preventDefault();
          cov_nnobgjulu.s[72]++;
          event.stopPropagation();
          cov_nnobgjulu.s[73]++;

          _this.toggle();
        });
      };

      _proto._getConfig = function _getConfig(config) {
        cov_nnobgjulu.f[10]++;
        cov_nnobgjulu.s[74]++;
        config = _objectSpread({}, this.constructor.Default, $$$1(this._element).data(), config);
        cov_nnobgjulu.s[75]++;
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        cov_nnobgjulu.s[76]++;
        return config;
      };

      _proto._getMenuElement = function _getMenuElement() {
        cov_nnobgjulu.f[11]++;
        cov_nnobgjulu.s[77]++;

        if (!this._menu) {
          cov_nnobgjulu.b[14][0]++;
          var parent = (cov_nnobgjulu.s[78]++, Dropdown._getParentFromElement(this._element));
          cov_nnobgjulu.s[79]++;

          if (parent) {
            cov_nnobgjulu.b[15][0]++;
            cov_nnobgjulu.s[80]++;
            this._menu = parent.querySelector(Selector.MENU);
          } else {
            cov_nnobgjulu.b[15][1]++;
          }
        } else {
          cov_nnobgjulu.b[14][1]++;
        }

        cov_nnobgjulu.s[81]++;
        return this._menu;
      };

      _proto._getPlacement = function _getPlacement() {
        cov_nnobgjulu.f[12]++;
        var $parentDropdown = (cov_nnobgjulu.s[82]++, $$$1(this._element.parentNode));
        var placement = (cov_nnobgjulu.s[83]++, AttachmentMap.BOTTOM); // Handle dropup

        cov_nnobgjulu.s[84]++;

        if ($parentDropdown.hasClass(ClassName.DROPUP)) {
          cov_nnobgjulu.b[16][0]++;
          cov_nnobgjulu.s[85]++;
          placement = AttachmentMap.TOP;
          cov_nnobgjulu.s[86]++;

          if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
            cov_nnobgjulu.b[17][0]++;
            cov_nnobgjulu.s[87]++;
            placement = AttachmentMap.TOPEND;
          } else {
            cov_nnobgjulu.b[17][1]++;
          }
        } else {
          cov_nnobgjulu.b[16][1]++;
          cov_nnobgjulu.s[88]++;

          if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
            cov_nnobgjulu.b[18][0]++;
            cov_nnobgjulu.s[89]++;
            placement = AttachmentMap.RIGHT;
          } else {
            cov_nnobgjulu.b[18][1]++;
            cov_nnobgjulu.s[90]++;

            if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
              cov_nnobgjulu.b[19][0]++;
              cov_nnobgjulu.s[91]++;
              placement = AttachmentMap.LEFT;
            } else {
              cov_nnobgjulu.b[19][1]++;
              cov_nnobgjulu.s[92]++;

              if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
                cov_nnobgjulu.b[20][0]++;
                cov_nnobgjulu.s[93]++;
                placement = AttachmentMap.BOTTOMEND;
              } else {
                cov_nnobgjulu.b[20][1]++;
              }
            }
          }
        }

        cov_nnobgjulu.s[94]++;
        return placement;
      };

      _proto._detectNavbar = function _detectNavbar() {
        cov_nnobgjulu.f[13]++;
        cov_nnobgjulu.s[95]++;
        return $$$1(this._element).closest('.navbar').length > 0;
      };

      _proto._getPopperConfig = function _getPopperConfig() {
        var _this2 = this;

        cov_nnobgjulu.f[14]++;
        var offsetConf = (cov_nnobgjulu.s[96]++, {});
        cov_nnobgjulu.s[97]++;

        if (typeof this._config.offset === 'function') {
          cov_nnobgjulu.b[21][0]++;
          cov_nnobgjulu.s[98]++;

          offsetConf.fn = function (data) {
            cov_nnobgjulu.f[15]++;
            cov_nnobgjulu.s[99]++;
            data.offsets = _objectSpread({}, data.offsets, (cov_nnobgjulu.b[22][0]++, _this2._config.offset(data.offsets)) || (cov_nnobgjulu.b[22][1]++, {}));
            cov_nnobgjulu.s[100]++;
            return data;
          };
        } else {
          cov_nnobgjulu.b[21][1]++;
          cov_nnobgjulu.s[101]++;
          offsetConf.offset = this._config.offset;
        }

        var popperConfig = (cov_nnobgjulu.s[102]++, {
          placement: this._getPlacement(),
          modifiers: {
            offset: offsetConf,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          } // Disable Popper.js if we have a static display

        });
        cov_nnobgjulu.s[103]++;

        if (this._config.display === 'static') {
          cov_nnobgjulu.b[23][0]++;
          cov_nnobgjulu.s[104]++;
          popperConfig.modifiers.applyStyle = {
            enabled: false
          };
        } else {
          cov_nnobgjulu.b[23][1]++;
        }

        cov_nnobgjulu.s[105]++;
        return popperConfig;
      }; // Static


      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        cov_nnobgjulu.f[16]++;
        cov_nnobgjulu.s[106]++;
        return this.each(function () {
          cov_nnobgjulu.f[17]++;
          var data = (cov_nnobgjulu.s[107]++, $$$1(this).data(DATA_KEY));

          var _config = (cov_nnobgjulu.s[108]++, typeof config === 'object' ? (cov_nnobgjulu.b[24][0]++, config) : (cov_nnobgjulu.b[24][1]++, null));

          cov_nnobgjulu.s[109]++;

          if (!data) {
            cov_nnobgjulu.b[25][0]++;
            cov_nnobgjulu.s[110]++;
            data = new Dropdown(this, _config);
            cov_nnobgjulu.s[111]++;
            $$$1(this).data(DATA_KEY, data);
          } else {
            cov_nnobgjulu.b[25][1]++;
          }

          cov_nnobgjulu.s[112]++;

          if (typeof config === 'string') {
            cov_nnobgjulu.b[26][0]++;
            cov_nnobgjulu.s[113]++;

            if (typeof data[config] === 'undefined') {
              cov_nnobgjulu.b[27][0]++;
              cov_nnobgjulu.s[114]++;
              throw new TypeError("No method named \"" + config + "\"");
            } else {
              cov_nnobgjulu.b[27][1]++;
            }

            cov_nnobgjulu.s[115]++;
            data[config]();
          } else {
            cov_nnobgjulu.b[26][1]++;
          }
        });
      };

      Dropdown._clearMenus = function _clearMenus(event) {
        cov_nnobgjulu.f[18]++;
        cov_nnobgjulu.s[116]++;

        if ((cov_nnobgjulu.b[29][0]++, event) && ((cov_nnobgjulu.b[29][1]++, event.which === RIGHT_MOUSE_BUTTON_WHICH) || (cov_nnobgjulu.b[29][2]++, event.type === 'keyup') && (cov_nnobgjulu.b[29][3]++, event.which !== TAB_KEYCODE))) {
          cov_nnobgjulu.b[28][0]++;
          cov_nnobgjulu.s[117]++;
          return;
        } else {
          cov_nnobgjulu.b[28][1]++;
        }

        var toggles = (cov_nnobgjulu.s[118]++, [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE)));
        cov_nnobgjulu.s[119]++;

        for (var i = 0, len = toggles.length; i < len; i++) {
          var parent = (cov_nnobgjulu.s[120]++, Dropdown._getParentFromElement(toggles[i]));
          var context = (cov_nnobgjulu.s[121]++, $$$1(toggles[i]).data(DATA_KEY));
          var relatedTarget = (cov_nnobgjulu.s[122]++, {
            relatedTarget: toggles[i]
          });
          cov_nnobgjulu.s[123]++;

          if ((cov_nnobgjulu.b[31][0]++, event) && (cov_nnobgjulu.b[31][1]++, event.type === 'click')) {
            cov_nnobgjulu.b[30][0]++;
            cov_nnobgjulu.s[124]++;
            relatedTarget.clickEvent = event;
          } else {
            cov_nnobgjulu.b[30][1]++;
          }

          cov_nnobgjulu.s[125]++;

          if (!context) {
            cov_nnobgjulu.b[32][0]++;
            cov_nnobgjulu.s[126]++;
            continue;
          } else {
            cov_nnobgjulu.b[32][1]++;
          }

          var dropdownMenu = (cov_nnobgjulu.s[127]++, context._menu);
          cov_nnobgjulu.s[128]++;

          if (!$$$1(parent).hasClass(ClassName.SHOW)) {
            cov_nnobgjulu.b[33][0]++;
            cov_nnobgjulu.s[129]++;
            continue;
          } else {
            cov_nnobgjulu.b[33][1]++;
          }

          cov_nnobgjulu.s[130]++;

          if ((cov_nnobgjulu.b[35][0]++, event) && ((cov_nnobgjulu.b[35][1]++, event.type === 'click') && (cov_nnobgjulu.b[35][2]++, /input|textarea/i.test(event.target.tagName)) || (cov_nnobgjulu.b[35][3]++, event.type === 'keyup') && (cov_nnobgjulu.b[35][4]++, event.which === TAB_KEYCODE)) && (cov_nnobgjulu.b[35][5]++, $$$1.contains(parent, event.target))) {
            cov_nnobgjulu.b[34][0]++;
            cov_nnobgjulu.s[131]++;
            continue;
          } else {
            cov_nnobgjulu.b[34][1]++;
          }

          var hideEvent = (cov_nnobgjulu.s[132]++, $$$1.Event(Event.HIDE, relatedTarget));
          cov_nnobgjulu.s[133]++;
          $$$1(parent).trigger(hideEvent);
          cov_nnobgjulu.s[134]++;

          if (hideEvent.isDefaultPrevented()) {
            cov_nnobgjulu.b[36][0]++;
            cov_nnobgjulu.s[135]++;
            continue;
          } else {
            cov_nnobgjulu.b[36][1]++;
          } // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          cov_nnobgjulu.s[136]++;

          if ('ontouchstart' in document.documentElement) {
            cov_nnobgjulu.b[37][0]++;
            cov_nnobgjulu.s[137]++;
            $$$1(document.body).children().off('mouseover', null, $$$1.noop);
          } else {
            cov_nnobgjulu.b[37][1]++;
          }

          cov_nnobgjulu.s[138]++;
          toggles[i].setAttribute('aria-expanded', 'false');
          cov_nnobgjulu.s[139]++;
          $$$1(dropdownMenu).removeClass(ClassName.SHOW);
          cov_nnobgjulu.s[140]++;
          $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
        }
      };

      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        cov_nnobgjulu.f[19]++;
        var parent;
        var selector = (cov_nnobgjulu.s[141]++, Util.getSelectorFromElement(element));
        cov_nnobgjulu.s[142]++;

        if (selector) {
          cov_nnobgjulu.b[38][0]++;
          cov_nnobgjulu.s[143]++;
          parent = document.querySelector(selector);
        } else {
          cov_nnobgjulu.b[38][1]++;
        }

        cov_nnobgjulu.s[144]++;
        return (cov_nnobgjulu.b[39][0]++, parent) || (cov_nnobgjulu.b[39][1]++, element.parentNode);
      }; // eslint-disable-next-line complexity


      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        cov_nnobgjulu.f[20]++;
        cov_nnobgjulu.s[145]++;

        // If not input/textarea:
        //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
        // If input/textarea:
        //  - If space key => not a dropdown command
        //  - If key is other than escape
        //    - If key is not up or down => not a dropdown command
        //    - If trigger inside the menu => not a dropdown command
        if (/input|textarea/i.test(event.target.tagName) ? (cov_nnobgjulu.b[41][0]++, (cov_nnobgjulu.b[42][0]++, event.which === SPACE_KEYCODE) || (cov_nnobgjulu.b[42][1]++, event.which !== ESCAPE_KEYCODE) && ((cov_nnobgjulu.b[42][2]++, event.which !== ARROW_DOWN_KEYCODE) && (cov_nnobgjulu.b[42][3]++, event.which !== ARROW_UP_KEYCODE) || (cov_nnobgjulu.b[42][4]++, $$$1(event.target).closest(Selector.MENU).length))) : (cov_nnobgjulu.b[41][1]++, !REGEXP_KEYDOWN.test(event.which))) {
          cov_nnobgjulu.b[40][0]++;
          cov_nnobgjulu.s[146]++;
          return;
        } else {
          cov_nnobgjulu.b[40][1]++;
        }

        cov_nnobgjulu.s[147]++;
        event.preventDefault();
        cov_nnobgjulu.s[148]++;
        event.stopPropagation();
        cov_nnobgjulu.s[149]++;

        if ((cov_nnobgjulu.b[44][0]++, this.disabled) || (cov_nnobgjulu.b[44][1]++, $$$1(this).hasClass(ClassName.DISABLED))) {
          cov_nnobgjulu.b[43][0]++;
          cov_nnobgjulu.s[150]++;
          return;
        } else {
          cov_nnobgjulu.b[43][1]++;
        }

        var parent = (cov_nnobgjulu.s[151]++, Dropdown._getParentFromElement(this));
        var isActive = (cov_nnobgjulu.s[152]++, $$$1(parent).hasClass(ClassName.SHOW));
        cov_nnobgjulu.s[153]++;

        if ((cov_nnobgjulu.b[46][0]++, !isActive) && ((cov_nnobgjulu.b[46][1]++, event.which !== ESCAPE_KEYCODE) || (cov_nnobgjulu.b[46][2]++, event.which !== SPACE_KEYCODE)) || (cov_nnobgjulu.b[46][3]++, isActive) && ((cov_nnobgjulu.b[46][4]++, event.which === ESCAPE_KEYCODE) || (cov_nnobgjulu.b[46][5]++, event.which === SPACE_KEYCODE))) {
          cov_nnobgjulu.b[45][0]++;
          cov_nnobgjulu.s[154]++;

          if (event.which === ESCAPE_KEYCODE) {
            cov_nnobgjulu.b[47][0]++;
            var toggle = (cov_nnobgjulu.s[155]++, parent.querySelector(Selector.DATA_TOGGLE));
            cov_nnobgjulu.s[156]++;
            $$$1(toggle).trigger('focus');
          } else {
            cov_nnobgjulu.b[47][1]++;
          }

          cov_nnobgjulu.s[157]++;
          $$$1(this).trigger('click');
          cov_nnobgjulu.s[158]++;
          return;
        } else {
          cov_nnobgjulu.b[45][1]++;
        }

        var items = (cov_nnobgjulu.s[159]++, [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS)));
        cov_nnobgjulu.s[160]++;

        if (items.length === 0) {
          cov_nnobgjulu.b[48][0]++;
          cov_nnobgjulu.s[161]++;
          return;
        } else {
          cov_nnobgjulu.b[48][1]++;
        }

        var index = (cov_nnobgjulu.s[162]++, items.indexOf(event.target));
        cov_nnobgjulu.s[163]++;

        if ((cov_nnobgjulu.b[50][0]++, event.which === ARROW_UP_KEYCODE) && (cov_nnobgjulu.b[50][1]++, index > 0)) {
          cov_nnobgjulu.b[49][0]++;
          cov_nnobgjulu.s[164]++;
          // Up
          index--;
        } else {
          cov_nnobgjulu.b[49][1]++;
        }

        cov_nnobgjulu.s[165]++;

        if ((cov_nnobgjulu.b[52][0]++, event.which === ARROW_DOWN_KEYCODE) && (cov_nnobgjulu.b[52][1]++, index < items.length - 1)) {
          cov_nnobgjulu.b[51][0]++;
          cov_nnobgjulu.s[166]++;
          // Down
          index++;
        } else {
          cov_nnobgjulu.b[51][1]++;
        }

        cov_nnobgjulu.s[167]++;

        if (index < 0) {
          cov_nnobgjulu.b[53][0]++;
          cov_nnobgjulu.s[168]++;
          index = 0;
        } else {
          cov_nnobgjulu.b[53][1]++;
        }

        cov_nnobgjulu.s[169]++;
        items[index].focus();
      };

      _createClass(Dropdown, null, [{
        key: "VERSION",
        get: function get() {
          cov_nnobgjulu.f[2]++;
          cov_nnobgjulu.s[26]++;
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          cov_nnobgjulu.f[3]++;
          cov_nnobgjulu.s[27]++;
          return Default;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          cov_nnobgjulu.f[4]++;
          cov_nnobgjulu.s[28]++;
          return DefaultType;
        }
      }]);

      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    cov_nnobgjulu.s[170]++;
    $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      cov_nnobgjulu.f[21]++;
      cov_nnobgjulu.s[171]++;
      event.preventDefault();
      cov_nnobgjulu.s[172]++;
      event.stopPropagation();
      cov_nnobgjulu.s[173]++;

      Dropdown._jQueryInterface.call($$$1(this), 'toggle');
    }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      cov_nnobgjulu.f[22]++;
      cov_nnobgjulu.s[174]++;
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    cov_nnobgjulu.s[175]++;
    $$$1.fn[NAME] = Dropdown._jQueryInterface;
    cov_nnobgjulu.s[176]++;
    $$$1.fn[NAME].Constructor = Dropdown;
    cov_nnobgjulu.s[177]++;

    $$$1.fn[NAME].noConflict = function () {
      cov_nnobgjulu.f[23]++;
      cov_nnobgjulu.s[178]++;
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      cov_nnobgjulu.s[179]++;
      return Dropdown._jQueryInterface;
    };

    cov_nnobgjulu.s[180]++;
    return Dropdown;
  }($, Popper));

  return Dropdown;

})));
//# sourceMappingURL=dropdown.js.map
