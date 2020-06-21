<template>
  <div class="wrapper">
    <div
      class="card-body card"
      v-for="comment in getComments"
      :key="comment.id"
    >
      <div class="img-name d-flex">
        <div class="img-cont mr-2">
          <img
            class="img-fluid"
            :src="`https://picsum.photos//id/${comment.id * 2}/30`"
            alt="comment pics"
          />
        </div>
        <h6 class="card-title name pt-2">
          <i>
            {{ comment.name }}
          </i>
        </h6>
      </div>

      <p class="card-text">
        <i>
          {{ comment.body }}
        </i>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('comments', ['getComments']),
  },
}
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
.img-cont {
  padding: 4px;
  border: 2px solid rgb(165, 163, 163);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .name {
  border: 2px solid;
  display: flex;
  align-items: baseline;
  justify-content: center;
} */
</style>
