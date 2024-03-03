<template>
    <div class="container">
        <p>图文直播平台</p>
        <mt-field label="手机号" v-model="phone">
            <mt-button type="primary" @click="sendCode" class="input-code">{{ timeCode }}</mt-button>
        </mt-field>
        <mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="code"></mt-field>
        <mt-button size="large" type="primary" class="login-button" @click="login">进入平台</mt-button>
    </div>
</template>
<script src="./Login.js"></script>
<style src="./Login.css" scoped></style>