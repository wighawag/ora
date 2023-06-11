"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => ora,
  oraPromise: () => oraPromise,
  spinners: () => import_cli_spinners2.default
});
module.exports = __toCommonJS(src_exports);
var import_node_process = __toESM(require("process"));
var import_chalk = __toESM(require("chalk"));
var import_cli_cursor = __toESM(require("cli-cursor"));
var import_cli_spinners = __toESM(require("cli-spinners"));
var import_log_symbols = __toESM(require("log-symbols"));
var import_strip_ansi = __toESM(require("strip-ansi"));
var import_wcwidth = __toESM(require("wcwidth"));
var import_is_interactive = __toESM(require("is-interactive"));
var import_is_unicode_supported = __toESM(require("is-unicode-supported"));
var import_stdin_discarder = __toESM(require("stdin-discarder"));
var import_cli_spinners2 = __toESM(require("cli-spinners"));
var _linesToClear, _isDiscardingStdin, _lineCount, _frameIndex, _options, _spinner, _stream, _id, _initialInterval, _isEnabled, _isSilent, _indent, _text, _prefixText, _suffixText, _getFullPrefixText, getFullPrefixText_fn, _getFullSuffixText, getFullSuffixText_fn, _updateLineCount, updateLineCount_fn;
var Ora = class {
  constructor(options) {
    __privateAdd(this, _getFullPrefixText);
    __privateAdd(this, _getFullSuffixText);
    __privateAdd(this, _updateLineCount);
    __privateAdd(this, _linesToClear, 0);
    __privateAdd(this, _isDiscardingStdin, false);
    __privateAdd(this, _lineCount, 0);
    __privateAdd(this, _frameIndex, 0);
    __privateAdd(this, _options, void 0);
    __privateAdd(this, _spinner, void 0);
    __privateAdd(this, _stream, void 0);
    __privateAdd(this, _id, void 0);
    __privateAdd(this, _initialInterval, void 0);
    __privateAdd(this, _isEnabled, void 0);
    __privateAdd(this, _isSilent, void 0);
    __privateAdd(this, _indent, void 0);
    __privateAdd(this, _text, void 0);
    __privateAdd(this, _prefixText, void 0);
    __privateAdd(this, _suffixText, void 0);
    if (typeof options === "string") {
      options = {
        text: options
      };
    }
    __privateSet(this, _options, {
      color: "cyan",
      stream: import_node_process.default.stderr,
      discardStdin: true,
      hideCursor: true,
      ...options
    });
    this.color = __privateGet(this, _options).color;
    this.spinner = __privateGet(this, _options).spinner;
    __privateSet(this, _initialInterval, __privateGet(this, _options).interval);
    __privateSet(this, _stream, __privateGet(this, _options).stream);
    __privateSet(this, _isEnabled, typeof __privateGet(this, _options).isEnabled === "boolean" ? __privateGet(this, _options).isEnabled : (0, import_is_interactive.default)({ stream: __privateGet(this, _stream) }));
    __privateSet(this, _isSilent, typeof __privateGet(this, _options).isSilent === "boolean" ? __privateGet(this, _options).isSilent : false);
    this.text = __privateGet(this, _options).text;
    this.prefixText = __privateGet(this, _options).prefixText;
    this.suffixText = __privateGet(this, _options).suffixText;
    this.indent = __privateGet(this, _options).indent;
    if (import_node_process.default.env.NODE_ENV === "test") {
      this._stream = __privateGet(this, _stream);
      this._isEnabled = __privateGet(this, _isEnabled);
      Object.defineProperty(this, "_linesToClear", {
        get() {
          return __privateGet(this, _linesToClear);
        },
        set(newValue) {
          __privateSet(this, _linesToClear, newValue);
        }
      });
      Object.defineProperty(this, "_frameIndex", {
        get() {
          return __privateGet(this, _frameIndex);
        }
      });
      Object.defineProperty(this, "_lineCount", {
        get() {
          return __privateGet(this, _lineCount);
        }
      });
    }
  }
  get indent() {
    return __privateGet(this, _indent);
  }
  set indent(indent) {
    if (!indent) {
      indent = 0;
    }
    if (!(indent >= 0 && Number.isInteger(indent))) {
      throw new Error("The `indent` option must be an integer from 0 and up");
    }
    __privateSet(this, _indent, indent);
    __privateMethod(this, _updateLineCount, updateLineCount_fn).call(this);
  }
  get interval() {
    return __privateGet(this, _initialInterval) ?? __privateGet(this, _spinner).interval ?? 100;
  }
  get spinner() {
    return __privateGet(this, _spinner);
  }
  set spinner(spinner) {
    __privateSet(this, _frameIndex, 0);
    __privateSet(this, _initialInterval, void 0);
    if (typeof spinner === "object") {
      if (spinner.frames === void 0) {
        throw new Error("The given spinner must have a `frames` property");
      }
      __privateSet(this, _spinner, spinner);
    } else if (!(0, import_is_unicode_supported.default)()) {
      __privateSet(this, _spinner, import_cli_spinners.default.line);
    } else if (spinner === void 0) {
      __privateSet(this, _spinner, import_cli_spinners.default.dots);
    } else if (spinner !== "default" && import_cli_spinners.default[spinner]) {
      __privateSet(this, _spinner, import_cli_spinners.default[spinner]);
    } else {
      throw new Error(`There is no built-in spinner named '${spinner}'. See https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json for a full list.`);
    }
  }
  get text() {
    return __privateGet(this, _text);
  }
  set text(value) {
    if (!value) {
      value = "";
    }
    __privateSet(this, _text, value);
    __privateMethod(this, _updateLineCount, updateLineCount_fn).call(this);
  }
  get prefixText() {
    return __privateGet(this, _prefixText);
  }
  set prefixText(value) {
    if (!value) {
      value = "";
    }
    __privateSet(this, _prefixText, value);
    __privateMethod(this, _updateLineCount, updateLineCount_fn).call(this);
  }
  get suffixText() {
    return __privateGet(this, _suffixText);
  }
  set suffixText(value) {
    if (!value) {
      value = "";
    }
    __privateSet(this, _suffixText, value);
    __privateMethod(this, _updateLineCount, updateLineCount_fn).call(this);
  }
  get isSpinning() {
    return __privateGet(this, _id) !== void 0;
  }
  get isEnabled() {
    return __privateGet(this, _isEnabled) && !__privateGet(this, _isSilent);
  }
  set isEnabled(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("The `isEnabled` option must be a boolean");
    }
    __privateSet(this, _isEnabled, value);
  }
  get isSilent() {
    return __privateGet(this, _isSilent);
  }
  set isSilent(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("The `isSilent` option must be a boolean");
    }
    __privateSet(this, _isSilent, value);
  }
  frame() {
    const { frames } = __privateGet(this, _spinner);
    let frame = frames[__privateGet(this, _frameIndex)];
    if (this.color) {
      frame = import_chalk.default[this.color](frame);
    }
    __privateSet(this, _frameIndex, ++__privateWrapper(this, _frameIndex)._ % frames.length);
    const fullPrefixText = typeof __privateGet(this, _prefixText) === "string" && __privateGet(this, _prefixText) !== "" ? __privateGet(this, _prefixText) + " " : "";
    const fullText = typeof this.text === "string" ? " " + this.text : "";
    const fullSuffixText = typeof __privateGet(this, _suffixText) === "string" && __privateGet(this, _suffixText) !== "" ? " " + __privateGet(this, _suffixText) : "";
    return fullPrefixText + frame + fullText + fullSuffixText;
  }
  clear() {
    if (!__privateGet(this, _isEnabled) || !__privateGet(this, _stream).isTTY) {
      return this;
    }
    __privateGet(this, _stream).cursorTo(0);
    for (let index = 0; index < __privateGet(this, _linesToClear); index++) {
      if (index > 0) {
        __privateGet(this, _stream).moveCursor(0, -1);
      }
      __privateGet(this, _stream).clearLine(1);
    }
    if (__privateGet(this, _indent) || this.lastIndent !== __privateGet(this, _indent)) {
      __privateGet(this, _stream).cursorTo(__privateGet(this, _indent));
    }
    this.lastIndent = __privateGet(this, _indent);
    __privateSet(this, _linesToClear, 0);
    return this;
  }
  render() {
    if (__privateGet(this, _isSilent)) {
      return this;
    }
    this.clear();
    __privateGet(this, _stream).write(this.frame());
    __privateSet(this, _linesToClear, __privateGet(this, _lineCount));
    return this;
  }
  start(text) {
    if (text) {
      this.text = text;
    }
    if (__privateGet(this, _isSilent)) {
      return this;
    }
    if (!__privateGet(this, _isEnabled)) {
      if (this.text) {
        __privateGet(this, _stream).write(`- ${this.text}
`);
      }
      return this;
    }
    if (this.isSpinning) {
      return this;
    }
    if (__privateGet(this, _options).hideCursor) {
      import_cli_cursor.default.hide(__privateGet(this, _stream));
    }
    if (__privateGet(this, _options).discardStdin && import_node_process.default.stdin.isTTY) {
      __privateSet(this, _isDiscardingStdin, true);
      import_stdin_discarder.default.start();
    }
    this.render();
    __privateSet(this, _id, setInterval(this.render.bind(this), this.interval));
    return this;
  }
  stop() {
    if (!__privateGet(this, _isEnabled)) {
      return this;
    }
    clearInterval(__privateGet(this, _id));
    __privateSet(this, _id, void 0);
    __privateSet(this, _frameIndex, 0);
    this.clear();
    if (__privateGet(this, _options).hideCursor) {
      import_cli_cursor.default.show(__privateGet(this, _stream));
    }
    if (__privateGet(this, _options).discardStdin && import_node_process.default.stdin.isTTY && __privateGet(this, _isDiscardingStdin)) {
      import_stdin_discarder.default.stop();
      __privateSet(this, _isDiscardingStdin, false);
    }
    return this;
  }
  succeed(text) {
    return this.stopAndPersist({ symbol: import_log_symbols.default.success, text });
  }
  fail(text) {
    return this.stopAndPersist({ symbol: import_log_symbols.default.error, text });
  }
  warn(text) {
    return this.stopAndPersist({ symbol: import_log_symbols.default.warning, text });
  }
  info(text) {
    return this.stopAndPersist({ symbol: import_log_symbols.default.info, text });
  }
  stopAndPersist(options = {}) {
    if (__privateGet(this, _isSilent)) {
      return this;
    }
    const prefixText = options.prefixText ?? __privateGet(this, _prefixText);
    const fullPrefixText = __privateMethod(this, _getFullPrefixText, getFullPrefixText_fn).call(this, prefixText, " ");
    const symbolText = options.symbol ?? " ";
    const text = options.text ?? this.text;
    const fullText = typeof text === "string" ? " " + text : "";
    const suffixText = options.suffixText ?? __privateGet(this, _suffixText);
    const fullSuffixText = __privateMethod(this, _getFullSuffixText, getFullSuffixText_fn).call(this, suffixText, " ");
    const textToWrite = fullPrefixText + symbolText + fullText + fullSuffixText + "\n";
    this.stop();
    __privateGet(this, _stream).write(textToWrite);
    return this;
  }
};
_linesToClear = new WeakMap();
_isDiscardingStdin = new WeakMap();
_lineCount = new WeakMap();
_frameIndex = new WeakMap();
_options = new WeakMap();
_spinner = new WeakMap();
_stream = new WeakMap();
_id = new WeakMap();
_initialInterval = new WeakMap();
_isEnabled = new WeakMap();
_isSilent = new WeakMap();
_indent = new WeakMap();
_text = new WeakMap();
_prefixText = new WeakMap();
_suffixText = new WeakMap();
_getFullPrefixText = new WeakSet();
getFullPrefixText_fn = function(prefixText = __privateGet(this, _prefixText), postfix = " ") {
  if (typeof prefixText === "string" && prefixText !== "") {
    return prefixText + postfix;
  }
  if (typeof prefixText === "function") {
    return prefixText() + postfix;
  }
  return "";
};
_getFullSuffixText = new WeakSet();
getFullSuffixText_fn = function(suffixText = __privateGet(this, _suffixText), prefix = " ") {
  if (typeof suffixText === "string" && suffixText !== "") {
    return prefix + suffixText;
  }
  if (typeof suffixText === "function") {
    return prefix + suffixText();
  }
  return "";
};
_updateLineCount = new WeakSet();
updateLineCount_fn = function() {
  const columns = __privateGet(this, _stream).columns ?? 80;
  const fullPrefixText = __privateMethod(this, _getFullPrefixText, getFullPrefixText_fn).call(this, __privateGet(this, _prefixText), "-");
  const fullSuffixText = __privateMethod(this, _getFullSuffixText, getFullSuffixText_fn).call(this, __privateGet(this, _suffixText), "-");
  const fullText = " ".repeat(__privateGet(this, _indent)) + fullPrefixText + "--" + __privateGet(this, _text) + "--" + fullSuffixText;
  __privateSet(this, _lineCount, 0);
  for (const line of (0, import_strip_ansi.default)(fullText).split("\n")) {
    __privateSet(this, _lineCount, __privateGet(this, _lineCount) + Math.max(1, Math.ceil((0, import_wcwidth.default)(line) / columns)));
  }
};
function ora(options) {
  return new Ora(options);
}
async function oraPromise(action, options) {
  const actionIsFunction = typeof action === "function";
  const actionIsPromise = typeof action.then === "function";
  if (!actionIsFunction && !actionIsPromise) {
    throw new TypeError("Parameter `action` must be a Function or a Promise");
  }
  const { successText, failText } = typeof options === "object" ? options : { successText: void 0, failText: void 0 };
  const spinner = ora(options).start();
  try {
    const promise = actionIsFunction ? action(spinner) : action;
    const result = await promise;
    spinner.succeed(
      successText === void 0 ? void 0 : typeof successText === "string" ? successText : successText(result)
    );
    return result;
  } catch (error) {
    spinner.fail(
      failText === void 0 ? void 0 : typeof failText === "string" ? failText : failText(error)
    );
    throw error;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  oraPromise,
  spinners
});
//# sourceMappingURL=index.js.map