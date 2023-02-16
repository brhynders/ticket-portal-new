<script>
  import { pb, user } from "./stores";
  const logout = () => {
    pb.authStore.clear();
    user.set(false);
  };
</script>

<div
  class="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen flex flex-col"
>
  <!-- Header -->
  <!-- /Header -->
  <!-- Content Container -->
  <div
    class="container w-full mx-auto pt-10 flex-grow  px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"
  >
    <!-- UserBox -->
    <!-- /Userbox -->
    <!-- Slot Content-->
    <div class="mt-6">
      <slot />
    </div>
    <!-- /Slot Content -->
  </div>
  <!-- /Content Container -->

  <!-- Footer -->
  <!-- /Footer -->

  <h3>Dashboard</h3>
  <button
    class="bg-blue-600 text-white max-w-xs rounded shadow hover:bg-blue-700"
    on:click={logout}>Logout</button
  >
</div>
