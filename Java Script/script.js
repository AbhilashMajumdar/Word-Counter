// let word = document.getElementById("words");
// let char = document.getElementById("char");

let textbox = document.getElementById("textbox");
textbox.addEventListener('input', function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let fresh = words.filter(function(ele){
        return ele!="";
    });
    document.getElementById("words").innerHTML = fresh.length;
});