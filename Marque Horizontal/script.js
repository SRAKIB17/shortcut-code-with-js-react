
const SRAKIB_marqueHorizontal = (id) => {
    const GetID = (id) => {
        return document.getElementById(id);
    }

    let isScrolling = false;
    let x = 0;
    let y = 0;
    let count = 0
    const scrollingDiv = GetID(id);


    //FOR IMAGE **************
    const images = scrollingDiv.querySelectorAll('img');
    const getImageSize = (scrollingDiv.getAttribute('data-eachElementSize')?.split(':'))

    // [width:height]
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

    const style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    style.setAttribute('data-srakib-marque', 'true')

    style.innerHTML =
        `
    #${id} {
        display: flex;
        width: 100%;
        gap: 16px;
        scrollbar-width: none;
    }
    
    
    #${id} * {
        z-index: -1;
    }
    
    #${id}::-webkit-scrollbar {
        display: none;
    }
    `

    document.head.appendChild(style)
    document.querySelectorAll('style').forEach(s => {
        if (!s.getAttribute('data-srakib-marque')) {
            document.head.appendChild(style)
        }

    })

}
SRAKIB_marqueHorizontal('scrollingDiv')
//***************** */