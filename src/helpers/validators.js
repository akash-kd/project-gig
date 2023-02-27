export function validateEmail(email) {
	var re = /\S+@\S+\.\S+/
	return re.test(email)
}

export function validatePhone(phone) {
	let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
	return regex.test(phone)
}

export function validateUrl(url) {
	var re =
		/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
	return re.test(url)
}

export function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])[a-z0-9]{5,}$/
    return re.test(password)
}
