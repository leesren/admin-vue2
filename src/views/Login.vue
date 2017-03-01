<template>
    <div>
        <nprogress-container></nprogress-container>
        <div  class="auth-main">
            <div class="auth-block">
                <h3>登录</h3>
                <a href="#/dashboard">首页</a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .auth-main{
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
        background: radial-gradient(ellipse at center, #3ea8cb 0, #256cb7 100%);
    }
    .auth-block{
        width: 540px;
        margin: 6.5% auto;
        border-radius: 5px;
        background: rgba(0,0,0,0.55);
        color: #fff;
        padding: 132px;
        font-size: 26px;
    }
</style>
<script>
    export default {
    }
</script>
