<template>
    <div>
        <app-navigation></app-navigation>
        <app-hero></app-hero>
    </div>
</template>

<script>
import Navigation from './Layout/Navigation';
import Hero from './Layout/Hero';

export default {
    components: {
        appNavigation: Navigation,
        appHero: Hero
    }
}
</script>

<style>

</style>
