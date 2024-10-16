import { reactive } from "vue";


const store = reactive({
  apiImageUrl: "http://127.0.0.1:8000/",
  ApiBaseUrl: 'http://127.0.0.1:8000/api/', 
});
export default store;
