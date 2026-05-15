import { storeModuleFactory } from '../../services/store';
import { onMounted } from 'vue';

const reviewStore = storeModuleFactory('reviews');

reviewStore.actions.getAll();

// getters
export const getReviews = reviewStore.getters.all;
export const getReviewById = (id) => reviewStore.getters.getById(id);

// actions
export const createReview = async (newReview) => {
    await reviewStore.actions.create(newReview);
};

export const updateReview = async (id, updatedReview) => {
    await reviewStore.actions.update(id, updatedReview);
};

export const deleteReview = async (id) => {
    await reviewStore.actions.delete(id);
};