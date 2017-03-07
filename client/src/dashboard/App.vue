<template>
  <div id="app">
    <div id="page-wrapper" v-bind:class="{open: showSidebar}">
      <my-sidebar :toggle="toggleSidebar" />
      <my-content/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';

export default {
  name: 'app',
  data () {
    return {
      'apptitle': 'Django Vue.JS Job Board',
      'showSidebar': false
    }
  },
  methods: {
      toggleSidebar: function () {
          this.showSidebar = !this.showSidebar;
      }
  },
  components: {
    'my-sidebar':Sidebar,
    'my-content':Content,
  },
};
</script>

<style>
@media only screen and (min-width: 561px) {
  #page-wrapper.open {
    padding-left: 250px;
  }
}
@media only screen and (max-width: 560px) {
  #page-wrapper.open {
    padding-left: 70px;
  }
}
#page-wrapper.open #sidebar-wrapper {
  left: 150px;
}
/**
 * Hamburg Menu
 * When the class of 'hamburg' is applied to the body tag of the document,
 * the sidebar changes it's style to attempt to mimic a menu on a phone app,
 * where the content is overlaying the content, rather than push it.
 */
@media only screen and (max-width: 560px) {
  body.hamburg #page-wrapper {
    padding-left: 0;
  }
  body.hamburg #page-wrapper:not(.open) #sidebar-wrapper {
    position: absolute;
    left: -100px;
  }
  body.hamburg #page-wrapper:not(.open) ul.sidebar .sidebar-title.separator {
    display: none;
  }
  body.hamburg #page-wrapper.open #sidebar-wrapper {
    position: fixed;
  }
  body.hamburg #page-wrapper.open #sidebar-wrapper ul.sidebar li.sidebar-main {
    margin-left: 0px;
  }
  body.hamburg #sidebar-wrapper ul.sidebar li.sidebar-main,
  body.hamburg .row.header .meta {
    margin-left: 70px;
  }
  body.hamburg #sidebar-wrapper ul.sidebar li.sidebar-main,
  body.hamburg #page-wrapper.open #sidebar-wrapper ul.sidebar li.sidebar-main {
    transition: margin-left 0.4s ease 0s;
  }
}
/* Base */
html {
  overflow-y: scroll;
}
body {
  background: #f3f3f3;
  font-family: "Montserrat";
  color: #333333 !important;
}
.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.row > div {
  margin-bottom: 15px;
}
.alerts-container .alert:last-child {
  margin-bottom: 0;
}
#page-wrapper {
  padding-left: 70px;
  height: 100%;
}
#sidebar-wrapper {
  margin-left: -150px;
  left: -30px;
  width: 250px;
  position: fixed;
  height: 100%;
  z-index: 999;
}
#page-wrapper,
#sidebar-wrapper {
  transition: all .4s ease 0s;
}
.green {
  background: #23ae89 !important;
}
.blue {
  background: #2361ae !important;
}
.orange {
  background: #d3a938 !important;
}
.red {
  background: #ae2323 !important;
}
.form-group .help-block.form-group-inline-message {
  padding-top: 5px;
}
div.input-mask {
  padding-top: 7px;
}
/* Fonts */
@font-face {
  font-family: 'Montserrat';
  src: url('/dist/assets/dashboard/fonts/montserrat-regular-webfont.eot');
  src: url('/dist/assets/dashboard/fonts/montserrat-regular-webfont.eot?#iefix') format('embedded-opentype'), url('/dist/assets/dashboard/fonts/montserrat-regular-webfont.woff') format('woff'), url('/dist/assets/dashboard/fonts/montserrat-regular-webfont.ttf') format('truetype'), url('/dist/assets/dashboard/fonts/montserrat-regular-webfont.svg#montserratregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  @font-face {
    font-family: 'Montserrat';
    src: url('/dist/assets/dashboard/fonts/montserrat-regular-webfont.svg') format('svg');
  }
  select {
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
