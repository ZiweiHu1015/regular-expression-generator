

function highlight(){


    let regString = document.getElementById('regex').value; 
    let regex = new RegExp(regString, 'g');

    let textString = document.getElementById('text').value;
    
   // let array = [...textString.matchAll(regex)];

   
    let final = textString;

    //for(let i = array.length-1; i>=0; i--){

        final = final.replace(regex, "<span style=\"background-color: yellow\">$&</span>");
    //}

    
    document.getElementById("final").innerHTML =  final;

};