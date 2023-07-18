<template>
   <Banner />
  <div>
    <!-- Header -->
    <nav class="bg-slate-900 py-4 shadow  ">
      <ul class="flex justify-center items-center mx-auto gap-x-2">
        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="heros">Home</NuxtLink>
        </li>

        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="Dashboard">Dashboard</NuxtLink>
        </li>
        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="">Admin</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="bg-slate-900 py-3 ">
      <div class="container mx-auto flex justify-between items-center flex-row ">
        <Loading v-if="loading" />
        <h1 class="text-white text-md font-bold">RECOMMENDATION SYSTEM</h1>
        <!-- user profile -->
        <div class="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpq4Vfr0Jwm1KgkhHafeRbCb4WnkUHiBIfj6a5Hk&s"
            alt="User Profile"
            class="w-7 h-7 rounded-full mr-2"
          />
          <h2 class="text-white text-md font-bold">
            {{ user.email ? user.email : "Not Authenticated" }}
          </h2>
          <!-- button for signout -->
          <button
            @click="signout"
            class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 ml-4"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>

     
    <!-- Hero -->
    <div class="bg-gray-100 py-16">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        <div class="lg:w-1/2  flex-col flex gap-y-3 justify-center items-center mx-auto">
          <h2 class="text-3xl font-bold mb-4">Welcome,Happy learning📚📝</h2>
          <p class="text-gray-600 ">
            "Discover new opportunities for growth and expand your knowledge with courses that align with your goals.
            Look no further! Our system is designed to make your learning journey easier and more efficient.
            Start exploring our recommended courses today and take the first step towards achieving your learning goals!"
          </p>
          <a
            href="#"
            class="bg-slate-700 text-white py-2 px-4 rounded hover:bg-indigo-700 mt-4 flex justify-center justify-self-center items-center mx-auto"
            >Check below 👇</a
          >
        </div>
       <!--  <div class="lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Machine Learning"
            class="rounded-lg shadow-lg"
          />
        </div> -->
      </div>
    </div>
    <Youtube />
    <FilterFromSupabase /> 
  </div>
</template>

<script setup>
const auth = useSupabaseAuthClient();
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();
const success = ref("");
const errMsg = ref("");
const loading = ref(false);

definePageMeta({
  middleware: "auth",
});

/* sigout user */
const signout = async () => {
  loading.value = true;
  const { error } = await auth.auth.signOut();
  setTimeout(() => {
    loading.value = false;
  }, 3000);
  if (error) {
    loading.value = false;
    errMsg.value = error.message;
  }
  success.value = "Signed out successfully";
  setTimeout(() => {
    success.value = "";
    router.push("Login");
  }, 3000);
};
</script>
