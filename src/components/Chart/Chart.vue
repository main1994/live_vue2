<template>
    <div class="chart">
        <div class="chart-show" :style="'height:' + height">
            <div v-for="(data,i) in dataList" :key="i">
                <p class="chart-word"><span>{{ data.user }}</span>:<span>{{ data.word }}</span></p>
            </div>
        </div>
        <div class="chart-input">
            <textarea class="word" rows="4" @keydown.enter.prevent="submit" ref="word"></textarea>
        </div>
    </div>
</template>
<script src="./Chart.js"></script> 
<style src="./Chart.css" scoped></style>