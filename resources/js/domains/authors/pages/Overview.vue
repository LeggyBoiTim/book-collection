<script setup>
import { onMounted } from 'vue';
import { authors, deleteAuthor } from '../store';
</script>

<template>
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
                <td><button @click="deleteAuthor(author.id)" style="cursor: pointer;">Verwijder</button></td>
            </tr>
        </tbody>
    </table>
</template>