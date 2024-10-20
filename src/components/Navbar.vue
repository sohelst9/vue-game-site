<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <router-link class="navbar-brand" to="/">Best Game</router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/game">Game</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>
        <div class="search-container">
            <input :value="searchQuery" type="text" placeholder=" Game Find..." class="form-control"
                @input="updateSearch($event.target.value)" />
        </div>
    </nav>
</template>

<script>
import { defineComponent } from 'vue'



export default defineComponent({
    name: "Navbar",
    props: {
        searchQuery: {
            type: String,
            default: '',
        },
    },
    emits: ['update:searchQuery'],
    methods: {
        updateSearch(value) {
            this.$emit('update:searchQuery', value);
        },
    },
});
</script>

<style scoped>
.navbar {
    padding: 10px 20px;
    /* Adjusting padding to eliminate excess space */
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-link {
    margin: 0 15px;
    font-size: 1.2rem;
}

.dropdown-menu {
    background-color: #343a40;
    /* Bootstrap's bg-dark color */
}

.dropdown-item {
    color: #ffffff;
    /* White text color */
}

.dropdown-item:hover {
    background-color: #495057;
    /* Darker background on hover */
}
</style>