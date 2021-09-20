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