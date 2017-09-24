<template>
  <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">Publications</a></li>
            <li><a href="#">Datasets</a></li>
            <li><a href="#">People</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Research Projects<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Overview</a></li>
                <li><a href="#">Human Robot Vision Network</a></li>
                <li><a href="#">Wide Area Scene Analysis in Vision Network</a></li>
                <li><a href="#">Activity Recognition and Prediction</a></li>
                <li><a href="#">Situational Awareness Under Resource Constraints</a></li>
                <li><a href="#">Face Tracking and Recognition</a></li>
                <li><a href="#">Biological Image Analysis</a></li>
                <li><a href="#">VideoWeb: A Video Network Lab</a></li>
                <li><a href="#">Multi-Terminal Video Compression</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
  name: 'NavAmit'
}
</script>

