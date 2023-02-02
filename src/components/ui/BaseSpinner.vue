<template>
  <div class="container">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.loader {
  width: 90px;
  padding: 15px;
  background: #14323a;
  aspect-ratio: 1;
  border-radius: 50%;
  --_m: conic-gradient(#0000, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  box-sizing: border-box;
  animation: load 0.9s linear infinite;
}

@keyframes load {
  to {
    transform: rotate(1turn);
  }
}
</style>
