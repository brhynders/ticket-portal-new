<script>
  import { pb, user } from "./stores";
  const logout = () => {
    pb.authStore.clear();
    user.set(false);
  };
</script>

<h3>Dashboard</h3>
<button on:click={logout}>Logout</button>
