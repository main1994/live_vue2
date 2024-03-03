import socketService from "../../utils/websocket.js";
export default {
    name: 'Outs',
    data() {
        return {
            outsList: [],
            time: null,
            height: ''
        };
    },
    props: ['outsHeight'],
    methods: {
        // getMenuQuery() {
        //     return this.$http({
        //         method: 'get',
        //         url: 'vue-api/outs',
        //         // data: JSON.stringify({
        //         //     phone: this.phone,
        //         //     code: this.code
        //         // }),
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        //         },
        //     })
        //         .then(function (response) {
        //             if (response.data.status != 200) {
        //                 // alert(response.data.msg);
        //                 return;
        //             }
        //             return response.data;
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // },
        async startSocket() {
            // websocket 实例化 
            socketService.init(9501, "api/outs");
            // 这里是 后缀方法  
            // socketService.init("warning-all");
            const _this = this;
            try {
                const result = await socketService.getMessage();
                console.log(result);
                if (result) {
                    _this.outsList.push(result);
                }
            } catch (error) {
                console.error("Error receiving message:", error);
            }
        },
        getHeight() {
            let windowHeight = parseInt(window.innerHeight)
            this.height = (windowHeight - this.outsHeight - 75) + 'px';
        },
        scrollToBottom() {
            this.$nextTick(() => {
                let outs = document.getElementsByClassName('outs-show')[0];
                outs.scrollTop = outs.scrollHeight;
            })
        }
    },
    mounted() {
        this.scrollToBottom();
        console.log('组件被激活了')
        // this.timer = setInterval(() => {
        //     menuPush();
        // }, 1500);
        // const menuPush = async () => {
        //     let result = await this.getMenuQuery();
        //     this.outsList = result ? result.data : [];
        // };
        this.startSocket(); // 调用
    },
    created() {
        window.addEventListener('resize', this.getHeight)
        this.getHeight();
    },
    updated() {
        this.scrollToBottom();
        this.startSocket(); // 调用
    },
    beforeDestroy() {
        console.log('组件失活了')
        // clearInterval(this.timer);
        window.removeEventListener('resize', this.getHeight);
    }
}