import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home'
import ParentRouter from '@/components/partials/ParentRouter'
import Marvel from '@/components/marvels/Marvel'
import Imgur from '@/components/plugins/Imgur'
import PhotoZoom from '@/components/plugins/PhotoZoom'
import Social from '@/components/plugins/Social'
import GoogleMap from '@/components/plugins/GoogleMap'
import Youtube from '@/components/plugins/Youtube'
import I18N from '@/components/plugins/I18N'


Vue.use(Router);

let router = new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
        },
		{
			path: '/porojects',
			component: ParentRouter,
			children: [{
					path: '/',
					redirect: { 
						name: 'home' 
					},
				}, {
					path: 'marvel',
					name: 'porojects.marvel',
					// route level code-splitting
					// this generates a separate chunk (about.[hash].js) for this route
					// which is lazy-loaded when the route is visited.
					// component: () => import (/* webpackChunkName: "marvel" */ '@/components/marvels/Marvel')
					component: Marvel
				},
			],
        },
		{
			path: '/plugins',
			component: ParentRouter,
			children: [{
					path: '/',
					redirect: { 
						name: 'home' 
					},
				}, {
					path: 'imgur',
					name: 'plugins.imgur',
					component: Imgur
				}, {
					path: 'photozoom',
					name: 'plugins.photozoom',
					component: PhotoZoom
				}, {
					path: 'social',
					name: 'plugins.social',
					component: Social
				}, {
					path: 'googlemap',
					name: 'plugins.googlemap',
					component: GoogleMap
				}, {
					path: 'youtube',
					name: 'plugins.youtube',
					component: Youtube,
					children: [{
							path: ':page',
							name: 'plugins.youtube.page',
							component: Youtube,
						},
					],
				}, {
					path: 'language',
					name: 'plugins.language',
					component: I18N,
				},
			],
        },
        {
			path: '*',
			redirect: { name: 'home' }
		},
	],
	scrollBehavior(from) {
		if (from.name == 'plugins.youtube.page') return 
		return {
			x: 0,
			y: 0
		}
    }
})

export default router;