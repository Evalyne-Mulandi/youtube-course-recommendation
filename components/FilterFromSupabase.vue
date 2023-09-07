<template>
  <!-- Tailwindcss component for youtube searches -->
  <main class="py-6 px-6 mx-auto">
    <!-- Dynamic Search -->
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-2xl font-semibold">
        Search By Keyword! Just in Time.. Instant Results
      </h1>
      <!-- just in time -->
    </div>
    <Search />
    <Loading v-if="loading" />
    <h1 class="text-2xl font-semibold mt-3">Search By Filtering</h1>

    <div class="mt-4">
      <div class="flex space-x-4">
        <button
          @click="searchCourses('python')"
          class="py-2 px-4 bg-slate-900 text-white rounded-md"
        >
          Python
        </button>
        <button
          @click="searchCourses('data science')"
          class="py-2 px-4  bg-slate-900 text-white rounded-md"
        >
          Data Science
        </button>
        <button
          @click="searchCourses('artificial intelligence')"
          class="py-2 px-4  bg-slate-900 text-white rounded-md"
        >
          Artificial Intelligence
        </button>
        <button
          @click="searchCourses('javascript')"
          class="py-2 px-4  bg-slate-900 text-white rounded-md"
        >
          JavaScript
        </button>
        <button
          @click="searchCourses('typescript')"
          class="py-2 px-4  bg-slate-900 text-white rounded-md"
        >
          TypeScript
        </button>
        <div class="  flex justify-end items-end space-x-4">
          <button 
          class="py-2 px-4  bg-slate-500 text-white rounded-md"
        ><NuxtLink to="bookmark"> 
          Create Bookmark
        </NuxtLink>
        </button>
        <button
         class="py-2 px-4 bg-slate-500 text-white rounded-md"
        ><NuxtLink to="quiz"> 
          Revision Questions
        </NuxtLink>
        </button>
         </div>
      </div>
      <div class="flex flex-col max-w-5xl mx-auto mt-4  bg-slate-900 rounded-md p-4">
        <h2 class="text-lg font-bold mb-4 text-center mt-14 text-white">
          Learn from the best
        </h2>
        <div v-if="searchResults.length" class="mt-4">
          <div class="border border-gray-500 rounded-md">
            <ul>
              <li
                v-for="result in searchResults"
                :key="result.videoId"
                class="flex items-center py-2 border-b border-gray-200 text-black bg-white"
              >
                <iframe
                  width="200"
                  height="150"
                  :src="`https://www.youtube.com/embed/${result.videoId}`"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="mr-2"
                ></iframe>

                <div>
                  <h3 class="text-lg font-semibold">{{ result.videoTitle }}</h3>
                  <p class="text-sm text-gray-500">{{ result.channelTitle }}</p>
                  <!-- <p class="text-gray-600">{{ result.views }} views</p> -->
                  <button v-if="Admin" @click="removeCourseFromList(video.id)">Delete<Icon name="material-symbols:delete" class="h-5 w-5 text-red-600" /></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- <div class="grid grid-cols-5 gap-4 bg-white">
          <div
            v-for="result in searchResults"
            :key="result.videoId"
            class="flex flex-col justify-between items-center rounded-md p-2"
          >
            <div class="flex flex-col bg-black text-white">
              <h3 class="text-lg font-bold">{{ result.videoName }}</h3>
              <p class="text-gray-600">{{ result.channelName }}</p>
            </div>
            <div class="aspect-w-16 aspect-h-9 mb-2">
              <iframe
                :src="'https://www.youtube.com/embed/' + result.videoId"
                frameborder="0"
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div> -->
    </div>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  // props: ["isSearching", "searchTerm", "searchResults"],
  setup(props) {
    const searchTerm = ref("");
    const loading = ref(false);
    const searchResults = ref([]);

    const client = useSupabaseClient();
    const user=useSupabaseUser();

    const AdminEmail= "evalynemulandi@gmail.com"
      const AdminPassword= "123456"
      const Admin=ref("")
      if(user.value.email !== AdminEmail){console.log(user)}
      else{ Admin.value=user.value; console.log( "Admin" ,Admin.value)}

    async function searchCourses(query) {
      searchTerm.value = query;

      try {
        const { data, error } = await client
          .from("youtube")
          .select("*")
          .ilike("video_name", `%${searchTerm.value}%`)
          .limit(10);

        if (error) {
          console.error("Error fetching search results:", error);
        } else {
          searchResults.value = data.map((item) => ({
            videoId: item.video_id,
            videoTitle: item.video_name,
            channelTitle: item.channel_name,
            thumbnailUrl: item.thumbnail_url,
            // views:item.views
          }));
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
    const removeCourseFromList=async(id)=>{
      console.log(id)
      
      try {
    const { data, error } = await client
      .from("youtube")
      .delete()
      .eq("id",id);
    if (error) {
      
      console.log(error);
    }
    else{
      alert("Course deleted successfully")
       
    }
    }
    catch(error){
       console.log(error)
    }
  }

    return {
      searchTerm,
      loading,
      searchResults,
      removeCourseFromList,
      Admin,
      
      // searchCourses,
      searchCourses,
      ...toRefs(props),
    };
  },
};
</script>

<style>
/* Add Tailwind CSS classes or custom styles here */
</style>