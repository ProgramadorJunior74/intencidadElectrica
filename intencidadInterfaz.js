let reload = document.getElementById("reload");
reload.addEventListener("click", function(){
    location.reload();
});
let next = document.getElementById("next");
next.addEventListener("click", function(){
    // funcion para add divs
    function addDivs(div1, div2){
        boxDatos.appendChild(div1);
        boxDatos.appendChild(div2);
        div1.classList.add("div1");
        div2.classList.add("div2");

    }
    // funcion para add parrafos 
    function tagChild(parr1, parr2){
        parr1.classList.add("parrafo1");
        parr2.classList.add("parrafo2");
        div1.appendChild(parr1);
        div2.appendChild(parr2);
    }
    //funcion para add inputs
    function addInput(input1, input2){
        input1.classList.add("inputDato1");
        input2.classList.add("inputDato2");
        input1.type = "text";
        input1.placeholder = "Enter..."
        input2.type = "text";
        input2.placeholder = "Enter..."
        div1.appendChild(input1);
        div2.appendChild(input2);
    }
    // function for style and dinition the value of select and option
    function addSelectAndOptions(select1, select2, option1, option2, option3, option4){
        select1.classList.add("selectMedition1");
        select2.classList.add("selectMedition2");
        option1.classList.add("option1");
        option2.classList.add("option2");
        option3.classList.add("option3");
        option4.classList.add("option4");
        select1.appendChild(option1);
        select1.appendChild(option2);
        select2.appendChild(option3);
        select2.appendChild(option4);
        div1.appendChild(select1);
        div2.appendChild(select2);
    }
    //funcion para la formula
    function addFormula(formula){
        formula.classList.add("parrafo_formula");
        boxFormula.appendChild(formula);
    }





    // cantidades

    function siIdQIntencidad(f){
        switch(select2.value){
            case "C":
                if(select1.value == "dyn"){
                    f = f / 100000;
                    return f
                }else{
                    return f
                }
            case "stc": 
            if(select1.value == "N"){
                f = f * 100000;
                return f
            }else{
                return f
            }                       
            default:
        }
        
    }
    function siIdQFuerza(f){
        switch(select2.value){
            case "dyn/stc":
                if(select1.value == "C"){
                    f = f * 2997924580;
                    return f
               }else{
                   return f
               }
            case "N/C":
                if(select1.value == "stc"){
                    f = f / 2997924580;
                    return f
                }else{
                    return f
                }
        }
    }
    function siIdQCarga(f){
        switch(select2.value) {
            case "dyn/stc":
                if(select1.value == "N"){
                    f = f * 100000;
                    return f
               }else{
                   return f
               }
            case "N/C":
                if(select1.value == "dyn"){
                    f = f / 100000;
                    return f
                }else{
                    return f
                }
            default: 
                break;
        }
        }
    //function carater
    function caracterFIntencidad(espF){
        switch(select2.value) {
            case "stc":
                if(select1.value == "N"){
                    espF = "dyn";
                    return  espF
               }else{
                    espF = "dyn"
                   return espF
               }
            case "C":
                if(select1.value == "dyn"){
                    espF = "N";
                    return espF
                }else{
                    espF = "N";
                    return espF
                }
            default: 
                break;
        }
    }
    function caracterFCarga(){
        switch(select2.value) {
            case "dyn/stc":
                if(select1.value == "N"){
                    espF  = "dyn";
                    return espF
               }else{
                   espF = "dyn";
                   return espF
               }
            case "N/C":
                if(select1.value == "dyn"){
                    espF = "N";
                    return espF
                }else{
                    espF  = "N";
                    return espF
                }
            default: 
                break;
        }
    }
    function caracterQIntencidad(){
        if(select2.value === "C" || select1.value === "C"){
            if(select2.value === "dyn/stc" ){
                espacio = "stc"
            }else{
                espacio = "C"
            }
            return espacio
        }else if(select2.value === "stc" || select1.value === "stc"){
            if(select2.value === "N/C" ){
                espacio = "C"
            }else{
                espacio = "stc"
            }
            return espacio
        }
    }
    function caracterECarga(){
        if(select2.value === "N/C"){
            espacio = "N/C"
            return espacio
        }else if(select2.value === "dyn/stc"){
            espacio = "dyn/stc"
            return espacio
        }
    }

    // function of answerd
    function caractAnswerdE(){
        switch(select2.value){
            case "C":
                espAnswerdE = "N/C"
                return espAnswerdE;
            case "stc":
                espAnswerdE = "dyn/stc";
                return espAnswerdE;
            default:;
        }
    }
    function caractAnswerdF(){
        switch(select2.value){
            case "dyn/stc":
                espAnswerdF = "dyn"
                return espAnswerdF;
            case "N/C":
                espAnswerdF = "F";
                return espAnswerdF;
            default:;
        }
    }
    function caractAnswerdQ(){
        switch(select2.value){
            case "dyn/stc":
                espAnswerdQ = "stc"
                return espAnswerdQ;
            case "N/C":
                espAnswerdQ = "C";
                return espAnswerdQ;
            default:;
        }
    }

    //Function activate another function
    function functionAct(){
        addFormula(parrafo3);
        addDivs(div1, div2);
        tagChild(parrafo1, parrafo2);
        addInput(input1, input2);
        addSelectAndOptions(select1, select2, option1, option2, option3, option4);
    }
    // box and the incogs
    let boxDatos = document.getElementById("divDatos");
    let e = document.getElementById("intencidad");
    let f = document.getElementById("fuerza");
    let q = document.getElementById("carga");
    let boxFormula = document.getElementById("formula");
    let boxAnswerd = document.getElementById("boxAnswerd");
    // divs
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    //parrafos
    let parrafo1 = document.createElement("b");
    let parrafo2 = document.createElement("b"); 
    let parrafo3 = document.createElement("p"); 
    let parrafo4 = document.createElement("p"); 
    let parrafo5 = document.createElement("p"); 
    let parrafo6 = document.createElement("p"); 
    //inputs
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    // botton
    let button = document.createElement("button"); 
    // selection and option
    let select1 = document.createElement("select");
    let select2 = document.createElement("select")
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    let option4 = document.createElement("option");
   

    



    /* print the dates */
    if(e.checked){
        parrafo1.textContent = "F = ";
        parrafo2.textContent = "q = ";
        parrafo3.textContent = "E = f/q"
        option1.value = "dyn";
        option2.value = "N";
        option3.value = "stc";
        option4.value = "C";
        option1.textContent = "dyn";
        option2.textContent = "N";
        option3.textContent = "stc";
        option4.textContent = "C";
        functionAct()
        button.addEventListener("click", function(){
            let content1 = "E = " + siIdQIntencidad(parseFloat(input1.value)) + caracterFIntencidad() + " / " + Number(input2.value) + caracterQIntencidad();
            let solve = siIdQIntencidad(parseFloat(input1.value)) / parseFloat(input2.value);
            let content2 = "E = " + solve + caractAnswerdE();
            parrafo4.textContent = content1;
            boxAnswerd.appendChild(parrafo4);
            parrafo5.textContent = content2;
            boxAnswerd.appendChild(parrafo5);
        })
    }else if(f.checked){
        parrafo1.textContent = "q = ";
        parrafo2.textContent = "E = ";
        parrafo3.textContent = "f = q * E"
        option1.value = "stc";
        option2.value = "C";
        option3.value = "dyn/stc";
        option4.value = "N/C";
        option1.textContent = "stc";
        option2.textContent = "C";
        option3.textContent = "dyn/stc";
        option4.textContent = "N/C";
        functionAct()
        button.addEventListener("click", function(){
            let content1 = "f = " + siIdQFuerza(parseFloat(input1.value)) + caracterQIntencidad() + " * " +  Number(input2.value) + caracterECarga();
            let solve = siIdQFuerza(parseFloat(input1.value)) * parseFloat(input2.value);
            let content2 = "E = " + solve + caractAnswerdF();
            parrafo4.textContent = content1;
            boxAnswerd.appendChild(parrafo4);
            parrafo5.textContent = content2;
            boxAnswerd.appendChild(parrafo5);
            
        })
    }else if(q.checked){
        parrafo1.textContent = "F = ";
        parrafo2.textContent = "E = ";
        parrafo3.textContent = "q = f/E"
        option1.value = "dyn";
        option2.value = "N";
        option3.value = "dyn/stc";
        option4.value = "N/C";
        option1.textContent = "dyn";
        option2.textContent = "N";
        option3.textContent = "dyn/stc";
        option4.textContent = "N/C";
        functionAct()
        button.addEventListener("click", function(){
            let content1 = "q = " + siIdQCarga(parseFloat(input1.value)) + caracterFCarga() + " / " + Number(input2.value) + caracterECarga();
            let solve = siIdQCarga(parseFloat(input1.value)) / parseFloat(input2.value);
            let content2 = "E = " + solve + caractAnswerdQ();
            parrafo4.textContent = content1;
            boxAnswerd.appendChild(parrafo4);
            parrafo5.textContent = content2;
            boxAnswerd.appendChild(parrafo5);
            
        })
    }else{
        alert("Seleccione ona obcion")
    }
    button.textContent = "Resolver"
    boxDatos.appendChild(button);
    button.classList.add("resolver")
});

