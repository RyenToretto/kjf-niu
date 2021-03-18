<template>
    <div class="home">
        <img alt="Vue logo" :src="require('../assets/logo.png')" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"></HelloWorld>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/module/home/HelloWorld.vue';

export default Vue.extend({
    name: 'Home',
    components: {
        HelloWorld
    }
});
</script>
