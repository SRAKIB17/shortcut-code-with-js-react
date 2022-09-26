
const GetID = (id) => {
    return document.getElementById(id);
}

let isScrolling = false;
let x = 0;
let y = 0;
let count = 0
const scrollingDiv = GetID('scrollingDiv');



//FOR IMAGE **************
const images = scrollingDiv.querySelectorAll('img');
const getImageSize = (scrollingDiv.getAttribute('data-eachElementSize')?.split(':'))
const width = Number(getImageSize[0])

const height = Number(getImageSize[1])

for (const image of images) {
    if (getImageSize.length > 1) {
        const ImageDiv = image.parentElement;
        ImageDiv.style.width = (width ? width : 100) + 'px';
        ImageDiv.style.height = (height ? height : 100) + 'px';

        image.style.width = ((width ? width : 100) - 10) + 'px';
        image.style.height = ((height ? height : 100) - 10) + 'px';
        image.style.padding = '4px'
    }

}
//********************************* */

//const
const scrollDivHeight = Number(scrollingDiv.getAttribute('data-height'))

if (scrollDivHeight >= height) {
    scrollingDiv.style.height = scrollDivHeight + "px"
}
else if (scrollDivHeight < height) {
    scrollingDiv.style.height = height + "px"
}
else {
    scrollingDiv.style.height = 100 + "px"
}


let end = false;
scrollingDiv.style.display = 'flex';
scrollingDiv.style.overflow = 'scroll';
scrollingDiv.style.padding = '3px'
scrollingDiv.style.gap = '5px'
const time = Number(scrollingDiv.getAttribute('data-time'))

setInterval(() => {

    const getTotalWidth = (scrollingDiv.scrollWidth - scrollingDiv.clientWidth + 10)
    if (getTotalWidth <= count && !end) {
        end = true
        count = count - 10
    }

    else if (getTotalWidth >= count && end) {
        count--
        if (scrollingDiv.scrollLeft == 0) {
            end = false
        }
    }


    else if (getTotalWidth >= count && !end) {
        count++
        end = false;
    }
    scrollingDiv.scrollTo(count, 0)

}, Boolean(time) ? time : 10)



//***************** */

const buttonDisable = scrollingDiv.getAttribute('data-button');


if (buttonDisable == 'true' || buttonDisable == '' || buttonDisable == null) {

    const prev = GetID('prev');
    let scrollingDivInnerHtml = scrollingDiv.innerHTML
    if (!prev) {
        const prevButton = document.createElement('button');
        scrollingDiv.textContent = ''
        prevButton.setAttribute('id', 'prev');
        scrollingDiv.innerHTML = prevButton.outerHTML + scrollingDivInnerHtml
    }



    const next = GetID('next');
    scrollingDivInnerHtml = scrollingDiv.innerHTML;

    if (!next) {
        const prevButton = document.createElement('button');
        scrollingDiv.textContent = ''
        prevButton.setAttribute('id', 'next');
        scrollingDiv.innerHTML = scrollingDivInnerHtml + prevButton.outerHTML
    }

    GetID('prev').addEventListener('click', () => {
        if (count > 100) {
            count -= 100
        }
        else if (count < 0) {
            count = 0
        }
        console.log(scrollingDiv.scrollWidth, count)

    })

    GetID('next').addEventListener('click', () => {
        if (count < (scrollingDiv.scrollWidth - scrollingDiv.clientWidth - 100)) {
            count += 100
            end = true
        }
    })

}