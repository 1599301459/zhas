class TimeFormatter {
	/**
	 * 构造函数，初始化时间戳和日期对象
	 * @param {number|string} time - 时间戳或日期字符串，默认为当前时间
	 */
	constructor(time = Date.now()) {
		this.setTime(time);
	}

	/**
	 * 内部方法：初始化时间戳
	 * @param {number|string} time - 时间戳或日期字符串
	 * @private
	 */
	_initTime(time) {
		this.time = this._parseTime(time);
		this.dateObj = this._createDateObj();
	}

	/**
	 * 内部方法：解析时间
	 * @param {number|string} time - 时间戳或日期字符串
	 * @returns {number} 解析后的时间戳
	 * @private
	 */
	_parseTime(time) {
		if (typeof time === 'number') {
			return time;
		} else if (typeof time === 'string') {
			return Date.parse(time);
		} else {
			throw new Error('时间格式错误');
		}
	}

	/**
	 * 内部方法：生成包含年月日时分秒的对象
	 * @returns {Object} 日期对象
	 * @private
	 */
	_createDateObj() {
		const date = new Date(this.time);
		return {
			year: date.getFullYear().toString(),
			month: this._addZero(date.getMonth() + 1),
			day: this._addZero(date.getDate()),
			hour: this._addZero(date.getHours()),
			minutes: this._addZero(date.getMinutes()),
			second: this._addZero(date.getSeconds())
		};
	}

	/**
	 * 辅助函数：确保月份和日期始终有两位数字
	 * @param {number} num - 需要处理的月份或日期
	 * @returns {string} 格式化后的字符串
	 * @private
	 */
	_addZero(num) {
		return num.toString().padStart(2, '0');
	}

	/**
	 * 设置新的时间戳并更新日期对象
	 * @param {number|string} time - 新的时间戳或日期字符串
	 * @returns {TimeFormatter} 当前实例以支持链式调用
	 */
	setTime(time) {
		this._initTime(time);
		return this;
	}

	/**
	 * 根据指定模式格式化日期
	 * @param {string} pattern - 格式化模式，例如 'year-month-day hour:minutes:second'
	 * @returns {String} 返回时间格式
	 */
	format(pattern) {
		const map = {
			'year': this.dateObj.year,
			'month': this.dateObj.month,
			'day': this.dateObj.day,
			'hour': this.dateObj.hour,
			'minutes': this.dateObj.minutes,
			'second': this.dateObj.second
		};

		return pattern.replace(/year|month|day|hour|minutes|second/gi, match => map[match.toLowerCase()]);
	}

	/**
	 * 获取指定年份和月份的起始日期和结束日期
	 * 如果year和month未传入，则默认使用dateObj中的值
	 * @param {number} [year=this.dateObj.year] - 年份
	 * @param {number} [month=this.dateObj.month] - 月份
	 * @param {number} [type=1] - 1加上时分秒 0不需要，默认为1
	 * @returns {Array<string>} 包含起始日期和结束日期的数组
	 */
	getMonthBoundaryDates(year = this.dateObj.year, month = this.dateObj.month, type = 1) {
		const startDate = new Date(year, month - 1, 1);
		const endDate = new Date(year, month, 0);

		const formatDate = date =>
			`${date.getFullYear()}-${this._addZero(date.getMonth() + 1)}-${this._addZero(date.getDate())}`;

		let str1 = formatDate(startDate);
		let str2 = formatDate(endDate);

		if (type === 1) {
			str1 += " 00:00:00";
			str2 += " 23:59:59";
		}

		return [str1, str2];
	}

	/**
	 * 传入天数根据天数返回起始时间
	 * @param {number} days - 天数
	 * @param {string} pattern - 时间格式模式，例如 'year-month-day hour:minutes:second'
	 * @returns {Array<string>} 包含天数前的日期和当前日期的数组
	 */
	getTodayAndDaysAgo(days, pattern = 'year-month-day hour:minutes:second') {
		const today = new Date();
		const daysAgo = new Date(today);
		daysAgo.setDate(today.getDate() - days);

		return [
			new TimeFormatter(daysAgo).format(pattern),
			new TimeFormatter(today).format(pattern)
		];
	}
}






const formatter = new TimeFormatter(20240212);
const formattedDate = formatter.format('year-month-day hour:minutes:second');
console.log(formattedDate);
console.log(formatter);
let time = formatter.setTime(1721801974546)
console.log(formatter.getMonthBoundaryDates())
console.log(formatter);
class TimeFormatter {
	/**
	 * 构造函数，初始化时间戳和日期对象
	 * @param {number|string} time - 时间戳或日期字符串，默认为当前时间
	 */
	constructor(time = Date.now()) {
		this.setTime(time);
	}

	/**
	 * 内部方法：初始化时间戳
	 * @param {number|string} time - 时间戳或日期字符串
	 * @private
	 */
	_initTime(time) {
		this.time = this._parseTime(time);
		this.dateObj = this._createDateObj();
	}

	/**
	 * 内部方法：解析时间
	 * @param {number|string} time - 时间戳或日期字符串
	 * @returns {number} 解析后的时间戳
	 * @private
	 */
	_parseTime(time) {
		if (typeof time === 'number') {
			return time;
		} else if (typeof time === 'string') {
			return Date.parse(time);
		} else {
			throw new Error('时间格式错误');
		}
	}

	/**
	 * 内部方法：生成包含年月日时分秒的对象
	 * @returns {Object} 日期对象
	 * @private
	 */
	_createDateObj() {
		const date = new Date(this.time);
		return {
			year: date.getFullYear().toString(),
			month: this._addZero(date.getMonth() + 1),
			day: this._addZero(date.getDate()),
			hour: this._addZero(date.getHours()),
			minutes: this._addZero(date.getMinutes()),
			second: this._addZero(date.getSeconds())
		};
	}

	/**
	 * 辅助函数：确保月份和日期始终有两位数字
	 * @param {number} num - 需要处理的月份或日期
	 * @returns {string} 格式化后的字符串
	 * @private
	 */
	_addZero(num) {
		return num.toString().padStart(2, '0');
	}

	/**
	 * 设置新的时间戳并更新日期对象
	 * @param {number|string} time - 新的时间戳或日期字符串
	 * @returns {TimeFormatter} 当前实例以支持链式调用
	 */
	setTime(time) {
		this._initTime(time);
		return this;
	}

	/**
	 * 根据指定模式格式化日期
	 * @param {string} pattern - 格式化模式，例如 'year-month-day hour:minutes:second'
	 * @returns {String} 返回时间格式
	 */
	format(pattern) {
		const map = {
			'year': this.dateObj.year,
			'month': this.dateObj.month,
			'day': this.dateObj.day,
			'hour': this.dateObj.hour,
			'minutes': this.dateObj.minutes,
			'second': this.dateObj.second
		};

		return pattern.replace(/year|month|day|hour|minutes|second/gi, match => map[match.toLowerCase()]);
	}

	/**
	 * 获取指定年份和月份的起始日期和结束日期
	 * 如果year和month未传入，则默认使用dateObj中的值
	 * @param {number} [year=this.dateObj.year] - 年份
	 * @param {number} [month=this.dateObj.month] - 月份
	 * @param {number} [type=1] - 1加上时分秒 0不需要，默认为1
	 * @returns {Array<string>} 包含起始日期和结束日期的数组
	 */
	getMonthBoundaryDates(year = this.dateObj.year, month = this.dateObj.month, type = 1) {
		const startDate = new Date(year, month - 1, 1);
		const endDate = new Date(year, month, 0);

		const formatDate = date =>
			`${date.getFullYear()}-${this._addZero(date.getMonth() + 1)}-${this._addZero(date.getDate())}`;

		let str1 = formatDate(startDate);
		let str2 = formatDate(endDate);

		if (type === 1) {
			str1 += " 00:00:00";
			str2 += " 23:59:59";
		}

		return [str1, str2];
	}

	/**
	 * 传入天数根据天数返回起始时间
	 * @param {number} days - 天数
	 * @param {string} pattern - 时间格式模式，例如 'year-month-day hour:minutes:second'
	 * @returns {Array<string>} 包含天数前的日期和当前日期的数组
	 */
	getTodayAndDaysAgo(days, pattern = 'year-month-day hour:minutes:second') {
		const today = new Date();
		const daysAgo = new Date(today);
		daysAgo.setDate(today.getDate() - days);

		return [
			new TimeFormatter(daysAgo).format(pattern),
			new TimeFormatter(today).format(pattern)
		];
	}
}





// demo
const formatter = new TimeFormatter(20240212);
const formattedDate = formatter.format('year-month-day hour:minutes:second');
console.log(formattedDate);
console.log(formatter);
let time = formatter.setTime(1721801974546)
console.log(formatter.getMonthBoundaryDates())
console.log(formatter);
