<script>
  import Api from "../Api"

  export default {
    name: "Home",
    data() {
      return {
        posts: [],
        text: ""
      }
    },
    async created() {
      try {
        this.posts = await Api.getPosts()
      }
      catch(err) {
        alert(err.message)
      }
    },
    methods: {
      async addPost() {
        try {
          if(this.text) {
            let message = await Api.addPost(this.posts[this.posts.length - 1].id + 1, this.text)

            this.getPostsAgain()

            this.text = ""

            alert(message)
          }
          else {
            return
          }
        }
        catch(err) {
          alert(err.message)
        }
      },

      async getPostsAgain() {
        try {
          this.posts = await Api.getPosts()
        }
        catch(err) {
          alert(err.message)
        }
      }
    }
  }
</script>

<template>
  <div id="home">
    <h1>Posts</h1>
    <div class="input-container">
      <textarea v-model="text" id="" cols="60" rows="10"></textarea>
      <button @click="addPost">Submit</button>
    </div>
    <hr>
    <div class="posts-container">
      <posts-app-post v-for="(post, index) in posts" 
      v-bind:index="index" 
      :key="post.id" 
      :date="post.date" 
      :text="post.text" 
      :id="post.id" 
      :getPostsAgain="getPostsAgain"></posts-app-post>
    </div>
  </div>
</template>

<style>
  #home {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  h1 {
    font-size: 30px;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
  }

  .input-container textarea {
    width: 500px;
    height: 100px;
    margin-right: 10px;
    margin-left: 115px;
    padding: 5px;
  }

  .input-container button {
    width: 100px;
    height: 50px;
    background-color: #40B280;
    border: none;
    border-radius: 10px;
  }

  .input-container button:hover {
    background-color: #126440;
    cursor: pointer;
  }

  .posts-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
  }
</style>