<template>
    <!-- register svg  and button-->
    <Banner />
  <nav>
    <div class="flex  bg-slate-900 flex-col items-end justify-end py-4">
      <!--h2 Our Courses and how are served -->
  
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <p class="mt-2 text-sm text-gray-600 px-4">
            <NuxtLink
              to="/home"
              class="   text-base font-medium text-white hover:text-orange-500"
            >
              Home
            </NuxtLink>
            <span class="   text-orange-600 font-bold text-lg"> or </span>
            <NuxtLink to="/Dashboard" class="font-medium  text-base  text-white hover:text-orange-500">
               Dashboard
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </nav>
  
    <div class="bg-gray-100 py-16 mb-9">
      <h2 class="text-lg font-bold mb-1 text-center mt-2 text-black">
        SOME COURSES ON DISPLAY
      </h2>
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        <!-- v-for loop to render videos from supabase -->
  
        <Display />
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped></style>