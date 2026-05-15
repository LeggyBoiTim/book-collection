<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBookById } from '../store';
import { getReviews } from '../../reviews/store';

const route = useRoute();
const router = useRouter();

const book = getBookById(route.params.id);
const reviews = getReviews;
</script>

<template>
    <div v-for="review in reviews" :key="review.id">
        <p>{{ review.content }}</p>
    </div>
</template>