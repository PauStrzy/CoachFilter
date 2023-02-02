<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>
<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin: 0.5rem 0.5rem 0.5rem 0;
}

.frontend {
  background-color: #14323a;
  color: #f8efff;
}

.backend {
  background-color: #245664;
  color: #f8efff;
}

.career {
  background-color: #397f92;
  color: #f8efff;
}
</style>
