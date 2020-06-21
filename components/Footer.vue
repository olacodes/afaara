<template>
  <footer class="">
    <div class="footer-container py-4">
      <div class="manager-container">
        <img
          class="footer-logo"
          src="https://res.cloudinary.com/olacode/image/upload/v1585867972/project%20manager/project-logo3_wl6fmi.png"
          alt="logo"
        />
        <h2>Afaara Limited</h2>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.manager-container {
  display: flex;
  place-items: center;
  width: 280px;
}

.footer-container {
  display: grid;
  place-items: center;
  background-color: #00113d;
  color: #72f3ec;
  /* height: 180px; */
  width: 100%;
}
.footer-logo {
  width: 120px;
  border-radius: 100%;
  background-color: #00113d;
}
</style>
