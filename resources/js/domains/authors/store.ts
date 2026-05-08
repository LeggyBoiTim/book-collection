import { storeModuleFactory } from '../../services/store';
import { onMounted } from 'vue';

const authorStore = storeModuleFactory('authors');
authorStore.actions.getAll();

// getters
export const authors = authorStore.getters.all;
export const author = (id) => authorStore.getters.getById(id);

// actions
export const createAuthor = async (newAuthor) => {
    await authorStore.actions.create(newAuthor);
};

export const updateAuthor = async (id, updatedAuthor) => {
    await authorStore.actions.update(id, updatedAuthor);
};

export const deleteAuthor = async (id) => {
    await authorStore.actions.delete(id);
};