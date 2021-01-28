<template>
  <div class="modal-wrap">
    <div class="container">
      <span class="icon-close" @click="onClose" />
      <h3 class="title">{{ pack.name }}</h3>
      <p class="description">{{ pack.description }}</p>
      <p class="version">version: {{ pack.version }}</p>
      <p class="version">owner: {{ pack.owner.name }}</p>
      <p class="version">downloads: {{ pack.downloadsLast30Days }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {},
  props: {
    onClose: {
      type: Function
    },
    pack: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.modal-wrap {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}

.container {
  width: 400px;
  padding: 30px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 14px;
  cursor: pointer;
}
.icon-close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: -25px;
  top: -25px;
}
.icon-close::after {
  width: 100%;
  display: inline-block;
  content: "";
  border: 1px solid white;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 0;
}
.icon-close::before {
  width: 100%;
  display: inline-block;
  content: "";
  border: 1px solid white;
  transform: rotate(-45deg);
  position: absolute;
  top: 50%;
  left: 0;
}

.label {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
}

.input {
  padding: 7px 15px;
}

.button {
  width: 100%;
  margin-top: 35px;
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: white;
  color: black;
  transition: 0.3s;
  cursor: pointer;
}
.button:hover {
  color: white;
  background: black;
  transition: 0.3s;
}
</style>
