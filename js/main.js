// Display Sections
const FORM_SECTION = document.querySelector('.form')
const COMPLETE_SECTION = document.querySelector('.complete-section')

// Fomr's User Info
const USER_NAME = document.getElementById('user-name')
const CARD_NUMBER = document.getElementById('card-number')
const CARD_MONTH = document.getElementById('month')
const CARD_YEAR = document.getElementById('year')
const CARD_CVC = document.getElementById('cvc')
const SUBMIT_BTN = document.querySelector('.submit-btn')

// Form Error Elements
const NAME_ERROR = document.querySelector('.name-card--error')
const NUMBER_ERROR = document.querySelector('.number-card--error')
const DATE_ERROR = document.querySelector('.date-card--error')
const CVC_ERROR = document.querySelector('.cvc-card--error')

// Interactive Cards User's Info
let userCardNumber = document.querySelector('.card__number')
let userCardName = document.querySelector('.card__name')
let userCardExpirationMonth = document.querySelector('.exp-month')
let userCardExpirationYear = document.querySelector('.exp-year')
let userCardCvc = document.querySelector('.cvc-number')

// Interactive Cards And Form Logic
let isValid
SUBMIT_BTN.addEventListener('click', validationForm)

// Card Number Format
function formatCardNumber (number) {
	return number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ")
}

// Validate Form Info
function validationForm (event) {
	event.preventDefault()
	isValid = true

	if (USER_NAME.value === '') {
		NAME_ERROR.style.display = 'block'
		NAME_ERROR.textContent = `Can't be blank`
		USER_NAME.style.border = '1px solid hsl(0, 100%, 66%)'
		isValid = false
	}
	else {
		NAME_ERROR.style.display = 'none'
		USER_NAME.style.border = '1px solid hsl(279, 6%, 55%)'
	}

	if (isNaN(parseInt(CARD_NUMBER.value))) {
		NUMBER_ERROR.style.display = 'block'
		NUMBER_ERROR.textContent = `Wrong format, numbers only`
		CARD_NUMBER.style.border = '1px solid hsl(0, 100%, 66%)'
		isValid = false
	}
	else {
		NUMBER_ERROR.style.display = 'none'
		CARD_NUMBER.style.border = '1px solid hsl(279, 6%, 55%)'
	}

	if (CARD_MONTH.value === '' && CARD_YEAR.value === '') {
		DATE_ERROR.style.display = 'block'
		DATE_ERROR.textContent = `Can't be blank`
		CARD_YEAR.style.border = '1px solid hsl(0, 100%, 66%)'
		CARD_MONTH.style.border = '1px solid hsl(0, 100%, 66%)'
		isValid = false
	}
	else if (CARD_MONTH.value === '') {
		DATE_ERROR.style.display = 'block'
		DATE_ERROR.textContent = `Can't be blank`
		CARD_MONTH.style.border = '1px solid hsl(0, 100%, 66%)'
		isValid = false
	}
	else if (CARD_YEAR.value === '') {
		DATE_ERROR.style.display = 'block'
		DATE_ERROR.textContent = `Can't be blank`
		CARD_YEAR.style.border = '1px solid hsl(0, 100%, 66%)'
		isValid = false
	}
	else {
		DATE_ERROR.style.display = 'none'
		CARD_YEAR.style.border = '1px solid hsl(279, 6%, 55%)'
		CARD_MONTH.style.border = '1px solid hsl(279, 6%, 55%)'
	}

	if (CARD_CVC.value === '') {
		CVC_ERROR.style.display = 'block'
		CVC_ERROR.textContent = `Can't be blank`
		CARD_CVC.style.border = '1px solid hsl(0, 100%, 66%)'
		isValid = false
	}
	else {
		CVC_ERROR.style.display = 'none'
		CARD_CVC.style.border = '1px solid hsl(279, 6%, 55%)'
	}
	console.log(isValid)
	completeSuccessfullyForm()
}

// Passing The Form Values To The Cards
CARD_NUMBER.addEventListener('input', () => {
	let number = CARD_NUMBER.value
	let formatNumber = formatCardNumber(number)
	userCardNumber.textContent = formatNumber
})
USER_NAME.addEventListener('input', () => {
	userCardName.textContent = USER_NAME.value
})
CARD_MONTH.addEventListener('input', () => {
	userCardExpirationMonth.textContent = CARD_MONTH.value
})
CARD_YEAR.addEventListener('input', () => {
	userCardExpirationYear.textContent = CARD_YEAR.value
})
CARD_CVC.addEventListener('input', () => {
	userCardCvc.textContent = CARD_CVC.value
})

// Diplaying The Complete Form Section
function completeSuccessfullyForm () {
	if (isValid) {
		FORM_SECTION.style.display = 'none'
		COMPLETE_SECTION.style.display = 'flex'
	}
}

// Reload The Page
const CONTINUE_BTN = document.querySelector('.complete-btn')

CONTINUE_BTN.addEventListener('click', () => {
	window.location.reload()
})
