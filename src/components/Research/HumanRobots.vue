<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Human Robot Vision Networks for Scene Understanding</h2>
              <p>
                  Employing robots, instead of humans, for dangerous tasks in security, surveillance, and disaster response operations is a long-standing goal. However, developing robots that would be capable of carrying out all necessary tasks (e.g., searching for and tending to victims, neutralizing dangers such as fires) with full autonomy still remains a remote possibility. A more tangible goal is to have robots that will operate alongside humans, to jointly accomplish a given mission. Robots can provide useful information, keep humans out of harm's way, and enhance or enable operations in places too strenuous or dangerous for humans. 
              </p>
              <img class="research-img" src="../../../static/img/research/HCI_network.png" alt="HCI Network">
              <p>
                  Towards meeting these objectives, we propose a research program for wide-area scene understanding using a team comprising humans and robots. The robots will be equipped with sensors (e.g., visual) providing information-rich data that will enable scene understanding. These robots will maneuver, collect data, analyze their data along with information from other team members, and report to the humans the information deemed important, according to specified criteria. The system design will ensure that the decisions, made by each of the robots in a distributed fashion, yield coordination of actions between team members, human or robotic. In this project, we use the term Human-Robot Visual Network (HRVN) to refer to the team employed for the task of scene understanding. The vision sensors will be pan-tilt-zoom (PTZ) cameras with the ability to capture high-fidelity images through active control of the PTZ parameters and positioning of the mobile platform.
              </p>

              <hr/>

              <h3>Active Learning</h3>
              <img class="research-img" src="../../../static/img/research/Continuous-Learning.png" alt="Continuous Learning">
              <p>
                  Most of the state-of-the-art approaches to human activity recognition in video need an intensive training stage and assume that all of the training examples are labeled and available beforehand. They also use hand-crafted features. These assumptions are unrealistic for many applications where we have to deal with streaming videos. In these videos, as new activities are seen, they can be leveraged upon to improve the current activity recognition models. Under this project, we develop an incremental activity learning framework that is able to continuously update the activity models and learn new ones as more videos are seen. Our proposed approach leverages upon state-of-the-art machine learning tools, most notably active learning and deep learning. It does not require tedious manual labeling of every incoming example of each activity class.
              </p>

              <hr/>

              <h3>Camera Network Summarization</h3>
              <img class="research-img" src="../../../static/img/research/summarization.png" alt="Summarization">
              <p>
                  With the recent explosion of big video data, it is becoming increasingly important to automatically extract a brief yet informative summary of these videos in order to enable a more efficient and engaging viewing experience. Video summarization automates this process by providing a succinct representation of a video or a set of videos. The goal of this project is to summarize multiple videos captured in a network of surveillance cameras without requiring any prior knowledge on the field of view of the cameras. We solve the task of summarizing multi-view videos by formulating a sparse representative selection approach over a learned subspace shared by the multiple videos.
              </p>
          </div>
        </div>
      </div>
   </div>
</template>