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
    const regex = /\d+|[-+*/]/g;

    if((aux !== " ") && (aux !== undefined) && (aux !== null))
        {
            tokens = aux.match(regex);
        }
    console.log(aux);

    for(let i = 0; i<aux.length; i++)
        {
            if(tokens[i] === "-")
            {
                tokens[i + 1] = (-parseFloat(tokens[i + 1])).toString();
                tokens.splice(i, 1);
            }
        }
    return tokens;
}




function calcula(aux) {
    let aux2 = 0;

    for (let i = 0; i < aux.length; i++) {
        if (aux[i] === "*") {
            aux2 = Number(aux[i - 1]) * Number(aux[i + 1]);
            aux.splice(i - 1, 3, aux2);
            i--; 
        }

        if (aux[i] === "/") {
            aux2 = Number(aux[i - 1]) / Number(aux[i + 1]);
            aux.splice(i - 1, 3, aux2);
            i--; 
        }
    }

    for (let i = 0; i < aux.length; i++) {
        if (aux[i] === "+") {
            aux2 = Number(aux[i - 1]) + Number(aux[i + 1]);
            aux.splice(i - 1, 3, aux2);
            i--; 
        }

        
        if (typeof aux[i] === "number" && aux[i] < 0) {
            
            if (i > 0 && typeof aux[i - 1] === "number") {
                
                aux2 = Number(aux[i - 1]) + aux[i];
                aux.splice(i - 1, 2, aux2);
                i--; 
            }
        }
    }
    return aux[0];
}


function operation()
{
    let valorInput = input.value;
    result.innerText=" ";
    var valor = 0;
    
    valorInput = separa(valorInput);
    valorInput = calcula(valorInput);
    result.innerText = valorInput;

        
}



