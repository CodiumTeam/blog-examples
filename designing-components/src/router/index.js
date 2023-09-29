import { createRouter, createWebHistory } from 'vue-router'
import AlertsView from '../views/AlertsView.vue';
import HomeView from '../views/HomeView.vue'
import TableView from '../views/TableView.vue'
import FilteredTableView from '../views/FilteredTableView.vue'
import ComposableFilteredTableView from '../views/ComposableFilteredTableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/0-alerts',
      name: 'alerts',
      component: AlertsView,
    },
    {
      path: '/1-table',
      name: '1',
      component: TableView,
    },
    {
      path: '/2a-filtered-table',
      name: '2a',
      component: FilteredTableView,
    },
    {
      path: '/2b-filtered-table',
      name: '2b',
      component: ComposableFilteredTableView,
    }
  ]
})

export default router
