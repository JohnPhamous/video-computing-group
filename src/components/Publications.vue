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
                <h3 class="panel-title">Books and Edited Books</h3> 
              </div> 
              
              <ul class="list-group">
                <li class="list-group-item" v-for="a in articles" :key="a.name">
                  <span class="badge">Published in {{a.year}}</span>
                  <a :href="a.link">
                    <h3>{{a.name}}</h3>
                    <p><small>{{a.note}}</small></p>
                  </a>
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
        }
      ]
    }
  }
}
</script>

