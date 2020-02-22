<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
</script>

<User let:user let:auth>
  <div slot="signed-out">
    <p>no user?</p>
  </div>

  <h3>{user.email}</h3>
  <Collection path={'elections'} let:data={elections}>
    {#each elections as election}
      <p>{election.name}</p>
    {/each}
  </Collection>
</User>
