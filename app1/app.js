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

	recuperarRegistros(){

		//Recuperando id atual que representa quantidade de despesas incluidas
		id = localStorage.getItem('id')

		//Recuperar todas as despesas cadastradas em localStorage
		
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

 let dep = new Despesa()

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
		
		document.getElementById('modal_titulo').innerHTML = 'Sucesso'
		document.getElementById('model_msm').innerHTML = 'Dados Inseridos!'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_btn').className = 'btn btn-success'
		document.getElementById('modal_btn').innerHTML= 'Volta'
		$('#modalRegistra').modal('show')
	}
	else{
		
		document.getElementById('modal_titulo').innerHTML = 'Falha'
		document.getElementById('model_msm').innerHTML = 'Dados inválidos!'
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_btn').className = 'btn btn-danger'
		document.getElementById('modal_btn').innerHTML= 'Volta e corrigir'
		$('#modalRegistra').modal('show')
	}
}

function consularDespesar(){

	//bd.recuperarRegistros()
	console.log('chegou')
}
	




