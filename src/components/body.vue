<template>
<div>
        <!-- <div class="d-none d-sm-inline">
        <img src="./4.jpg" class="img">
        <p class="text-over-img">Text Over Image</p>
    </div> -->
        <div>
        <img src="./4.jpg" class="img">
        <img src="./642.png" class="text-over-img2">
        <div class=" text-over-img1 fw-bold alert alert-success badge rounded-pill text-dark" role="alert">BokeyaKhata – The No. 1 <br>bookkeeping app for businesses.</div>
    </div>
</div>
</template>
<style scoped>
.img{
    width: 100%;
}
.text-over-img { 
	position: relative; 
	top: -180px; 
    left: 220px;
} 
.text-over-img1 { 
	position: relative; 
	top: -600px; 
    left: 677px;
    width: 400px;
    font-size: 20px;
} 
.text-over-img2 { 
	position: relative; 
	top: -600px; 
    left: 655px;
    width: 210px;
} 
@media only screen and (max-width: 1399.98px) {
.text-over-img1 { 
	position: relative; 
	top: -500px; 
    left: 597px;
    width: 310px;
    font-size: 17px;
} 
.text-over-img2 { 
	position: relative; 
	top: -500px; 
    left: 585px;
    width: 200px;
} 
}
@media only screen and (max-width: 1199.98px) {
.text-over-img1 { 
	position: relative; 
	top: -420px; 
    left: 487px;
    width: 250px;
    font-size: 14px;
} 
.text-over-img2 { 
	position: relative; 
	top: -420px; 
    left: 475px;
    width: 190px;
    height: 330px;
} 
}
@media only screen and (max-width: 991.98px) {
.text-over-img1 { 
	position: relative; 
	top: -310px; 
    left: 337px;
    width: 200px;
    font-size: 11px;
} 
.text-over-img2 { 
	position: relative; 
	top: -310px; 
    left: 325px;
    width: 150px;
    height: 250px;
} 
}
@media only screen and (max-width: 767.98px) {
.text-over-img1 { 
	position: relative; 
	top: -250px; 
    left: 227px;
    width: 180px;
    font-size: 10px;
} 
.text-over-img2 { 
	position: relative; 
	top: -250px; 
    left: 215px;
    width: 100px;
    height: 200px;
} 
}
</style>