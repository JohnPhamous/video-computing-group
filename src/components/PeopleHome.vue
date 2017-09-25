<template>
  <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12 text-center">
            <h2>Faculty Members</h2>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="person" v-for="member in facultyMembers" :key="member.name">
                <div class="col-md-3" :key="member.name">
                  <img :src="'static/img/people/' + member.image" class="img-responsive"/>
                </div>
                <div class="col-md-9">
                  <h4><strong>{{member.name}}</strong></h4>
                  <p><strong>{{member.position}}</strong></p>
                  <p v-if="member.contact.mobile.length > 0" disabled><span class="fa fa-phone"></span> {{member.contact.mobile}}</p>
                </div>
                <div class="col-md-12 personActions">
                  <a v-if="member.contact.email.length > 0" :href="'mailto:' + member.contact.email"  class="btn btn-primary btn-sm"><span class="fa fa-envelope-o"></span> Email</a>
                  <a v-if="member.contact.website.length > 0" :href="member.contact.website"  class="btn btn-primary btn-sm"><span class="fa fa-globe"></span> Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container row">
          <div class="col-md-12 text-center">
            <h2>Graduate Students</h2>
          </div>
          <div class="col-md-6 personContainer" v-for="member in grads" :key="member.name">
            <div class="row">
              <div class="person" >
                <div class="col-md-3" :key="member.name">
                  <img :src="'static/img/people/' + member.image" class="img-responsive"/>
                </div>
                <div class="col-md-9">
                  <h4><strong>{{member.name}}</strong></h4>
                  <p><strong>{{member.position}}</strong></p>
                  <p v-if="member.contact.mobile.length > 0" disabled><span class="fa fa-phone"></span> {{member.contact.mobile}}</p>
                </div>
                <div class="col-md-12 personActions">
                  <a v-if="member.contact.email.length > 0" :href="'mailto:' + member.contact.email"  class="btn btn-primary btn-sm"><span class="fa fa-envelope-o"></span> Email</a>
                  <a v-if="member.contact.website.length > 0" :href="member.contact.website"  class="btn btn-primary btn-sm"><span class="fa fa-globe"></span> Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container row">
          <div class="col-md-12 text-center">
            <h2>Undergradute Students</h2>
          </div>
          <div class="col-md-6 personContainer" v-for="member in undergrads" :key="member.name">
            <div class="row">
              <div class="person" >
                <div class="col-md-3" :key="member.name">
                  <img :src="'static/img/people/' + member.image" class="img-responsive"/>
                </div>
                <div class="col-md-9">
                  <h4><strong>{{member.name}}</strong></h4>
                  <p><strong>{{member.position}}</strong></p>
                  <p v-if="member.contact.mobile.length > 0" disabled><span class="fa fa-phone"></span> {{member.contact.mobile}}</p>
                </div>
                <div class="col-md-12 personActions">
                  <a v-if="member.contact.email.length > 0" :href="'mailto:' + member.contact.email"  class="btn btn-primary btn-sm"><span class="fa fa-envelope-o"></span> Email</a>
                  <a v-if="member.contact.website.length > 0" :href="member.contact.website"  class="btn btn-primary btn-sm"><span class="fa fa-globe"></span> Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'People',
      facultyMembers: [
        {
          name: 'Amit Roy-Chowdhury',
          position: 'Professor, Electrical and Computer Engineering',
          image: 'amit.jpg',
          website: '',
          contact: {
            email: 'amitrc@ee.ucr.edu',
            mobile: '951-827-7886',
            website: '/'
          }
        }
      ],
      undergrads: [
        {
          name: 'Cody Simons',
          position: 'Undergraduate Student, Electrical and Computer Engineering',
          image: 'cody.jpg',
          website: '',
          contact: {
            email: 'csimo005@ucr.edu',
            mobile: '',
            website: ''
          }
        }
      ],
      grads: [
        {
          name: 'Jawadul H. Bappy',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'jawad.png',
          website: 'http://www.ee.ucr.edu/~mbappy/',
          contact: {
            email: 'mbapp001@ucr.edu',
            mobile: '951-827-7886',
            website: 'http://www.ee.ucr.edu/~mbappy/'
          }
        },
        {
          name: 'Akash Gupta',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'Akash.jpg',
          website: '',
          contact: {
            email: '',
            mobile: '',
            website: ''
          }
        },
        {
          name: 'Sasha Li',
          position: '',
          image: 'shasha.jpg',
          website: '',
          contact: {
            email: '',
            mobile: '',
            website: ''
          }
        },
        {
          name: 'Shuyue Lan',
          position: 'PhD Student, Electrical and Computer Engineering',
          image: 'shuyue.jpg',
          website: '',
          contact: {
            email: 'slan001@ucr.edu',
            mobile: '',
            website: 'http://www.ee.ucr.edu/~slan/'
          }
        },
        {
          name: 'Amit Roy-sssChowdhury',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'tahmida2.jpg',
          website: '',
          contact: {
            email: 'tmahm001@ucr.edu',
            mobile: '',
            website: 'https://sites.google.com/site/tahmidamahmud/'
          }
        },
        {
          name: 'Niluthpol Mithun',
          position: 'PhD Student, Electrical and Computer Engineering',
          image: 'Mithun.jpg',
          website: '',
          contact: {
            email: 'nmith001@ucr.edu',
            mobile: '',
            website: 'http://www.ee.ucr.edu/~nmithun/'
          }
        },
        {
          name: 'Rameswar Panda',
          position: 'PhD Student, Electrical and Computer Engineering',
          image: 'Panda.png',
          website: '',
          contact: {
            email: 'rpand002@ucr.edu',
            mobile: '',
            website: 'https://rpand002.github.io/'
          }
        },
        {
          name: 'Sujoy Paul',
          position: 'PhD Candiate, Electrical and Computer Engineering',
          image: 'sujoy.jpg',
          website: '',
          contact: {
            email: 'supaul@ece.ucr.edu',
            mobile: '',
            website: 'http://ee.ucr.edu/~supaul/'
          }
        },
        {
          name: 'Sourya Roy',
          position: 'PhD Candidate, Electrical and Compouting Engineering',
          image: 'sourya.jpg',
          website: '',
          contact: {
            email: 'souroy099@gmail.com ',
            mobile: '',
            website: ''
          }
        }
      ],
    }
  }
}
</script>

