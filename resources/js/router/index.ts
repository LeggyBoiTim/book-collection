import { createRouter, createWebHistory } from 'vue-router';
import { authorRoutes } from '../domains/authors/routes';
import { bookRoutes } from '../domains/books/routes';
import { destroyErrors, destroyMessage } from '../services/error';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...authorRoutes,
        ...bookRoutes,
    ],
});

router.beforeEach(() => {
    destroyErrors();
    destroyMessage();
    return true;
});