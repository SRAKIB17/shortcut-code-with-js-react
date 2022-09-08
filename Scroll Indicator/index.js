window.onscroll = () => {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const getTotalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const widthParentage = (windowScroll * 100) / getTotalHeight;

    const getChild = document.getElementById('topScrollView');

    let DefaultHeight = 5;
    let DefaultColor = 'red';
    let DefaultBgColor = ''

    let height = 5;
    let color = 'red';
    let BgColor = ''


    // const divScroll = document.getElementsByTagName('div');
    // for (const div of divScroll) {
    //     const scroll = div.getAttribute('data-scroll') || document.body.getAttribute('data-scroll');
    //     // const scroll = div.getAttribute('data-scroll') || document.body.getAttribute('data-scroll');
    //     if (scroll) {
    //         const scrArr = scroll.slice(1, scroll.length - 1).split(',');
    //         color = scrArr[0] != 0 ? scrArr[0] : color;
    //         defaultBgColor = scrArr[1] != 0 ? scrArr[1] : defaultBgColor;
    //         height = scrArr[2] != 0 ? scrArr[2] : height;
    //     }
    // }ForScrollBar.md

    const scroll = document.body.getAttribute('data-scroll');
    if (scroll) {
        const scrArr = scroll.slice(1, scroll.length - 1).split(',');

        color = (Boolean(scrArr[0])) ? scrArr[0] : DefaultColor;

        BgColor = Boolean(scrArr[1]) ? scrArr[1] : DefaultBgColor;

        height = Boolean(scrArr[2]) ? scrArr[2] : DefaultHeight;
    }



    // IF GET CHILD UNDEFINED;
    if (getChild) {

        const getParent = document.getElementById('topScrollViewParent');
        getParent.style.position = 'fixed';
        getParent.style.top = 0;
        getParent.style.left = 0;
        getParent.style.backgroundColor = BgColor;
        getParent.style.width = '100%'
        getParent.style.height = height + 'px'

        getChild.style.width = widthParentage + '%';
        getChild.style.height = height + 'px'
        getChild.style.backgroundColor = color;

    }
    else {

        const divChild = document.createElement('div');
        divChild.id = 'topScrollView'
        const divParent = document.createElement('div');
        divParent.id = 'topScrollViewParent'

        //FOR PARENT STYLE Z-INDEX
        divParent.style.zIndex = 10000;

        divParent.appendChild(divChild)
        document.body.appendChild(divParent)
    }
}