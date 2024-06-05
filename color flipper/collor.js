var color = ["blue","red","green","black","yellow","orange","brown"]

function colorChange(){
    var colorNum =Math.floor(Math.random()*7) 
    console.log(colorNum)
    document.body.style.backgroundColor = color[colorNum]
    document.getElementById('color-value').textContent = `Color #${colorNum}`;
    
}