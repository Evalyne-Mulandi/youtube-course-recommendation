<!-- In your template -->
<template>
    <loading v-if="loading" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="video in results" :key="video.videoId">
        
        <div class="bg-gray-100 rounded-lg p-4">
          <div class="aspect-w-16 aspect-h-9 mb-2">
            <iframe
              :src="'https://www.youtube.com/embed/' + video.videoId"
              frameborder="0"
              allowfullscreen
              class="w-full h-full"
            ></iframe>
          </div>
          <h3 class="text-lg font-bold">{{ video.videoTitle }}</h3>
          <p class="text-gray-600">{{ video.channelTitle }}</p>
          <!-- <p class="text-gray-600">{{ video.views }} views</p> -->

          <button v-if="Admin" @click="removeCourseFromList(video.id)">Delete<Icon name="material-symbols:delete" class="h-5 w-5 text-red-600" /></button>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  
  export default {
    setup() {
      const results = ref([]);
      let loading = ref(false);
      const client = useSupabaseClient();
      const user=useSupabaseUser();
      const AdminEmail= "evalynemulandi@gmail.com"
      const AdminPassword= "123456"
      const Admin=ref("")
      if(user.value.email !== AdminEmail){console.log(user)}
      else{ Admin.value=user.value; console.log( "Admin" ,Admin.value)}
  
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
            //  console.log(data)

            const shuffledData = shuffleArray(data);
            results.value = shuffledData.map((item) => ({
              id:item.id,
              videoId: item.video_id,
              videoTitle: item.video_name,
              channelTitle: item.channel_name,
              // views:item.views
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
      await fetchTenCourses()
    }
    }
    catch(error){
       console.log(error)
    }
  }
  
      return {
        loading,
        results,
        removeCourseFromList,
        user,
        Admin
      };
    },
  };
  </script>
  
  <style scoped></style>