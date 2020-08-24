
console.log("----------------------Impares----------------------------");

function impares(n:number)
{
    for(let i=1;i<n;i+=2)
    {
        console.log(i);   // aqui pongo la i porque va a recoger la n, que seria el valor que le dare a mi function.
    }
};
impares(20)

console.log("------------Arcoiris----------------------");

function arcoiris(colores:string[])
{
    for(let i=0;i<colores.length;i++)
    {
        if((colores[i]=="rojo")||(colores[i]=="rosa")||(colores[i]=="verde")
        ||(colores[i]=="azul")||(colores[i]=="amarillo"))
        {
            console.log(colores[i] + " Si esta dentro");
        }else
        {
            console.log(colores[i] + " No pertenece al arcoiris");
        }
    }
}
let gamaDeColores:string[]= ["rojo","rosa","verde","azul","amarillo","violeta"]
arcoiris(gamaDeColores)

console.log("-----------------------hayUnPar--------------------------");


// function esPar(numero:number){
//     return numero % 2 == 0;
// }

// function hayUnPar(numeros:number[])
// {
//     let cantNumeros = numeros.length;

//     for (let index = 0; index < cantNumeros; index++) {
       
//         if(esPar(numeros[index])){
//            return true;
//         }
//     }

//    return false;
// }

// let numerosImp=[1,3,5,7,9];
// let numeros=[1,3,5,8,9];

// console.log(hayUnPar(numerosImp));
// console.log(hayUnPar(numeros));

console.log("------------------M--------------------");


function comienzoDenombre(nombres:string[])
{    
    let letraPrincipal = "M";
    let cantNombres = nombres.length;

    for(let i=0; i<cantNombres; i++){

        if(nombres[i][0]!=letraPrincipal){
            return false;
        }
    }        
    return true;
}

let nombres:string[] = ["Maria","Jose","Luis","Mario"];
let nombres2:string[] = ["Maria","Marcos","Mariana","Mario"];

console.log(comienzoDenombre(nombres));
console.log(comienzoDenombre(nombres2));

console.log("---------------------------esPar-----------------");


function esPar(numero:number){
    return numero % 2 == 0;
}
function sumaDeCaracteres(nombres:string[]){
    let resultado:number = 0;
    for(let i =0; i<nombres.length;i++)
    {
        resultado += nombres[i].length;
    }

    if(esPar(resultado)){
        return true;
    }
    return false;
}

let contabilizandoNombres:string[]=["Ana","Carlos","Maximiliano"];

console.log(sumaDeCaracteres(contabilizandoNombres));


// function sumaDeCaracteres(nombres:string[]){

//     let resultado:number =0;

//     if(nombres == null){
//         return resultado;
//     }

//     for(let i =0; i<nombres.length;i++)
//     {
//         resultado += nombres[i].length;
//     }
//     return resultado;
// }

// let contabilizandoNombres:string[]=["Ana","Carlos","Maximiliano"];

// console.log(sumaDeCaracteres(contabilizandoNombres));

