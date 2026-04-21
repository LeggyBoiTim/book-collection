import axios from 'axios';
import { ref, computed } from 'vue';

interface Author {
    id: number;
    name: string;
}

// state
const authors = ref<Author[]>([]);

// getters
export const getAllAuthors = computed(() => authors.value);

// actions
export const fetchAuthors = async () => {
    const {data} = await axios.get('/api/authors');
    if(!data) return
    authors.value = data;
};