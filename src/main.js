const valorTotalProjetoInput = document.getElementById('valor-total-projeto')
const horasTrabalhadasInput = document.getElementById('quantidade-horas-trabalhas-dia')
const diasTrabalhadosNaSemanaInput = document.getElementById('dias-efeitos-trabalhados-semana')
const diasFeriasInput = document.getElementById('dias-ferias-projeto')

validateInputTotalProjeto = (e) => {
    if (e.charCode < 48 || e.charCode > 57) {
        e.preventDefault();
    }
}

validateHorasInput = (e) => {
    if (e.charCode < 48 || e.charCode > 57) {
        e.preventDefault();
    }
}

validateInputDiasSemana = (e) => {
    if (e.charCode < 49 || e.charCode > 55) {
        e.preventDefault();
    }
}

validateInputDiasFerias = (e) => {
    if (e.charCode < 48 || e.charCode > 57) {
        e.preventDefault();
    }
}

calculate = () => {
    const valorTotalTratado = Number(valorTotalProjetoInput.value.replace(/[^0-9\.-]+/g,""))
    const horasTrabalhadas = Number(horasTrabalhadasInput.value)
    const diasTrabalhadosNaSemana = Number(diasTrabalhadosNaSemanaInput.value)
    const diasFerias = Number(diasFeriasInput.value)

    if (valorTotalTratado < 1 || null) {
        valorTotalProjetoInput.placeholder = "Insira um valor válido"
        valorTotalProjetoInput.value = ""
    }

    if (horasTrabalhadas < 1 || null || horasTrabalhadas.value > 24) {
        horasTrabalhadasInput.placeholder = "Insira um numero de 1 até 24"
        horasTrabalhadasInput.value = ""
    }

    if (diasFerias < 1 || null || diasFerias > 31) {
        diasFeriasInput.placeholder = "Insira um numero de 1 até 31"
        diasFeriasInput.value = ""
    }

    console.log(valorTotalTratado)
    console.log(horasTrabalhadas)
    console.log(diasTrabalhadosNaSemana)
    console.log(diasFerias)
    const valorHora = (valorTotalTratado / (diasTrabalhadosNaSemana * 4 * horasTrabalhadas)) + (( diasFerias * diasTrabalhadosNaSemana * horasTrabalhadas ))
    console.log(valorHora)
}