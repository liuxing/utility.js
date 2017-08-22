/**
 * 数组去重
 *
 * @param {array} arr
 * @returns {array}
 */
function unique(arr) {
    const cache = {}
    const cacheArr = []
    for (let i = 0, len = arr.length; i < len; i += 1) {
        if (!cache[arr[i]]) {
            cacheArr.push(arr[i])
            cache[arr[i]] = arr[i]
        }
    }
    return cacheArr
}

/**
 * 去除字符串前后空格
 *
 * @param {string} str
 * @param {number}
 * @returns {string}
 */
function trim(str) {
    return str.replace(/(^\s*)/g, '')
}

/**
 * 生成随机数 [lower, upper]
 *
 * @param {number} [lower=0]
 * @param {number} [upper=0]
 * @returns {number}
 */
function random(lower = 0, upper = 0) {
    const rand = Math.random()
    if (lower === 0 && upper === 0) {
        return rand
    }
    if (lower > upper) {
        [upper, lower] = [lower, upper]
    }
    return Math.floor(rand * (upper - lower + 1) + lower)
}

/**
 *  random string
 *
 * @param {number} length string length
 * @param {string} charSet
 * @returns {string} random string
 */
function randomString(length = 16, charSet) {
    const result = []
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    while (length--) {
        result.push(charSet[Math.floor(Math.random() * charSet.length)])
    }
    return result.join('')
}

/**
 * random color
 *
 * @returns {string} rgb color
 */
function randomColor() {
    // return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

    const R = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)
    return `rgb(${R},${G},${B})`
}

/**
 *  检测字符串是否全是中文
 *
 * @param {any} string
 * @returns {boolean}
 */
function isChinese(string) {
    return /^[\u4e00-\u9fa5]+$/g.test(string)
}

/**
 * Base64 encode string
 *
 * @param {string|buffer} str
 * @param {Boolean} urlsafe Encode string s using a URL-safe alphabet,
 *   which substitutes - instead of + and _ instead of / in the standard Base64 alphabet
 * @returns  base64 encode format string
 */
function base64encode(str, urlsafe) {
    if (!Buffer.isBuffer(str)) {
        str = new Buffer(str)
    }
    let encode = str.toString('base64')
    if (urlsafe) {
        encode = encode.replace(/\+/g, '-').replace(/\//g, '_')
    }
    return encode
}

/**
 * Base64 string decode
 *
 * @param {any} encodeStr  encode, base64 encoding string.
 * @param {boolean} [urlsafe=false] Decode string s using a URL-safe alphabet,
 *   which substitutes - instead of + and _ instead of / in the standard Base64 alphabet
 * @param {string} [encoding='utf8']  if encoding = buffer, will return Buffer instance
 * @returns {string|buffer} plain text
 */
function base64decode(encodeStr, urlsafe = false, encoding = 'utf8') {
    if (urlsafe) {
        encodeStr = encodeStr.replace(/\-/g, '+').replace(/_/g, '/')
    }
    const buf = new Buffer(encodeStr, 'base64')
    if (encoding === 'buffer') {
        return buf
    }
    return buf.toString(encoding)
}

/**
 * 判断是不是字符串
 *
 * @param {any} value
 * @returns {boolean}
 */

function isString(value) {
    const type = typeof value
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && Object.prototype.toString.call(type) === '[object String]')
}

/**
 * 判断是不是数组
 *
 * @param {any} value
 * @returns {boolean}
 */
function isArray(value) {
    return Array.isArray ? Array.isArray(value) : Object.prototype.toString.call(value) === '[object Array]'
}

function isElement(value) {
    return !!(value && value.nodeType === 1)
}

function isObject(obj) {
    const type = typeof obj
    return type === 'function' || type === 'object' && !!obj
}

function isArguments(value) {
    return Object.prototype.toString.call(value) === '[object Arguments]'
}

function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]'
}

function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]'
}

function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]'
}

function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
}

function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]'
}

/**
 * 延迟执行函数
 *
 * @param {function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} args The arguments to invoke `func` with.
 * @returns {number} Returns the timer id
 */
function delay(func, wait, ...args) {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    return setTimeout(func, +wait || 0, ...args)
}

/**
 * 删除数组中的值
 *
 * @param {array} arr
 * @param {any} element
 * @returns {array}
 */
function remove(arr, element) {
    return arr.slice(arr.indexOf(element), 1)
}

/**
 * 数组最大值
 *
 * @param {array} arr
 * @returns {number}
 */
function max(arr) {
    // return Math.max.apply(null, arr) // es5
    return Math.max(...arr)
}

/**
 * 数组最小值
 *
 * @param {array} arr
 * @returns {number}
 */
function min(arr) {
    // return Math.min.apply(null, arr) // es5
    return Math.min(...arr)
}

/**
 * 数组求和
 *
 * @param {array} arr
 * @returns {number}
 */
function sum(arr) {
    return arr.reduce((a, b) => a + b)
}

/**
 * 打乱数组
 *
 * @param {array} arr
 * @returns {array}
 */
function upset(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

/**
 * 字符串首字母大写
 *
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
    return str.split('').forEach((element) => {
        element.toUpperCase()
    })
}

function debounce(func, wait, immediate = false) {

}

function throttle(func, wait, immediate = false) {

}
