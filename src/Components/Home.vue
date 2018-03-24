<template>
    <div>
        <app-navigation></app-navigation>
        <app-hero></app-hero>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navigation from './Layout/Navigation';
import Hero from './Layout/Hero';
import Footer from './Layout/Footer';

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
