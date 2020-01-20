import Vue from 'vue'
import Router from 'vue-router'
import monitor from "../components/monitor";
import generalView from "../components/generalView/generalView";
import ecsMonitor from "../components/statistic/ecsMonitor";
import ossMonitor from "../components/statistic/ossMonitor";

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'monitor',
        component: monitor,
        children: [
          //  概览
          {
            path: '/generalView',
            name: 'generalView',
            component: generalView
          },
          {
            path: '/ecsMonitor',
            name: 'ecsMonitor',
            component: ecsMonitor
          },
          {
            path: '/ossMonitor',
            name: 'ossMonitor',
            component: ossMonitor
          }
        ]
      }
    ]
})
