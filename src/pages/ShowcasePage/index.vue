<template>
    <div>
        <app-nav/>
        <showcase-context
            v-bind:project-name="showcase.projectName"
            v-bind:project-date="showcase.projectDate"
            v-bind:project-display-photo-path="showcase.projectDisplayPhotoPath"
            v-bind:project-type="showcase.projectType"
            v-bind:project-platform="showcase.projectPlatform"
            v-bind:project-external-link="showcase.projectExternalLink"
            v-bind:project-context-photo-path="showcase.projectContextPhotoPath"
        ><span v-html="showcase.projectDesc"></span></showcase-context>
        <showcase-planning><span v-html="showcase.projectPlanning"></span></showcase-planning>
        <showcase-result
            v-bind:project-screenshots="showcase.projectScreenshots"
        ><span v-html="showcase.projectResult"></span></showcase-result>
        <app-footer/>
    </div>
</template>

<style>

</style>

<script>
import AppNav from '../../components/layout/AppNav.vue'
import ShowcaseContext from './ShowcaseContext.vue'
import ShowcasePlanning from './ShowcasePlanning.vue'
import ShowcaseResult from './ShowcaseResult.vue'
import AppFooter from '../../components/layout/AppFooter.vue'
import showcases from '../../data/showcases.js'

export default {
    components: {
        AppNav,
        ShowcaseContext,
        ShowcasePlanning,
        ShowcaseResult,
        AppFooter
    },

    watch: {
        '$route': 'fetchData'
    },

    methods: {
        fetchData () {
            const pageId = this.$route.params.pageId
            const pageIds = Object.keys(showcases)
            if(pageIds.includes(pageId)){
                this.showcase = showcases[pageId]
            }else{
                this.$router.push({name: '404'})
            }
        }
    },

    created: function () {
        this.fetchData()
    },

    mounted: function () {
        AOS.init();

        this.$ua.trackView('case')
    },

    data: function () {
        return {
            showcase: null,
            params: {
                description: 'The design portfolio of Grant Adiele, an independent web designer and developer based in Nigeria.',
                site_name: 'Grant Adiele',
                site_url: 'https://grantadiele.web.app/#' + this.$route.path,
            }
        }
    },

    head: {
        title: function () {
            return {
                inner: this.showcase.projectName,
                seperator: '',
                complement: this.params.site_name,
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