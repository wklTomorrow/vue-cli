<template>
    <div class="tit">
        <div class="main-con">
            <!--<router-view></router-view>-->
            <div>{{ count }}</div>
            <el-button @click="add">增加</el-button>
            <el-button @click="plusC">减少</el-button>
            <el-input v-model="test_input" style="width: 200px" @input="onInputThis"></el-input>
            <p>{{ str }}</p>
        </div>
        <div class="home-menu">
            <div
                    class="main-menu"
                    v-for="(item, index) in menu"
                    :key="index"
                    @click="onClickMenu(item, index)"
                    :class="[active === index ? 'activeClass' : '']"
            >
                <i class="el-icon-user-solid"></i>
                {{ item.name }}</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { HOME_MENU } from '@utils/menu'
export default {
    data() {
        return {
            menu: '',
            active: 0,
            test_input: ''
        }
    },
    computed: {
        // ...mapState({
        //     count: state => state.count
        // })
        count() {
            return this.$store.state.count
        },
        str() {
            return this.$store.state.car.sObj
        }
    },
    mounted() {
        this.menu = HOME_MENU
    },
    methods: {
        add() {
            this.$store.commit('addCount')
        },
        onInputThis(e) {
            this.updateStr(e)
            // this.showStr(e)
            // this.$store.commit('onShowThis', e)
        },
        plusC() {
            this.plus()
        },
        onClickMenu(item, index) {
            if (index === this.active) {
                return
            } else  {
                this.active = index
                this.$router.push({name: item.code})
            }
        },
        ...mapActions(['plusCount', 'showStr', 'updateStr']),
        ...mapMutations(['plus'])
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
            box-sizing: border-box;
            height: 92%;
            width: 100%;
            padding: 2%;
            background-color: #f5f7f9;
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
