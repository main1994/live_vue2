<template>
    <mt-header :title=name>
        <router-link to="/" @click.navite="backShow" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>
<script src="./HeaderTitle.js"></script>
<style src="./HeaderTitle.css" scoped></style>