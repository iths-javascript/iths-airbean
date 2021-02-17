<template>
  <div class="register-wrapper">
    <div class="register">
      <div class="logo">
        <img src="../assets/logo.svg" alt="Airbean logo" />
      </div>
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
      <div class="form">
        <label for="name">Namn</label>
        <input type="text" name="name" v-model="name"/>
        <label for="email">E-post</label>
        <input type="text" name="email" v-model="email"/>
        <div class="gdpr">
          <input type="checkbox" name="gdpr" v-model="gdpr">
          <label for="gdpr">GDPR Ok!</label>
        </div>
        <button>Brew me a cup!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      name: "",
      gdpr: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-wrapper {
  width: 90%;
  background: $airbean-pink;
  flex-grow: 1;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center
}

.register {
  @include flex-column-center();
  h1 {
    font-family: "PT Serif";
    font-weight: bold;
    line-height: 1.2em;
  }
  p {
    font-family: "Work Sans";
  }
  max-width: 30rem;
  gap: 2.5%;
  padding: 1rem;
}

.form {
  @include flex-column-center();

  margin-top: 10%;
  width: 100%;
  flex-grow: 1;
  >label {
    align-self: flex-start;
    font-size: 0.9rem;
    margin-bottom: 1%;
  }

  input[type="text"] {
    width: 100%;
    height: 2.5rem;
    background: none;
    border: $airbean-brown 1.8px solid;
    border-radius: 5px;
     margin-bottom: 2.5%
  }

  .gdpr {
    align-self: flex-start;
    display: flex;
    align-items: center;
    margin-top: 2.5%;
    label {
      margin-left: 0.5rem;
    }
  }

  button {
    background: $airbean-brown;
    color: white;
    border: none;
    border-radius: 2em;
    padding: 1rem;
    width: 80%;
    font-size: 1.8rem;
    margin-top: auto;
    font-family: 'PT Serif';
    font-weight: bold;
  }
}

.logo {
  width: 3rem;
  border-radius: 50%;
  background-color: rgba(black, 0.1);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 1.5rem;
  }
}
</style>