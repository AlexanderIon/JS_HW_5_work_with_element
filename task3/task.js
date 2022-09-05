getHole = index => document.getElementById(`hole${index}`);
setInterval(()=>{
    for ( i=1;i<10;i++){
    
        if (getHole(i).className =="hole hole_has-mole"){
            const id = document.getElementById('active')
            id.textContent = i
        }  
          
    }

},1500)
function click_hole (q){
    getHole(q).onclick = ()=>{
        // console.log(getHole(1).className.includes('hole_has-mole'))
        if (getHole(q).className.includes('hole_has-mole')){
            
            const dead = document.getElementById('dead')
            if (Number(dead.textContent)<10){
                dead.textContent = Number(dead.textContent)+1
            }
            else{
                alert("YOU ARE WINNER")
                dead.textContent = 0
                lost.textContent = 0
            }
        }
        
        else{
            const lost = document.getElementById('lost')
            lost.textContent = Number(lost.textContent)+1
            if (Number(lost.textContent)>5){
                alert('YOU are Loser')
                dead.textContent = 0
                lost.textContent = 0


            }
        }
    }

}
for (i=1;i<10;i++){
    click_hole(i)

}

// getHole(1).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(1).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }
// getHole(2).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(2).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }
// getHole(3).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(3).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }
// getHole(4).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(4).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }

// getHole(5).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(5).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }
// getHole(6).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(6).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }
// getHole(7).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(7).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }

// getHole(8).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(8).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }
// getHole(9).onclick = ()=>{
//     // console.log(getHole(1).className.includes('hole_has-mole'))
//     if (getHole(9).className.includes('hole_has-mole')){
//         const dead = document.getElementById('dead')
//         dead.textContent = Number(dead.textContent)+1
//     }
//     else{
//         const lost = document.getElementById('lost')
//         lost.textContent = Number(lost.textContent)+1
//         if (Number(lost.textContent)>5){
//             alert('YOU are Loser')
//             dead.textContent = 0
//             lost.textContent = 0


//         }
//     }
// }