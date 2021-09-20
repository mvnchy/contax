
const Home = {

  data () {
    return {
      contax: [],

      no: ['Jorja Smith ', 'Thomas Train', 'Frank Ocean', 'Jaiah Laffin', 'Jose Santos', 'Kyrie Irving'],
      search: ''
    }
  },
  mounted: async function () {


    const shot = await getDocs(collection(db, 'contacts'));
    shot.forEach((doc) => {
      this.contax = doc.data();
    })
    // console.log('method test')

  },
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
