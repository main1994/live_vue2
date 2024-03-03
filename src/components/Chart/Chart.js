import socketService from "../../utils/websocket.js";
export default {
    name: 'Chart',
    data() {
        return {
            dataList: [],
            msg: '',
            word: '',
            height: ''
        }
    },
    props: ['chartHeight'],
    mounted() {
        this.startSocket(); // 调用
        this.scrollToBottom();
        console.log('组件被激活了')
    },
    methods: {
        async startSocket() {
            // websocket 实例化 
            socketService.init(9502, "");
            // 这里是 后缀方法  
            // socketService.init("warning-all");
            const _this = this;
            try {
                const result = await socketService.getMessage();
                console.log(result);
                if (result) {
                    _this.dataList.push(result);
                }
                // _this.dataList = [...new Set(_this.dataList)];
            } catch (error) {
                console.error("Error receiving message:", error);
            }
        },
        // async startSocket() { //写法二
        // 	socketService.init('');
        // 	try {
        // 		const msg = await new Promise((resolve) => {
        // 			socketService.messageCallback = resolve; // 设置回调函数，以便获取消息数据
        // 		});
        // 		console.log('推送消息：', msg);
        // 		// 在这里处理你的推送消息
        // 	} catch (error) {
        // 		console.error('Error receiving message:', error);
        // 	}
        // },
        submit(e) {
            let phone = localStorage.getItem('phone');
            let value = e.currentTarget.value;
            // this.dataList.push({ user: phone, word: value });
            socketService.send(JSON.stringify({ user: phone, word: value }));
            this.$refs.word.value = '';
        },
        scrollToBottom() {
            this.$nextTick(() => {
                let show = document.getElementsByClassName('chart-show')[0];
                show.scrollTop = show.scrollHeight;
            })
        },
        getHeight() {
            let windowHeight = parseInt(window.innerHeight)
            this.height = (windowHeight - this.chartHeight - 250) + 'px';
        }
    },
    created() {
        window.addEventListener('resize', this.getHeight);
        this.getHeight();
    },
    updated() {
        this.scrollToBottom();
        this.startSocket();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getHeight);
    }
}