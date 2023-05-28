import { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Landing from '../components/landing/Landing.vue';
import AppArchive from '../components/archive/AppArchive.vue';
import { RouteName } from "./route-name";

interface RouteWithComponent {
    path: string,
    name: string,
    component: Component,
    meta: {},
    children?: any[],
    beforeEnter?: (from: RouteWithComponent, to: RouteWithComponent, next: (route?: RouteWithComponent | string) => void) => any
}

export const routes: { [key: string]: RouteWithComponent } = {
    root: { path: '/', name: RouteName.ROOT, component: Landing, meta: {} },
    archive: { path: '/archive', name: RouteName.ARCHIVE, component: AppArchive, meta: {} },
    notFound: { path: '/:catchAll(.*)', name: RouteName.NOT_FOUND, component: AppArchive, meta: {} },
}

export const router = createRouter({
    history: createWebHistory(),
    routes: Object.values(routes) as any,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { left: 0, top: 0 };
        }
    }
});
