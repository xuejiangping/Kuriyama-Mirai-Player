import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
	{
		path: '/',
		component: () => import('@/pages/index.vue'),
		meta:{
			keepAlive: true
		}
	},
	{
		path: '/musiclibrary',
		component: () => import('@/pages/musiclibrary/index.vue'),
	},
	{
		path: '/mv',
		component: () => import('@/pages/mv/index.vue'),
	},
	{
		path: '/mv/:id',
		name:"mv",
		component: () => import('@/pages/mv/[id].vue'),
	},
	{
		path: '/radio',
		component: () => import('@/pages/radio/index.vue'),
	},
	{
		path: '/songList',
		component: () => import('@/pages/songList/index.vue'),
	},
	{
		path: '/testPlayer',
		component: () => import('@/pages/testPlayer/index.vue'),
	},
	{
		path: '/theme',
		component: () => import('@/pages/theme/index.vue'),
	},
	{
		path: '/search',
		component: () => import('@/pages/search/index.vue'),
	},
	{
		path: '/playList',
		component: () => import('@/pages/playListDetail/index.vue'),
	},
	{
		path: '/currentPlaylist',
		component: () => import('@/pages/currentPlaylist/index.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router
