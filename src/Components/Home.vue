<template>
    <div>
        <app-navigation></app-navigation>
        <app-hero></app-hero>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navigation from './Layout/Navigation.vue';
import Hero from './Layout/Hero.vue';
import Footer from './Layout/Footer.vue';

export default {
    components: {
        appNavigation: Navigation,
        appHero: Hero,
        appFooter: Footer
    }
}
</script>

<style>

</style>
