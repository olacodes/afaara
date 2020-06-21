<template>
  <div class="wrapper">
    <div
      class="card mb-3"
      v-for="userPosts in getUserPosts"
      :key="userPosts.id"
    >
      <nuxt-link class="text-links" :to="`posts/${userPosts.id}`">
        <div class="card-body">
          <h5 class="card-title">{{ userPosts.title }}</h5>
          <p class="card-text">{{ userPosts.body }}</p>
          <div class="post-btn-cont">
            <Button class="py-2 post-btn"> Read more </Button>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {Button} from '../Button'

export default {
  computed: {
    ...mapGetters('posts', ['getUserPosts']),
  },
  components: { Button }
}
</script>

<style scoped>

.text-links:hover{
  text-decoration: none;
  text-decoration-style: none;
  color: #1b4ed1;
  border: 2px solid white;
}
.text-links{
  text-decoration-color: none;
  color: #00113d;
}
.post-btn-cont{
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
}
.post-btn-{
  margin: 0;
  padding: 0;
}
</style>
