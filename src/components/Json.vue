<template>
 <router-link :to="{ name: 'list' }">Перейти в список</router-link>
  <el-form-item>
    <el-table :data="tableData" height="350" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="title" label="title" width="180" />
      <el-table-column prop="body" label="body" />
      <el-table-column   label="Delete" >
        <template #default="scope">
        <button @click="delItem(scope.row.id)">delete </button>
        
        </template>
      </el-table-column>
    </el-table>
  </el-form-item>

  <el-form-item style="display: flex;">
    <el-input v-model="input.id" style="width: 240px" placeholder="input.id" />
    <el-input v-model="input.title" style="width: 240px" placeholder="input.title" />
    <el-input v-model="input.body" style="width: 240px" placeholder="input.body" />
    <button @click="jsonPatch">PATCH</button>
    <button @click="post">POST</button>
  </el-form-item>

 

</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'
import apiJson from "../apiJson"

const tableData = ref([])

const input = ref({
    userId: 1,
    id: "",
    title: "",
    body: "",
})

apiJson.tickets.jsonGet().then((data) => {
  tableData.value = data.data
  console.log("logo", tableData.value);
});

// const delItem = (id) => {
//   apiJson.tickets.jsonDelete(id).then((data) => {
//     tableData.value = data.data
//     console.log("data", data);
//   });
//   console.log("nice")
// }

// const delItem = async (id: any) => {
//     const data = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     console.log("data", data); 
// }

const delItem = (id: any) => {
  apiJson.tickets.jsonDelete(id).then((data) => {
    console.log("data", data);
  });
}

const jsonPatch = () => {
  apiJson.tickets.jsonPatch(input.value.userId, input.value).then((data) => {
    console.log("input", data);
  });
}

const post = () => {
  apiJson.tickets.jsonPost(input.value).then((data) => {
    console.log("input", data);
  });
}



</script>

<style  lang="scss">

</style>
