class BD{

	constructor(){
		 let id = localStorage.getItem('id')

		 if(id === null){
		 	localStorage.setItem('id', 0)
		 }
	}

	getProximoID(){
		let proximoID = localStorage.getItem('id')
		return parseInt(proximoID)+1
	}

	gravar(d){
				let id = this.getProximoID()
				localStorage.setItem(id, JSON.stringify(d))
				localStorage.setItem('id', id)
			
	}

	
	
}

 let bd = new BD()
 

class Despesa{

	constructor(ano, mes, dia, tipo, descricao, valor){

		this.ano = ano
		this.dia = dia
		this.mes = mes
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor

	}
	validarDados(){

		for(let i in this)
		{
			console.log(this[i], i)
			if(this[i] == undefined || this[i] == null || this[i] <= 0 || this[i] == '')
			{
				console.log(this[i])
				return false
			}

		}
		return true
	}
}

function cadastrarDespesa(){

	let ano = document.getElementById("ano")
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')


	let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)


	if(despesa.validarDados())
	{
		bd.gravar(despesa)
		alert("Despesa incluida com sucesso!")
	}
	else{
		alert("Dados inválidos!") 
		//modal altera o ID da dic princial e moditifcar a mensagem a
		// altar data-toggler
		// função em Jquery $(id).modal('show')
	}
}
	




