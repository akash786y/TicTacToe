
let turn='X'
let gameOver=false

const changeTurn=()=>{
    return turn=='X'?'O':'X'
}
function checkWin(){
    let boxtexts=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2],[0,3,6],
        [3,4,5],[1,4,7],
        [6,7,8],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=='')){
            document.getElementsByClassName('info')[0].innerText='Winner is '+boxtexts[e[0]].innerText
            gameOver=true
            document.getElementById('i1').style.width='200px'
        }
    })
}

let a=document.getElementsByClassName('box')
// console.log(a)
Array.from(a).forEach((i)=>{
    let boxText=i.querySelector('.boxText')
    i.addEventListener('click',(e)=>{
        if(boxText.innerText===''){
            boxText.innerText=turn 
            turn=changeTurn()
            checkWin()
            if(!gameOver){
                console.log('hi')
                document.getElementsByClassName('info')[0].innerText='Turn of '+turn
            }
        }
    })
})

let r=document.getElementById('reset')
r.addEventListener('click',()=>{
    let bt=document.querySelectorAll('.boxText')
    Array.from(bt).forEach(i=>{
        i.innerText=''
    })
    document.getElementById('i1').style.width='0px'
    document.getElementsByClassName('info')[0].innerText=''
})
