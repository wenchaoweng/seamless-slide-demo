let n
init()
setInterval(()=>{
    makeLeave(getImages(n))
        .one('transitionend', function (e) {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImages(n+1))
    n += 1
}, 3000)


function init(){
    n = 1
    $(getImages(n)).addClass('current')
        .siblings().addClass('enter')
}
function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node){
    return $node.removeClass('leave current').addClass('enter')
}
function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n = 3
        }
    }
    return n
}
function getImages(n){
    return $(`.images > img:nth-child(${x(n)})`)
}