function visible(img) {
    const position = img.getBoundingClientRect()
    const height = document.documentElement.clientHeight;

    const topvisible = position.top > 0 && position.top < height
    const bottomvisible = position.bottom > 0 && position.bottom < height

    return topvisible || bottomvisible;

}
function imgLazyLoad() {
    const images = document.querySelector('img')
    for(let img of images) {
        let realsrc = img.datasrc;
        if(!realsrc) continue;
        if(visible(img)) {
            img.src = realsrc
            img.datasrc = ''
        }
    }
}