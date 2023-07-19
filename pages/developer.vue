<template>
  <Banner />
   <nav class="bg-slate-800 py-5  ">
      <ul class="flex justify-center items-center mx-auto gap-x-2">
        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2  hover:text-orange-500" to="/">Home</NuxtLink>
        </li>

        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2  hover:text-orange-500" to="Dashboard">Dashboard</NuxtLink>
        </li>
      </ul>
    </nav> 
    
    <section class="min-h-screen bg-gray-100  m flex justify-center items-center ">
 <div class="w-full lg:w-6/12 px-4  mx-auto">
   <div class=" flex flex-col min-w-0 break-words border  border-gray-700  w-full mb-6 shadow-xl p-4 rounded-lg ">
     <div class="px-6">
       <div class="flex flex-wrap justify-center">
         <div class="w-full px-4 flex justify-center">
           <div class="relative ">
             <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg" alt="" class=" h-20 w-20 flex justify-center items-center mx-auto  rounded-full  ring-white ring-1  bg-white"> 
           </div>
         </div>
         <div class="w-full px-4 text-center">
          
         </div>
       </div>
       <div class="text-center mt-8">
         <h3 class="text-2xl font-semibold leading-normal  text-orange-600 mb-2">
           Evalyne Nthenya Mulandi.
         </h3>
         <div class="text-sm leading-normal mt-0 mb-2  font-bold uppercase">
           <i class="fas fa-map-marker-alt mr-2 text-lg-400"></i>
           Nakuru , Kenya
         </div>
         <div class="mb-2  py-2 border-t border-gray-400 text-center    mt-10">
           <i class="fas fa-briefcase mr-2 text-lg font-mono"></i>
           Software engineer,Graphic designer
         </div>
         <div class="mb-2">
           <i class="fas fa-university mr-2 text-lg"></i>
           Contact developer: +254757733263
         </div>
       </div>
       <div class="mt-10 py-4   border-t border-gray-400  text-center">
         <div class="flex flex-wrap justify-center">
           <div class="w-full lg:w-9/12 px-4">
             <p class="mb-4 text-md leading-relaxed">
                I am a technology enthusiast with experience in Graphic design(Adobe creative suite) and Full stack web development.
               
             </p>
             
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
  
 </section>
</template>