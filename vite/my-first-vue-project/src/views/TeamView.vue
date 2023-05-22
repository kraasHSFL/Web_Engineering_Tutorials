<script setup>
// import team from "@/team.json";
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from "../stores/TeamStore";
import Modal from "@/components/Modal.vue"
import { ref } from "vue";

let team = useTeamStore();

team.fill();

console.log("übrige Spots: " + team.spotsRemaining)

let showModal = ref(false)
</script>

<template>
  <TeamHeader :team="team" @add="showModal = true"/>

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers :team="team" />
  </div>

  <TeamFooter :team="team" />

  <Modal :show="showModal" @close="showModal = false">
   <template #default>
      <p>Füge ein neues Mitgied zu deinem Team hinzu!</p>
      <form>
         <div>
            <input type="email" placeholder="E-Mail-Adresse...">
         </div>
         <button>Hinzufügen</button>
      </form>
   </template>
  </Modal>
  
</template>