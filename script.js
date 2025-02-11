let str = "";
let inp = document.querySelector(".inp");
let btn = document.querySelectorAll("button");
btn.forEach(element => {
    element.addEventListener("click", () => {
        let x = element.innerHTML;
        console.log(x);

        if (x == "AC") {
            str = ""; 
        } 
        else if (x === "DEL") {
            str = str.slice(0, -1); 
        } 
        else if (x === "=") {
            
            str = eval(str); 
            
        } 
        else {
            str += x; 
        }

        inp.value = str; 
    });
});
