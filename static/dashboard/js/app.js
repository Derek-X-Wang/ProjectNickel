Vue.config.delimiters = ["[[","]]"]

var demo = new Vue({
    el: '#app',
    data: {
        'apptitle': 'Django Vue.JS Job Board',
        'showSidebar': false
    },
    methods: {
        toggleSidebar: function () {
            this.showSidebar = !this.showSidebar;
        }
    }
});
