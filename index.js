document.querySelector(".btn").addEventListener("click", mouseClick);

function mouseClick() {
    buttonAnimation();
    fizzbuzz();
}   

function buttonAnimation() {
    document.querySelector(".btn").classList.add("pressed");
    setTimeout(function name() {document.querySelector(".btn").classList.remove("pressed");}, 150);
}

function fizzbuzz() {
    var output = [];
    var count = 1;
    var x = document.getElementById("num").value; 
    while (count <= x) {
        if (count%3===0 && count%5===0) {
        output.push("fizzbuzz ");
                } else if (count%3===0) {
                        output.push("fizz ");
                    } else if (count%5===0) {
                            output.push("buzz ");
                        } else {
                            output.push(count);
                        }
                        count++;            
    }
    document.querySelector("h3").innerHTML = output;
}

