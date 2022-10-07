const Rating = ({ rating, size = 16, mask }) => {


    const ratingFull = ['red', 'orange', 'yellow', 'lime', 'green'];
    const ratingHalf = ['red', 'red', 'orange', 'orange', 'yellow', 'yellow', 'lime', 'lime', 'green', 'green'];
    // const style
    const star = "https://svg-pro.vercel.app/_next/static/media/star-filled.0264ffe5.svg";
    const heart = 'https://svg-pro.vercel.app/_next/static/media/heart-filled.81ecc4c9.svg'
    const maskStyle = mask == 'heart' ? heart : star;

    const style = {
        rating: { position: 'relative', display: 'flex' },
        input: { padding: "0px", margin: "0px", appearance: "none", WebkitAppearance: "none", },
        mask_star: { maskImage: `url(${maskStyle})`, WebkitMaskImage: `url(${maskStyle})` },
        mask_heart: {},
        mask_left: { WebkitMaskSize: '200%', maskSize: '200%', maskPosition: 'left', WebkitMaskPosition: 'left' },
        mask_right: { WebkitMaskSize: '200%', maskSize: '200%', maskPosition: 'right', WebkitMaskPosition: 'right' },
        mask: { WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: "no-repeat", maskRepeat: 'no-repeat', maskPosition: "center", WebkitMaskPosition: "center" }
    }

    const ratingValue = Number(rating)
    const ratingFloor = Math.floor(ratingValue);
    const checkRating = (ratingValue - ratingFloor) * 10


    const ratingOr = (ratingFloor - ratingFloor) * 10 > 8 ? 2 : 1;

    const start = checkRating == 0 ? 5 : 10;

    return (
        <div>
            <div style={style.rating}>

                {
                    [...Array(start).keys()]?.map((r) => {

                        const maskHalf = (r % 2 == 0 ? style.mask_left : style.mask_right);

                        const bgFull = { backgroundColor: (((ratingFloor) - 1) >= r ? ratingFull[r] : 'gray') }
                        const bgHalf = { backgroundColor: (((ratingFloor * 2) + ratingOr - 1) >= r ? ratingHalf[r] : 'gray') };
                        const bg = (start == 10 ? { ...bgHalf, ...maskHalf } : bgFull);

                        const width = (start == 10 ? (Number(size) - 10) : size) + 'px'
                        const height = (start == 10 ? (Number(size) + 6) : size) + 'px'

                        let inputStyle = { ...style.mask, ...style.input, ...style.mask_star, ...bg, height: height, width: width };

                        // childElement.className = (index % 2 == 0 ? 'mask-half-1' : 'mask-half-2') + " mask  mask-" + (mask ? mask : 'star')

                        return (
                            <input
                                key={r}
                                type="radio"
                                name="rating-10"
                                className='bg-red-500'
                                style={inputStyle}
                                disabled={true}
                            />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
export default Rating;