<template>
    <div>
        <img class="header-img" src="../../assets/pic/vs.png" alt="">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1" is-selected>赛况</mt-tab-item>
            <mt-tab-item id="2">聊天室</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <Outs ref="Outs" :outsHeight="this.outsHeight"></Outs>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <Chart ref="Chart" :chartHeight="this.chartHeight"></Chart>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script src="./Index.js"></script>
<style src="./Index.css" scoped></style>