import Outs from "../../components/Outs/Outs.vue";
import Chart from "../../components/Chart/Chart.vue";
export default {
    name: 'Index',
    data() {
        return {
            selected: '1',
            outsHeight: '',
            chartHeight: ''
        };
    },
    mounted() {
        // 获取组件位置信息
        this.outsHeight = this.$refs.Outs.$el.getBoundingClientRect().top;
        this.chartHeight = this.$refs.Chart.$el.getBoundingClientRect().top;
        console.log(this.outsHeight,this.chartHeight);
    },
    components: {
        Outs,
        Chart
    }
}