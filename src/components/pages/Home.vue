<template>
    <!-- Hero Section -->
    <div class="hero-section">
        <div class="hero-overlay"></div>
        <div class="hero-content container">
            <h1>Welcome to Our Website</h1>
            <p>Your journey to success starts here.</p>
            <a href="#" class="btn btn-primary">Get Started</a>
        </div>
    </div>

    <!-- Game Card Section with Title -->
    <section class="py-5">
        <div class="container">
            <!-- Section Title -->
            <h2 class="section-title">Our Top Games</h2>

            <div class="row g-4">
                <!-- Loading State -->
                <div v-if="loading" class="text-center">
                    <p>Loading games...</p>
                </div>
                <!-- Game Card 1 -->
                <div v-for="game in games" class="col-lg-4 col-md-6" :key="game.id">
                    <div class="card game-card shadow-sm">
                        <img :src="`${imagebaseurl}${game.image}`" class="card-img-top" :alt="game.name">
                        <div class="card-body text-center">
                            <h5 class="card-title">{{ game.name }}</h5>
                            <p class="card-text">{{ game.short_desc }}</p>
                            <router-link :to="`/game/${game.slug}`" class="btn btn-primary">Play Now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<!-- <script>
import store from '@/store';

export default {
    name: "Home",
    data() {
        return {
            games: [],
            loading: true,
            imagebaseurl: store.apiImageUrl
        };
    },
    created() {
        this.fetchgames();
    },
    methods: {
        async fetchgames() {
            try {
                const response = await this.$axios.get('game', {
                    params: {
                        limit: 54,
                    },
                });
                this.games = response.data.data;
                 console.log(this.games);

            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                this.loading = false
                // console.log(this.loading);
            }

        }
    },
}
</script> -->


<!------- Use Composition API ------>
<script>
import { setDefaultMeta } from '@/meta';
import store from '@/store';
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
    name: "Home",
    setup() {
        const games = ref([]);
        const loading = ref(true);
        const imagebaseurl = store.apiImageUrl;

        const fetchgames = async () => {
            try {
                const response = await axios.get(`${store.ApiBaseUrl}game`, {
                    params: {
                        limit: 54,
                    }
                });
                games.value = response.data.data;
                console.log(response.data.data);
            } catch (err) {
                console.error('Error fetching games:', err);
            } finally {
                loading.value = false;
            }
        };

        onMounted(() => {
            // window.scrollTo(0,0);
            fetchgames();
            setDefaultMeta({
                title: 'Welcome to NapTech Games',
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
            imagebaseurl
        }
    }
}

</script>

<style scoped>
.hero-section {
    background: url('/image/banner.webp') center center/cover no-repeat;
    height: 60vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    /* Dark overlay */
}

.hero-content {
    z-index: 1;
    text-align: center;
}

.hero-content h1 {
    font-size: 4rem;
    font-weight: bold;
}

.hero-content p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

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
    /* Light gray background color */
    border: none;
    height: 100%;
    /* Make card height equal */
}

.card-body {
    display: flex;
    flex-direction: column;
    /* Stack elements vertically */
    justify-content: space-between;
    /* Space between elements */
    height: 100%;
    /* Make card body full height */
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

.btn-primary {
    background-color: #3b21cc !important;
    border: none !important;
}
</style>