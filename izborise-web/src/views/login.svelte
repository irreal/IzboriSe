<script>
  import { Navigate } from "svelte-router-spa";
  import { User } from "sveltefire";
</script>

<div class="login">
  <h1>Login screen</h1>
  <User let:auth>
    <div>
      <p>
        Now I want to generate a
        <Navigate to="elections">link to elections</Navigate>

        <button on:click={auth.signOut()}>log out</button>
      </p>
    </div>
    <div slot="signed-out">
      please log in
      <button
        on:click={auth.signInWithEmailAndPassword('milos.s.pfc@gmail.com', 'Test.1234!!')}>
        log in
      </button>
    </div>
  </User>
</div>
