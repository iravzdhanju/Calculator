<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue';

export default {
  name: 'app',
  components: {
    Calculator,
  },
};
</script>

<style lang="scss">
body {
  background-color: #222;
  margin: 0;
  padding: 0;
  font-family: Google Sans;
}

#app {
  font-family: Google Sans;
  text-align: center;
  color: #fff;
}

header nav#top {
  display: -ms-grid;
  display: grid;
  grid-row-gap: 1em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 11px rgba(0, 0, 0, 0.2);
  height: 70px;
}

header nav#top .topbar {
  display: -ms-grid;
  display: grid;
  grid-template-columns: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  grid-column-gap: 1em;
}

header nav#top .topbar svg.menu {
  width: 28px;
  height: 28px;
  fill: #fff;
  border-radius: 50%;
}

.logoimg {
  height: 20px;
  width: 20px;
}

header nav#top .topbar svg.menu:hover {
  background: rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 20px !important;
  text-align: center;
  margin: auto;
  font-size: 25px;
  letter-spacing: 1px;
  color: #ff6332;
}
a {
  list-style-type: none;
  text-decoration: none;
}

.link-list {
  text-align: center;
}

li {
  color: #fff;
  height: 32px;
  display: inline-block;
  padding: 10px 11px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 32px;
  text-transform: uppercase;
}

@media (max-width: 756px) {
  li {
    padding: 10px 3px;
  }
}

#footer {
  bottom: 0;
  width: 100%;
  height: 69px;
  z-index: 1;
  transition: all 225ms ease-in-out;
  overflow: hidden;
}

.footerLogo {
  text-align: center;
  padding: 25px;
  color: #ff6332;
}
</style>
