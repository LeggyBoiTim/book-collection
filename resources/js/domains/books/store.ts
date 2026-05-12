import { storeModuleFactory } from '../../services/store';
import { onMounted } from 'vue';

const bookStore = storeModuleFactory('books');

bookStore.actions.getAll();

// getters
export const getBooks = bookStore.getters.all;
export const getBookById = (id) => bookStore.getters.getById(id);

// actions
export const createBook = async (newBook) => {
    await bookStore.actions.create(newBook);
};

export const updateBook = async (id, updatedBook) => {
    await bookStore.actions.update(id, updatedBook);
};

export const deleteBook = async (id) => {
    await bookStore.actions.delete(id);
};