let commentStatus = false
let articleStatus = false

let comments = document.querySelector('.comments')
let comment = document.querySelector('.comment')
let channels = document.querySelectorAll('.channels')
let article = document.querySelector('.article')
 

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

let handleArticle = ()=>{
    if(!articleStatus){
        comment.style.display = 'none'
        article.style.display = 'flex'
        articleStatus = true
    }else{
        comment.style.display = 'flex'
        article.style.display = 'none'
        articleStatus = false
    }
}

let videoContent = document.querySelector('.videocontent')

let videoHandle = ()=>{
    
    if(videoContent.paused){
        videoContent.setAttribute('controls',true)
        videoContent.play()
        console.log('playing');
    }else{
        videoContent.setAttribute('controls',false)
        videoContent.pause();
        console.log('pausing');

    }
}