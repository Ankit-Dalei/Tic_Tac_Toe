let boarrd=document.getElementById("board")
boarrd.style.color="blue"
let main_board=document.createElement('div')
let final_report=document.createElement('h1')
const boxes=["","","",
             "","","",
             "","","",]

boarrd.appendChild(main_board)
boarrd.appendChild(final_report)
main_board.className="main_board sizemain"


boxes.forEach(function (e,index) {
    let main_board_display=document.createElement("div");
   main_board.appendChild(main_board_display)
   main_board_display.classList.add('pieces')
   main_board_display.setAttribute("id",index)
   main_board_display.innerHTML=e
   let rows=Math.floor(8-index/3)+1
   if (rows%2==0) {
    main_board_display.classList.add(index%2==0? "black":"blue")
   } else {
    main_board_display.classList.add(index%2==0? "black":"blue")
   }
})


let pdragstart=document.querySelectorAll(".pieces")
pdragstart.forEach(function (e) {
  e.addEventListener("click",add)
})
let n=circle
function add(e) {
    let clk=e.target
   clk.innerHTML=n
   final_report.innerHTML="circle first"
    if (n ==circle) {
        n=cross
        final_report.innerHTML="cross turn"
    } else {
        n=circle
        final_report.innerHTML="circle turn"
    }
    e.target.removeEventListener("click",add)
    wining()
}
function wining() {
    let pdstart=document.querySelectorAll(".pieces")
    let winlines=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    
    winlines.forEach(array =>{
     let circlewin= array.every(arr=>
         pdstart[arr].firstChild?.classList.contains("fa-circle")
        // console.log(arr)
        )
        if (circlewin) {
            final_report.innerHTML="Circle win! wait for refresh"
            setTimeout(function () {
                location.reload()
            },1000)
            
            pdstart.forEach(squ=>squ.replaceWith(squ.cloneNode(true)))
            return
        }
    })
    console.log("---------------------")

    winlines.forEach(array =>{
        let crosswin= array.every(arr=>
            pdstart[arr].firstChild?.classList.contains("fa-x")
        // console.log(pdstart[arr])

           )
           if (crosswin) {
               final_report.innerHTML="Cross win! wait for refresh"
               setTimeout(function () {
                location.reload()
               },1000)
               pdstart.forEach(squ=>squ.replaceWith(squ.cloneNode(true)))
               return
           }
       })
}
