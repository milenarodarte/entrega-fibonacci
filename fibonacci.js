
function add (n1, n2) {
    return n1 + n2
  }
  
  

  function fibonacci(n) {
    arrayFibonacci = []
   
    
    for ( i= 0; i <= n; i++){  
        if ( i <= 1) {
            arrayFibonacci.push(i)
        }
        console.log(arrayFibonacci)
        if ( i > 1 ) {
        arrayFibonacci[i] = add(arrayFibonacci[i-1],  arrayFibonacci [i-2])
            
        arrayFibonacci.push(arrayFibonacci[i])
        }
            
    }

    return arrayFibonacci[n]
    }
      
 
  console.log(fibonacci(7))
  
  // descomente a linha seguinte para testar sua função
  //console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
  