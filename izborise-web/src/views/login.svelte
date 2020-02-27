<script>
  import { Navigate } from "svelte-router-spa";
  import { User } from "sveltefire";

  let username;
  let password;
  let isLoading = false;
  let errorMessage = null;
  $: {
    username, password, (errorMessage = null);
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let tryLogIn = async auth => {
    isLoading = true;
    try {
      await auth.signInWithEmailAndPassword(username, password);
    } catch (err) {
      console.error(err);
      if (err.code == "auth/user-not-found") {
        errorMessage =
          "Incorrect email or password, please verify and try again";
      } else {
        errorMessage = err.message;
      }
    } finally {
      isLoading = false;
    }
  };
</script>

<style>
  .margin-top {
    margin-top: 5px;
  }
</style>

<User let:auth let:user>
  You are signed in as: {user.email}
  <Navigate to="elections">link to elections</Navigate>
  <div class="field">
    <button
      class="button is-warning"
      class:is-loading={isLoading}
      on:click={auth.signOut()}>
      log out
    </button>
  </div>
  <div slot="signed-out">
    <div
      class:is-invisible={errorMessage == null}
      class="notification is-danger">
      {errorMessage}
    </div>
    <form action="" on:submit|preventDefault>
      <div class="field">
        <label for="" class="label">Email</label>
        <div class="control has-icons-left">
          <input
            type="email"
            placeholder="e.g. bobsmith@gmail.com"
            class="input"
            bind:value={username}
            required />
          <span class="icon is-small is-left">
            <i class="fa fa-envelope" />
          </span>
        </div>
      </div>
      <div class="field">
        <label for="" class="label">Password</label>
        <div class="control has-icons-left">
          <input
            type="password"
            bind:value={password}
            placeholder="*******"
            class="input"
            required />
          <span class="icon is-small is-left">
            <i class="fa fa-lock" />
          </span>
        </div>
      </div>
      <!-- <div class="field">
        <label for="" class="checkbox">
          <input type="checkbox" />
          Remember me
        </label>
      </div> -->
      <div class="columns is-fullwidth margin-top">
        <div class="column is-2">
          <button
            class="button is-success is-fullwidth"
            class:is-loading={isLoading}
            on:click={() => {
              tryLogIn(auth);
            }}>
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</User>
