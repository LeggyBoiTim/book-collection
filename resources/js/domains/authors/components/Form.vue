<script setup>
import { ref } from 'vue';
import ErrorMessage from '../../../services/error/ErrorMessage.vue';
import FormError from '../../../services/error/FormError.vue';

const props = defineProps({ author: Object });
const emit = defineEmits(['submit']);
const form = ref({ ...props.author });
const handleSubmit = () => emit('submit', form.value);
</script>

<template>
    <ErrorMessage />

    <form @submit.prevent="handleSubmit">
        <label for="name">Naam:</label>
        <input id="name" v-model="form.name" type="text" required />
        <FormError name="name" />

        <button type="submit">Opslaan</button>
    </form>
</template>