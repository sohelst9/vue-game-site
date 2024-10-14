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
        <form class="form-inline my-2 my-lg-0">
            <div class="input-group">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                <div class="input-group-append">
                    <button class="btn btn-outline-light" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
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