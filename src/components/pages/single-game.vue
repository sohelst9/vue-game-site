<template>
   <div class="single_page">
      <div class="game-page container my-5">
         <div class="row">
            <div class="col-md-12 mx-auto">
               <div class="card shadow border-light mb-4">
                  <div class="card-body">
                     <h4 class=" text-primary">{{ game.name }}</h4>
                     <p class="text-dark">{{ game.short_desc }}</p>
                     <div class="iframe-container">
                        <iframe :src="game.game_link" frameborder="0" allowfullscreen class="game-iframe"></iframe>
                     </div>
                  </div>
                  <div class="card-footer text-muted">
                     <span>Like: yes</span>
                     <span class="float-end">Full Screen</span>
                  </div>
               </div>

               <!-- Advertisement Section -->
               <div class="advertisement mb-4">
                  <div class="ad-placeholder">
                     <img src="https://via.placeholder.com/728x90" alt="Advertisement" class="img-fluid">
                  </div>
               </div>


               <div class="related-games mt-4">
                  <h2>Related Games</h2>
                  <div class="row">

                     <div class="col-6 col-md-3 mb-3" v-for="related_game in related_games">
                        <div class="card game-card">
                           <img :src="`${imagebaseurl}${related_game.image}`" class="card-img-top"
                              alt="Related Game Image">
                           <div class="card-body text-center">
                              <h5 class="card-title">{{ related_game.name }}</h5>
                              <!-- <router-link :to="`/game/${related_game.slug}`" class="btn play-btn">Play Now</router-link> -->
                              <router-link :to="`/game/${related_game.slug}`" class="btn play-btn">Play
                                 Now</router-link>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

               <!-- Updated Game Metadata Section -->
               <div class="game-details mt-4">
                  <h2 class="game-details-title">About the Game</h2>
                  <p class="game-description">{{ game.description }}</p>

                  <div class="game-metadata mt-4 p-4">
                     <div class="row">
                        <div class="col-md-6 mb-3">
                           <div class="metadata-item">
                              <i class="bi bi-tags"></i>
                              <strong>Categories: </strong>
                              <div class="tags">
                                 <div class="tag" v-for="category in gameCategories" :key="category">{{ category
                                    }}</div>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-6 mb-3" v-if="gameTags && gameTags.length > 0">
                           <div class="metadata-item">
                              <i class="bi bi-tag"></i>
                              <strong>Tags: </strong>
                              <div class="tags">
                                 <div class="tag" v-for="tag in gameTags" :key="tag">{{ tag }}</div>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-6 mb-3">
                           <div class="metadata-item">
                              <i class="bi bi-file-earmark-code"></i>
                              <strong>Type :</strong> HTML5
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Another Advertisement Section -->
               <div class="advertisement mt-4">
                  <div class="ad-placeholder">
                     <img src="https://via.placeholder.com/728x90" alt="Advertisement" class="img-fluid">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

</template>
<!-- <script>
import store from '@/store';

export default {
   props: ['slug'],

   data() {
      return {
         game: {},
         related_games: [],
         imagebaseurl: store.apiImageUrl
      }
   },

   mounted() {
      console.log(this.slug);
      this.getGameDetails();
   },
   methods: {
      async getGameDetails() {
         try {
            const response = await this.$axios.get(`game/${this.slug}`);
            console.log(response)
            this.game = response.data.game;
            this.related_games = response.data.related_games;
         } catch {
            console.error('Error fetching games:', error);
         }
      }
   }
}

</script> -->
<script>
import { setDefaultMeta } from '@/meta';
import store from '@/store';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';

export default {
   name: "SingleGame",
   props: ['slug'],
   setup(props) {
      const game = ref({});
      const related_games = ref([]);
      const imagebaseurl = store.apiImageUrl;
      const gameCategories = ref([]);
      const gameTags = ref([]);

      const getGameDetails = async () => {
         try {
            const response = await axios.get(`${store.ApiBaseUrl}game/${props.slug}`);
            game.value = response.data.game;
            related_games.value = response.data.related_games;
            gameTags.value = response.data.game.tags && response.data.game.tags.length > 0 && response.data.game.tags[0] !== "" ? response.data.game.tags : []; 
            gameCategories.value = response.data.game.category && response.data.game.category.length > 0 && response.data.game.category[0] !== "" ? response.data.game.category : [];
            // console.log("Tags :", response.data.game.tags);
         } catch (err) {
            console.error('error', err);
         }
      };

      // onMounted runs when the component is mounted
      onMounted(() => {
         getGameDetails();
      });

      // Watch for changes in game.value.slug to update the meta data
      watch(() => game.value.slug, (newSlug) => {
         if (newSlug) {
            setDefaultMeta({
               title: newSlug,
               description: 'Discover exciting games on NapTech Games.',
               ogTitle: 'Welcome to NapTech Games',
               ogDescription: 'Play the best online games with us!',
               ogImage: 'https://yourwebsite.com/path-to-image/homepage-og-image.webp',
               canonical: 'https://naptechgames.com/home'
            });
         }
      });

      // Watch for changes in props.slug and trigger actions accordingly
      watch(() => props.slug, (newSlug) => {
         getGameDetails();
      });


      return {
         game,
         related_games,
         imagebaseurl,
         gameCategories,
         gameTags

      }
   }
}

</script>
<style scoped>
.game-page {
   font-family: Arial, sans-serif;
}

.single_page {
   background: linear-gradient(135deg, #f0f8ff, #add8e6);
   /* Light blue gradient */
   min-height: 100vh;
   padding: 20px;
}

/* Card Styles */
.card {
   border-radius: 15px;
   background: rgba(255, 255, 255, 0.8);
   /* Glass effect */
   backdrop-filter: blur(10px);
   /* Blur effect for glass appearance */
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
   /* Soft shadow */
}

.card-img-top {
   border-top-left-radius: 15px;
   border-top-right-radius: 15px;
}

.card-title {
   font-size: 2rem;
   font-weight: bold;
   color: #003366;
   /* Navy blue color */
}

.short-description {
   font-size: 1.2rem;
   color: #6c757d;
   margin-bottom: 1.5rem;
}

.iframe-container {
   position: relative;
   overflow: hidden;
   width: 100%;
   padding-bottom: 56.25%;
   /* Default 16:9 Aspect Ratio */
}

.game-iframe {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border: none;
}

.card-footer {
   font-size: 0.9rem;
}




.related-games {
   padding: 30px;
   background-color: #f0f4f8;
   /* Light background for contrast */
   border-radius: 12px;
   /* Rounded corners */
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
   /* Soft shadow */
   margin-top: 20px;
   /* Space above the section */
}

.related-games h2 {
   text-align: center;
   margin-bottom: 20px;
   font-family: 'Arial', sans-serif;
   font-weight: bold;
   /* Bold title for emphasis */
   color: #2c3e50;
   /* Darker text color */
}

.row {
   display: flex;
   /* Use Flexbox for layout */
   flex-wrap: wrap;
   /* Allow wrapping of columns */
}

.game-card {
   flex: 1 1 auto;
   /* Allow flex items to grow and shrink */
   display: flex;
   /* Use flex for card body */
   flex-direction: column;
   /* Stack elements vertically */
   border: none;
   /* Remove default border */
   border-radius: 16px;
   /* Rounded corners */
   overflow: hidden;
   /* Ensure images fit within the card */
   transition: transform 0.3s, box-shadow 0.3s;
   /* Smooth hover effect */
   background-color: #ffffff;
   /* White background for cards */
   height: 100%;
   /* Make sure all cards take the same height */
}

.game-card:hover {
   transform: translateY(-5px);
   /* Lift effect on hover */
   box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
   /* Enhanced shadow on hover */
}

.card-img-top {
   height: 150px;
   /* Fixed height for images */
   object-fit: cover;
   /* Ensure image covers the area */
}

.card-body {
   padding: 15px;
   /* Consistent padding */
   flex-grow: 1;
   /* Allow body to fill available space */
   display: flex;
   /* Use flex for body content */
   flex-direction: column;
   /* Stack elements vertically */
   justify-content: space-between;
   /* Space out elements */
   height: 100%;
   /* Make sure body fills the card height */
}

.card-title {
   font-size: 1.2rem;
   /* Larger title for better readability */
   margin-bottom: 10px;
   /* Space below title */
   color: #34495e;
   /* Darker color for titles */
   font-weight: 500;
   /* Slightly bold titles */

}

.play-btn {
   background-color: #3498db;
   /* Modern blue color */
   color: white;
   /* White text */
   border-radius: 25px;
   /* More rounded button */
   padding: 10px 20px;
   /* Adjusted padding */
   transition: background-color 0.3s, transform 0.3s;
   /* Smooth transition */
   border: none;
   /* Remove border */
   font-weight: bold;
   /* Bold text */
}

.play-btn:hover {
   background-color: #2980b9;
   /* Darker shade on hover */
   transform: scale(1.05);
   /* Slightly enlarge on hover */
}







.game-details {
   background-color: rgba(255, 255, 255, 0.8);
   /* Glass effect */
   backdrop-filter: blur(10px);
   /* Blur effect for glass appearance */
   padding: 2rem;
   /* Add padding for better readability */
   border-radius: 10px;
   /* Rounded corners for modern look */
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   /* Soft shadow for depth */
   margin-bottom: 2rem;
   /* Add space below */
}

.game-details-title {
   font-size: 2rem;
   font-weight: 600;
   color: #003366;
   /* Navy blue color */
   margin-bottom: 1rem;
   text-align: center;
   /* Centered title */
   border-bottom: 2px solid #00bfff;
   /* Electric blue stylish underline */
   display: inline-block;
   /* Inline block for underline adjustment */
   padding-bottom: 0.5rem;
}

.game-description {
   font-size: 1.1rem;
   line-height: 1.7;
   /* Improved line height for readability */
   color: #555;
   margin-bottom: 1.5rem;
   text-align: justify;
   /* Justified text for cleaner alignment */
}

.game-description:first-child {
   font-weight: bold;
   color: #333;
}

.game-metadata {
   background-color: rgba(255, 255, 255, 0.8);
   /* Glass effect */
   backdrop-filter: blur(10px);
   /* Blur effect for glass appearance */
   padding: 1.5rem;
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tags {
   display: flex;
   flex-wrap: wrap;
   /* Allow tags to wrap to the next line */
   gap: 10px;
   /* Space between tags */
   margin-left: 10px;
   /* Left margin */
   margin-top: 5px;
   /* Top margin */
   overflow: hidden;
   /* Hide overflow */
}

.metadata-item {
   font-size: 1.1rem;
   color: #495057;
   background-color: rgba(255, 255, 255, 0.8);
   padding: 1rem;
   border-radius: 8px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   /* Stack items vertically */
}

.tags {
   display: flex;
   flex-wrap: wrap;
   /* Allow tags to wrap to the next line */
   gap: 10px;
   /* Space between tags */
   margin-left: 10px;
   /* Left margin */
   margin-top: 5px;
   /* Top margin */
}

.tag {
   background-color: rgba(34, 98, 209, 0.9);
   border: 1px solid #1e58dd;
   border-radius: 5px;
   padding: 8px 12px;
   font-size: 14px;
   color: #ffffff;
   transition: background-color 0.3s;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   margin-bottom: 5px;
   /* Space between rows if they wrap */
   white-space: nowrap;
   /* Prevent text from wrapping inside the tag */
}

.tag:hover {
   background-color: #00bfff;
   /* Electric blue on hover */
   color: #fff;
   /* White text on hover */
   cursor: pointer;
   /* Pointer on hover */
}


.metadata-item i {
   font-size: 1.5rem;
   color: #003366;
   /* Navy blue color */
   margin-right: 0.75rem;
}

.advertisement {
   background-color: rgba(173, 216, 230, 0.8);
   /* Light blue background */
   padding: 5px;
   border-radius: 5px;
   text-align: center;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.ad-placeholder {
   margin: 0 auto;
}

@media (max-width: 768px) {
   .card-title {
      font-size: 1.5rem;
   }

   .game-details {
      padding: 1rem;
   }

   .game-details-title {
      font-size: 1.5rem;
   }

   .game-description {
      font-size: 1rem;
   }

   .short-description {
      font-size: 1rem;
   }

   .advertisement img {
      max-width: 100%;
      height: auto;
   }

   .metadata-item {
      font-size: 1rem;
      padding: 0.75rem;
   }
}

/* Mobile Devices (up to 576px) */
@media (max-width: 576px) {
   .iframe-container {
      padding-bottom: 75%;
      /* More height for smaller screens */
   }
}

/* Tablets (from 577px to 768px) */
@media (min-width: 577px) and (max-width: 768px) {
   .iframe-container {
      padding-bottom: 66.66%;
      /* Slightly different aspect ratio for tablets */
   }
}

/* Laptops (from 769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
   .iframe-container {
      padding-bottom: 60%;
      /* Adjusted for laptop screens */
   }
}

/* Desktops (above 1024px) */
@media (min-width: 1025px) {
   .iframe-container {
      padding-bottom: 56.25%;
      /* Standard 16:9 Aspect Ratio for larger screens */
   }
}
</style>
