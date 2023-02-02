<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a perfect Coach!</router-link></h1>
      <ul>
        <li><router-link to="/coaches">Coaches</router-link></li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: #2b6777;
}

header a {
  text-decoration: none;
  color: #f2f2f2;
  display: inline-block;
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  transition: 0.2s;
}

ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 0.5rem;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f2f2f2;
}
a.router-link-active {
  background-color: #489181;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
  font-size: 2.5rem;
}

h1 a:active,
h1 a:hover,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
}

header ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
@media (max-width: 680px) {
  header {
    height: 8rem;
  }
  header nav {
    flex-direction: column;
    width: 100%;
  }
  h1 a {
    line-height: 100%;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  header li {
    font-size: 1rem;
    width: 120%;
    margin: 0 0.2rem;
  }
}
</style>
