<template>
  <button v-if="!link" :class="mode">
    <slot> </slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot> </slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      // type: String,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #76b1a4;
  border: 1px solid #76b1a4;
  color: #f2f2f2;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  transition: all 0.3s;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #489181;
  border-color: #489181;
}

.flat {
  background-color: transparent;
  color: #76b1a4;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #489181;
  color: #489181;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: transparent;
  color: #14323a;
  border-color: #14323aab;
}
</style>
