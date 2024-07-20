let input = document.getElementById("inputData");
let btn = document.getElementById("btn_c");
let main = document.getElementById("area");
let result = document.getElementById("result")


function entrada(v)
{
    console.log(v);
    input.value += v;

}

function separa(aux)
{
    let tokens;

    if((aux !== " ") && (aux !== undefined) && (aux !== null))
        {
            tokens = aux.split(/([+\-*/])/);
        }

    return tokens;

}

function ordena(aux) {
    let aux2 = [];
    for (let i = 0; i < aux.length; i++) {
        
        if (aux[i] === "*" || aux[i] === "/") 
        {
            aux2.unshift(aux[i + 1]);
            aux2.unshift(aux[i]);
            aux2.unshift(aux[i - 1]);
        } 
        else if (aux[i] === "-" || aux[i] === "+") 
        {            
            aux2.push(aux[i - 1]);            
            aux2.push(aux[i]);            
            aux2.push(aux[i + 1]);
        }
    }
    
    return aux2;
}



function calcula(aux) {
    for(let i = 0; i< aux.length; i++)   
    {
        if(aux[i] === "*")
        {
            let resultado = Number(aux[i-1]) *  Number(aux[i+1]);
            aux.splice(i-1,4, resultado);
            i = 0;
        }

        if(aux[i] === "/")
        {
                let resultado = Number(aux[i-1]) /  Number(aux[i+1]);
                aux.splice(i-1,4, resultado);
            i = 0;
        }

        if(aux[i] === "+")
        {
                let resultado = Number(aux[i-1]) +  Number(aux[i+1]);
                aux.splice(i-1,4, resultado);
            i = 0;
        }

        if(aux[i] === "-")
        {
                let resultado = Number(aux[i-1]) -  Number(aux[i+1]);
                aux.splice(i-1,4, resultado);
            i = 0;
        }
        console.log(aux);
    }

        return(aux[0]);
}


function operation()
{
    let valorInput = input.value;
    result.innerText=" ";
    var valor = 0;
    
    valorInput = separa(valorInput);
    valorInput = ordena(valorInput);
    valorInput = calcula(valorInput)
    result.innerText = valorInput;

        
}



