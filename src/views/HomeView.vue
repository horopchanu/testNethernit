<template>
    <main>
        <div class="input-group mb-3">
            <input type="search" class="form-control" v-model="search" placeholder="search"
                   aria-label="Recipient's username" aria-describedby="button-addon2">
        </div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, idx) in myVal" :key="item.name" @click="showModal(item)">
                <th scope="row">{{ idx + 1 }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.type }}</td>
            </tr>

            </tbody>
        </table>
        <nav class="mb-4">
            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    first-text="First"
                    prev-text="Prev"
                    next-text="Next"
                    last-text="Last"
                    @click="getPackages()"
            ></b-pagination>
        </nav>
        <modal-window :item="pack"/>
        <footer-component/>
    </main>
</template>
<script setup>
import {useIndex} from "../stores";
import FooterComponent from "../components/footerComponent.vue";
import {computed, ref} from "vue";
import axios from "axios";
import ModalWindow from "../components/modalWindow.vue";

const store = useIndex()
const array = ref([])
const rows = ref(100)
const perPage = ref(10)
const currentPage = ref(1)
const search = ref('')
const pack = ref('')
const myVal = computed({
    get() {
        return array.value.filter(item => item.name.indexOf(search.value) !== -1)
    },
})
const showModal = (item)=>{
    pack.value =  item
    store.showModal = !store.showModal
}
const getPackages = async () => {
    const data = await axios.get(`https://data.jsdelivr.com/v1/stats/packages?period=week&limit=10&page=${currentPage.value}`)
    array.value = data.data
    console.log(array.value)
}
getPackages()
</script>