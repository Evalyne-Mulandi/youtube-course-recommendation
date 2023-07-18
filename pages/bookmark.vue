<template>
  <Banner />
    <nav class="bg-black py-5 shadow    mb-4">
      <ul class="flex justify-center items-center mx-auto gap-x-2">
        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="/">Home</NuxtLink>
        </li>

        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="Dashboard">Dashboard</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class=" max-h-full bg-white">
   
        <i class="  flex justify-center items-center text-2xl text-black font-bold text-left py-16  ">Don't waste much time trying to recall where you read lastly,Create bookmark now!!</i>

        <div class="  ml-96  items-center justify-center bg-gradient-to-tl from-black via-[#01397A] to-black p-8 rounded-lg shadow-lg border mx-auto max-w-xl ">  
      <div class=" ml-36">
        <h1 class=" text-white ml-14">Course title</h1>
        <input type="text" class="border  border-gray-500 px-3 py-2" v-model="title">
      </div>
      
      <div class="ml-36">
        <h1 class=" ml-11 text-white">Course description</h1>
        <textarea class="border   border-gray-500 px-3 py-2 w-52 h-20" name="" id="" cols="10" rows="10" v-model="description"></textarea>
      </div>
      <div>
        <button class="bg-gray-600  m-3 ml-52 text-white py-1 px-4   hover:bg-gray-500" @click="saveData(haveID)">Save</button>
      </div>
     

        </div>
        <div class=" overflow -x- auto relative sm:rounded-lg   p-10"></div>
<table class=" w-full  text-sm text-left    text-gray-500 dark:text-gray-400">
    <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
        <tr>
            <th scope="col" class="py-3 px-6 text-lg">Course title</th>
            <th scope="col" class="py-3 px-6 text-lg  ">Course description</th>
            
            <th scope="col" class="py-3 px-6   text-lg ">Action</th>
        </tr>
    </thead>
 <tbody>
    <tr class=" bg-white border-b  dark:bg-gray-800 dark:border-gray-800" v-for="course in courses" :key="course.id">
     
    <th class="py-4 px-6">{{course.title}}</th>
    <td class="py-4 px-6 "> {{course.description}}</td>

    <td  class="py-4 px-6 mx-auto max-w-2xl">
        <div class="inline-flex gap-1">
            <button class="bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-l "  @click="getData(course.id)" >Edit</button>
            <button class="bg-red-500  hover:bg-red-400 text-white font-bold py-2 px-4 rounded-l"  @click="deleteData(course.id)">Delete</button>
        </div>
    </td>
</tr>
    
 </tbody>
</table>
    </div>
 
</template>
  
   
 
 <script>
 export default {
 data(){
    return{
        title:'',
        description:'',
        
        haveID:null,

        courses:[
            {
                id:1,
                title:"Python",
                description:"its is good",
                 

            },
            
        ]
    }
 },
methods:{
    deleteData(id){
        //index is index of id we want to delete
       let index =this.courses.findIndex((course) => course.id==id)
        //onsole.log(index)
        //remove data by index and remove i item
        this.courses.splice(index, 1)
      console.log(index);
    },
    getData(id){
       this.haveID=id
       var dataObj = this.courses.filter((course) =>(course.id==id))
       //assign to input
       this.title=dataObj[0].title
       this.description=dataObj[0].description
       

        },
    saveData(haveID){
        //update data
        if(haveID){
            var dataObj = this.courses.filter((course) =>(course.id==haveID))
            dataObj[0].title= this.title
            dataObj[0].description= this.description
             
        }else{ 
            //add data
        const id = this.courses.length +1
        const data = {
            id:id,
            title:this.title,
            description:this.description,
             
            }

            this.courses.push(data);
    
        }
        this.clearInputs(); 
        
    },
    clearInputs() {
      this.name = '';
      this.description = '';
      this.editingIndex = -1;
    }, 
        
        }

    }
 
 </script>
 

<style>

</style>