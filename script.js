var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    console.log("dooone")
    love.style.transform = "  translate(-50%,-50%) scale(2)";
    
    });
    
    setTimeout(function(){
        love.style.transform = "  translate(-50%,-50%) scale(0)";
        
        } ,3000);
        
        
        //set timeout means delay. it is a inbuilt function in browsesr
console.log("hey")