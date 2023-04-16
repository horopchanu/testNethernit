<template>

    <div style="margin: 40px 0px 0px 40px">
        <b-modal v-model="store.showModal">
            <div v-for="(item,name) in props.item" :key="name">
                {{ name }}: {{ item }}
            </div>
        </b-modal>
    </div>
</template>

<script setup>
import {useIndex} from "../stores";
import {defineProps} from 'vue'

const props = defineProps({
    item: {}
})
const store = useIndex()

</script>

