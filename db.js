/********************  firebase / firestore START ***********************/

// firbase libraries  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore, doc, addDoc, updateDoc, collection, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

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

/********************  firebase / firestore END ***********************/



/* these were supposed to be on it's on file but firebase has updated since I lasted used it. I couldn't import firebase libraries outside this db.js module script because the updated firebase works best with a web bundler(from my understanding). I chose not to go that route as I had already took too long on this project due to documentation surfing with Vue.js 3 and firebase upgrades. I have other projects I would like to start. 



/****************** Hypothetical Vue Components - START *****************/



/********************  A D D  component ***********************/

const Add = {

  data () {
    return {
      contax:
      {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: ''
      },

      no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving']
    }
  },
  methods: {
    async addy () {
      console.log(this.contax.fname)
      await addDoc(collection(db, 'contacts'), {
        firstName: this.contax.fname
      })
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
          <input type="text" placeholder="First Name" v-model='contax.fname' class='form-control my-2 '> 
        </div>
        <div class="col-6">
          <input type="text" placeholder="Last Name" v-model='contax.lname' class="form-control my-2 ">
        </div>

    </div>
<!-------------------- email + phoneNUmber      -->
    <div class="row col-12">

      <div class="col-6">
        <input type="email" placeholder="Email" v-model='contax.email' class='form-control my-2 '>
      </div>
      <div class="col-6">
        <input type="tel" placeholder="Phone" v-model='contax.phone' class="form-control my-2 ">
      </div>

  </div>


  <div class="row col-12">
    <div class="col">
       <input type="text" placeholder="address" v-model='contax.address' class="col my-2 form-control ">
    </div>
  </div> 

    <div class="row col-12">
        <div class="col">
           <router-link to='/' class="btn btn-primary form-control" @click='addy'>Add Contact</router-link>
        </div>
  </div>


</section>
  `
}

/********************  I N F O  card ***********************/

const Contact = {
  props: ['docId'],
  data () {
    return {
      contax: {
        first: '',
        last: '',
        email: '',
        phone: '',
        address: ''
      },
      // no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving'],
      search: ''
    }
  },
  mounted: async function () {
    // const holder = []
    // const idd = await getDocs(collection(db, 'contacts'));
    // idd.forEach(kk => holder.push({
    //   docId: kk.id
    // }))
    // this.docId = holder
    console.log(this.docId)
    const snap = await getDoc(doc(db, 'contacts', this.docId)).then(waka => {

      if (waka.exists) {
        console.log(this.docId)


        // console.log(waka.id)
        this.contax.first = waka.data().firstName
        this.contax.last = waka.data().lastName
        this.contax.email = waka.data().email
        this.contax.phone = waka.data().phone
        this.contax.address = waka.data().address
      }
    })




  },

  template: `
  
  
  <section class="col mt-5">

  <div class="row col-12">
    <router-link to='/' style='text-decoration:none;' class="col-6">Back</router-link>
    <router-link :to="'/contact/edit/'+this.docId" style='text-decoration:none;' class="col-6 text-end">Edit</router-link>
  </div>
  <hr class="solid">

  <div class="col my-2">


  <div class="col-12 mt-5 mb-4 display-4 text-start">
    {{ contax.first }} {{contax.last}}
  </div>
  <hr class="solid">

  <div class="col-12">Phone</div>
  <div class="col-6 my-2">{{ contax.phone }} </div> 
  <hr class="solid">

  <div class="col-12 mb-2">Email</div>
  <a class="col-6 ">{{ contax.email }} </a> 
  <hr class="solid">



  <div class="col-12">Address</div>
  <div class="col-6 my-2">{{ contax.address }} </div>
  



  </div>

</section>

  
  `
}
/********************  H O M E   component ***********************/

const Home = {

  data () {
    return {
      contax: [],

      no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving'],
      search: ''
    }
  },
  mounted: async function () {

    // retrieves data from firestore  

    const shot = await getDocs(collection(db, 'contacts'));
    const dat = []
    shot.forEach(doc => dat.push({
      docId: doc.id,
      fname: doc.data().firstName,
      lname: doc.data().lastName,
      email: doc.data().email,
      phone: doc.data().phone,
      address: doc.data().address,
    }))
    this.contax = dat
    console.log(this.contax)

  },
  computed: {

    // search function 


    ft: function () {
      return this.contax.filter((con) => {
        const nm = con.fname + ' ' + con.lname

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
    <li class='list-group-item form-control p3' v-for='loko in ft'>
    <router-link style="text-decoration: none; color:grey " :to="'/contact/'+loko.docId" >{{ loko.fname }} {{loko. lname}} </router-link>

  </li>
  </div>


</section>
`



}

/********************  E D I T   component  ***********************/

const Edit = {
  props: ['docId'],
  data () {

    return {
      contax: {
        first: '',
        last: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  },
  methods: {
    async uppity () {
      console.log('connection secured ' + this.docId)
      const dbRef = doc(db, 'contacts', this.docId)
      await updateDoc(dbRef, {
        firstName: this.contax.first,
        lastName: this.contax.last,
        email: this.contax.email,
        phone: this.contax.phone,
        address: this.contax.address
      })
    }
  },

  mounted: async function () {

    console.log(this.docId)
    const snap = await getDoc(doc(db, 'contacts', this.docId)).then(waka => {

      if (waka.exists) {
        this.contax.first = waka.data().firstName
        this.contax.last = waka.data().lastName
        this.contax.email = waka.data().email
        this.contax.phone = waka.data().phone
        this.contax.address = waka.data().address
      }
    })
  },
  template: `

    <section class=" mt-5 row">

    <div class="row">
              <div class="col-6 display-6">Edit Contact</div>
              <div class="col-6 text-end align-self-center">
                <router-link @click='uppity' style="text-decoration: none;"d :to="'/contact/'+this.docId">Save</router-link>
              </div>
    </div>


  <!-------------------- first + last name       -->
      <div class="row col-12">

          <div class="col-6">
            <input type="text" v-model='contax.first' placeholder='First name' class='form-control my-2 '> 
          </div>

          <div class="col-6">
            <input type="text" v-model='contax.last' placeholder='Last name' class='form-control my-2'>
          </div>

      </div>
  <!-------------------- email + phoneNUmber      -->
      <div class="row col-12" >

        <div class="col-6">
          <input type='email' placeholder='Email' v-model='contax.email'
           class='form-control my-2 '>
        </div>
        <div class="col-6">
          <input type='tel' v-model='contax.phone' placeholder='Phone' class="form-control my-2 ">
        </div>

      </div>

      <div class="row col-12">
        <div class="col">
          <input type="text" v-model='contax.address' placeholder='Address' class="col my-2 form-control ">
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


/****************** Hypothetical Vue Components - END *****************/







/********************  Vue  - START ***********************/

/* routes */
const routes = [
  { path: '/', component: Home },
  { path: '/contact/edit/:docId', component: Edit, props: true },
  { path: '/add', component: Add },
  // { path: '/contact', component: Contact },
  { path: '/contact/:docId', component: Contact, props: true }

]

/*router instance */
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


/********************  Vue  - END ***********************/
