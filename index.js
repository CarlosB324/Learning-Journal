const viewMoreBtn = document.getElementById('view-more-btn')
const showLessBtn = document.getElementById('show-less-btn')
const blogPosts = document.getElementsByClassName('blog-post')
const hidePost = document.getElementsByClassName('hide')
const viewMore = document.getElementsByClassName('view-more')
const showLess = document.getElementsByClassName('show-less')

viewMoreBtn.addEventListener('click', function() {
    for (let hide of hidePost){
        hide.classList.remove('hidden')
    }
    for (let view of viewMore){
        view.classList.add('hidden')
    }
    for (let show of showLess){
        show.classList.remove('hidden')
    }
})

showLessBtn.addEventListener('click', function() {
    for (let hide of hidePost){
        hide.classList.add('hidden')
    }
    for (let view of viewMore){
        view.classList.remove('hidden')
    }
    for (let show of showLess){
        show.classList.add('hidden')
    }
})