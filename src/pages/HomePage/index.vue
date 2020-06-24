<template>
    <div>
        <app-nav/>
        <home-hero/>
        <div v-scroll-spy>
            <home-me/>
            <home-showcase/>
            <home-whyme/>
            <app-footer/>
        </div>
    </div>
</template>

<style>

</style>

<script>
import AppNav from '../../components/layout/AppNav.vue'
import HomeHero from './HomeHero.vue'
import HomeMe from './HomeMe.vue'
import HomeShowcase from './HomeShowcase.vue'
import HomeWhyme from './HomeWhyme.vue'
import AppFooter from '../../components/layout/AppFooter.vue'

export default {
    components: {
        AppNav,
        HomeHero,
        HomeMe,
        HomeShowcase,
        HomeWhyme,
        AppFooter
    },

    data: function () {
        return {
            params: {
                title: 'Design Portfolio of Grant Adiele',
                description: 'The design portfolio of Grant Adiele, an independent web designer and developer based in Nigeria.',
                site_name: 'Grant Adiele',
                site_url: 'https://grantadiele.web.app/',
            }
        }
    },

    mounted: function () {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('myHero', './assets/json/myparticles-config.json');

        var elem = document.querySelector('.whyme-carousel');
        var flkty = new Flickity( elem, {
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            autoPlay: 3500
        });

        AOS.init();

        this.$ua.trackView('home')
    },

    head: {
        title: function () {
            return {
                inner: this.params.title,
                seperator: '',
                complement: '',
            }
        },

        meta: function () {
            return [
                {name: 'robots', content: 'index'},
                {name: 'description', content: this.params.description},
                {name: 'author', content: this.params.site_name},
                {property: 'og:title', content: this.params.title},
                {property: 'og:type', content: 'website'},
                {property: 'og:image', content: this.params.site_url + 'assets/icons/ga-icon-256x256.png'},
                {property: 'og:image:type', content: 'image/png'},
                {property: 'og:image:width', content: '256'},
                {property: 'og:image:height', content: '256'},
                {property: 'og:url', content: this.params.site_url},
                {property: 'og:description', content: this.params.description},
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:site_name', content: this.params.site_name},
                {property: 'twitter:card', content: 'summary'},
                {property: 'twitter:creator', content: '@devgranty'},
                {property: 'twitter:title', content: this.params.title},
                {property: 'twitter:description', content: this.params.description},
                {property: 'twitter:image', content: this.params.site_url + 'assets/icons/ga-icon-256x256.png'},
            ]
        },

        link: function () {
            return [
                {rel: 'canonical', href: this.params.site_url},
            ]
        },
    }
}
</script>