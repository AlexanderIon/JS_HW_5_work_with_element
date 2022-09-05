console.log("Привет")
const clicker_count =document.getElementById('clicker__counter')
console.log(clicker_count.textContent)
const img = document.getElementById('cookie')
// img.width+=100
img.onclick = ()=>{
    clicker_count.textContent = Number(clicker_count.textContent)+1
    if (img.width<250){
        img.width+=50

    }
    else{
        img.width-=50
    }
    
} 