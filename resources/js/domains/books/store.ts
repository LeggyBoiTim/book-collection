import axios from 'axios';
import { ref, computed } from 'vue';

interface Book {
    id: number;
    author_id: number;
    title: string;
    summary: string;
}

// state
const books = ref<Book[]>([]);

// getters
export const getAllBooks = computed(() => books.value);

// actions
export const fetchBooks = async () => {
    const {data} = await axios.get('/api/books');
    if(!data) return
    books.value = data;
};