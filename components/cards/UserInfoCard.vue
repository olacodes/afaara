<template>
  <div class="wrapper container">
    <h3 class="mt-5 text-center">{{GETUSER.name}}'s Profile</h3>
    <div class="my-5 card">
      <h4 class="text-center mt-4">{{GETUSER.name}} <span>@{{GETUSER.username}}</span></h4>
      <div class="card-body card-cont">
        <div class="avarter-cont">
          <img
            :src="`https://picsum.photos/id/${GETUSER.id * 5}/200/200`"
            alt="avarter"
            class="avarter"
          />
        </div>

        <ul class="list-group list-group-flush user-info-cont">
          <li class="list-group-item">
            <strong>Email: </strong>{{GETUSER.email}}
          </li>
          <li class="list-group-item">
            <strong>Phone: </strong> {{GETUSER.phone}}
          </li>
          <li class="list-group-item">
            <strong>Address: </strong> {{GETUSER.address.suite}}, {{GETUSER.address.street}}, {{GETUSER.address.city}}
          </li>
          <li class="list-group-item">
            <strong>Company: </strong> {{GETUSER.company.name}}
          </li>
          <li class="list-group-item">
            <strong>Website</strong> {{GETUSER.website}}
          </li>
        </ul>
      </div>
    </div>

    <h4>Posts</h4>
    <PostCard />
  </div>
</template>

<script>
import PostCard from './PostCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    PostCard,
  },
  computed: {
    ...mapGetters('users', ['GETUSER']),
  },
}
</script>

<style>
.wrapper {
  background-color: rgb(238, 236, 236);
}
.card-cont {
  border-radius: 0.5rem;
  display: flex;
}
.avarter-cont {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}
.avarter {
  border-radius: 0.3rem;
}

@media screen and (max-width: 700px) {
  .avarter-cont {
    display: none;
  }
}
</style>
