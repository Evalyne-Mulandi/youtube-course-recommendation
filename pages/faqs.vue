<template>
    <nav class="bg-black py-5 shadow fixed inset-x-0 top-0 mb-4">
      <ul class="flex justify-center items-center mx-auto gap-x-2">
        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="/">Home</NuxtLink>
        </li>

        <li class="inline-block">
          <NuxtLink class="text-white px-4 py-2" to="Dashboard">Dashboard</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="max-w-2xl md:mx-auto mx-3 my-8 p-10">
    <h1 class="text-3xl font-bold mb-4">FAQs</h1>
    <ul class="list-disc pl-4">
      <li class="mb-4 cursor-pointer list-none">
        <details>
          <summary class="font-bold">How do I add a bookmark to my account?</summary>
          <p>
            <span class="font-bold">Answer:</span> To add a bookmark to your account,
            simply click the "Add Bookmark" button and fill out the required information.
            You can also add a bookmark by using our browser extension.
          </p>
        </details>
      </li>
      <li class="mb-4 cursor-pointer list-none">
        <details>
          <summary class="font-bold">How do I organize my bookmarks?</summary>
          <p>
            To organize your bookmarks, you can create folders and subfolders. Simply
            click the "New Folder" button and give it a name. You can then drag and drop
            bookmarks into the folder.
          </p>
        </details>
      </li>
      <li class="mb-4 cursor-pointer list-none">
        <details>
          <summary class="font-bold">How can I contact customer support?</summary>
          <p>
            You can contact customer support by sending an email to support@bookmark.com
            or by filling out the contact form on our website.
          </p>
        </details>
      </li>
      <li class="mb-4 cursor-pointer list-none">
        <details>
          <summary class="font-bold">How can I delete a bookmark?</summary>
          <p>
            To delete a bookmark, go to your bookmarks list and click on the "Delete"
            button next to the bookmark you want to remove.
          </p>
        </details>
      </li>
      <li class="mb-4 cursor-pointer list-none">
        <details>
          <summary class="font-bold">How can I edit a bookmark?</summary>
          <p>
            To edit a bookmark, go to your bookmarks list and click on the "Edit" button
            next to the bookmark you want to modify. Make your changes and click "Save" to
            update the bookmark.
          </p>
        </details>
      </li>
    </ul>
  </div>
</template>
<script>
export default{}
</script>