// firebase / firestore

// libraries  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// database info
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAdt3ZvJe8GEDxW5YVc2uKkrx3g67tXgZI",
  authDomain: "contax-2b7ab.firebaseapp.com",
  projectId: "contax-2b7ab",
  storageBucket: "contax-2b7ab.appspot.com",
  messagingSenderId: "512745151185",
  appId: "1:512745151185:web:29133d8b91e5ad9f8a83f0"
});

// firestore init
const db = getFirestore();


// Vue ROuterss
const routes = [
  { path: '/', component: Home },
  { path: '/edit', component: Edit },
  { path: '/add', component: Add },
  { path: '/contact', component: Contact }

]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

// Vue instance 

const app = Vue.createApp({
  // data () {
  //   return {
  //     dat:
  //     {
  //       fname: 'Kevin',
  //       lname: 'Durant',
  //       email: 'orange@juice.ca',
  //       phone: '613-444-7777',
  //       address: '289 Livingston St, Brooklyn, NY 11217-1001'
  //     },

  //     no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving'],
  //     search: ''
  //   }
  // },
  methods: {
    async tester () {

      const shot = await getDocs(collection(db, 'contacts'));
      shot.forEach((doc) => {
        this.Name = doc.data().firstName;
      })
      // console.log('method test')
    }
  },
  computed: {
    ft: function () {
      return this.no.filter((con) => {
        const nm = con
        return nm.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }

}).use(router).mount('#app')





