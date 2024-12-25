<template>
  <el-form  :model="newEditing">
    <el-dialog
      v-model="dialogVisibleCreate"
      @close="$emit('closeDialog')"
      destroy-on-close
      title=""
      width="500"
    >
      <!-- <p>Заявка №{{ newEditing.number }} (от {{ newEditing.created }})</p> -->
      <p>{{ $t("table.interface.creating") }}  {{ newEditing.date }}</p>
      <el-form-item prop="date" style="width: auto">    
          <span class="discription-edit">{{ $t("table.interface.date") }}</span>
          <el-select
            :placeholder="$t('table.placeholder.date')"
            class="dialog-content-header-item"
            v-model="newEditing.date"
          >
            <el-option
              class=""
              v-for="(date, index) in dates"
              :key="index"
              :label="date"
              :value="date"
            />
          </el-select>
      </el-form-item>
      <el-form-item prop="status" style="width: auto">    
          <span class="discription-edit">{{ $t("table.interface.status") }}</span>
          <el-select
            :placeholder="$t('table.placeholder.status')"
            class="dialog-content-header-item"
            v-model="newEditing.status"
          >
            <el-option
              class=""
              v-for="(status, index) in statuses"
              :key="index"
              :label="status"
              :value="status"
            />
          </el-select>
      </el-form-item>

      <el-form-item prop="moduleName" style="width: auto">
        <span class="discription-edit">{{ $t("table.interface.moduleName") }}</span>
        <el-select
          :placeholder="$t('table.placeholder.moduleName')"
          class="dialog-content-header-item"
          v-model="newEditing.moduleName"
        >
          <el-option
            class=""
            v-for="(moduleName, index) in moduleNames"
            :key="index"
            :label="moduleName"
            :value="moduleName"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="sessionType" style="width: auto">
        <span class="discription-edit">{{ $t("table.interface.sessionType") }}</span>
        <el-select
          :placeholder="$t('table.placeholder.sessionType')"
          class="dialog-content-header-item"
          v-model="newEditing.sessionType"
        >
          <el-option
            class=""
            v-for="(sessionType, index) in sessionTypes"
            :key="index"
            :label="sessionType"
            :value="sessionType"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="room" style="width: auto">
        <span class="discription-edit">{{ $t("table.interface.room") }}</span>
        <el-select
          :placeholder=" $t('table.placeholder.room')"
          class="dialog-content-header-item"
          v-model="newEditing.room"
        >
          <el-option
            class=""
            v-for="(room, index) in rooms"
            :key="index"
            :label="room"
            :value="room"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="group" style="width: auto">
        <span class="discription-edit">{{ $t("table.interface.group") }}</span>
        <el-select
          :placeholder="$t('table.placeholder.group')"
          class="dialog-content-header-item"
          v-model="newEditing.group"
        >
          <el-option
            class=""
            v-for="(group, index) in groups"
            :key="index"
            :label="group"
            :value="group"
          />
        </el-select>
      </el-form-item>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="createSession">{{
            $t("table.button.create")
          }}</el-button>
        </div>
      </template>
    </el-dialog>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useListData } from "../stores/ListData";

const props = defineProps({
  openDialog: {
    type: Boolean,
    default: false,
  },
});


const dialogVisibleCreate = ref(props.openDialog);

const store = useListData();

const newEditing = ref({
  date: "",
  status: "",
  moduleName: "",
  sessionType: "",
  room: "",
  group: "",
});

const dates = ["15.07.2024, 14:00 - 15:00", "16.07.2024, 12:00 - 13:00"]
const statuses = ["Запланировано", "Идет", "Завершено"]
const moduleNames = ["Базовые навыки в ультразвуковом иследовании", "Акушерство и гинекология", "Базовые навыки в ультразвуковом иследовании"]
const sessionTypes = ["Урок", "Акредитация", "Экзамен"]
const groups = ["ТП-31", "240011С", "КЛ-98"]
const rooms = ["Комната 6", "Комната 7", "Комната 2"]


const getTicketFromStore = () => {
  newEditing.value.date = store.editingTicketData.date;
  newEditing.value.status = store.editingTicketData.status;
  newEditing.value.moduleName = store.editingTicketData.moduleName;
  newEditing.value.sessionType = store.editingTicketData.sessionType;
  newEditing.value.room = store.editingTicketData.room;
  newEditing.value.group = store.editingTicketData.group;
};

getTicketFromStore();

const createSession = () => {
  store.content.push(newEditing.value);
  localStorage.setItem("tableData", JSON.stringify(store.content));
  dialogVisibleCreate.value = false;
};
</script>

<style lang="scss" scoped>
.dialog-content-header {
  display: flex;
  padding: 5px;
  justify-content: space-between;
  .dialog-content-header-item {
    border: none;
    padding: 0px 8px;
  }
}

.dialog-content-textarea {
  resize: none;
  opacity: 0.5;
  outline: none;
  padding-top: 20px;
  border: none;
  border-bottom: 2px solid #ccc;
}

.discription-edit {
  margin: auto;
  text-decoration: underline;
  text-decoration-color: red;
}
</style>