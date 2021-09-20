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