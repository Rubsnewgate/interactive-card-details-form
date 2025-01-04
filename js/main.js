const domElements = {
	// display sections
	formSection: document.querySelector('.form'),
	formCompleteSection: document.querySelector('.complete-section'),
	continueBtn: document.querySelector('.complete-btn'),

	// form user info
	userName: document.getElementById('user-name'),
	cardNumber: document.getElementById('card-number'),
	cardMonth: document.getElementById('month'),
	cardYear: document.getElementById('year'),
	cardCvc: document.getElementById('cvc'),
	submintBtn: document.querySelector('.submit-btn'),

	// form error elements
	nameError: document.querySelector('.name-card--error'),
	numberError: document.querySelector('.number-card--error'),
    monthError: document.querySelector('.month-card--error'),
    yearError: document.querySelector('.year-card--error'),
    cvcError: document.querySelector('.cvc-card--error'),

	// interactive card's output data
	userCardNumber: document.querySelector('.card__number'),
	userCardName: document.querySelector('.card__name'),
	userCardExpirationMonth: document.querySelector('.exp-month'),
    userCardExpirationYear: document.querySelector('.exp-year'),
    userCardCvc: document.querySelector('.cvc-number'),
}

// validation rules for the form fields
const validateName = (input, errorElement, requiredMessage, invalidMessage) => {
	const value = input.value.trim()

	if (!value) {
		input.style.border = '1px solid hsl(0, 100%, 66%)'
		errorElement.style.display = 'block'
        errorElement.textContent = requiredMessage
        return
	}
	if (!/^[a-zA-Z\s]+$/.test(value)) {
		input.style.border = '1px solid hsl(0, 100%, 66%)'
		errorElement.style.display = 'block'
        errorElement.textContent = invalidMessage
        return
	}

	input.style.border = '1px solid hsl(279, 6%, 55%)'
	errorElement.style.display = 'none'
	return true
}

function validateNumericInput (input, errorElement, requiredMessage, invalidMessage) {
	const value = input.value.trim()

	if (!value) {
		input.style.border = '1px solid hsl(0, 100%, 66%)'
		errorElement.style.display = 'block'
        errorElement.textContent = requiredMessage
        return
	}
	if (!/^\d+$/.test(value)) {
	    input.style.border = '1px solid hsl(0, 100%, 66%)'
		errorElement.style.display = 'block'
        errorElement.textContent = invalidMessage
        return
	}

	input.style.border = '1px solid hsl(279, 6%, 55%)'
	errorElement.style.display = 'none'
	return true
}

function validateForm (event) {
	event.preventDefault()

	const isValidName = validateName(
		domElements.userName,
		domElements.nameError,
		'Name is required!',
		'Invalid name!'
	)
	const isValidCardNumber = validateNumericInput(
		domElements.cardNumber,
		domElements.numberError,
        'Card number is required!',
        'Invalid card number!'
	)
	const isValidMonth = validateNumericInput(
		domElements.cardMonth,
		domElements.monthError,
		'Month is required!',
		'Invalid month!',
	)
	const isValidYear = validateNumericInput(
        domElements.cardYear,
        domElements.yearError,
        'Year is required!',
        'Invalid year!',
	)
	const isValidCvc = validateNumericInput(
        domElements.cardCvc,
        domElements.cvcError,
        'CVC is required!',
        'Invalid CVC!',
	)

    if (isValidName && isValidCardNumber && isValidMonth && isValidYear && isValidCvc) {
		completeSuccessfullyForm()
	}
	else return
}

// format card number to inject it into the card dinamically
const formatCardNumber = (number) => {
	return number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
}

// inject the form values to the card
function updateCardInfo (input, targetElement, formatter = value => value) {
	input.addEventListener('input', () => {
		targetElement.textContent = formatter(input.value)
	})
}

// updating the card info dynamically
updateCardInfo(domElements.cardNumber, domElements.userCardNumber, formatCardNumber)
updateCardInfo(domElements.userName, domElements.userCardName)
updateCardInfo(domElements.cardMonth, domElements.userCardExpirationMonth)
updateCardInfo(domElements.cardYear, domElements.userCardExpirationYear)
updateCardInfo(domElements.cardCvc, domElements.userCardCvc)

// displaying the complete form section
const completeSuccessfullyForm = () => {
	domElements.formSection.style.display = 'none'
	domElements.formCompleteSection.style.display = 'flex'
}

domElements.submintBtn.addEventListener('click', validateForm)

// reload the page
domElements.continueBtn.addEventListener('click', () => {
	window.location.reload()
})
