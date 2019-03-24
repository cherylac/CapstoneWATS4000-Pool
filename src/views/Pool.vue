<template>
  <div id="pool" class="container">
    <div class="jumbotron">
      <h1 class="display-">Baby Pool</h1>
      <p class="lead">When do you think the baby will be born? Enter below!</p>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Enter Contest</h3>
      </div>
      <div class="form-row">
       
        <div class="col">
          <label for="yourName">Name</label>
          <input type="text" class="form-control" aria-describedby="enterContestant"
          id="entryContestant" v-model="newEntry.contestant">
        </div>
         <div class="col">
           <label for="email">Your email</label>
          <input type="email" v-model="newEntry.email" class="form-control" aria-describedby="enterEmail">
        </div>
        <div class="col">
          <label for="guessDate">Guess birthdate</label>
          <input type="text" v-model="newEntry.date" class="form-control" aria-describedby="guessDate">
        </div>
         <div class="col">
           <label for="guessWeight">Guess weight</label>
          <input type="text" v-model="newEntry.weight" class="form-control" aria-describedby="guessWeight">
        </div>
          <div class="col">
          <label for="guessName">Guess name</label>
          <input type="text" class="form-control" aria-describedby="guessName" v-model="newEntry.babyname">
        </div>
      </div>
      <div class="panel-body">
        <form id="form" class v-on:submit.prevent="addEntry">
          <input type="submit" class="btn btn-primary" value="Add Entry">
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Entries</h3>
      </div>
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Weight</th>
                <th>Baby's Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry,index) in entries" :key="index">
                <td>{{entry.contestant}}</td>
                <td>{{entry.email}}</td>
                <td>{{entry.date}}</td>
                <td>{{entry.weight}}</td>
                <td>{{entry.babyname}}</td>
                <td>
                  <span class="far fa-trash-alt" aria-hidden="true" v-on:click="removeEntry(entry)"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import toastr from 'toastr'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-129287138-2',
  checkDuplicatedScript: true
})

let config = {
  apiKey: "AIzaSyCQphEKrAx7M6kCA0wqlj2QICzcrycLpeA",
  authDomain: "birthdate-pool.firebaseapp.com",
  databaseURL: "https://birthdate-pool.firebaseio.com",
  projectId: "birthdate-pool",
  storageBucket: "birthdate-pool.appspot.com",
  messagingSenderId: "838139933356"
};

let app = firebase.initializeApp(config);
let db = app.database();
let entriesRef = db.ref("entries");

export default {
  name: "pool",
  firebase: {
    entries: entriesRef
  },

  data() {
    return {
      newEntry: {
        contestant: "",
        email: "",
        date: "",
        weight: "",
        babyname: ""
      }
    };
  },

  methods: {
    addEntry: function() {
      entriesRef.push(this.newEntry);
      this.newEntry.contestant = "";
      this.newEntry.email = "";
      this.newEntry.date = "";
      this.newEntry.weight = "";
      this.newEntry.babyname = "";
    },
    removeEntry: function(entry) {
      entriesRef.child(entry[".key"]).remove();
      toastr.success("Entry removed successfully");
    }
  }
};
</script>
<style>
#pool {
  font-family: "Handlee", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0c2238;

}


.container {
  background-color: rgb(250, 250, 246);
}


.jumbotron {
  text-align: center;
  font-family: "Handlee", cursive;
  background-color: #f8ab99;
  color: #400040;
  font-weight: 575;
  margin-top: 3rem;
}

.btn-primary {
  background-color: #6ee2b8;
  color: #000c40;
  font-weight: 575;
  border-color: #6ee2b8;
}

.fa-trash-alt {
  cursor: pointer;
}

.lead {
  font-weight: 575;
  color: #400040;
}

h1 {
  font-weight: 600;
}

h3 {
  font-weight: 600;
}
.btn {
  margin: 1rem 0;
}

.toast-success {
background-color:rgb(26, 206, 152) !important;
color: #400040 !important;
}

.toast-message {
  color: #400040 !important;
  background-color: rgb(26, 206, 152) !important;
}

</style>