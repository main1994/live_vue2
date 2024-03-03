<template>
    <div class="outs">
        <div class="outs-show" :style="'height:' + height">
            <div v-for="(outs,i) in outsList" :key="i">
                <div class="outs-time">
                    <img class="icon" src="../../assets/pic/waiting.png">
                    <span>{{ outs.time }}</span>
                </div>
                <div class="outs-content">
                    <div>
                        <img class="outs-content-icon" :src="outs.logo">
                        {{ outs.title }}
                    </div>
                    {{ outs.content }}
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Outs.js"></script>
<style src="./Outs.css"></style>
