window.alert("Olá")


function carregar() {
	let msg = window.document.getElementById('msg')
	let img = window.document.getElementById('imagem')
	let foto = window.document.getElementById('foto')
	
	var data = new Date()
	var hora = data.getHours()
	
	

	if(hora >= 4 && hora <= 12){
		//DIA
		msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
		img.src = "imagens/manha.png"
		img.alt="fotodamanha"
		document.body.style.background = '#D2F0FA'
		
	} else if (hora > 12 && hora <= 18){
		//TARDE
		msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
		img.src="imagens/tarde.png" 
		img.alt="fotodatarde"
		document.body.style.background = 'rgb(250, 155, 53)'

	}else {
		//NOITE
		msg.innerHTML = `Agora são ${hora} horas. Boa Noite!`
		img.src="imagens/noite.png"
		img.alt="fotodanoite"
		document.body.style.background = 'rgb(50, 30, 55)'
				
	}
	

}








