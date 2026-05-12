<script setup lang="ts">
import { getMessage } from '.';

</script>

<template>
    <div v-if="getMessage.value">
        {{ getMessage.value }}
    </div>
</template>