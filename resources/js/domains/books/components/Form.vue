<script setup>
import { ref } from 'vue';
import { getAuthors } from '../../authors/store';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';
import FormError from '../../../services/error/FormError.vue';

const props = defineProps({ book: Object });
const emit = defineEmits(['submit']);
const form = ref({ ...props.book });
const handleSubmit = () => emit('submit', form.value);

const authors = getAuthors;
</script>

<template>
    <ErrorMessage />

    <form @submit.prevent="handleSubmit">
        <label for="title">Titel:</label>
        <input id="title" v-model="form.title" type="text" required />
        <FormError name="title" />

        <label for="summary">Samenvatting:</label>
        <textarea id="summary" v-model="form.summary" required></textarea>
        <FormError name="summary" />

        <label for="author_id">Auteur:</label>
        <select id="author_id" v-model="form.author_id" required>
            <option v-for="author in authors" :key="author.id" :value="author.id">
                {{ author.name }}
            </option>
        </select>
        <FormError name="author_id" />

        <button type="submit">Opslaan</button>
    </form>
</template>