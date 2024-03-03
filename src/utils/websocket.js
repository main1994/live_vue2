const socketService = {
    socket: null,
    init(port, path, long_connection = false) {
        if (typeof WebSocket === "undefined") {
            alert("您的浏览器不支持socket");
        } else {
            let url = "ws://*****" + ':' + port + '/' + path; // 请求路径
            this.socket = new WebSocket(url);
            if (!long_connection) {
                this.socket.onopen = this.open.bind(this);
            }
            this.socket.onerror = this.error.bind(this);
            this.socket.onmessage = this.getMessage.bind(this);
        }
    },
    open() {
        console.log("socket连接成功");
    },
    error() {
        console.log("连接错误");
    },
    getMessage(msg) {
        return new Promise((resolve, reject) => {
            this.socket.onmessage = (msg) => {
                // 利用promise 返回出去结果
                if (msg.data != '连接成功' && JSON.parse(msg.data)) {
                    const data = JSON.parse(msg.data);
                    // console.log(data);
                    resolve(data); // 将数据传递给调用者
                }
                reject('fail');
                // this.scrollInstance.refresh(); // 手动刷新滚动效果
            };
        });
        // this.scrollInstance.refresh(); // 手动刷新滚动效果
    },
    // getMessage() { //写法二
    //     if (this.messageCallback) {
    //         this.socket.onmessage = (msg) => {
    //             this.messageCallback(msg.data); // 调用回调函数，并传递消息数据
    //         };
    //     }
    // },
    send(params) {
        if (this.socket) {
            this.socket.send(params);
        }
    },
    close() {
        console.log("socket已经关闭");
    }
};
//最后导出
export default socketService;