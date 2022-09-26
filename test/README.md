
# DOCS
# 1. copy html code
  ```html
    <div id='scrollingDiv' data-time="10" data-eachElementSize="200:200" data-height="100" data-button="false">
        <div>
            <img src="./logos_brand_svg/add_social_media.svg" alt="">
        </div>
        <div>
            <img src="./logos_brand_svg/adobe_brand_logo_brands_logos.svg" alt="">
        </div>
        <div>
            <img src="./logos_brand_svg/adobe_logo_illustrator_brands_logos_brand.svg" alt="">
        </div>
        <div>
            <img src="./logos_brand_svg/app store_store_app_logos_brands_logo_brand.svg" alt="">
        </div>
    </div>
```
# 2. Copy Css Code: `/style.css`

```css
    #scrollingDiv {
    display: flex;
    width: 100%;
    gap: 16px;
    scrollbar-width: none;
}


#scrollingDiv * {
    z-index: -1;
}

#scrollingDiv::-webkit-scrollbar {
    display: none;
}

/* ************ FOR LEFT BUTTON*********** */
#scrollingDiv button:where(#prev) {
    position: sticky;
    top: 40%;
    left: 0%;
    z-index: 10;
    width: fit-content;
    height: fit-content;
    font-size: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
}

#scrollingDiv button:where(#prev)::after {
    content: '<';
}


#scrollingDiv button:where(#prev):hover {
    opacity: 1;
}
/* ***************FOR RIGHT ***************** */

#scrollingDiv button:where(#next) {
    position: sticky;
    top: 0%;
    right: 0px;
    background-color: rebeccapurple;
}


#scrollingDiv button:where(#next) {
    position: sticky;
    top: 40%;
    left: 0%;
    z-index: 10;
    width: fit-content;
    height: fit-content;
    font-size: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
}

#scrollingDiv button:where(#next)::after {
    content: '>';
}

#scrollingDiv button:where(#next):hover {
    opacity: 1;
}
```
# 3. Javascript Cdn Link

```html
 <script src="https://prog-learn.vercel.app/9b836a9c57a91ce7805cc6a0/cdn/c212d3-9b836a9c57a91ce7805cc6a0">
</script>
```

| No. | Attribute                        | value                                                             |
| --- | -------------------------------- | ----------------------------------------------------------------- |
| 1   | `id='scrollingDiv'`              | Parent div id                                                     |
| 2   | `data-time="10"`                 | For scrolling time (millisecond)                                  |
| 2   | `data-eachElementSize="200:200"` | `data-eachElementSize="width:height"` .Default value '100:100' px |
| 2   | `data-height="100"`              | Parent div height . Default value 100 px                          |
| 2   | ` data-button="true"`            | Disable button next or previous .Default value `true`             |


