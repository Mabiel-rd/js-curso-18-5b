//Mabiel Rosario #18 5toB

const salular =(nombre)=>{
    console.log("creando etique h1, en el html!")
    //comentario de sola linea.
    //el codigo comentado no lee el interprete de Js.
    /*
    comentario de varias lineas.
    uso basico del documento object model (dom)
    permite a js modificar el html.
 
    */
 
    const h1=document.createElement("h1");
    h1.innerText="hola, ${nombre}";
    document.body.append(h1);
 
 }
 const user="juancho";
 salular(user);
 
