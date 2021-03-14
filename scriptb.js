function gerarTab() {
    let numero = Number(document.getElementById('numeroTxt').value)   
    let tab = document.getElementById('seltab')

    if (numero == '') {
        alert('Digite um numero valido')
       
    } else {
        tab.innerHTML = '' 
     for(let c = 1; c <= 10; c++) { //c recebe +1 enquanto ele for <= a 10//
        let item = document.createElement('option') //cria o option do select com o item text//
        item.text = `${numero} x ${c} = ${c * numero}` //cria as linhas com a tabuada no html//
        tab.appendChild(item) //mostra a visualização da tabuada no html, adicionando "item" como filho de 'tab'//
    }}








}


