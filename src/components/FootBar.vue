<template>
  <footer class="foot-bar">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column is-2">
            <h4>Navigation 1</h4>
             <p><router-link :to="{ name: 'Home' }">Home</router-link></p>
             <p><router-link :to="{ path: '/' }">Item 1</router-link></p>
             <p><router-link :to="{ path: '/#/' }">Item 2</router-link></p>
          </div>
          <div class="column is-2">
            <h4>Navigation 2</h4>
             <p><router-link :to="{ name: 'Home' }">Home</router-link></p>
             <p><router-link :to="{ path: '/' }">Item 1</router-link></p>
             <p><router-link :to="{ path: '/#/' }">Item 2</router-link></p>
          </div>
          <div class="column has-text-centered">
            <p>
              <b>Support</b> us!
              <br>
              <!-- Place this tag where you want the button to render. -->
              <a class="github-button" href="https://github.com/hkdb/vuejs-scratch" data-size="large" data-show-count="true" aria-label="Star ndro/vue-webpack-buefy on GitHub">
                Star
              </a>
              &nbsp;&nbsp;&nbsp;
              <!-- Place this tag where you want the button to render. -->
              <a class="github-button" href="https://github.com/hkdb/vuejs-scratch" data-size="large" aria-label="Fork ndro/vue-webpack-buefy on GitHub">
                Fork
              </a>
            </p>
          </div>
          <div class="column">
            <b>Contact </b>us:
            <p>
              3DF Limited<br>
              Rm 1104, Crawford House<br>
	      70 Queen's Road Central, Central<br>
	      Hong Kong<br>
	      <br>
              <b-icon pack="fa" icon="envelope"></b-icon> <span>osi@3df.io</span><br>
              <b-icon pack="fa" icon="facebook-square"></b-icon> <span><a href="https://facebook.com/3dfhk" target="_blank">Your Company</a></span><br>
              <b-icon pack="fa" icon="instagram"></b-icon> <span><a href="https://instagram.com/3dfhk" target="_blank">&#64;company</a></span>
            </p>
          </div>
        </div>
        <div class="columns has-text-centered">
          <div class="column">  
            <p>
              by <a href="https://osi.3df.io" target="_blank">3DF OSI</a>. This quick-start template is open sourced via the
              <a href="http://opensource.org/licenses/mit-license.php" target="_blank">MIT</a> license.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot-bar'
}
</script>

<style lang="scss" scoped>
</style>
