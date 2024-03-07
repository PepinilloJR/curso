var Nombre = "";

Nombre = localStorage.getItem("NOMBRE");

if(Nombre != 0){

    document.write(Nombre);
} else{

    document.write("Anonimo");
}
if(Nombre == null){
    document.location.reload();
}



