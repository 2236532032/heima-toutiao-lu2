<template>
  <div class="container">
    <el-card>
        <img src="../../assets/images/logo_index.png" alt="">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.psw" style="width:150px;margin-right:20px"></el-input>
            <el-button>发送验证码</el-button>
          </el-form-item>
          <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" style="width:100%">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: ''
      }
    }
  }
}
</script>

<style scoped lang="less">
.container {
  //基于浏览器大小设置背景图，所以需要定位，默认找浏览器为父元素，宽高给百分比
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login_bg.jpg) no-repeat center;
}
.el-card {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  width: 340px;
  height: 340px;
  img {
    //margin:0 auto只对块元素生效
      display:block;
      width: 200px;
      margin:0 auto 10px;
  }
}

</style>
