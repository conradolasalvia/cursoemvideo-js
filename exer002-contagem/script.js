function gerar() {
	
	
	let num = document.getElementById('num')
	let res = document.getElementById('res')
	let tab = document.querySelector('select#seltab')
	
	
	if(num.value.length == 0){
		window.alert = 'Digite um número'
	} 
	else {
		num = Number(num.value)
		tab.innerHTML = ''
		for(c=1;c<=10;c++){

		let item = document.createElement('option')
		item.text = `${num} x ${c} = ${num*c}`
		item.value = `tab${c}`
		tab.appendChild(item)
		}

	}
	


}