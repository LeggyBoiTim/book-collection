<template>
    <nav>
        <RouterLink :to="{name: 'authors.overview'}">Auteurs overzicht</RouterLink> |
        <RouterLink :to="{name: 'authors.create'}">Nieuwe auteur toevoegen</RouterLink> |
        <RouterLink :to="{name: 'books.overview'}">Boeken overzicht</RouterLink> |
        <RouterLink :to="{name: 'books.create'}">Nieuw boek toevoegen</RouterLink>
    </nav>
    <router-view></router-view>
</template>