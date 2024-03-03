export default {
    name: 'Login',
    data() {
        return {
            phone: '',
            code: '',
            timeCode: '验证码',
            timeNum: 60
        }
    },
    methods: {
        sendCode(event) {
            // console.log(event.target.innerText);
            if (this.timeCode != '验证码') {
                return;
            }
            let timer = setInterval(() => {
                if (this.timeNum > 0) {
                    this.timeNum--;
                    this.timeCode = this.timeNum;
                } else {
                    clearInterval(timer);
                    this.timeCode = '验证码';
                    this.timeNum = '60';
                }
            }, 1000)
            let _this = this;
            this.$http({
                method: 'post',
                url: 'vue-api/sendCode',
                // data: JSON.stringify({
                //     phone: this.phone
                // }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                data: {
                    phone: this.phone
                }
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status != 200) {
                        alert(response.data.data);
                        return;
                    }
                    _this.code = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        login() {
            if (!this.phone || !this.code) {
                this.$toast('请填写信息');
                return;
            }
            let _this = this;
            this.$http({
                method: 'post',
                url: 'vue-api/login',
                // data: JSON.stringify({
                //     phone: this.phone,
                //     code: this.code
                // }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                data: {
                    phone: this.phone,
                    code: this.code
                }
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status != 200) {
                        alert(response.data.msg);
                        return;
                    }
                    let expireDate = new Date().getTime() + 60 * 60 * 1000;
                    localStorage.setItem('login', true);
                    localStorage.setItem('phone', response.data.data);
                    localStorage.setItem('expireDate', expireDate);
                    _this.$router.push({
                        name: 'Index'
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
}