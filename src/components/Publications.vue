<template>
  <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
            <p><small></small></p>
            <div class="alert alert-danger" role="alert">The contributing authors include the documents contained in these directories as a means to ensure timely dissemination of scholarly and technical work on a non-commercial basis. Copyright and all rights therein are maintained by the authors or by other copyright holders, notwithstanding that they have offered their works here electronically. It is understood that all persons copying this information will adhere to the terms and constraints invoked by each author's copyright. These works may not be reposted without the explicit permission of the copyright holder.</div>
            
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Books and Edited Books</h3> 
              </div> 
              
              <ul class="list-group">
                <li class="list-group-item" v-for="book in books" :key="book.name">
                  <a :href="book.link">
                    <h3>{{book.name}}</h3>
                    <p><small>{{book.note}}</small></p>
                  </a>
                </li>
              </ul>
            </div>

            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Publications</h3> 
              </div> 
              
              <ul class="list-group">
                <li class="list-group-item" v-for="a in articles" :key="a.name">
                  <span class="badge">Published in {{a.year}}</span>
                  <a :href="a.link">
                    <h3>{{a.name}}</h3>
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
      
  </div>
</template>

<script>
export default {
  name: 'publications',
  data: function() {
    return {
      books: [
        {
          name: 'Camera Networks: The Acquisition and Analysis of Videos Over Wide Areas',
          note: 'A. Roy-Chowdhury and B. Song. Morgan and Claypool (Synthesis Lectures in Computer Vision), 2012.',
          link: 'http://www.morganclaypool.com/doi/abs/10.2200/S00400ED1V01Y201201COV004'
        },
        {
          name: 'Distributed Video Sensor Networks',
          note: 'Eds. B. Bhanu, C. Ravishankar, A. Roy-Chowdhury, H. Aghajan, D. Terzopoulos. Springer, 2010.',
          link: 'http://www.springer.com/computer/image+processing/book/978-0-85729-126-4'
        },
        {
          name: 'Recognition of Humans and Their Activities Using Video',
          note: 'R. Chellappa, A. Roy-Chowdhury, S. Zhou. Morgan and Claypool (Synthesis Lectures in Image, Video, & Multimedia Processing), 2005.',
          link: 'http://www.amazon.com/gp/product/1598290061/qid=1134776125/sr=1-1/ref=sr_1_1/104-3732392-4137503?s=books&v=glance&n=283155'
        }
      ],
      articles: [
        {
          name: 'Joint Prediction of Activity Labels and Starting Times in Untrimmed Videos',
          note: 'T. Mahmud, M. Hasan and A. Roy-Chowdhury, International Conference on Computer Vision, 2017.',
          link: 'static/publications/ICCV_Tahmida.pdf',
          year: '2017'
        },
        {
          name: 'Exploiting Spatial Structure for Localizing Manipulated Image Regions',
          note: 'J. H. Bappy, A. Roy-Chowdhury, J. Bunk, L. Nataraj and B. S. Manjunath, International Conference on Computer Vision, 2017.',
          link: 'static/publications/ICCV_Jawad.pdf',
          year: '2017'
        },
        {
          name: 'Weakly Supervised Summarization of Web Videos',
          note: 'R. Panda, A. Das, Z. Wu, J. Ernst and A. Roy-Chowdhury, International Conference on Computer Vision, 2017.',
          link: 'static/publications/ICCV_Jawad.pdf',
          year: '2017'
        },
        {
          name: 'Diversity-aware Multi-Video Summarization',
          note: 'R. Panda, N. C. Mithun and A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2017.',
          link: 'static/publications/TIP_Rameswar.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/TIP_Supp_Rameswar.pdf'
            }
          ],
          year: '2017'
        },
        {
          name: 'Multi-View Surveillance Video Summarization via Joint Embedding and Sparse Optimization',
          note: 'R. Panda and A. Roy-Chowdhury, IEEE Trans. on Multimedia, 2017.',
          link: 'static/publications/TMM_Rameswar.pdf',
          year: '2017'
        },
        {
          name: 'Detection and Localization of Image Forgeries using Resampling Features and Deep Learning',
          note: 'J. Bunk, J. H. Bappy, T. M. Mohammed, L. Nataraj, A. Flenner, B.S. Manjunath, S. Chandrasekaran, A. Roy-Chowdhury and L. Peterson, IEEE Conf. on Computer Vision and Pattern Recognition Workshop, 2017.',
          link: 'static/publications/CVPR_Workshop_Jawad.pdf',
          year: '2017'
        },
        {
          name: 'Unsupervised Adaptive Re-identification in Open World Dynamic Camera Networks',
          note: 'R. Panda, A. H. Bhuiyan, V. Murino and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017 (Spotlight).',
          link: 'static/publications/cvpr2017reid.pdf',
          year: '2017'
        },
        {
          name: 'Collaborative Summarization of Topic-Related Videos',
          note: 'R. Panda and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017.',
          link: 'static/publications/cvpr2017summ.pdf',
          year: '2017'
        },
        {
          name: 'Non-Uniform Subset Selection for Active Learning in Structured Data',
          note: 'S. Paul, J. H. Bappy, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017.',
          link: 'static/publications/cvpr2017subset.pdf',
          year: '2017'
        },
        {
          name: 'The Impact of Typicality for Informative Representative Selection',
          note: 'J. H. Bappy, S. Paul, E. Tuncel and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017.',
          link: 'static/publications/cvpr2017typicality.pdf',
          year: '2017'
        },
        {
          name: 'Continuous adaptation of multi-camera person identification models through sparse non-redundant representative selection',
          note: 'A. Das, R. Panda, A. Roy-Chowdhury, Computer Vision and Image Understanding, 2016.',
          link: 'static/publications/CVIU_2016_Abir.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/Supplementary_CVIU_2016_Abir.pdf'
            }
          ],
          year: '2016'
        },
        {
          name: 'Distributed Multi-target Tracking and Data Association in Vision Networks',
          note: 'A. T. Kamal, J. H. Bappy, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2016.',
          link: 'static/publications/MTIC-TPAMI.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/MTIC_Matlab_Code.zip',
            }
          ],
          year: '2016'
        },
        {
          name: 'Network Consistent Data Association',
          note: 'A. Chakraborty, A. Das, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2016.',
          link: 'static/publications/Camera_Ready_Manuscript.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/supp_NCDA.pdf'
            },
            {
              name: 'Code',
              path: 'static/publications/NCDA_Code.zip'
            }
          ],
          year: '2016'
        },
        {
          name: 'Online Adaptation for Joint Scene and Object Classification',
          note: 'J. H. Bappy, S. Paul, A. Roy-Chowdhury, European Conf. on Computer Vision, 2016.',
          link: 'static/publications/eccv2016_jawad.pdf',
          year: '2016'
        },
        {
          name: 'Temporal Model Adaptation for Person Re-Identification',
          note: 'N. Martinel, C. Micheloni, A. Roy-Chowdhury, European Conf. on Computer Vision, 2016.',
          link: 'static/publications/niki-eccv16.pdf',
          year: '2016'
        },
        {
          name: 'Context-Aware Video Summarization',
          note: 'S. Zhang, Y. Zhu, A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2016.',
          link: 'static/publications/TIP2016_summarization.pdf',
          year: '2016'
        },
        {
          name: 'Learning Temporal Regularity in Video Sequences',
          note: 'M. Hasan, J. Choi, J. Neumann, A. Roy-Chowdhury, and L. Davis, IEEE Conf. on Computer Vision and Pattern Recognition, 2016.',
          link: 'static/publications/cvpr2016_regularity.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/regularity.html'
            }
          ],
          year: '2016'
        },
        {
          name: 'Opportunistic Image Acquisition of Individual and Group Activities in a Distributed Camera Network',
          note: 'C. Ding, J. H. Bappy, J. A. Farrell, A. Roy-Chowdhury, IEEE Transactions on Circuits and Systems for Video Technology, 2016.',
          link: 'static/publications/TCSVT_2016.pdf',
          year: '2016'
        },
        {
          name: 'Generating Diverse Image Datasets with Limited Labeling',
          note: 'N. C. Mithun, R. Panda, A. Roy-Chowdhury, ACM International Conf. on Multimedia, 2016.',
          link: 'static/publications/ACM_2016.pdf',
          year: '2016'
        },
        {
          name: 'Incremental Learning of Human Activity Models from Videos',
          note: 'M. Hasan, and A. Roy-Chowdhury, Computer Vision and Image Understanding, 2016.',
          link: 'static/publications/2016_cviu.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/incremental.html'
            }
          ],
          year: '2016'
        },
        {
          name: 'Optimal Landmark Selection for Registration of 4D Confocal Image Stacks in Arabidopsis',
          note: 'K. Mkrtchyan, A. Chakraborty, and A. Roy-Chowdhury, IEEE/ACM Transactions on Computational Biology and Bioinformatics, 2016.',
          link: 'static/publications/TCBB.pdf',
          year: '2016'
        },
        {
          name: 'Video Summarization in a Multi-View Camera Network',
          note: 'R. Panda, A. Das, A. Roy-Chowdhury, International Conf. on Pattern Recognition, 2016.',
          link: 'static/publications/ICPR_Rameswar.pdf',
          year: '2016'
        },
        {
          name: 'Inter-dependent CNNs for Joint Scene and Object Recognition',
          note: 'J. H. Bappy, A. Roy-Chowdhury, International Conf. on Pattern Recognition, 2016.',
          link: 'static/publications/ICPR2016_SO_Jawad.pdf',
          year: '2016'
        },
        {
          name: 'A Poisson Process Model for Activity Forecasting',
          note: 'T. Mahmud, M. Hasan, A. Chakraborty, A. Roy-Chowdhury, IEEE International Conf. on Image Processing, 2016.',
          link: 'static/publications/icip2016_timeforecast.pdf',
          year: '2016'
        },
        {
          name: 'Efficient Selection of Informative and Diverse Training Samples with Applications in Scene Classification',
          note: 'S. Paul, J. H. Bappy, A. Roy-Chowdhury, IEEE International Conf. on Image Processing, 2016.',
          link: 'static/publications/icip2016_trainingsampleselection.pdf',
          year: '2016'
        },
        {
          name: 'Adaptive Algorithm Selection, with Applications in Pedestrian Detection',
          note: 'S. Zhang, Q. Zhu, A. Roy-Chowdhury, IEEE International Conf. on Image Processing, 2016.',
          link: 'static/publications/icip2016_pedestrian.pdf',
          year: '2016'
        },
        {
          name: 'Context Aware Active Learning of Activity Recognition Models',
          note: 'M. Hasan, A. Roy-Chowdhury, International Conference on Computer Vision, 2015.',
          link: 'static/publications/ICCV2015.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/caal.html'
            }
          ],
          year: '2015'
        },
        {
          name: 'A Continuous Learning Framework for Activity Recognition Using Deep Hybrid Feature Models',
          note: 'M. Hasan, A. Roy-Chowdhury, IEEE Trans. on Multimedia, 2015.',
          link: 'static/publications/tmm2015.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/hybrid.html'
            }
          ],
          year: '2015'
        },
        {
          name: 'Re-Identification in the Function Space of Feature Warps',
          note: 'A. Das, N. Martinel, C. Micheloni, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2015.',
          link: 'static/publications/PAMI14-Reid.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/Supplementary-PAMI2014-Reid.pdf'
            }
          ],
          year: '2015'
        },
        {
          name: 'Context-Aware Activity Modeling using Hierarchical Conditional Random Fields',
          note: 'Y. Zhu, N. Nayak, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2015.',
          link: 'static/publications/PAMI14-Activity.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/download.html'
            }
          ],
          year: '2015'
        },
        {
          name: 'Computerized Face Recognition in Renaissance Portrait Art',
          note: 'R. Srinivasan, C. Rudolph, and A. K. Roy-Chowdhury, Signal Processing Magazine. 2015.',
          link: 'static/publications/spm2015.pdf',
          extras: [
            {
              name: 'Supplmental Material',
              path: 'static/publications/SPM2015_SM.pdf'
            }
          ],
          year: '2015'
        },
        {
          name: 'Tracking multiple interacting targets in a camera network',
          note: 'S. Zhang, Y. Zhu, and A. K. Roy-Chowdhury, Computer Vision and Image Understanding special issue on Image Understanding for Real-world Distributed Video Networks. 2015.',
          link: 'static/publications/Shu CVIU final.pdf',
          year: '2015'
        },
        {
          name: 'Hierarchical Graphical Models for Simultaneous Tracking and Recognition in Wide-Area Scenes',
          note: 'N. M. Nayak, Y. Zhu, and A. K. Roy-Chowdhury, IEEE Transactions on Image Processing, 2015.',
          link: 'static/publications/tip_twocolumn_revised.pdf',
          year: '2015'
        },
        {
          name: 'A Camera Network Tracking (CamNet) Dataset and Performance Baseline',
          note: 'S. Zhang, E. Staudt, T. Faltemier, A. Roy-Chowdhury, IEEE Winter Conference on Applications of Computer Vision, 2015.',
          link: 'egpaper_final.pdf',
          extras: [
            {
              name: 'CamNeT Dataset',
              path: 'static/publications/0B7uDdIqGrZlVfmdlOFZyUEg3RHUxaUdSaGVGTTNDT3R0dUNLSFdCSkZYVWk0dE16TFg4cTA.html'
            }
          ],
          year: '2015'
        }
      ]
    }
  }
}
</script>

