class BD {

    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoID() {
        let proximoID = localStorage.getItem('id')
        return parseInt(proximoID) + 1
    }

    gravar(d) {
        let id = this.getProximoID()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)

    }

    recuperarRegistros() {

        //Recuperando id atual que representa quantidade de despesas incluidas
        let id = localStorage.getItem('id')
        console.log(id)

        //lista pra armazenas todos os registros
        let lista_despesas = []
            //Loop para percorrer todos os registro armazenado no LocalStorege e armazenalos na lista
        for (let n = 1; n <= id; n++) {

            let desp = localStorage.getItem(n)

            console.log(desp)

            //Validando key para não armazenar registros nulos
            if (desp == null) {
                continue
            }
            lista_despesas.push(JSON.parse(desp))

        }
        return lista_despesas

    }



}

let bd = new BD()


class Despesa {

    constructor(ano, mes, dia, tipo, descricao, valor) {

        this.ano = ano
        this.dia = dia
        this.mes = mes
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor

    }

    //Função para validar todos os valores incluidos na view
    validarDados() {

        for (let i in this) {
            //console.log(this[i], i)
            if (this[i] == undefined || this[i] == null || this[i] <= 0 || this[i] == '') {
                //console.log(this[i])
                return false
            }

        }
        return true
    }
}

let dep = new Despesa()

function cadastrarDespesa() {

    let ano = document.getElementById("ano")
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')


    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

    // Aviso via modal para informar sobre o sucesso ou falha na inclusão dos dados
    if (despesa.validarDados()) {
        bd.gravar(despesa)

        //Inlcuindo nas tag do modal as informações de forma programática
        document.getElementById('modal_titulo').innerHTML = 'Sucesso'
        document.getElementById('model_msm').innerHTML = 'Dados Inseridos!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_btn').className = 'btn btn-success'
        document.getElementById('modal_btn').innerHTML = 'Volta'
        $('#modalRegistra').modal('show')
    } else {

        document.getElementById('modal_titulo').innerHTML = 'Falha'
        document.getElementById('model_msm').innerHTML = 'Dados inválidos!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_btn').className = 'btn btn-danger'
        document.getElementById('modal_btn').innerHTML = 'Volta e corrigir'
        $('#modalRegistra').modal('show')
    }
}

function consultarDespesas() {

    let lista_despesas = []
    lista_despesas = bd.recuperarRegistros()

    var tabDespesas = document.getElementById('tabelaDespesas')



    lista_despesas.forEach(function(d) {

        tabDespesas.insertRow()
    })
}