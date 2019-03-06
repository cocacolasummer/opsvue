  <template>
<main class="main">
<div class="login">
<p><img style="width:100px;height: 50px;margin-top: -5px" src="../../../assets/images/logo10.png"> | OPS管理系统</p>
<div class="login-form-bg">
      <div class="form">
    <el-input type="text" v-model="ruleForm2.username" placeholder="用户名"></el-input><br>
    <el-input type="password" v-model="ruleForm2.pass" placeholder="密码"></el-input><br>
    <el-input style="width:calc(100% - 120px);margin-right:20px" v-model="ruleForm2.edit" placeholder="验证码"></el-input>
    <img class="yzmimg" :src="verifyCode"><br>

   <el-button type="primary" style="width:100%"  @click="submitForm">登录</el-button>
      </div>

</div>
</div>
</main>
  </template>
  <script src="./login.js"></script>
  <style lang="scss" scoped src="./login.css"></style>
