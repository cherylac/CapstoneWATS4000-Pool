<template>
  <div class="home">
    <div class="form-container" v-show="showForm">
      <h1>Welcome to the Birthdate Pool App!</h1>
      <p>Please enter your email to sign in</p>
      <form v-on:submit.prevent="validateForm">
        <p>
          <label for="email">
            Email
            <input type="email" id="email" aria-describedby="enterEmail" v-model="email">
          </label>
        </p>
        <p>
          <input type="submit" value="Submit">
        </p>
      </form>
    </div>
    <div class="success-message" v-show="!showForm">
      <h1>Thank you for signing in!</h1>
      <p>Please click on the pool you wish to enter.</p>
      <ul>
        <li>
          <router-link to="./Pool">Pool</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      email: "",
      showForm: true,
      showError: false
    };
  },
  methods: {
    validateForm: function() {
      if (this.email != "") {
        // Form data is valid, so turn off the form to show the success message.
        this.showForm = false;
      } else {
        // Form data is NOT valid, so show the error message.
        this.showError = true;
      }
    }
  }
};
</script>
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1,
h2 {
  font-weight: 555;
}

p {
  font-weight: 555;
}

ul {
  list-style-type: square;
}

li {
  display: inline-block;
  margin: 0 10px;
  font-weight: 700;
  font-size: 2em;
  color: #cf6f5a;
}
a {
  color: #cf6f5a;
}

.form-container {
  text-align: center;
  font-family: "Handlee", cursive;
  color: #400040;
  background-color: rgb(250, 250, 246);
  padding-bottom: 10px;
  padding-top: 10px;
}
.success-message {
  text-align: center;
  font-family: "Handlee", cursive;
  background-color: rgb(250, 250, 246);
  text-align: center;
  color: #400040;
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>