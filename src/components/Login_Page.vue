<template>
  <div class="login_page">
    <h1>Login</h1>
    <form class="login_page_form" method="POST">
      <p><input class="part-contact-input__input" type="text" placeholder="First Name...." name="Name"
                v-model="name"></p>
      <p><input class="part-contact-input__input" type="password" placeholder="Password" name="Password"
                v-model="password"></p>
      <router-link to="/main">
        <button type="button" class="btn btn-warning"> GET STARTED</button>
      </router-link>
    </form>
  </div>
</template>
<script>
  import {LOGIN_MUTATION} from '@/mutation.js';

  export default {
    name: 'Login_Page',
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.$apollo.mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            name: this.name,
            password: this.password
          }
        })
          .then(response => {
            localStorage.setItem('LOGIN_MUTATION', response.data.login.token);
            this.$router.replace('/main')
          })
          .catch(error => console.error(error))
      }
    }
  }
</script>
<style>

  .login_page {
    background: url("./assets/evan-kirby-162899-unsplash.jpg") no-repeat;
    background-size: 100%;
    max-width: 100%;
    padding: 300px;
    font-family: 'Nunito', sans-serif;
  }

  .part-contact-input__input {
    width: 100%;
    padding: 10px;
    border: 1px solid #E8E8E8;
  }

  .part-contact-input__input:hover {
    color: #000000;
    background-color: #E8E8E8;
  }

  .btn-warning {
    color: white;
    border-radius: 50px 50px;
    width: 100%;
  }

  .login_page_form {
    width: 100%;
  }

  h1 {
    color: white;
    text-align: center;
  }

</style>
