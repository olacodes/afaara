<template>
  <div class="wrapper">
    <div class="card card-body">
      <div class="user-info d-flex">
        <div class="user-img">
          <img class="img-fluid img" :src="`https://picsum.photos/id/${getPost.userId * 2}/60`" alt="" />
        </div>
        <div class="user-detail">
          <h5>{{GETUSER.name}}</h5>
          <p>{{GETUSER.email}}</p>
        </div>
      </div>
      <div>
        <div class="card-title">
          <h4>{{getPost.title}}</h4>
          <p class="card-text">
            {{getPost.body}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('posts', ['getPost']),
    ...mapGetters('users', ['GETUSER'])
  }
}
</script>

<style scoped>
  .user-img{
    border: 2px solid rgb(209, 206, 206);
    margin-right: 1rem;
    padding: .3rem;
  }
  .user-detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
