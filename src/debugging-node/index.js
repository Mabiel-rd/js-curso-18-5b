/* Algoritmo  de ordenamento al Burbuja 0(n˄2)*/

const ordenaBubuja = (lista) => {


     let longitudLista, indexOrder, indexChage, auxChage;
     longitudLista = lista.length;

     console.info(longitudLista); //Mostramos por consola la cantidad de elementos en la listas
 
     for (indexOrder = 1; indexOrder < longitudLista; indexOrder++) {
          //For anidado.
         for (indexChage = 0; indexChage < (longitudLista - indexOrder); indexChage++){
             // Indercambiar los valores si el anterior es mayor al siguiente.
             if (lista[indexChage] > lista[indexChage + 1]) {
                 auxChage = lista[indexChage];
                lista[indexChage] = lista[indexChage + 1];
                lista[indexChage + 1] = auxChage; 
      }
     }
  }
    
    return lista;
}

 let ListaDesordenada = [6, 5, 3, 1, 8, 7, 2, 4];
 console.warn(ListaDesordenada); //Mostramos, por consola, la lista desordenada 

 const listaOrdenada = ordenaBubuja(ListaDesordenada);
 console.log(listaOrdenada); //Mostramos, por consola, la lista ya ordenada 

//Mabiel Rosario





