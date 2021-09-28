<template>
  <div>
    <nav class="navbar navbar-expand-lg" style="background-color: #D1E7DD">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./2.png" width="150" height="28"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="col-12 d-flex flex-row-reverse">
              <ul class="navbar-nav mb-2 mb-lg-0">
                 <li><a href="#" class="text-decoration-none m-3 text-dark fs-6"><span class="glyphicon glyphicon-user"></span><i class="fas fa-home fa-sm"></i> Home</a></li>
      <li><a href="#" class="text-decoration-none m-3 text-dark fs-6"><span class="glyphicon glyphicon-user"></span><i class="fas fa-user-plus fa-sm"></i> Sign Up</a></li>
      <li><a href="#" class="text-decoration-none m-3 text-dark fs-6"><span class="glyphicon glyphicon-log-in"></span><i class="fas fa-sign-out-alt fa-sm"></i> Login</a></li>
    </ul>
        </div>
      </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  props: {
    allname: Array,
  },
};
</script>

<style scoped>

</style>
