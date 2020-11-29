<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center" align="start">
      <v-col cols="6">
        <v-text-field
          label="New ToDo"
          align="center"
          v-model="newItem"
          @keyup.enter="addItem"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-icon color="success" large @click="addItem">mdi-plus</v-icon>
      </v-col>
    </v-row>
    <transition-group name="fade">
      <v-card
        class="text-center pa-3 mx-auto"
        max-width="500"
        v-for="ToDo in ToDos"
        :key="ToDo.id"
      >
        <v-row>
          <v-col cols="8">
            <v-list-item-title class="headline nb-1"
              >{{ ToDo.name }}
            </v-list-item-title>
          </v-col>
          <v-col cols="3">
            <v-btn @click="deleteToDo(ToDo.id)">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition-group>
  </div>
</template>

<script>
import { db } from "../config/db";

export default {
  data: function () {
    return {
      ToDos: [],
      newItem: "",
    };
  },
  methods: {
    async addItem() {
      if (this.newItem) {
        await db.collection("ToDos").add({ name: this.newItem });
        this.newItem = "";
      }
    },
    deleteToDo(id) {
      db.collection("ToDos").doc(id).delete();
    },
  },
  firestore: {
    ToDos: db.collection("ToDos"),
  },
};
</script>