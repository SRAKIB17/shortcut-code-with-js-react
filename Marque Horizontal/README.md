
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

# 3. Javascript Cdn Link

```html
 <script src="https://prog-learn.vercel.app/9b836a9c57a91ce7805cc6a0/cdn/c212d3-9b836a9c57a91ce7805cc6a0">
</script>
 <script>
    SRAKIB_marqueHorizontal('scrollingDiv')
</script>

```

| No. | Attribute                                 | value                                                             |
| --- | ----------------------------------------- | ----------------------------------------------------------------- |
| 1   | `SRAKIB_marqueHorizontal('scrollingDiv')` | pass your parent div id . here id: scrollingDiv                   |
| 1   | `id='scrollingDiv'`                       | Parent div id                                                     |
| 2   | `data-time="10"`                          | For scrolling time (millisecond)                                  |
| 2   | `data-eachElementSize="200:200"`          | `data-eachElementSize="width:height"` .Default value '100:100' px |
| 2   | `data-height="100"`                       | Parent div height . Default value 100 px                          |
| 2   | `data-button="true"`                      | Disable button next or previous .Default value `true`             |
