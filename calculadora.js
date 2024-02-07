function calcular(){
    
    const pResultado = document.getElementById('resultado');
    const txtOperando = document.getElementById('operando');
    const txtOp1 = document.getElementById('op1');
    const txtOp2 = document.getElementById('op2');  
    
    const operando = txtOperando.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    if (!isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch (operando){
            case '*':
                resultado = op1  * op2;
                break;
            case '-':
                resultado = op1 - op2;
                break;
            case '+':
                resultado = op1 + op2;
                break;
            case '/':
                resultado = op1 / op2;
                break;
            default:
                resultado = 'Calculo no posible';
                
        }
        pResultado.innerText = '= ' + resultado;
        }
    else{
        pResultado.innerText = '= Calculo no posible';
    }

}

