<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Multi-terminal Video Compression</h2>
              <img class="research-img" src="../../../static/img/research/Figure2.png" alt="Pictorial description of the proposed correspondence tracking algorithm. The numbers in circles indicate the steps of the algorithm.">
                <p>
                  Traditional video compression deals with encoding a video sequence after removing the spatial redundancy in each video frame and the temporal redundancy between the frames. On the other hand, if we have multiple video sequences from different cameras where there is a significant overlap between the sequences, these methods are inefficient since they do not consider the redundancy between the video sequences at different sensors. In our research, we develop a distributed video compression scheme that can exploit this inter-sensor redundancy, with minimal communication between the sensors. The scheme is based on transform coding of distributed sources and exploiting the geometrical relationships between the locations of the sensors. The geometry is used to align the video sequences and distributed quantization of transform coefficients is used to eliminate spatial and inter-sensor redundancy. We develop a Distributed Motion Estimation (DME) algorithm that combines traditional block-matching based motion estimation with the epipolar geometry of two cameras. Results demonstrate that our algorithm yields a significant saving in bit rate on the overlapping portion of multiple views. The project involved active collaboration with <a href="http://www.ee.ucr.edu/~ertem/">Prof. E. Tuncel of Electrical Engineering at UCR</a>.
                </p>
          </div>
        </div>
      </div>
   </div>
</template>