let commentStatus = false

let comments = document.querySelector('.comments')
let channels = document.querySelectorAll('.channels')
 

// channels.forEach((c)=>{
//     c.style.display = 'none'
// })
// comments.style.display = 'block'

let handleComment = ()=>{
    // commentStatus = !commentStatus
    if(commentStatus){
        channels.forEach((c)=>{c.style.display = 'flex'})
        comments.style.display = 'none'
        commentStatus = false

    }else{channels.forEach((c)=>{c.style.display = 'none'})
    comments.style.display = 'block'
    commentStatus = true
}
}

let videoContent = document.querySelector('.videocontent')

let videoHandle = ()=>{
    
    if(videoContent.paused){
        videoContent.play()
    }else{
        videoContent.pause();

    }
}