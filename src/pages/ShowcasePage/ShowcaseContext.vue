<template>
    <section class="showcase-header">
        <div class="project-name">
            <h2>{{ projectName }}</h2>
            <p class="project-date">{{ projectDate }}</p>
        </div>
        <div>
            <img class="project-display-photo" v-bind:src="projectDisplayPhotoPath" data-aos="fade-up">
        </div>
        <div class="container-fluid project-context">
            <div class="row">
                <div class="col-12 col-lg-6 my-5 project-context-details" data-aos="fade">
                    <p class="project-type">{{ projectType }}</p>
                    <p class="project-platform">{{ projectPlatform }}</p>
                    <a v-bind:href="projectExternalLink" target="_blank">Visit site</a>
                </div>
                <div class="col-12 col-lg-6 my-5 project-context-desc article-slot" data-aos="fade">
                    <div>
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="project-context-photo-container">
            <img class="project-context-photo" v-bind:src="projectContextPhotoPath" data-aos="fade-up">
        </div>
    </section>
</template>

<style>

</style>

<script>
export default {
    props: {
        projectName: {
            type: String, 
            required: true
        },
        projectDate: {
            type: String, 
            required: true
        },
        projectDisplayPhotoPath: {
            type: String,
            required: true
        },
        projectType: {
            type: String,
            required: true
        },
        projectPlatform: {
            type: String,
            required: true
        },
        projectExternalLink: {
            type: String,
            required: true
        },
        projectContextPhotoPath: {
            type: String,
            required: true
        },
    }
}
</script>