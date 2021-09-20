<section class = "row  mt-5">



<!-- <div class="row">
  <div class="col-11">Contacts</div>
  <div class="col-1 text-right">Edit</div>
</div>
-->
  <div class="row col-12">

      <div class="col-6 display-6">Contacts</div>
      <div class="col-6 display-6 text-end align-self-center">+</div>

</div>



<div class="row">
         <input v-model='search' class="form-control my-3" placeholder="Search" type="search"> 
          <li class="list-group-item mt- form-control p3" v-for='loko in ft'>{{ loko }}</li>
</div>

 
</section>
<!----------     contact display   -------->



<!----------     contact add   -------->



<section class=" mt-5 row">

<div class="col-12">
    <h1 class=" display-6">Add Contact</h1>
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
         <button class="btn btn-primary form-control">Add Contact</button>
      </div>
</div>


</section>




<section class=" mt-5 row">
<div class="row">
<div class="col-6 display-6">Edit Contact</div>
<div class="col-6 text-end align-self-center">Save</div>
</div>


<!-------------------- first + last name       -->
<div class="row col-12">

    <div class="col-6">
      <input type="text" v-model='dat.fname' class='form-control my-2 '>
    </div>
    <div class="col-6">
      <input type="text" v-model='dat.lname'class="form-control my-2 ">
    </div>

</div>
<!-------------------- email + phoneNUmber      -->
<div class="row col-12" >

  <div class="col-6">
    <input type="email" v-model='dat.email'class='form-control my-2 '>
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
    <div class="col">
       <button class="btn btn-secondary form-control"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg></button>
    </div>
</div>


</section>



<section class="col mt-5">

<div class="row col-12">
<div class="col-6">Contacts</div>
<div class="col-6 text-end">Edit</div>
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
