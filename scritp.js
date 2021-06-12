function major(num){
    if(num>=18){
        alert("Usuario mayor de edad!")
    }else{
        alert("Usuario menor de edad!")
    }
}
edad=parseInt(prompt("Ingrese su edad "));
major(edad);
function calcularEdad(){
    var major = new Array;
    var edad1 = parseInt(document.getElementById("edad1").value);
    var edad2 = parseInt(document.getElementById("edad2").value);
    var edad3 = parseInt(document.getElementById("edad3").value);

    major[0]=edad1;
    major[1]=edad2;
    major[3]=edad3;
    
    var max=Math.max(major[0],major[1],major[3]);
   // var max=Math.max.apply(major)
    alert(`El usuario mayor tiene ${max}`);
}
