<template>
  <div class="container">
    <div>
      <h1 class="title">
        Afaara Users
      </h1>
    </div>
      <UserCard />
  </div>
</template>

<script>
import UserCard from '../components/cards/UserCard'

export default{
  layout: 'default',
  components: {
    UserCard
  },
  created() {
    this.$store.dispatch('users/fetchUsers')
  },

}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 5rem;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
