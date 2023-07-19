<template>
    <nav class="bg-black py-5 shadow fixed inset-x-0 top-0 mb-4">
      <ul class="flex justify-center items-center mx-auto gap-x-2">
        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2  hover:text-orange-500" to="/home">Home</NuxtLink>
        </li>

        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2  hover:text-orange-500" to="Dashboard">Dashboard</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="max-w-6xl md:mx-auto mx-3 my-8 p-10">
    <h1 class="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>
    <p class="mb-4">
      Welcome to our courses platform! By using our services, you agree to the
      following terms and conditions:
    </p>
    <ol class="list-decimal list-inside mb-4">
      <li class="mb-2">
        You must be at least 13 years old to create an account and use our services.
      </li>
      <li class="mb-2">
        You are responsible for keeping your account information, including your password,
        secure and confidential.
      </li>
      <li class="mb-2">
        You may not use our services to engage in any illegal activities or to violate the
        rights of others.
      </li>
      <li class="mb-2">We may use cookies to improve your experience on our platform.</li>
      <li class="mb-2">
        We may update these terms and conditions from time to time. By continuing to use
        our services, you agree to any changes.
      </li>
    </ol>
    <p>
      By using our platform, you acknowledge that you have read and agree to these terms
      and conditions. If you do not agree to these terms, you may not use our services.
    </p>
  </div>
</template>