let array=[]
let columns=[]
let triangles=[];
let score=0;
let current_score=document.querySelector("#score")
for(let i=1;i<6;i++){
  array.push(document.querySelector(`#balloon${i}`))
  columns.push(document.querySelector(`#col${i}`))
  triangles.push(document.querySelector(`#tri${i}`));
}
console.log(array)

console.log(columns)
console.log(triangles)
function pop(circle,trianlge){
  circle.style.width='0'
  circle.style.height='0'
  circle.style.opacity=0

  
}
function unpop(circle){
  circle.style.width='100px'
  circle.style.height='100px'
      
      circle.style.opacity=1
}
array.forEach(arr=>{
  arr.addEventListener('click',()=>{
    pop(arr)
    score=score+1
    current_score.innerHTML=score
    arr.style.cursor='crosshair'; 
  })
})

const cursorSvg = document.getElementById('cursor-svg');
    document.addEventListener('mousemove', (event) => {
      cursorSvg.style.left = `${event.clientX}px`;
      
      cursorSvg.style.top = `${event.clientY}px`;
    
      
    });

   
  
      

  function RandomBalloonGenerater(){
    let shuffledArray=array.sort(() => Math.random() - 0.5)
      columns.forEach((column,index)=>{
        
        
        column.appendChild(shuffledArray[index])
        
          unpop(shuffledArray[index])
        
      })
  }
  columns.forEach(column=>{
   setInterval(RandomBalloonGenerater,2000) 
  })
  let bomb=document.querySelector('#balloon5')
  bomb.addEventListener('click',()=>{
   
    bomb.style.height="1000px"
    bomb.style.width='1100px' 
    alert('you lose')
    score=score*0
    current_score.innerHTML=score
    
  })
 
