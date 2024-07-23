/**
 * 给时间戳返回年月人时分秒对象
 */
function objTime(time) {
	let date = new Date(time)
	let year = addZero(date.getFullYear())
	let month = addZero(date.getMonth() + 1)
	let day = addZero(date.getDate())
	let hour = addZero(date.getHours())
	let minute = addZero(date.getMinutes())
	let second = addZero(date.getSeconds())
	let newDate = {
		year: year,
		month: month,
		day: day,
		hour: hour,
		minutes: minute,
		second: second
	}
	return newDate
}
// 不足10的日期补0
function addZero(data) {
	let newData = data.toString()
	if (data.toString().length == 1) {
		newData = '0' + data.toString()
	}
	return newData
}
/**
 * 日期对象转时间格式
 */
function formatDateString(dateObj, pattern) {
	const {
		year,
		month,
		day,
		hour,
		minutes,
		second
	} = dateObj;
	const map = {
		'year': year.toString(),
		'month': month.toString().padStart(2, '0'),
		'day': day.toString().padStart(2, '0'),
		'hour': hour.toString().padStart(2, '0'),
		'minutes': minutes.toString().padStart(2, '0'),
		'second': second.toString().padStart(2, '0')
	};

	let result = pattern.replace(/year|month|day|hour|minutes|second/gi, match => map[match.toLowerCase()]);
	return result;
}

