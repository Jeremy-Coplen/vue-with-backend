<script>
import Api from "../../../Api"

    export default {
        name: "post",
        props: ["date", "text", "id", "getPostsAgain"],
        data() {
            return {
                editing: false,
                newText: this.text
            }
        },
        methods: {
            toggleEditing(type) {
                if(type) {
                    this.newText = this.text
                }
                this.editing = !this.editing
            },

            async updatePost() {
                try {
                    let message = await Api.updatePost(this.id, this.newText)

                    this.toggleEditing(false)

                    await this.getPostsAgain()

                    alert(message)
                }
                catch(err) {
                    alert(err.message)
                }
            },

            async deletePost() {
                try {
                    let message = await Api.deletePost(this.id)

                    await this.getPostsAgain()

                    alert(message)
                }
                catch(err) {
                    alert(err.message)
                }
            }
        }
    }
</script>

<template>
    <div class="post">
        <p class="date">
            {{`${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`}}
        </p>
        <div class="editing-true" v-if="editing">
            <textarea v-model="newText" cols="40" rows="5"></textarea>
            <div>
                <img @click="toggleEditing(true)" class="img-btn" src="@/assets/cancel.png" alt="cancel">
                <img @click="updatePost" class="img-btn" src="@/assets/check.png" alt="check">
            </div>
        </div>
        <div class="editing-false" v-else>
            <p class="text">{{ text }}</p>
            <img @click="toggleEditing(false)" class="img-btn" src="@/assets/edit.png" alt="edit">
        </div>
        <img @click="deletePost" class="img-btn" src="@/assets/red-trash.png" alt="trash">
    </div>
</template>

<style>
    .post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #42c68c;
    width: 500px;
    height: 100px;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .date {
    width: 80px;
    height: 10px
  }

  .text {
    width: 320px;
    height: 90px;
  }

  .img-btn {
    height: 20px;
    width: 20px;
    border-radius: 2px;
  }

  .img-btn:hover {
    cursor: pointer;
  }

  .editing-false {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 395px;
    margin-right: 5px;
    margin-left: 20px;
  }

  .editing-true {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      width: 395px;
  }

  .editing-true img {
      margin-right: 5px;
  }

  .editing-true textarea {
      border-radius: 10px;
  }
</style>