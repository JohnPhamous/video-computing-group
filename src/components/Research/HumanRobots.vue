<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Human Robot Vision Networks for Scene Understanding</h2>
              <p>
                  Automated visual scene understanding has remained a very hard problem for uncontrolled environments. For the foreseeable future, it is natural to expect that humans and computer vision systems will be working together in applications like disaster response. This project explores the fundamental scientific challenges in the coordination between humans and robots for tasks in computer vision and robotics.
              </p>
              <p>
                  Employing robots, instead of humans, for dangerous tasks in security, surveillance, and disaster response operations is a long-standing goal. However, developing robots that would be capable of carrying out all necessary tasks (e.g., searching for and tending to victims, neutralizing dangers such as fires) with full autonomy still remains a remote possibility. A more tangible goal is to have robots that will operate alongside humans, to jointly accomplish a given mission. Robots can provide useful information, keep humans out of harm's way, and enhance or enable operations in places too strenuous or dangerous for humans. 
              </p>
              <img class="research-img" src="../../../static/img/research/HCI_network.png" alt="HCI Network">
              <p>
                  Towards meeting these objectives, we propose a research program for wide-area scene understanding using a team comprising humans and robots. The robots will be equipped with sensors (e.g., visual) providing information-rich data that will enable scene understanding. These robots will maneuver, collect data, analyze their data along with information from other team members, and report to the humans the information deemed important, according to specified criteria. The system design will ensure that the decisions, made by each of the robots in a distributed fashion, yield coordination of actions between team members, human or robotic. In this project, we use the term Human-Robot Visual Network (HRVN) to refer to the team employed for the task of scene understanding. The vision sensors will be pan-tilt-zoom (PTZ) cameras with the ability to capture high-fidelity images through active control of the PTZ parameters and positioning of the mobile platform.
              </p>

              <hr/>
              <h3>Active Learning <button class="btn btn-primary" @click="showActiveLearning = !showActiveLearning">View</button></h3>

              <div v-show="showActiveLearning">
                <img class="research-img" src="../../../static/img/research/Continuous-Learning.png" alt="Continuous Learning">
                <p>
                    Most of the state-of-the-art approaches to human activity recognition in video need an intensive training stage and assume that all of the training examples are labeled and available beforehand. They also use hand-crafted features. These assumptions are unrealistic for many applications where we have to deal with streaming videos. In these videos, as new activities are seen, they can be leveraged upon to improve the current activity recognition models. Under this project, we develop an incremental activity learning framework that is able to continuously update the activity models and learn new ones as more videos are seen. Our proposed approach leverages upon state-of-the-art machine learning tools, most notably active learning and deep learning. It does not require tedious manual labeling of every incoming example of each activity class.
                </p>

                <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showActiveLearningPublications = !showActiveLearningPublications">Toggle</button></h4>

                <ul class="list-group" v-show="showActiveLearningPublications">
                    <li class="list-group-item" v-for="a in activeLearningPublications" :key="a.name">
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

            <hr/>

            <h3>Camera Network Summarization <button class="btn btn-primary" @click="showCamera = !showCamera">View</button></h3>
            <div v-show="showCamera">
                <img class="research-img" src="../../../static/img/research/summarization.png" alt="Summarization">
                <p>
                    With the recent explosion of big video data, it is becoming increasingly important to automatically extract a brief yet informative summary of these videos in order to enable a more efficient and engaging viewing experience. Video summarization automates this process by providing a succinct representation of a video or a set of videos. The goal of this project is to summarize multiple videos captured in a network of surveillance cameras without requiring any prior knowledge on the field of view of the cameras. We solve the task of summarizing multi-view videos by formulating a sparse representative selection approach over a learned subspace shared by the multiple videos.
                </p>

                <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showCameraPublications = !showCameraPublications">Toggle</button></h4>

                <ul class="list-group" v-show="showCameraPublications">
                    <li class="list-group-item" v-for="a in cameraPublications" :key="a.name">
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
   </div>
</template>

<script>
export default {
    name: 'HumanRobots',
    data: function() {
        return {
            showActiveLearning: false,
            showActiveLearningPublications: false,
            showCamera: false,
            showCameraPublications: false,
            activeLearningPublications: [
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
                    name: 'Generating Diverse Image Datasets with Limited Labeling',
                    note: 'N. C. Mithun, R. Panda, A. Roy-Chowdhury, ACM International Conf. on Multimedia, 2016.',
                    link: 'static/publications/ACM_2016.pdf',
                    year: '2016'
                },
                {
                    name: 'Context-Aware Activity Recognition and Anomaly Detection in Video',
                    note: 'Y. Zhu, N. Nayak, A. Roy-Chowdhury, IEEE Journal on Selected Topics in Signal Processing, Special Issue on Anomalous Pattern Discovery, February 2013.',
                    link: 'static/publications/jstsp13.pdf',
                    extras: [
                        {
                        name: 'Code',
                        path: 'static/publications/download (2).html'
                        }
                    ],
                    year: '2013'
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
                    name: 'Continuous Learning of Human Activity Models Using Deep Nets',
                    note: 'M. Hasan, A. Roy-Chowdhury, European Conf. on Computer Vision, 2014.',
                    link: 'static/publications/eccv2014-1.pdf',
                    extras: [
                        {
                        name: 'Code',
                        path: 'static/publications/hybrid (1).html'
                        }
                    ],
                    year: '2014'
                },
                {
                    name: 'Incremental Activity Modeling and Recognition in Streaming Videos',
                    note: 'M. Hasan, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2014.',
                    link: 'static/publications/cvpr2014.pdf',
                    extras: [
                        
                    ],
                    year: '2014'
                },
            ],
            cameraPublications: [
                {
                    name: 'Weakly Supervised Summarization of Web Videos',
                    note: 'R. Panda, A. Das, Z. Wu, J. Ernst and A. Roy-Chowdhury, International Conference on Computer Vision, 2017.',
                    link: 'static/publications/ICCV_Jawad.pdf',
                    year: '2017'
                },
                {
                    name: 'Collaborative Summarization of Topic-Related Videos',
                    note: 'R. Panda and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017.',
                    link: 'static/publications/cvpr2017summ.pdf',
                    year: '2017'
                },
                {
                    name: 'Context-Aware Video Summarization',
                    note: 'S. Zhang, Y. Zhu, A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2016.',
                    link: 'static/publications/TIP2016_summarization.pdf',
                    year: '2016'
                },  
            ]
        }
    }
}
</script>

<style>
    .publicationHeader {
        text-decoration: underline;
    }
</style>
