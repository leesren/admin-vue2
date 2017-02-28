<template>
    <div>
        <nprogress-container></nprogress-container>
        <navbar :show="true"></navbar>
        <sidebar :show="sidebar.opened && !sidebar.hidden"></sidebar>
        <app-main></app-main>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
import { Navbar, Sidebar, AppMain, FooterBar } from '../components/layout'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain,
    FooterBar
  },
  computed: mapGetters({
    sidebar: 'sidebar'
  }),

  methods: mapActions([
    'toggleDevice',
    'toggleSidebar'
  ])
}
</script>
