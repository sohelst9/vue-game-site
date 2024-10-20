<template>
    <!-- Game Card Section with Title -->
    <section class="py-5">
        <div class="container">
            <!-- Section Title -->
            <h2 class="section-title">Our Games</h2>

            <div class="page-number" v-if="meta && meta.current_page && meta.last_page">
                Page {{ meta.current_page }} of {{ meta.last_page }}
            </div>

            <div class="row g-4">

                <!-- Loading State -->
                <div v-if="loading" class="text-center">
                    <p>Loading games...</p>
                </div>

                <!-- Game Card 1 -->
                <div v-for="game in games" class="col-lg-3 col-md-6" :key="game.id">
                    <div class="card game-card shadow-sm">
                        <img :src="`${imagebaseurl}${game.image}`" class="card-img-top" :alt="game.name">
                        <div class="card-body text-center">
                            <h5 class="card-title">{{ game.name }}</h5>
                            <!-- <p class="card-text">{{ game.short_desc }}</p> -->
                            <router-link :to="`/game/${game.slug}`" class="btn btn-primary">Play Now</router-link>
                        </div>
                    </div>
                </div>


                <!-- Pagination Buttons -->
                <div v-if="meta" class="pagination">
                    <button class="btn btn-danger" :class="{'disabled' : !links.prev}" @click="gotopage(links.prev)" :disabled="!links.prev">
                        Previous
                    </button>

                    <button class="btn btn-primary">
                       {{ meta.current_page }}
                    </button>

                    <button class="btn btn-danger" :class="{'disabled' : !links.next}" @click="gotopage(links.next)" :disabled="!links.next">
                        Next
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>

<!-- <script>
import store from '@/store';


export default {
    name: 'Game',
    data() {
        return {
            games: [],
            loading: true,
            imagebaseurl:store.apiImageUrl
        }
    },
    created() {
        this.fetchgames();
    },
    methods: {
        async fetchgames() {
            try {
                const response = await this.$axios.get('game');
                console.log(response);
                this.games = response.data.data;
            } catch {
                console.error('Error fetching games:', error);
            } finally {
                this.loading = false;
            }
        }
    },
}
</script> -->

<script>
import { setDefaultMeta } from '@/meta';
import store from '@/store';
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
    name: "Game",
    setup() {
        const games = ref([]);
        const loading = ref(true);
        const imagebaseurl = store.apiImageUrl;
        const meta = ref(null);
        const links = ref(null);

        const fetchgames = async (url = `${store.ApiBaseUrl}game`) => {
            try {
                const response = await axios.get(url);
                games.value = response.data.data;
                meta.value = response.data.meta;
                links.value = response.data.links;
                console.log(response.data.meta);

            } catch (err) {
                console.error('error', err);
            } finally {
                loading.value = false;
            }
        }

        const gotopage = async (url) => {
            if(url){
                // console.log(url)
                
                loading.value = true;
               await fetchgames(url);
               window.scrollTo(0, 0);
            }
        }

        onMounted(() => {
            fetchgames();
            setDefaultMeta({
                title: 'Game | Welcome to NapTech Games',
                description: 'Discover exciting games on NapTech Games.',
                ogTitle: 'Welcome to NapTech Games',
                ogDescription: 'Play the best online games with us!',
                ogImage: 'https://yourwebsite.com/path-to-image/homepage-og-image.webp',
                canonical: 'https://naptechgames.com/home'
            });
        });
        return {
            games,
            loading,
            imagebaseurl,
            meta,
            links,
            gotopage
        }
    }
}
</script>


<style scoped>
.btn-primary {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

.game-card {
    background-color: #b8d1e9;
    border: none;
    height: 100%;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.game-card h5 {
    font-size: 1.25rem;
    font-weight: bold;
}

.game-card p {
    font-size: 1rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
}

.page-number {
    font-size: 1.25rem;
    color: #555;
    background-color: #f8f9fa;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background-color: #3b21cc !important;
    border: none !important;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.pagination .btn {
    margin: 0 5px;
}

.pagination .btn.active {
    background-color: #3b21cc;
    color: white;
}
</style>