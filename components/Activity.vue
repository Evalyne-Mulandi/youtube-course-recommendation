<template>
    <div>
      <div>
        <div class="bg-white py-10">
          <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-6">Recent Activity</h2>
            <div class="flex items-center mb-6">
              <svg
                class="w-6 h-6 text-gray-400 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L11 6.414V15a1 1 0 1 1-2 0V6.414l-4.293 4.293a1 1 0 1 1-1.414-1.414l6-6z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-gray-600">
                course
                {{ singleData.video_id }}
                  
                <a href="#" class="text-blue-600 hover:underline"> </a>
              </p>
            </div>
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm1-7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0V9z"
                  clip-rule="evenodd"
                />
              </svg>
              
               
            </div>
            <!-- Admin  email-->
            <div class="flex items-center py-1">
              <Icon
                name="ic:outline-admin-panel-settings"
                class="h-6 w-6 mr-2 text-gray-600"
              />
               
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
import { ref } from "vue";
import { useCreateyoutubeStore } from "~/composables/useCreateyoutube";
export default {
  setup() {
    
    const results = ref([]);
    const store=useCreateyoutubeStore()
    let singleData=ref(store.$state.Response)



    let loading = ref(false);
    const client = useSupabaseClient();

    const fetchTenCourses = async () => {
      try {
        const { data, error } = await client
          .from("youtube")
          .select("*")
          .limit(15)
          .range(0, 15)
          .order("video_id", { ascending: true });

        if (error) {
          console.error("Error fetching results:", error);
        } else {
         /*  console.log(data) */
          const shuffledData = shuffleArray(data);
          results.value = shuffledData.map((item) => ({
            videoId: item.video_id,
            videoTitle: item.video_name,
            channelTitle: item.channel_name,
          }));
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // fetchTenCourses();
    onMounted(() => {
      loading.value = true;
      fetchTenCourses();
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    });

    return {
      loading,
      results,
      singleData,
      store
    };
  },
};
</script>
  
  <style scoped></style>