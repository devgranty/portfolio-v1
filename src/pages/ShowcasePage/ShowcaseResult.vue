<template>
    <section class="page-section" data-aos="fade">
        <div class="inner-container article-slot">
            <h4 class="showcase-sub-heading"><span>3/3</span> result</h4>
            <div class="slot-text">
                <slot></slot>
            </div>

            <div class="project-result-photo-container">
                <ul>
                    <li v-for="projectScreenshot in projectScreenshots" v-bind:key="projectScreenshot.src" data-aos="fade-up">
                        <img v-bind:src="projectScreenshot.src" class="project-result-photo">
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style>

</style>

<script>
export default {
    props: {
        projectScreenshots: {
            type: Array,
            required: true
        },
    }
}
</script>