setTimeout(carousel,50);
function carousel() {
    let storeValue = 0;
    setInterval(runningCarousel,1500);
    function runningCarousel() {
        let imageLength =document.getElementsByClassName('carouselImage').length;

        document.getElementById('test').innerHTML = storeValue
        //  condition apply
        if (1<= storeValue && storeValue < imageLength) {
            // hidden image 
            document.getElementsByClassName('carouselImage')[storeValue-1].style.display = 'none';

            // showing image 
            document.getElementsByClassName('carouselImage')[storeValue].style.display = 'block';

            // hidden carouselBody 
            document.getElementsByClassName('carouselBody')[storeValue-1].style.display = 'none';

            // showing carouselBody 
            document.getElementsByClassName('carouselBody')[storeValue].style.display = 'block';
            
            // incresing value
            storeValue++
            // store a new storeValue
            return storeValue
        }
        else if (storeValue == 0) {
            // hidden image 
            document.getElementsByClassName('carouselImage')[imageLength-1].style.display = 'none';

            // showing image 
            document.getElementsByClassName('carouselImage')[0].style.display = 'block';

            // hidden carouselBody 
            document.getElementsByClassName('carouselBody')[imageLength-1].style.display = 'none';

            // showing carouselBody
            document.getElementsByClassName('carouselBody')[0].style.display = 'block';

            // incresing value
            storeValue++
            // store a new storeValue
            return storeValue
        }
        else {
            storeValue = 0;
            // hidden image 
            document.getElementsByClassName('carouselImage')[imageLength-1].style.display = 'none';
            // index no 1
            document.getElementsByClassName('carouselImage')[storeValue].style.display = 'block';

            // hidden carouselBody
            document.getElementsByClassName('carouselBody')[imageLength-1].style.display = 'none';
            // index no 1 carouselBody
            document.getElementsByClassName('carouselBody')[storeValue].style.display = 'block';

            // store a new storeValue
            return storeValue
        }
    }
        
    
}
