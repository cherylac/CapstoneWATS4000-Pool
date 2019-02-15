<template>
  <div id="app" class="container">
  <h1>Hello App Vue</h1>
  
     
  </div>
</template>
<script>
import Firebase from 'firebase'
import toastr from 'toastr'
 let config = {
    apiKey: "AIzaSyCQphEKrAx7M6kCA0wqlj2QICzcrycLpeA",
    authDomain: "birthdate-pool.firebaseapp.com",
    databaseURL: "https://birthdate-pool.firebaseio.com",
    projectId: "birthdate-pool",
    storageBucket: "birthdate-pool.appspot.com",
    messagingSenderId: "838139933356"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let booksRef = db.ref('books')

export default {
  name: 'app',
  // firebase: {
  //   books: booksRef
  // },
  
  // data () {
  //   return {
  //     newBook: {
  //         title: '',
  //         author: '',
  //         url: 'http://'
  //     }
  //   }
  // }
  
   
  
 
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>