<script>
export default {
    data() {
        return {
            url: ''
        }
    },
}
</script>

<template>
    <div class="cont">
        <div class="search">
            <input type="text" name="url" placeholder="Adresi girip enter tuşuna basınız." v-model="url">
        </div>
        <div class="col col-1">
            <span>Moto G4 - 360x640</span>
            <iframe :src="url"  frameborder="1" width="360" height="640"></iframe>
        </div>
        <div class="col col-2">
            <span>Pixel 2 - 411x731</span>
            <iframe :src="url"  frameborder="1" width="411" height="731"></iframe>
        </div>
        <div class="col col-3">
            <span>Pixel 2 XL - 411x823</span>
            <iframe :src="url"  frameborder="1" width="411" height="823"></iframe>
        </div>
        <div class="col col-4">
            <span>Iphone 5/SE - 320x568</span>
            <iframe :src="url"  frameborder="1" width="320" height="568"></iframe>
        </div>
        <div class="col col-5">
            <span>Iphone 6/7/8 - 375x667</span>
            <iframe :src="url"  frameborder="1" width="375" height="667"></iframe>
        </div>
        <div class="col col-6">
            <span>Iphone 6/7/8 Plus - 414x736</span>
            <iframe :src="url"  frameborder="1" width="414" height="736"></iframe>
        </div>
        <div class="col col-7">
            <span>Iphone X - 375x812</span>
            <iframe :src="url"  frameborder="1" width="375" height="812"></iframe>
        </div>
        <div class="col col-8">
            <span>Ipad - 768x1024</span>
            <iframe :src="url"  frameborder="1" width="768" height="1024"></iframe>
        </div>
        <div class="col col-9">
            <span>Ipad Pro - 1024x1366</span>
            <iframe :src="url"  frameborder="1" width="1024" height="1366"></iframe>
        </div>
        <div class="col col-10">
            <span>Surface Duo - 540x720</span>
            <iframe :src="url"  frameborder="1" width="540" height="720"></iframe>
        </div>
        <div class="col col-11">
            <span>992x800</span>
            <iframe :src="url"  frameborder="1" width="992" height="1024"></iframe>
        </div>
        <div class="col col-12">
            <span>1200x800</span>
            <iframe :src="url"  frameborder="1" width="1200" height="1024"></iframe>
        </div>
        <div class="col col-13">
            <span>1400x800</span>
            <iframe :src="url"  frameborder="1" width="1400" height="1024"></iframe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cont{
        display: flex;
        align-items: flex-start;
        margin-top: 55px;
        padding:20px 40px;
        .col{
            display: inline-block;
            margin-right: 10px;
        }
        span{
            display: block;
            margin-bottom: 5px ;
        }
        .search{
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            margin-top: -90px;
        }
        input{
            width: 300px ;
            border: none;
            border-bottom: 2px solid white;
            background: none;
            color: white;
            font-size: 14px;
            height: 30px;
            padding: 0 40px;
            font-weight: bold;
        }
    }
</style>