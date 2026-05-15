<script setup>
import { onMounted } from 'vue';
import { getAuthors, deleteAuthor } from '../store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';

const authors = getAuthors;
</script>

<template>
    <ErrorMessage />

    <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in authors" :key="author.id">
                <td>{{ author.name }}</td>
                <td><RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Bewerk</RouterLink></td>
                <td><button @click="deleteAuthor(author.id).catch(() => {})" style="cursor: pointer;">Verwijder</button></td>
            </tr>
        </tbody>
    </table>
</template>