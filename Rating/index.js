
const ratingArray = document.querySelectorAll('.rating');
for (const eachRating of ratingArray) {
    const ratingValue = Number(eachRating.getAttribute('data-rating'))
    const ratingFloor = Math.floor(ratingValue);

    const ratingMultiply = (ratingValue - ratingFloor) * 10

    const ratingOr = (ratingMultiply > 8 ? 2 : 1)


    const ratingSize = Number(eachRating.getAttribute('data-size'))

    const mask = eachRating.getAttribute('data-mask')


    const ratingFull = ['red', 'orange', 'yellow', 'lime', 'green'];
    const ratingHalf = ['red', 'red', 'orange', 'orange', 'yellow', 'yellow', 'lime', 'lime', 'green', 'green'];


    const ParentDiv = document.createElement('div')
    // ParentDiv.className = "rating";


    if (ratingMultiply > 0) {
        for (let index = 0; index < 10; index++) {

            const childElement = document.createElement('input');
            childElement.type = 'radio';
            childElement.disabled = true;
            childElement.style.cursor = 'default';


            //half rating//
            childElement.className = (index % 2 == 0 ? 'mask-half-1' : 'mask-half-2') + " mask  mask-" + (mask ? mask : 'star')
            childElement.style.backgroundColor = (((ratingFloor * 2) + ratingOr - 1) >= index ? ratingHalf[index] : 'grey')


            childElement.style.width = (ratingSize ? ratingSize : 16) - 10 + 'px'
            childElement.style.height = (ratingSize ? ratingSize : 16) + 'px'


            ParentDiv.appendChild(childElement)
        }
    }
    //full rating
    else {
        for (let index = 0; index < 5; index++) {

            const childElement = document.createElement('input');
            childElement.type = 'radio';
            childElement.disabled = true;
            childElement.style.cursor = 'default';

            //full rating//
            childElement.className = " mask  mask-" + (mask ? mask : 'star')

            childElement.style.backgroundColor = (((ratingFloor) - 1) >= index ? ratingFull[index] : 'gray');
            childElement.style.width = (ratingSize ? ratingSize : 16) + 'px'
            childElement.style.height = (ratingSize ? ratingSize : 16) + 'px'

            ParentDiv.appendChild(childElement)
        }
    }
    eachRating.appendChild(ParentDiv);

}
