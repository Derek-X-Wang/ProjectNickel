<template>
  <!-- Sidebar -->
  <div id="sidebar-wrapper">
    <ul class="sidebar">
      <li class="sidebar-main">
        <a v-on:click="toggleSidebar">
          Dashboard
          <span class="menu-icon glyphicon glyphicon-transfer"></span>
        </a>
      </li>
      <li class="sidebar-title"><span>TOOL</span></li>
        <li class="sidebar-list">
          <a href="#">Upload <span class="menu-icon fa fa-upload"></span></a>
        </li>
      <li class="sidebar-title"><span>NAVIGATION</span></li>
        <li class="sidebar-list">
          <a href="#">Dashboard <span class="menu-icon fa fa-tachometer"></span></a>
        </li>
        <li class="sidebar-list">
          <a href="#/tables">Tables <span class="menu-icon fa fa-table"></span></a>
        </li>
        <li class="sidebar-list">
          <a href="/">Website <span class="menu-icon fa fa-home"></span></a>
        </li>
    </ul>
    <div class="sidebar-footer">
      <div class="col-xs-4">
        <a href="https://github.com/rdash/rdash-angular" target="_blank">
          Github
        </a>
      </div>
      <div class="col-xs-4">
        <a href="https://github.com/rdash/rdash-angular/blob/master/README.md" target="_blank">
          About
        </a>
      </div>
      <div class="col-xs-4">
        <a href="#">
          Support
        </a>
      </div>
    </div>
  </div>
  <!-- End Sidebar -->
</template>

<script>
export default {
  name: 'my-sidebar',
  props: ['toggle',],
  methods: {
      toggleSidebar: function () {
          this.$parent.toggleSidebar();
      },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #592727 RED */
/* #2f5927 GREEN */
/* #30426a BLUE (default)*/
/* Sidebar background color */
/* Sidebar header and footer color */
/* Sidebar title text colour */
/* Sidebar menu item hover color */
/**
 * Sidebar
 */
#sidebar-wrapper {
  background: #30426a;
}
ul.sidebar .sidebar-main a,
.sidebar-footer,
ul.sidebar .sidebar-list a:hover,
#page-wrapper:not(.open) ul.sidebar .sidebar-title.separator {
  /* Sidebar header and footer color */
  background: #2d3e63;
}
ul.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  text-indent: 20px;
  overflow-x: hidden;
  overflow-y: auto;
}
ul.sidebar li a {
  color: #fff;
  display: block;
  float: left;
  text-decoration: none;
  width: 250px;
}
ul.sidebar .sidebar-main {
  height: 65px;
}
ul.sidebar .sidebar-main a {
  font-size: 18px;
  line-height: 60px;
}
ul.sidebar .sidebar-main a:hover {
  cursor: pointer;
}
ul.sidebar .sidebar-main .menu-icon {
  float: right;
  font-size: 18px;
  padding-right: 28px;
  line-height: 60px;
}
ul.sidebar .sidebar-title {
  color: #738bc0;
  font-size: 12px;
  height: 35px;
  line-height: 40px;
  text-transform: uppercase;
  transition: all .6s ease 0s;
}
ul.sidebar .sidebar-list {
  height: 40px;
}
ul.sidebar .sidebar-list a {
  text-indent: 25px;
  font-size: 15px;
  color: #b2bfdc;
  line-height: 40px;
}
ul.sidebar .sidebar-list a:hover {
  color: #fff;
  border-left: 3px solid #e99d1a;
  text-indent: 22px;
}
ul.sidebar .sidebar-list a:hover .menu-icon {
  text-indent: 25px;
}
ul.sidebar .sidebar-list .menu-icon {
  float: right;
  padding-right: 29px;
  line-height: 40px;
  width: 70px;
}
#page-wrapper:not(.open) ul.sidebar {
  bottom: 0;
}
#page-wrapper:not(.open) ul.sidebar .sidebar-title {
  display: none;
  height: 0px;
  text-indent: -100px;
}
#page-wrapper:not(.open) ul.sidebar .sidebar-title.separator {
  display: block;
  height: 2px;
  margin: 13px 0;
}
#page-wrapper:not(.open) ul.sidebar .sidebar-list a:hover span {
  border-left: 3px solid #e99d1a;
  text-indent: 22px;
}
#page-wrapper:not(.open) .sidebar-footer {
  display: none;
}
.sidebar-footer {
  position: absolute;
  height: 40px;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  transition: all .6s ease 0s;
  text-align: center;
}
.sidebar-footer div a {
  color: #b2bfdc;
  font-size: 12px;
  line-height: 43px;
}
.sidebar-footer div a:hover {
  color: #ffffff;
  text-decoration: none;
}
</style>
