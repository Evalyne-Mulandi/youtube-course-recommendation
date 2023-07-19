<template>
  <Banner />
    <nav class="bg-slate-800 py-5 shadow   ">
      <ul class="flex justify-center items-center mx-auto gap-x-2">
        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2  hover:text-orange-500" to="/">Home</NuxtLink>
        </li>

        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2  hover:text-orange-500" to="Dashboard">Dashboard</NuxtLink>
        </li>
      </ul>
    </nav>
    <main class=" bg-gray-100 p-20 max-h-full"> 
    <div class="container mx-auto  ">
      <h1 class="text-2xl text-black font-bold mb-4">Revision Questions</h1>
  
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <!-- Question cards -->
        <div v-for="(question, index) in questions" :key="index" class="bg-white bg-gradient-to-tl from-white via-white to-[#696969] rounded-lg shadow-lg overflow-hidden transition-colors duration-500 md:h-full h-72  shadow-lg rounded-lg p-4">
          <h2 class="text-lg font-bold mb-2">{{ question.language }}</h2>
          <p>{{ question.question }}</p>
          <div class="mt-4">
            <label class="block">
              <input type="radio" v-model="selectedAnswers[index]" :value="question.options[0]" class="mr-2">
              {{ question.options[0] }}
            </label>
            <label class="block">
              <input type="radio" v-model="selectedAnswers[index]" :value="question.options[1]" class="mr-2">
              {{ question.options[1] }}
            </label>
            <label class="block">
              <input type="radio" v-model="selectedAnswers[index]" :value="question.options[2]" class="mr-2">
              {{ question.options[2] }}
            </label>
            <label class="block">
              <input type="radio" v-model="selectedAnswers[index]" :value="question.options[3]" class="mr-2">
              {{ question.options[3] }}
            </label>
          </div>
        </div>
      </div>
  
      <button class="mt-4 flex justify-center items-center bg-orange-600 hover:bg-slate-800 text-white font-bold py-1 px-4 rounded" @click="submitQuiz">Submit</button>
  
      <div v-if="showResult" class="mt-4 text-black">
        <h2 class="text-lg font-bold text-black mb-2">Quiz Result:</h2>
        <ul>
          <li class="gap-x-3" v-for="(question, index) in questions" :key="index">
            {{ question.question }} - <strong>Your answer: </strong>  {{ selectedAnswers[index] }},  <strong>Correct answer:</strong>   {{ question.correctAnswer }}
          </li>
        </ul>
      </div>
    </div>
     
     
 </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          {
            language: "Python",
            question: "What is the syntax for a function in Python?",
            options: ["def function():", "function():", "def = function():", "def function:"],
            correctAnswer: "def function():"
          },
          {
            language: "Vue.js",
            question: "What is the component lifecycle hook that is called after the instance has been mounted?",
            options: ["mounted()", "created()", "updated()", "beforeMount()"],
            correctAnswer: "mounted()"
          },
          // Add more questions for different languages
          {
            language: "JavaScript",
            question: "What is the output of the following code? console.log(1 + '1');",
            options: ["11", "2", "NaN", "undefined"],
            correctAnswer: "11"
          },
          {
            language: "React",
            question: "What is React?",
            options: [
              "A JavaScript library for building user interfaces",
              "A programming language",
              "A database management system",
              "A code editor"
            ],
            correctAnswer: "A JavaScript library for building user interfaces"
          },
          {
            language: "Data Science",
            question: "What is the process of converting data into a meaningful form called?",
            options: ["Data cleaning", "Data visualization", "Data analysis", "Data preprocessing"],
            correctAnswer: "Data preprocessing"
          },
          {
            language: "HTML",
            question: "Which tag is used to define a hyperlink in HTML?",
            options: ["<a>", "<p>", "<div>", "<span>"],
            correctAnswer: "<a>"
          },
          {
            language: "CSS",
            question: "Which property is used to change the background color of an element?",
            options: ["background-color", "color", "font-size", "border"],
            correctAnswer: "background-color"
          },
          {
            language: "Java",
            question: "What is the keyword used to create a new instance of a class in Java?",
            options: ["new", "class", "instance", "this"],
            correctAnswer: "new"
          },
          {
            language: "C++",
            question: "What is the file extension for C++ source code files?",
            options: [".cpp", ".java", ".py", ".html"],
            correctAnswer: ".cpp"
          },
          {
            language: "PHP",
            question: "Which of the following is used to output data in PHP?",
            options: ["echo", "print", "printf", "console.log"],
            correctAnswer: "echo"
          }
        ],
        selectedAnswers: [],
        showResult: false
      };
    },
    methods: {
      submitQuiz() {
        if (this.selectedAnswers.length !== this.questions.length) {
        // Display a pop-up message or alert
        alert('Please attempt all the questions before submitting.');
        return;
      }
        this.showResult = true;
      }
    }
  };
  </script>
  
  <style>
  /* Add Tailwind CSS classes or custom styles here */
   

  </style>
  