<template>
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    ©{{ copyrightYear }} by <a href="https://github.com/jheyjheyjhey">jheyjheyjhey</a> 
                    <br>
                    Made with <span class="has-text-danger">❤</span> using <a href="https://vuejs.org/">Vue.js!</a> 
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            copyrightYear: new Date().getFullYear()
        }
    }
}
</script>

<style>

</style>
