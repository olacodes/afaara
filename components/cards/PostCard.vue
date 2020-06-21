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
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('posts', ['getUserPosts']),
  },
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
</style>
