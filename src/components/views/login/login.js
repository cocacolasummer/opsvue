export default {
  data() {
    return {
      ruleForm2: {
        username: '',
        pass: '',
        edit: ''
      },
      verifyCode: '',
    };
  },
  created(){
    this.refresh()
  },
  methods: {
    submitForm() {
      this.$axios.post(this.$api.loginUrl, {
        loginName:this.ruleForm2.username,
        password: this.ruleForm2.pass,
        verifycode: this.ruleForm2.edit,
        OrganizationId:'',
        UserType: ''
      },response=>{
        if (response.data.Result) {
          this.$router.push({name: '/shared'})
       } else {
          this.$message(response.data.Message);
       }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
    refresh(){
      this.verifyCode = this.$api.yzmimg + '?random=' + Math.random();
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },

}