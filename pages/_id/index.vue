<template>
  <div class="wrapper">
    <UserInfoCard/>
  </div>
</template>

<script>
import UserInfoCard from '../../components/cards/UserInfoCard'

export default {
  components: {
    UserInfoCard
  },
  async created() {
    await this.$store.dispatch(`users/fetchUser`, this.$route.params.id)
    await this.$store.dispatch(`posts/fetchUserPosts`, this.$route.params.id)    
  },
}
</script>

<style scoped>
  .wrapper{
    min-height: 100vh;
  }

</style>