<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Biological Image Analysis</h2>
              <img class="research-img" src="../../../static/img/research/image012.jpg">
              <p>
                The goal of this project is identification, spatio-temporal modeling and recognition of dynamical patterns inherent in developmental biology through the use of novel computational tools in image analysis, statistical data aggregation, pattern recognition, machine learning and dynamical modeling. This will lead to the development of new methods for addressing some outstanding challenges in this area, i.e., computing cell lineages, identifying long-term patterns in the tracked output and learning functional models of the dynamics of cell growth and division. 
              </p>

              <h3>Cell Tracking and Shape Modeling <button class="btn btn-primary" @click="showCell = !showCell">View</button></h3>
              <div v-show="showCell">
                <img class="research-img" src="../../../static/img/research/Graphical_Abstract.png" alt="Graphical Abstract">
                <p>
                  Local spatio-temporal co-ordination of cell growth and cell division is important for proper development of organs in both plant and animal systems. The focus of this inter-disciplinary research project is in identification, spatio-temporal modeling and recognition of dynamical patterns inherent in developmental biology through the use of novel computational tools in image analysis, statistical data aggregation, pattern recognition, machine learning and dynamical modeling. This will lead to the development of new methods for addressing some outstanding challenges in this area, i.e., computing cell lineages, identifying long-term patterns in the tracked output and learning functional models of the dynamics of cell growth and division. The computational tool-kit will enable us to gain new insights into the active interplay between cell growth, cell division and changes in gene expression patterns in dynamic developmental fields.This project involves active collaboration with Prof. G. Venugopal Reddy of Plant Biology at UCR.
                </p>

                <u>Code:</u>
                <ul>
                  <li><a href="../../../static/img/research/Context-CRF-Tracker.zip">Context-aware spatio-temporal cell tracker</a></li>
                  <li><a href="../../../static/img/research/AQVT.zip">Matlab code for cell-resolution 3D reconstruction</a></li>
                  <li><a href="../../../static/img/research/celltracking.php">Matlab code for "local graph" based cell tracking</a></li>
                </ul>
              </div>

              <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showBioPublications = !showBioPublications">Toggle</button></h4>

                <ul class="list-group" v-show="showBioPublications">
                    <li class="list-group-item" v-for="a in bioPublications" :key="a.name">
                    <a :href="a.link">
                        <h5>{{a.name}}</h5>
                        <p><small>{{a.note}}</small></p>
                    </a>
                    <div class="extraContainer" v-if="a.extras !== undefined">
                        <a class="btn btn-primary" v-for="extra in a.extras" :href="extra.path" :key="extra.path">{{extra.name}}</a>
                    </div>
                    </li>
                </ul>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  data: function () {
    return {
      showCell: false,
      showBioPublications: false,
      bioPublications: [
        {
          name: 'Optimal Landmark Selection for Registration of 4D Confocal Image Stacks in Arabidopsis',
          note: 'K. Mkrtchyan, A. Chakraborty, and A. Roy-Chowdhury, IEEE/ACM Transactions on Computational Biology and Bioinformatics, 2016.',
          link: 'static/publications/TCBB.pdf',
          year: '2016'
        },
        {
          name: 'Context Aware Spatio-temporal Cell Tracking In Densely Packed Multilayer Tissues',
          note: 'A. Chakraborty, A. Roy-Chowdhury, Medical Image Analysis, 2014.',
          link: 'static/publications/MedIA-14.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/MedIA-Supplementary.pdf'
            },
            {
              name: 'Code',
              path: 'static/publications/Context-CRF-Tracker.zip'
            }
          ],
          year: '2014'
        },
        {
          name: 'Adaptive Geometric Tessellation For 3D Reconstruction of Anisotropically Developing Cells In Multilayer Tissues From Sparse Volumetric Microscopy Images',
          note: 'A. Chakraborty, M. Perales, G. V. Reddy, A. Roy-Chowdhury, PLOS One, 2013.',
          link: 'static/publications/article.html',
          extras: [

          ],
          year: '2013'
        },
        {
          name: 'Quantitative Analysis of Live-Cell Growth at the Shoot Apex of Arabidopsis thaliana: Algorithms for Feature Measurement and Temporal alignment',
          note: 'M. Tataw, V. Reddy, E. Keogh, A. Roy-Chowdhury, IEEE/ACM Trans. on Computational Biology and Biomedicine, 2013 (In Press).',
          link: 'static/publications/tataw_tcbb_final.pdf',
          extras: [

          ],
          year: '2013'
        },
        {
          name: 'Automated Registration of Live Imaging Stacks of Arabidopsis',
          note: 'K. Mkrtchyan, A. Chakraborty, A. Roy-Chowdhury, International Symposium on Biomedical Imaging, 2013.',
          link: 'static/publications/isbi2013_Katya.pdf',
          extras: [

          ],
          year: '2013'
        },
        {
          name: 'Cell Resolution 3D Reconstruction of Developing Multilayer Tissues from Sparsely Sampled Volumetric Microscopy Images',
          note: 'A. Chakraborty, R. Yadav, G. V. Reddy, A. Roy-Chowdhury, IEEE Intl. Conf. on Bioinformatics and Biomedicine, 2011.',
          link: 'static/publications/bibm11-anirban.pdf',
          extras: [

          ],
          year: '2011'
        },
        {
          name: 'Adaptive Cell Segmentation and Tracking for Volumetric Confocal Microscopy Images of A Developing Plant Meristem',
          note: 'M. Liu, A. Chakraborty, D. Singh, M. Gopi, R. Yadav, G.V. Reddy, and A. Roy-Chowdhury, Molecular Plant, 2011.',
          link: 'static/publications/tracking-molplant.pdf',
          extras: [

          ],
          year: '2011'
        },
      ]
    }
  }
}
</script>