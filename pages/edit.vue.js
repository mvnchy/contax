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