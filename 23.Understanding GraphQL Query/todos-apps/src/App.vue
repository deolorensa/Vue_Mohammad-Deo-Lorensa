<template>
<div>
  <h1>My Todo List</h1>
    <div class="todo-form">
      <form @submit.prevent="addTodo">
        <input  v-model = "newTodo" name="todo" placeholder="todo-name">
          <button type="submit">Add New Todo</button>
      </form>
    </div>
    <div class="todo-list">
      <ul>
        <li v-for="todo in todos" :key="todo.id" class="todo" >
          <div class="content">
            <h3>{{todo.text}}</h3>
          </div>
          <div class="content">
              <i class="fa fa-eraser fa-2x mr-2" @click="deleteTodo(todo.id)"></i>
              <i class="far fa-times-circle fa-2x" @click="deleteTodo(todo.id)"></i>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>
<script>
import gql from 'graphql-tag'

export default {
  name: 'App',
  data: () => ({
    newTodo: '',
    selectedTodo: null,
  }),
  apollo: {
  // Query with parameters
  todos: {
    // gql query
    query: gql`query MyQuery {
    todos {
      id
      text
      }
    }`,
    // Static parameters
  },
},
methods: {
    deleteTodo(id) {
      this.$apollo.mutate({
        mutation: gql`
          mutation deleteTodo($_eq: Int!) {
          delete_todos(where: {id: {_eq: $_eq}}) {
            returning {
              id
            }
          }
        }
        `,
        variables: { id },
      })
    },
    addTodo() {
      this.$apollo.mutate({
        mutation: gql`
          mutation addTodo( $text: String!) {
            insert_todos(objects: {text: $text}) {
              returning {
                id
                text
              }
            }
          }
        `,
        variables: {
          title: this.newTodo,
        }, 
          updateQueries: {
          todosQuery: (prev, { mutationResult }) => {
            const newTodo = mutationResult.data.insert_todos_one
            const newTodos = [newTodo, ...prev.todos]
            return {
              todos: newTodos,
            }
          },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          insert_todos_one: {
            __typename: 'todos',
            id: -1,
            title: this.newTodo,
            is_done: false,
          },
        },
     })
    },
}
}
</script>

<style>

#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  padding-top: 1em;
  padding-bottom: 1em;
}
input{
  display: block;
  margin: auto;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center
}
.todo-form{
  margin-top: 30px;
}
.todo{
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  margin-top: 10px;
  padding:10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
  display: flex;
  align-items: center;
}
h1{
  text-align: center;
}
h3{
  margin: 0px;
  padding: 0px;
  text-align: center;
}
li{
  list-style-type: none;
  width: 50%;
  margin: auto;
  padding: 15px 0;
  background-color: rgb(216, 216, 216)
}
.content{
  flex:1;
  text-align: end;
}
i{
  cursor: pointer;
  color: red;
  margin-right: 9px;
}
</style>
