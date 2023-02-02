<template>
  <section>
    <base-card>
      <h2>Page not found!</h2>
      <p>
        This page could not be found - maybe check out all our
        <router-link to="/coaches">coaches</router-link>.
      </p>
    </base-card>
  </section>
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
  color: #14323a;
  transition: color 0.2s linear;
}
a:hover {
  color: #489181;
}
</style>
