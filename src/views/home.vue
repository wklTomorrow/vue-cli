<template>
    <div class="tit">
        <div class="main-con">
            <router-view></router-view>
        </div>
        <div class="home-menu">
            <div
                    class="main-menu"
                    v-for="(item, index) in menu"
                    :key="index"
                    @click="onClickMenu(item, index)"
                    :class="[active === index ? 'activeClass' : '']"
            >{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
import { HOME_MENU } from '@utils/menu'
export default {
    data() {
        return {
            menu: '',
            active: 0
        }
    },
    mounted() {
        this.menu = HOME_MENU
    },
    methods: {
        onClickMenu(item, index) {
            if (index === this.active) {
                return
            } else  {
                this.active = index
                this.$router.push({name: item.code})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .tit {
        height: 100vh;
        width: 100vw;
        font-size: 14px;
        color: #666666;
        .activeClass {
            background-color: #178dff;
            color: #ffffff;
        }
        .main-con {
            height: 92%;
            width: 100%;
        }
        .home-menu {
            height: 8vh;
            width: 100vw;
            display: flex;
            .main-menu {
                flex: 1;
                text-align: center;
                line-height: 8vh;
            }
        }
    }
</style>
