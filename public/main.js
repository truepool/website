(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/fileSize/lib/filesize.min.js
  var require_filesize_min = __commonJS((exports, module) => {
    /*!
     2020 Jason Mulligan <jason.mulligan@avoidwork.com>
     @version 6.3.0
    */
    !function(e, t) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).filesize = t();
    }(exports, function() {
      "use strict";
      var e = /^(b|B)$/, t = {iec: {bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"], bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]}, jedec: {bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"], bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]}}, i = {iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"], jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]}, o = {floor: Math.floor, ceil: Math.ceil};
      function n(n2) {
        var r, a, b, l, s, c, d, f, u, p, B, h, g, y, M, m, v, x, j, T, E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = [], w = 0;
        if (isNaN(n2))
          throw new TypeError("Invalid number");
        if (b = E.bits === true, M = E.unix === true, h = E.pad === true, a = E.base || 2, g = E.round !== void 0 ? E.round : M ? 1 : 2, d = E.locale !== void 0 ? E.locale : "", f = E.localeOptions || {}, m = E.separator !== void 0 ? E.separator : "", v = E.spacer !== void 0 ? E.spacer : M ? "" : " ", j = E.symbols || {}, x = a === 2 && E.standard || "jedec", B = E.output || "string", s = E.fullform === true, c = E.fullforms instanceof Array ? E.fullforms : [], r = E.exponent !== void 0 ? E.exponent : -1, T = o[E.roundingMethod] || Math.round, l = a > 2 ? 1e3 : 1024, (u = (p = Number(n2)) < 0) && (p = -p), (r === -1 || isNaN(r)) && (r = Math.floor(Math.log(p) / Math.log(l))) < 0 && (r = 0), r > 8 && (r = 8), B === "exponent")
          return r;
        if (p === 0)
          N[0] = 0, y = N[1] = M ? "" : t[x][b ? "bits" : "bytes"][r];
        else {
          w = p / (a === 2 ? Math.pow(2, 10 * r) : Math.pow(1e3, r)), b && (w *= 8) >= l && r < 8 && (w /= l, r++);
          var k = Math.pow(10, r > 0 ? g : 0);
          N[0] = T(w * k) / k, N[0] === l && r < 8 && E.exponent === void 0 && (N[0] = 1, r++), y = N[1] = a === 10 && r === 1 ? b ? "kb" : "kB" : t[x][b ? "bits" : "bytes"][r], M && (N[1] = x === "jedec" ? N[1].charAt(0) : r > 0 ? N[1].replace(/B$/, "") : N[1], e.test(N[1]) && (N[0] = Math.floor(N[0]), N[1] = ""));
        }
        if (u && (N[0] = -N[0]), N[1] = j[N[1]] || N[1], d === true ? N[0] = N[0].toLocaleString() : d.length > 0 ? N[0] = N[0].toLocaleString(d, f) : m.length > 0 && (N[0] = N[0].toString().replace(".", m)), h && Number.isInteger(N[0]) === false && g > 0) {
          var G = m || ".", K = N[0].toString().split(G), P = K[1] || "", S = P.length, Y = g - S;
          N[0] = "".concat(K[0]).concat(G).concat(P.padEnd(S + Y, "0"));
        }
        return s && (N[1] = c[r] ? c[r] : i[x][r] + (b ? "bit" : "byte") + (N[0] === 1 ? "" : "s")), B === "array" ? N : B === "object" ? {value: N[0], symbol: N[1], exponent: r, unit: y} : N.join(v);
      }
      return n.partial = function(e2) {
        return function(t2) {
          return n(t2, e2);
        };
      }, n;
    });
  });

  // ns-hugo:/Users/undsoft/projects/truepool/v3/assets/js/config.ts
  var config = {
    baseUrl: "https://truepool.io/v1/",
    daysForChart: 120
  };

  // ns-hugo:/Users/undsoft/projects/truepool/v3/assets/js/palette.ts
  var palette = {
    chart: {
      series: "#ebb012",
      gridlines: "#636363"
    }
  };

  // ns-hugo:/Users/undsoft/projects/truepool/v3/assets/js/utils/debounce.ts
  function debounce(callback, time) {
    let interval;
    return (...args) => {
      clearTimeout(interval);
      interval = setTimeout(() => {
        interval = null;
        callback(...args);
      }, time);
    };
  }

  // ns-hugo:/Users/undsoft/projects/truepool/v3/assets/js/main-page/main-page.ts
  var import_fileSize = __toModule(require_filesize_min());

  // node_modules/date-fns/esm/_lib/toInteger/index.js
  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  // node_modules/date-fns/esm/_lib/requiredArgs/index.js
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }

  // node_modules/date-fns/esm/toDate/index.js
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
        console.warn(new Error().stack);
      }
      return new Date(NaN);
    }
  }

  // node_modules/date-fns/esm/addMilliseconds/index.js
  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
  }

  // node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }

  // node_modules/date-fns/esm/isValid/index.js
  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    return !isNaN(date);
  }

  // node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  function formatDistance(token, count, options) {
    options = options || {};
    var result;
    if (typeof formatDistanceLocale[token] === "string") {
      result = formatDistanceLocale[token];
    } else if (count === 1) {
      result = formatDistanceLocale[token].one;
    } else {
      result = formatDistanceLocale[token].other.replace("{{count}}", count);
    }
    if (options.addSuffix) {
      if (options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  }

  // node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
  function buildFormatLongFn(args) {
    return function(dirtyOptions) {
      var options = dirtyOptions || {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format2 = args.formats[width] || args.formats[args.defaultWidth];
      return format2;
    };
  }

  // node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
  var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };
  var formatLong_default = formatLong;

  // node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  }

  // node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
  function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
      var options = dirtyOptions || {};
      var context = options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }

  // node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
  var eraValues = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  };
  var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  var dayValues = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  function ordinalNumber(dirtyNumber, _dirtyOptions) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  }
  var localize = {
    ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function(quarter) {
        return Number(quarter) - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };
  var localize_default = localize;

  // node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
  function buildMatchPatternFn(args) {
    return function(dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult) {
        return null;
      }
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value,
        rest: string.slice(matchedString.length)
      };
    };
  }

  // node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
  function buildMatchFn(args) {
    return function(dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var value;
      if (Object.prototype.toString.call(parsePatterns) === "[object Array]") {
        value = findIndex(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        });
      } else {
        value = findKey(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        });
      }
      value = args.valueCallback ? args.valueCallback(value) : value;
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value,
        rest: string.slice(matchedString.length)
      };
    };
  }
  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
  }
  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
  }

  // node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function(value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function(index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };
  var match_default = match;

  // node_modules/date-fns/esm/locale/en-US/index.js
  var locale = {
    code: "en-US",
    formatDistance,
    formatLong: formatLong_default,
    formatRelative,
    localize: localize_default,
    match: match_default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  var en_US_default = locale;

  // node_modules/date-fns/esm/subMilliseconds/index.js
  function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
  }

  // node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return sign + output;
  }

  // node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
  var formatters = {
    y: function(date, token) {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
    },
    M: function(date, token) {
      var month = date.getUTCMonth();
      return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    d: function(date, token) {
      return addLeadingZeros(date.getUTCDate(), token.length);
    },
    a: function(date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return dayPeriodEnumValue.toUpperCase();
        case "aaa":
          return dayPeriodEnumValue;
        case "aaaaa":
          return dayPeriodEnumValue[0];
        case "aaaa":
        default:
          return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
      }
    },
    h: function(date, token) {
      return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    H: function(date, token) {
      return addLeadingZeros(date.getUTCHours(), token.length);
    },
    m: function(date, token) {
      return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    s: function(date, token) {
      return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    S: function(date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return addLeadingZeros(fractionalSeconds, token.length);
    }
  };
  var lightFormatters_default = formatters;

  // node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
  var MILLISECONDS_IN_DAY = 864e5;
  function getUTCDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }

  // node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
  function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  // node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
  function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
  function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
  }

  // node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
  var MILLISECONDS_IN_WEEK = 6048e5;
  function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }

  // node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
  function startOfUTCWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale2 = options.locale;
    var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  // node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
  function getUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate, dirtyOptions);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale2 = options.locale;
    var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
  function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale2 = options.locale;
    var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    var year = getUTCWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, dirtyOptions);
    return date;
  }

  // node_modules/date-fns/esm/_lib/getUTCWeek/index.js
  var MILLISECONDS_IN_WEEK2 = 6048e5;
  function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
  }

  // node_modules/date-fns/esm/_lib/format/formatters/index.js
  var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };
  var formatters2 = {
    G: function(date, token, localize2) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return localize2.era(era, {
            width: "abbreviated"
          });
        case "GGGGG":
          return localize2.era(era, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return localize2.era(era, {
            width: "wide"
          });
      }
    },
    y: function(date, token, localize2) {
      if (token === "yo") {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize2.ordinalNumber(year, {
          unit: "year"
        });
      }
      return lightFormatters_default.y(date, token);
    },
    Y: function(date, token, localize2, options) {
      var signedWeekYear = getUTCWeekYear(date, options);
      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
      if (token === "YY") {
        var twoDigitYear = weekYear % 100;
        return addLeadingZeros(twoDigitYear, 2);
      }
      if (token === "Yo") {
        return localize2.ordinalNumber(weekYear, {
          unit: "year"
        });
      }
      return addLeadingZeros(weekYear, token.length);
    },
    R: function(date, token) {
      var isoWeekYear = getUTCISOWeekYear(date);
      return addLeadingZeros(isoWeekYear, token.length);
    },
    u: function(date, token) {
      var year = date.getUTCFullYear();
      return addLeadingZeros(year, token.length);
    },
    Q: function(date, token, localize2) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        case "Q":
          return String(quarter);
        case "QQ":
          return addLeadingZeros(quarter, 2);
        case "Qo":
          return localize2.ordinalNumber(quarter, {
            unit: "quarter"
          });
        case "QQQ":
          return localize2.quarter(quarter, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return localize2.quarter(quarter, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return localize2.quarter(quarter, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    q: function(date, token, localize2) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        case "q":
          return String(quarter);
        case "qq":
          return addLeadingZeros(quarter, 2);
        case "qo":
          return localize2.ordinalNumber(quarter, {
            unit: "quarter"
          });
        case "qqq":
          return localize2.quarter(quarter, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return localize2.quarter(quarter, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return localize2.quarter(quarter, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    M: function(date, token, localize2) {
      var month = date.getUTCMonth();
      switch (token) {
        case "M":
        case "MM":
          return lightFormatters_default.M(date, token);
        case "Mo":
          return localize2.ordinalNumber(month + 1, {
            unit: "month"
          });
        case "MMM":
          return localize2.month(month, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return localize2.month(month, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return localize2.month(month, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    L: function(date, token, localize2) {
      var month = date.getUTCMonth();
      switch (token) {
        case "L":
          return String(month + 1);
        case "LL":
          return addLeadingZeros(month + 1, 2);
        case "Lo":
          return localize2.ordinalNumber(month + 1, {
            unit: "month"
          });
        case "LLL":
          return localize2.month(month, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return localize2.month(month, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return localize2.month(month, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    w: function(date, token, localize2, options) {
      var week = getUTCWeek(date, options);
      if (token === "wo") {
        return localize2.ordinalNumber(week, {
          unit: "week"
        });
      }
      return addLeadingZeros(week, token.length);
    },
    I: function(date, token, localize2) {
      var isoWeek = getUTCISOWeek(date);
      if (token === "Io") {
        return localize2.ordinalNumber(isoWeek, {
          unit: "week"
        });
      }
      return addLeadingZeros(isoWeek, token.length);
    },
    d: function(date, token, localize2) {
      if (token === "do") {
        return localize2.ordinalNumber(date.getUTCDate(), {
          unit: "date"
        });
      }
      return lightFormatters_default.d(date, token);
    },
    D: function(date, token, localize2) {
      var dayOfYear = getUTCDayOfYear(date);
      if (token === "Do") {
        return localize2.ordinalNumber(dayOfYear, {
          unit: "dayOfYear"
        });
      }
      return addLeadingZeros(dayOfYear, token.length);
    },
    E: function(date, token, localize2) {
      var dayOfWeek = date.getUTCDay();
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    e: function(date, token, localize2, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        case "e":
          return String(localDayOfWeek);
        case "ee":
          return addLeadingZeros(localDayOfWeek, 2);
        case "eo":
          return localize2.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "eee":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    c: function(date, token, localize2, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        case "c":
          return String(localDayOfWeek);
        case "cc":
          return addLeadingZeros(localDayOfWeek, token.length);
        case "co":
          return localize2.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "ccc":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    i: function(date, token, localize2) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      switch (token) {
        case "i":
          return String(isoDayOfWeek);
        case "ii":
          return addLeadingZeros(isoDayOfWeek, token.length);
        case "io":
          return localize2.ordinalNumber(isoDayOfWeek, {
            unit: "day"
          });
        case "iii":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    a: function(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    b: function(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      }
      switch (token) {
        case "b":
        case "bb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    B: function(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    h: function(date, token, localize2) {
      if (token === "ho") {
        var hours = date.getUTCHours() % 12;
        if (hours === 0)
          hours = 12;
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return lightFormatters_default.h(date, token);
    },
    H: function(date, token, localize2) {
      if (token === "Ho") {
        return localize2.ordinalNumber(date.getUTCHours(), {
          unit: "hour"
        });
      }
      return lightFormatters_default.H(date, token);
    },
    K: function(date, token, localize2) {
      var hours = date.getUTCHours() % 12;
      if (token === "Ko") {
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    k: function(date, token, localize2) {
      var hours = date.getUTCHours();
      if (hours === 0)
        hours = 24;
      if (token === "ko") {
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    m: function(date, token, localize2) {
      if (token === "mo") {
        return localize2.ordinalNumber(date.getUTCMinutes(), {
          unit: "minute"
        });
      }
      return lightFormatters_default.m(date, token);
    },
    s: function(date, token, localize2) {
      if (token === "so") {
        return localize2.ordinalNumber(date.getUTCSeconds(), {
          unit: "second"
        });
      }
      return lightFormatters_default.s(date, token);
    },
    S: function(date, token) {
      return lightFormatters_default.S(date, token);
    },
    X: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      if (timezoneOffset === 0) {
        return "Z";
      }
      switch (token) {
        case "X":
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        case "XXXX":
        case "XX":
          return formatTimezone(timezoneOffset);
        case "XXXXX":
        case "XXX":
        default:
          return formatTimezone(timezoneOffset, ":");
      }
    },
    x: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "x":
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        case "xxxx":
        case "xx":
          return formatTimezone(timezoneOffset);
        case "xxxxx":
        case "xxx":
        default:
          return formatTimezone(timezoneOffset, ":");
      }
    },
    O: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + formatTimezoneShort(timezoneOffset, ":");
        case "OOOO":
        default:
          return "GMT" + formatTimezone(timezoneOffset, ":");
      }
    },
    z: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + formatTimezoneShort(timezoneOffset, ":");
        case "zzzz":
        default:
          return "GMT" + formatTimezone(timezoneOffset, ":");
      }
    },
    t: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1e3);
      return addLeadingZeros(timestamp, token.length);
    },
    T: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return addLeadingZeros(timestamp, token.length);
    }
  };
  function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
      return sign + String(hours);
    }
    var delimiter = dirtyDelimiter || "";
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
  }
  function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? "-" : "+";
      return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
  }
  function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }
  var formatters_default = formatters2;

  // node_modules/date-fns/esm/_lib/format/longFormatters/index.js
  function dateLongFormatter(pattern, formatLong2) {
    switch (pattern) {
      case "P":
        return formatLong2.date({
          width: "short"
        });
      case "PP":
        return formatLong2.date({
          width: "medium"
        });
      case "PPP":
        return formatLong2.date({
          width: "long"
        });
      case "PPPP":
      default:
        return formatLong2.date({
          width: "full"
        });
    }
  }
  function timeLongFormatter(pattern, formatLong2) {
    switch (pattern) {
      case "p":
        return formatLong2.time({
          width: "short"
        });
      case "pp":
        return formatLong2.time({
          width: "medium"
        });
      case "ppp":
        return formatLong2.time({
          width: "long"
        });
      case "pppp":
      default:
        return formatLong2.time({
          width: "full"
        });
    }
  }
  function dateTimeLongFormatter(pattern, formatLong2) {
    var matchResult = pattern.match(/(P+)(p+)?/);
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong2);
    }
    var dateTimeFormat;
    switch (datePattern) {
      case "P":
        dateTimeFormat = formatLong2.dateTime({
          width: "short"
        });
        break;
      case "PP":
        dateTimeFormat = formatLong2.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        dateTimeFormat = formatLong2.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        dateTimeFormat = formatLong2.dateTime({
          width: "full"
        });
        break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
  }
  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };
  var longFormatters_default = longFormatters;

  // node_modules/date-fns/esm/_lib/protectedTokens/index.js
  var protectedDayOfYearTokens = ["D", "DD"];
  var protectedWeekYearTokens = ["YY", "YYYY"];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format2, input) {
    if (token === "YYYY") {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "YY") {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "D") {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "DD") {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    }
  }

  // node_modules/date-fns/esm/format/index.js
  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
  function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    requiredArgs(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale2 = options.locale || en_US_default;
    var localeFirstWeekContainsDate = locale2.options && locale2.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var localeWeekStartsOn = locale2.options && locale2.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!locale2.localize) {
      throw new RangeError("locale must contain localize property");
    }
    if (!locale2.formatLong) {
      throw new RangeError("locale must contain formatLong property");
    }
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
      throw new RangeError("Invalid time value");
    }
    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate,
      weekStartsOn,
      locale: locale2,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        var longFormatter = longFormatters_default[firstCharacter];
        return longFormatter(substring, locale2.formatLong, formatterOptions);
      }
      return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
      if (substring === "''") {
        return "'";
      }
      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }
      var formatter = formatters_default[firstCharacter];
      if (formatter) {
        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }
        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }
        return formatter(utcDate, substring, locale2.localize, formatterOptions);
      }
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }
      return substring;
    }).join("");
    return result;
  }
  function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
  }

  // ns-hugo:/Users/undsoft/projects/truepool/v3/assets/js/main-page/main-page.ts
  var chartBaseUnit = 1024 ** 4;
  async function loadMainPage() {
    if (!isMainPage()) {
      return;
    }
    const poolSizes = await loadData();
    if (!poolSizes.length) {
      return;
    }
    setUnderManagementString(poolSizes[poolSizes.length - 1].size);
    setChart(poolSizes);
  }
  function isMainPage() {
    return Boolean(document.querySelector(".page-main"));
  }
  async function loadData() {
    return new Promise((resolve) => resolve(generateFakeData(config.daysForChart)));
    try {
      const response = await window.fetch(`${config.baseUrl}/pool/size?days=${config.daysForChart}`);
      if (!response.ok) {
        console.error(response.statusText);
        return [];
      }
      return response.json();
    } catch (e) {
      console.log(e);
      return [];
    }
  }
  function setUnderManagementString(lastPoolSize) {
    const underManagementEl = document.getElementById("under-management");
    underManagementEl.querySelector("a").textContent = (0, import_fileSize.default)(lastPoolSize);
    underManagementEl.classList.add("ready");
  }
  function setChart(poolSizes) {
    const drawChart = () => {
      const series = poolSizes.map(({datetime, size}) => {
        const sizeInUnits = size / chartBaseUnit;
        const formattedDate = format(datetime, "LLL, do");
        const formattedSize = (0, import_fileSize.default)(size);
        return [
          datetime,
          sizeInUnits,
          `${formattedDate} \u2013 ${formattedSize}`
        ];
      });
      const dataTable = google.visualization.arrayToDataTable([
        ["Day", "Size", {type: "string", role: "tooltip"}],
        ...series
      ]);
      const chartElement = document.getElementById("stats");
      chartElement.classList.add("ready");
      const chart = new google.visualization.LineChart(chartElement);
      chart.draw(dataTable, {
        curveType: "function",
        legend: "none",
        backgroundColor: "transparent",
        colors: [palette.chart.series],
        chartArea: {
          width: "80%",
          height: "80%"
        },
        hAxis: {
          viewWindowMode: "maximized",
          textStyle: {
            color: "white"
          },
          gridlines: {
            color: palette.chart.gridlines,
            count: 1
          },
          minorGridlines: {
            color: palette.chart.gridlines,
            count: 0
          }
        },
        vAxis: {
          viewWindowMode: "maximized",
          format: "#.#TB",
          textStyle: {
            color: "white"
          },
          gridlines: {
            color: palette.chart.gridlines
          },
          minorGridlines: {
            count: 0
          }
        },
        pointSize: 3
      });
    };
    google.charts.load("current", {packages: ["corechart"]});
    window.onresize = debounce(() => drawChart(), 500);
    google.charts.setOnLoadCallback(drawChart);
  }
  function generateFakeData(days) {
    const poolSizes = [];
    for (let i = days; i--; i >= 0) {
      const datetime = new Date();
      datetime.setDate(-i);
      const size = Math.round(((days - i) * 0.8 + (days - i) * 0.2 * Math.random()) * chartBaseUnit);
      poolSizes.push({datetime, size});
    }
    return poolSizes;
  }

  // ns-hugo:/Users/undsoft/projects/truepool/v3/assets/js/page-utils/smoothly-scroll-to.ts
  function smoothlyScrollTo(targetSelector) {
    if (!window.hasOwnProperty("scrollTo")) {
      return true;
    }
    const target = document.querySelector(targetSelector);
    if (!target) {
      return true;
    }
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
    return false;
  }

  // <stdin>
  loadMainPage();
  window.smoothlyScrollTo = smoothlyScrollTo;
})();
