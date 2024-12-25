<template>
  <div style="display: flex; width: 100%">
    <Menu />
    <!-- <router-link :to="{ name: 'menu' }">Перейти на главную</router-link> -->
    <div class="main-table">
      <div class="main-table__buttons">
        <el-input
          v-model="searchInput"
          style="
            width: 280px;
            height: 30px;
            margin-top: 2px;
            margin-right: 10px;
            font-size: small;
          "
          size="large"
          :placeholder="$t('table.serch.input')"
          :prefix-icon="Search"
        />
        <el-button type="info" circle>
          <template #icon> <img src="/filtering.png" alt="" /> </template>
        </el-button>

        <el-button type="info" circle>
          <template #icon> <img src="/sorting.png" alt="" /> </template>
        </el-button>
        <el-button type="primary" round @click="openDialogCreate">{{
          $t("table.button.create")
        }}</el-button>
      </div>

      <CreateModal
        v-if="dialogVisibleCreate"
        :openDialog="dialogVisibleCreate"
        @close-dialog="closeDialogCreate"
      />
      <div style="border-bottom: 1px"></div>
      <el-table
        border
        class="main-table__table"
        @cell-click="openEditingDialog"
        :data="searchedSessions"
        style="width: 100%; cursor: pointer"
        max-height="100%"
        stripe
      >
        <el-table-column sortable prop="id" label="" width="50px" />
        <el-table-column prop="date" :label="$t('table.headers.date')" />
        <el-table-column prop="status" :label="$t('table.headers.status')" />
        <el-table-column
          prop="moduleName"
          :label="$t('table.headers.moduleName')"
        />
        <el-table-column
          prop="sessionType"
          :label="$t('table.headers.sessionType')"
        />
        <el-table-column prop="room" :label="$t('table.headers.room')" />
        <el-table-column prop="group" :label="$t('table.headers.status')" />
      </el-table>
      <EditModal
        v-if="dialogVisibleEdit"
        :openDialog="dialogVisibleEdit"
        @close-dialog="closeEditingDialog"
      />

      <div v-if="!isSearched" class="main-table">
        <el-pagination
          :page-count="pageAmount"
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CreateModal from "./CreateModal.vue";
import EditModal from "./EditModal.vue";
import Menu from "./Menu.vue";
import { useListData } from "../stores/ListData";
import { Search } from "@element-plus/icons-vue";

const searchInput = ref("");

const searchedSessions = computed(() => {
  if (!searchInput.value) {
    return tableData.value;
  }

  return store.content
    .filter((session) => {
      return session.moduleName
        .toLowerCase()
        .includes(searchInput.value.toLowerCase());
    })
    .slice(0, 10);
});

const isSearched = computed(() => {
  return !!searchInput.value;
});

const store = useListData();

const dialogVisibleCreate = ref(false);

const dialogVisibleEdit = ref(false);

const serchInput = ref("");

const closeEditingDialog = () => {
  dialogVisibleEdit.value = false;
};

const closeDialogCreate = () => {
  dialogVisibleCreate.value = false;
};

const pageAmount = computed(() => {
  return Math.ceil(store.content.length / 10);
});

const tableData = ref<Record<string, string>[]>([]);

const getInfo = () => {
  tableData.value = store.content.slice(0, 10);
  localStorage.setItem("tableData", JSON.stringify(store.content));
};

getInfo();

const handleCurrentChange = (current: number) => {
  tableData.value = store.content.slice((current - 1) * 10, current * 10);
};

const openDialogCreate = () => {
  dialogVisibleCreate.value = true;
};

const openEditingDialog = (proppedCol) => {
  dialogVisibleEdit.value = true;

  console.log("proppedCol", proppedCol);
  store.editingTicketData.id = proppedCol.id;
  store.editingTicketData.date = proppedCol.date;
  store.editingTicketData.status = proppedCol.status;
  store.editingTicketData.moduleName = proppedCol.moduleName;
  store.editingTicketData.sessionType = proppedCol.sessionType;
  store.editingTicketData.room = proppedCol.room;
  store.editingTicketData.group = proppedCol.group;
};
</script>

<style scoped lang="scss">
img {
  width: 20px;
  margin-right: 0px;
}

.el-table {
  padding: 0px;
  font-size: 12px;
}
.example-input {
  display: flex;
  padding: 15px;
  .input-serch {
    padding-right: 15px;
  }
}

.el-table {
  --el-table-header-text-color: grey;
}
.main-table {
  width: 80%;
  padding-left: 40px;
}

.main-table__buttons {
  display: flex;
  justify-content: end;
  margin: 0 0px 5px auto;
}
</style>
