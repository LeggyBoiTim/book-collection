<script setup>
import { onMounted } from 'vue';
import { deleteBook, fetchBooks, getAllBooks } from '../store';

fetchBooks();
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in getAllBooks" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
                <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Bewerk</RouterLink></td>
                <td><button @click="deleteBook(book.id)" style="cursor: pointer;">Verwijder</button></td>
            </tr>
        </tbody>
    </table>
</template>