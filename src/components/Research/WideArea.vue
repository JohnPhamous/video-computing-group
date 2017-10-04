<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Wide Area Scene Analysis in Vision Network</h2>
              <video width="100%" controls>
                  <source src="../../../static/img/research/Tracking_results.mp4" type="video/mp4">
                  Your browser does not support HTML5 video
              </video>

              <hr/>

              <h3>Camera Network Tracking and Re-identification</h3>
              <p>
                  In many computer vision tasks it is often desirable to identify and monitor people as they move through a network of non-overlapping cameras. This is especially challenging as for a network of cameras issues such as changes of scale, illumination, viewing angle and pose start to arise. In this project we try to address this inter camera person association problem. We have shown that incorporating a consistency requirement of re-identification results across the camera network can significantly improve the re-identification performance even in the challenging scenarios where the illumination changes between the cameras are large.
              </p>

              <hr/>

              <h3>Distributed Estimation</h3>
              <p>
                  In this project, we are developing methods for estimation and control in distributed camera networks. Specifically, we have looked at the following problems.
              </p>
              <ul>
                  <li>Distributed estimation algorithms that are aware of the specific constraints of camera networks</li>
                  <li>Distributed control for collaborative and opportunistic sensing in wide-area camera networks</li>
              </ul>

              <h4>Demos</h4>
              <p>Information-Weighted Consensus in a Distributed Camera Network</p>
              <ul>
                  <li><a href="../../../static/img/research/ICF_Matlab_Code.zip">Matlab code for Distributed Single Target Tracking</a></li>
                  <li><a href="../../../static/img/research/MTIC_Matlab_Code.zip">Matlab code for Distributed Multi-target Tracking</a></li>
              </ul>

            <hr />

            <h2>Active Sensing</h2>
            <p>
                We are developing methods for optimizing the image acquisition capabilities of the cameras so as to maximize the performance of the methods used to analyze these image. This needs to be done through collaboration between the cameras in a network, as each camera's parameters entail constraints on the others. We have developed distributed control methods for collaborative and opportunistic sensing in wide-area camera networks.
            </p>
          </div>
        </div>
      </div>
   </div>
</template>