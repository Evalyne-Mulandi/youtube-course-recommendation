<template>
    <Banner />
    <nav class="bg-slate-800 py-5 shadow    ">
      <ul class="flex justify-center items-center mx-auto gap-x-2">
        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="/">Home</NuxtLink>
        </li>

        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="Dashboard">Dashboard</NuxtLink>
        </li>
      </ul>
    </nav>
  <div class="  p-20 bg-slate-100">
    <div
      class="container mx-auto   px-4 py-3 bg-slate-200"
    >
      <div class="flex justify-end">
        <!-- <Profile :showProfile="showProfile" :user="user" /> -->
      </div>
      <div class="flex justify-around items-center flex-row">
        <h1 class="text-3xl font-bold mb-4 text-black">Easily Manage Courses</h1>
        <Loading v-if="store.loading" class="" />
        <!-- create bookmark button -->
        <div>
          <!-- create bookmark button -->
          <div class="flex justify-center"> <!-- v-if="user" -->
            <button
              @click="
                showModal = true;
                isCreate = true;
                isEdit = false;
              "
              class="bg-yellow-600 text-white md:text-xl text-xs px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
            >
              Add Course
              <Icon name="ic:round-bookmark-add" class="sm:h-10 h-7 w-7 sm:w-10" />
            </button>
          </div>

          <Modal v-if="showModal" @close="showModal = false" isCreate="isCreate" /> 
          <!-- loader -->

          <!-- end -->
          <EditModal
            v-if="showEditModal"
            @close="showEditModal = false"
            :singleEdityoutube="singleEdityoutube"
            isEdit="isEdit"
          />
          <LoadVideo
            v-if="showLoadModal"
            @close="showLoadModal = false"
            :youtube="youtube"
            :showDeleteModal="showDeleteModal"
            :singleEditvideo="singleEditvideo"
            :showEditModal="showEditModal"
            :loading="loading"
          /> 

          <Delete
            v-if="showDeleteModal"
            @close="showDeleteModal = false"
            :deleteId="deleteId"
          />
        </div>
      </div>
      <!-- refresh icon  -->
      <div class="flex justify-end">
        <button
          class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
          @click="refresh"
        >
          <Icon name="ic:round-refresh" class="h-5 w-5" />
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="video in limitedvideos"
          :key="video.video_id"
          class="bg-white rounded-lg shadow-md relative hover:ring-2 hover:ring-yellow-600 hover:shadow-lg hover:shadow-black"
        >
          <!-- edit button -->
          <button
            class="absolute top-0 left-0 p-2 text-gray-500 hover:text-gray-800"
            title="Edit Bookmark"
            @click="Editing(video.video_id)"
          >
            <Icon name="ic:round-edit" class="h-5 w-5" />
          </button>
          <div class="p-4 flex items-center">
            <div
              class="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4"
            >
              <Icon name="ic:round-bookmark" class="h-7 w-7 text-gray-600" />
            </div>
            <div class="flex-grow">
              <a :href="video.video_id" class="text-blue-500 hover:underline">{{
                video.video_name
              }}</a>
              <p class="text-sm text-gray-600">
                <a :href="video.video_id" class="hover:underline hover:text-blue-700">
                  {{ video.channel_name.slice(0, 12) + ".." }}</a
                >
              </p>
            </div>
            <!-- delete button -->
            <button
              @click="
                Delete(video.video_id);
                showDeleteModal = true;
              "
              class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
            >
              delete
              <Icon name="ic:sharp-delete-sweep" class="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      <!-- show no bookmark when no user logged -->
   <!--    <div v-if="videos.length === 0" class="text-center py-4 px-5">
        <h1 class="text-3xl font-bold mb-4 text-white italic">{{ store.Warn }}</h1>
        <div class="flex justify-center" v-show="!user">
          <Nuxt-Link
            to="/Login"
            class="bg-yellow-600 text-white md:text-xl text-xs px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
          >
            Login to continue
            <Icon name="ic:baseline-login" class="sm:h-10 h-7 w-7 sm:w-10" />
          </Nuxt-Link>
        </div>
      </div> -->

    <!--   <div class="flex justify-center mx-auto items-center mt-3">
        <button
          @click="load"
          class="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer ring-1 ring-white my-2"
        >
          Load more
          <Icon name="ic:round-refresh" class="h-8 rounded-full w-8" />
        </button>
      </div> -->
      <div class="mt-8">
        <!-- <Activity :user="user" /> -->
       <!--   <Activity/>  -->
      </div>
    </div>
  </div>

  
</template>

<script>
 import Activity from "~/components/Activity"
import { useCreateyoutubeStore } from "~/composables/useCreateyoutube";
 
export default {
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      showProfile: false,
      loading: false,
       
    };
     
  },
  components:{Activity},
  methods: {},
  setup() {
    const user = useSupabaseUser();
    const store = useCreateyoutubeStore();
    const youtube = computed(() => store.videos);
    const limitedvideos = computed(() => store.limitedvideos);
    let isEdit = ref(false);
    let isCreate = ref(false);
    let showLoadModal = ref(false);
    let deleteId = ref(null);
    let singleEditvideo = ref({});
    let showEditModal = ref(false);

    onMounted(() => {
      store.getyoutube();
    });
    async function refresh() {
      store.$state.loading = true;
      await store.getyoutube();
      await store.getSixyoutube();
      setTimeout(() => {
        store.$state.loading = false;
      }, 5000);
    }
    async function Editing(id) {
      showEditModal.value = true;
      /*  await store.getBookmarkById(id); */
      singleEditBookmark.value = id;
    }
    async function load() {
      showLoadModal.value = true;
      store.$state.loading = true;
      await store.getyoutube();
      setTimeout(() => {
        store.$state.loading = false;
      }, 5000);
    }
    async function Delete(id) {
      deleteId.value = id;
    }

    return {
      user,
      refresh,
      Delete,
      deleteId,
      showLoadModal,
      store,
      youtube,
      limitedvideos,
      Editing,
      load,
      isEdit,
      isCreate,
      singleEditvideo,
      showEditModal,

    };
  },
};
</script>

<style>
/* No custom styles needed */
</style>