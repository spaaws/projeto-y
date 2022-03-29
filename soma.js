console.log("soma: ", 5 + 5)


var valor = parseInt(prompt("Insira o primeiro numero: \n"));
var valor1 = parseInt(prompt("Insira o segundo numero: \n"))
var oper = parseInt(prompt("Qual operacao deseja efetuar (+) (-) (*) (/)? : \n"));

var calculo = 0;

   if (oper =="+") {
      calculo = valor + valor1;
} else if 
      (oper == "-") {
      calculo = valor - valor1;
   } else if
       (oper == "*") {
         calculo = valor * valor1;
      } else if 
         (oper == "/") {
       calculo = valor / valor1;
      } else {
        document.write('Não foi possível calcular');
      }

      document.write('O resultado é ', +calculo);