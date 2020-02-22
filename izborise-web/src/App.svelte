<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";

  // Import the Firebase Services you want bundled and call initializeApp
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";

  const firebaseConfig = {
    apiKey: "AIzaSyCVxv1DLPUcpFg9y7RiWObziWUMKLS-mNM",
    authDomain: "fitlog-fc6be.firebaseapp.com",
    databaseURL: "https://fitlog-fc6be.firebaseio.com",
    projectId: "fitlog-fc6be",
    storageBucket: "fitlog-fc6be.appspot.com",
    messagingSenderId: "790391176187",
    appId: "1:790391176187:web:ed202443d229702212695e"
  };

  firebase.initializeApp(firebaseConfig);

  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";

  //   let signin = auth =>
  //     auth.signInWithEmailAndPassword("milos.s.pfc@gmail.com", "Test.1234!!");
  //   let signout = auth => auth.signOut();
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <FirebaseApp {firebase}>
    <Router {routes} />
    <!-- <User let:user let:auth>
      <div slot="signed-out">
        <p>no user?</p>
        <button on:click={signin(auth)}>Sign in</button>
      </div>

      <h3>{user.email}</h3>
      <Collection path={'elections'} let:data={elections}>
        {#each elections as election}
          <p>{election.name}</p>
        {/each}
      </Collection>
      <button on:click={signout(auth)}>Sign out</button>
    </User> -->
  </FirebaseApp>
</main>
