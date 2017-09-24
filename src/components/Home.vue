/**
** Created by John Pham
** www.johnpham.net
** This code is under MIT
**/

<template>
  <div class="inherit-height">
    <div id="home-body">
      <div class="row header-parent">
        <div class="col-md-3 header-img-container"><img class="header-img" src="../../static/img/amitrc_cover.jpg" alt="The Team"></div>
        <div class="col-md-3 header-img-container"><img class="header-img" src="../../static/img/image3.png" alt=""></div>
        <div class="col-md-3 header-img-container"><img class="header-img" src="../../static/img/image4.png" alt=""></div>
        <div class="col-md-3 header-img-container"><img class="header-img" src="../../static/img/image5.png" alt=""></div>
      </div>

        <AmitHomeBody></AmitHomeBody>
        
       <NewsAmit></NewsAmit>
        
        <Sponsors></Sponsors>

      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import AmitHomeBody from './HomeBodyAmit'
import NewsAmit from './NewsAmit'

export default {
  components:{
    'AmitHomeBody': AmitHomeBody,
    'NewsAmit': NewsAmit
  },
  name: 'AmitHeader'
}
</script>