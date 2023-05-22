<script setup>
import Modal from '../Modal.vue';
import { ref } from 'vue';
import { useTeamStore } from '../../stores/TeamStore';

let showModal = ref(false);

let team = useTeamStore();
</script>

<template>
   <button 
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      :disabled="! team.spotsRemaining"
      @click="showModal = true"
      >Add Member ({{ team.spotsRemaining }} Spots left)
   </button>

   <Teleport to="body">
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
   </Teleport>
</template>
