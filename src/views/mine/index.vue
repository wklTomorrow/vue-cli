<template>
    <div class="mine">
        <div class="mine-item">
            <div class="item-img"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .mine {
        height: 100%;
        width: 100%;
        .mine-item {
            width: 100%;
            background-color: #ffffff;
            padding: 10px;
            .item-img {
                height: 10vh;
                width: 15vw;
                border: 1px solid red;
            }
        }
    }
</style>
