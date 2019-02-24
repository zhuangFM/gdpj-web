<template>
  <div>
    <div class="add-container">
      <div class="add-title">
        <h1>添加收货地址</h1>
      </div>
      <div class="add-box">
        <Form ref="formInline" :model="formData" label-position="left" :label-width="100" :rules="ruleInline">
          <FormItem label="收件人" prop="consignee">
            <i-input v-model="formData.consignee" size="large"></i-input>
          </FormItem>
          <FormItem label="收件地区" prop="address">
            <Distpicker :province="formData.province" :city="formData.city" @province="getProvince" @city="getCity"></Distpicker>
          </FormItem>
          <FormItem label="收件地址" prop="address">
            <i-input v-model="formData.address" size="large"></i-input>
          </FormItem>
          <FormItem label="手机号码" prop="phone">
            <i-input v-model="formData.phone" size="large"></i-input>
          </FormItem>
          <FormItem label="邮政编码" prop="postcode">
            <i-input v-model="formData.postcode" size="large"></i-input>
          </FormItem>
        </Form>
      </div>
      <div class="add-submit">
        <Button type="primary" @click="handleSubmit('formInline')">添加地址</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import Distpicker from 'v-distpicker';
  import store from '@/vuex/store';
  import {mapActions, mapState} from 'vuex';

  export default {
    name: 'AddAddress',
    data() {
      return {
        formData: {
          consignee: '',
          address: '',
          phone: '',
          postcode: '',
          province: '广东省',
          city: '广州市',
        },
        ruleInline: {
          consignee: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请输入地址', trigger: 'blur'}
          ],
          postcode: [
            {required: true, message: '请输入邮政编码', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '手机号不能为空', trigger: 'blur'},
            {type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      ...mapActions(['addAddress']),
      getProvince(data) {
        this.formData.province = data.value;
      },
      getCity(data) {
        this.formData.city = data.value;
      },
      handleSubmit(name) {
        // const father = this;
        this.formData.uid = this.userInfo.data.id;
        console.log(this.formData);
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.addAddress(this.formData).then(data => {
              if (data) {
                this.$Message.success('添加成功');
                this.$router.push('/home/myAddress');
              } else {
                this.$Message.error('添加失败，请重新尝试');
              }
            });
          } else {
            this.$Message.error('请填写正确的地址信息');
          }
        });
      }
    },
    components: {
      Distpicker
    },
    computed: {
      ...mapState(['userInfo']),
    },
    store
  };
</script>

<style scoped>
  .add-container {
    margin: 15px auto;
    width: 60%;
    min-width: 600px;
  }

  .add-title {
    margin-bottom: 15px;
    text-align: center;
  }

  .add-submit {
    display: flex;
    justify-content: center;
  }
</style>
