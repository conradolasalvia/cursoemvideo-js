let dados = []
var c=0


function adicionar(){
	let num = document.getElementById('num')
	let tab = document.querySelector('select#seltab')
	let res = document.getElementById('contas')
	res.innerHTML = ''

	if(num.value.length == 0){
		window.alert = 'Digite um número'
	} 

	else if(dados.indexOf(Number(num.value)) == -1) {
		let item = document.createElement('option')
		item.text = `Valor ${num.value} adicionado`
		tab.appendChild(item)
		dados[c] = Number(num.value)
		c++

	} else{ window.alert = 'Número já cadastrado'}
	
	num.value = ""
	num.focus()

}

function finalizar(){
	let res = document.getElementById('contas')
	var maior = menor = soma = media =0
	res.innerHTML = ''

	if(dados.length == 0){
		window.alert = 'Digite números antes!'
	} else {
		dados.sort()
		menor = dados[0]
		maior = dados[c-1]
	
		for(i = 0;i<=c-1;i++){
			soma += dados[i]
		}
		media = soma/c
		
		res.innerHTML += `<p> Ao todo, temos <a>${c}</a> números adicionados. </p>`
		res.innerHTML +=`<p> O maior valor é <a>${maior}</a>.</p>`
		res.innerHTML +=`<p> O menor valor é <a>${menor}</a>.</p>`
		res.innerHTML +=`<p> Somando todos, temos <a>${soma}</a>.</p>`
		res.innerHTML +=`<p> A média aritimética entre eles é <a>${media}</a>.</p>`
		
	}
}
