import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: "/login",
      component: "@/pages/Login",
      layout: false,
      wrappers: ["@/wrappers/login"]
    },
    {
      path: "/",
      wrappers: ["@/wrappers/auth"],
      routes: [
        { path: '/first-hop', component: '@/pages/FirstHop' },
        { path: '/data-analysis', component: '@/pages/DataAnalysis' },
        { path: '/monitoring-system', component: '@/pages/MonitoringSystem' }
      ]
    },

  ],
  npmClient: 'yarn',
  plugins: [
    require.resolve('@umijs/plugins/dist/unocss')
  ],
  unocss: {
    watch: ['src/**/*.tsx']
  }
});
