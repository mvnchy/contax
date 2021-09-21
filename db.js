/********************  firebase / firestore ***********************/

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





/********************  Add component ***********************/

const Add = {

  data () {
    return {
      dat:
      {
        fname: 'Kevin',
        lname: 'Durant',
        email: 'orange@juice.ca',
        phone: '613-444-7777',
        address: '289 Livingston St, Brooklyn, NY 11217-1001'
      },

      no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving'],
      search: ''
    }
  },

  template: `


  
  <section class=" mt-5 row">

  <div class="row">
      <h1 class="col-6 display-6">Add Contact</h1>
      <div class="col-6 text-end align-self-center">
      <router-link style="text-decoration: none;" to='/'>Back</router-link>
    </div>

  </div>

<!-------------------- first + last name       -->
    <div class="row col-12">

        <div class="col-6">
          <input type="text" placeholder="First Name" class='form-control my-2 '>
        </div>
        <div class="col-6">
          <input type="text" placeholder="Last Name" class="form-control my-2 ">
        </div>

    </div>
<!-------------------- email + phoneNUmber      -->
    <div class="row col-12">

      <div class="col-6">
        <input type="email" placeholder="Email" class='form-control my-2 '>
      </div>
      <div class="col-6">
        <input type="tel" placeholder="Phone" class="form-control my-2 ">
      </div>

  </div>


  <div class="row col-12">
    <div class="col">
       <input type="text" placeholder="address" class="col my-2 form-control ">
    </div>
  </div> 

    <div class="row col-12">
        <div class="col">
           <router-link to='/' class="btn btn-primary form-control">Add Contact</router-link>
        </div>
  </div>


</section>
  `
}

/********************  Contact card component ***********************/

const Contact = {

  data () {
    return {
      dat:
      {
        fname: 'Kevin',
        lname: 'Durant',
        email: 'orange@juice.ca',
        phone: '613-444-7777',
        address: '289 Livingston St, Brooklyn, NY 11217-1001'
      },

      no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving'],
      search: ''
    }
  },


  template: `
  
  
  <section class="col mt-5">

  <div class="row col-12">
    <router-link to='/' style='text-decoration:none;' class="col-6">Back</router-link>
    <router-link to='/edit' style='text-decoration:none;' class="col-6 text-end">Edit</router-link>
  </div>
  <hr class="solid">

  <div class="col my-2">


  <div class="col-12 mt-5 mb-4 display-4 text-start">
    {{ dat.fname }} {{dat.lname}}
  </div>
  <hr class="solid">

  <div class="col-12 mb-2">Email</div>
  <a class="col-6 ">{{ dat.email }} </a> 
  <hr class="solid">

  <div class="col-12">Phone</div>
  <div class="col-6 my-2">{{ dat.phone }} </div> 
  <hr class="solid">


  <div class="col-12">Address</div>
  <div class="col-6 my-2">{{ dat.address }} </div>
  



  </div>

</section>

  
  `
}
/********************  Home component ***********************/

const Home = {

  data () {
    return {
      contax: [],

      no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving'],
      search: ''
    }
  },
  // mounted: async function () {


  //   const shot = await getDocs(collection(db, 'contacts'));
  //   shot.forEach((doc) => {
  //     this.contax = doc.data();
  //   })
  //   // console.log('method test')

  // },
  computed: {
    ft: function () {
      return this.no.filter((con) => {
        const nm = con
        return nm.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },


  template: `  

<section class="row  mt-5">



 
  <div class="row col-12">

    <div class="col-6 display-6">Contacts</div>
    <div class="col-6 display-6 text-end align-self-center">
    <router-link to='/add' style="text-decoration: none;">+</router-link>
    </div>

  </div>



  <div class="row">
    <input v-model='search' class="form-control my-3" placeholder="Search" type="search">
    <router-link to='/contact' class ="list-group-item mt- form-control p3" v-for='loko in ft'>{{ loko }}</router-link>
  </div>


</section>
`



}



/********************  Edit component  ***********************/

const Edit = {

  data () {
    return {
      dat:
      {
        fname: 'Kevin',
        lname: 'Durant',
        email: 'orange@juice.ca',
        phone: '613-444-7777',
        address: '289 Livingston St, Brooklyn, NY 11217-1001'
      },

      no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving'],
      search: ''
    }
  },


  template: `

  <section class=" mt-5 row">

  <div class="row">
            <div class="col-6 display-6">Edit Contact</div>
            <div class="col-6 text-end align-self-center">
              <router-link style="text-decoration: none;" to='/'>Save</router-link>
            </div>
  </div>


<!-------------------- first + last name       -->
    <div class="row col-12">

        <div class="col-6">
          <input type="text" v-model='dat.fname' class='form-control my-2 '>
        </div>

        <div class="col-6">
          <input type="text" v-model='dat.lname' class='form-control my-2'>
        </div>

    </div>
<!-------------------- email + phoneNUmber      -->
    <div class="row col-12" >

      <div class="col-6">
        <input type='email' v-model='dat.email' class='form-control my-2 '>
      </div>
      <div class="col-6">
        <input type='tel' v-model='dat.phone' class="form-control my-2 ">
      </div>

    </div>

    <div class="row col-12">
      <div class="col">
         <input type="text" v-model='dat.address' class="col my-2 form-control ">
      </div>
    </div> 
  

    <div class="row col-12">
        <router-link to='/' class="col">
           <button class="btn btn-secondary form-control">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
          </button>
        </router-link>
    </div>


</section>

  `

}
















/********************  Vue Routers ***********************/

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

/********************  Vue instance ***********************/



const app = Vue.createApp({

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
