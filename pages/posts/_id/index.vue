<template>
  <div class="container">
    <h3 class="my-4">
      {{GETUSER.name}}'s Post
    </h3>
    <UserPost />
    <div class="card-body comment">
      <h5 >Comments</h5>
    </div>
    <CommentCard />
  </div>
</template>

<script>

import UserPost from '../../../components/cards/UserPost'
import CommentCard from '../../../components/cards/CommentCard'
import { mapGetters } from 'vuex'

export default {
  components: {
    UserPost,
    CommentCard,
  },
  created() {
    this.$store.dispatch('posts/fetchPost', this.$route.params.id)
    this.$store.dispatch('comments/fetchComments', this.$route.params.id)
  },
  computed: {
    ...mapGetters('users', ['GETUSER'])
  }
      
}
</script>

<style scoped>
.comment{
  color: rgb(90, 88, 88);
}
</style>
