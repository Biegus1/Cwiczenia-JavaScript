const addInput = document.getElementById('add_input')
const itemsList = document.getElementById('items_list')

function removeItem(e) {
	const remoweParent = e.parentNode
	remoweParent.remove()
}

addInput.addEventListener('keyup', e => {
	const inputValue = addInput.value
	if (e.keyCode === 13 && inputValue.length > 0) {
		const newItems = document.createElement('li')
		newItems.classList.add('items')
		newItems.innerText = inputValue

		const delBtn = document.createElement('button')
		delBtn.classList.add('del_btn')
		delBtn.setAttribute('key', inputValue)
		delBtn.innerText = 'Usuń'

		delBtn.setAttribute('onClick', 'removeItem(this)')

		newItems.appendChild(delBtn)
		itemsList.appendChild(newItems)

		addInput.value = ''
	}
})
