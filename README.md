<h1>map() X forEach</h1>
<h1>jsPerf - Ferramenta de teste de performance Javascript</h1>
<p>Neste artigo será realizado um teste com um array que será modificado, usando 
o map e o forEach</p>
<p>O método forEach manipula os dados reais ou seja, ele altera os dados originais. Enquanto o map() retorna um novo array com os novos valores não alterando os originais.</p>
<h2>Exemplo</h2>
<p>Link da ferramenta : <a href="https://jsperf.com/">jsPerf</a> </p>
<p>Muito simples de utilizar basta colar os códigos na seção <em>code snippets to compare</em> e também preencher alguns campos simples como nome do teste entre outros.</p>
<p>Após isso clica em <em>save test case</em> e manda executar o teste e a comparação será realizada.</p>


<p>Abaixo

//ARRAY PARA O TESTE<br>

let arrayTeste =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
18,19,20,21,22,23,24,25,26,27,28,29,30]

//FOREACH

    arrayTeste.forEach((num, index) =>{
       return arrayTeste[index] = num * 2
    })

//MAP

    let doubled = arrayTeste.map( num =>{
        return num * 2 
    }) 


<p>O map também pode ser concatenado com outros, como no exemplo abaixo onde o filter
é usado junto para buscar os números que multiplicados por 2 no array sejam menor que 10</p>


    let menor10 = arrayTeste.map( num => num * 2 ).filter(num => num <10)
    console.log(menor10)