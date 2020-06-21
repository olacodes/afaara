<template>
  <div class="wrapper d-flex ">

    <div
      v-for="user in GETUSERS"
      :key="user.id"
      class="card-wrapper shadow-sm card has-background-white"
    >
    <nuxt-link :to="`${user.id}`">
      <div class="p-4">
        <div class="image-card pt-2">
          <img
            :src="`https://picsum.photos/id/${user.id * 5}/200/200`"
            class="text-align-center img-card img-fluid"
            alt=""
          />
        </div>
        <div class="card-content p-4">
          <div class="content-text sm-text-center">
            <h4 class="content-header pb-2 has-text-weight-semibold is-size-4">
              {{user.name}}
            </h4>
            <p class="username">
              @{{user.username}}
            </p>
            <Button class="px-5 py-2 mt-2"> Connect </Button>
          </div>
        </div>
      </div>
    </nuxt-link>
    </div>
  </div>
</template>

<script>
import { Button } from '../Button'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { Button },
  computed: {
    ...mapGetters('users', ['GETUSERS']),
  },
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-wrapper {
  border-radius: 5px;
  max-width: 300px;
  margin: 15px;
}
.card-wrapper:hover{
  box-shadow: 3px 3px 3px 3px rgb(235, 231, 231) !important;
  cursor: pointer;
}

.image-card {
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
}
.img-card {
  border-radius: 100%;
  background: #00113d;
}
</style>
