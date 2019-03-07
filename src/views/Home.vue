<template>
  <div class="home">
      <div class="form-container" v-show="showForm">
          <h1>Welcome to the Birthdate Pool App!</h1>
          <p>Please enter your email to sign in</p>
          <form v-on:submit.prevent="validateForm">
              <p>
                  <label for="email">Email
                      <input type="email" id="email" v-model="email">
                      </label>
                      </p>
                      <p><input type="submit" value="Submit"></p>
                      </form>
                      </div>
                      <div class="success-message" v-show="!showForm">
                          <h1>Thank you for signing in!</h1>
                              <p>Please click on the pool you wish to enter. 
                                  <router-link to="./Pool">Pool 1</router-link></p>
                                  </div>
                                  </div>
                                  </template>
<script>
export default {
    name: 'Home',
    data () {
        return {
            email:'',
            showForm: true,
            showError: false
        }
    },
    methods: {
        validateForm: function() {
            if ((this.email !='')){
                // Form data is valid, so turn off the form to show the success message.
                this.showForm = false;
            } else {
                // Form data is NOT valid, so show the error message.
                this.showError = true;
            }
            }
        }
    }
</script>
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form-container {
    text-align: center;
}
.success-message {
    text-align: center;
}
</style>