import AssignmentList from "./AssignmentList.js";

export default {
   components: { AssignmentList },
   template: `
   <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="In Bearbeitung"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Erledigt"></assignment-list>

      <form @submit.prevent="add">
         <div class="border border-gray-600 text-black">
            <input v-model="newAssignment" placeholder="Neue Aufgabe..." class="p-2"/>
            <button type="submit" class="bg-white p-2 border-l">Add</button>
         </div>
      </form>
   </section>
   
   `,

   data() {
      return {
         assignments: [
            { name: 'Projekt abschließen', complete: false, id: 1 },
            { name: 'Lese Kapitel 4', complete: false, id: 2 },
            { name: 'Hausaufgaben einreichen', complete: false, id: 3 },
         ],

         newAssignment: ''
      }
   },
   computed: {
      filters() {
         return {
            inProgress: this.assignments.filter(assignement => ! assignement.complete),
            completed: this.assignments.filter(assignement => assignement.complete)
         }
      }
   },
   methods: {
      add() {
         this.assignments.push({
            name: this.newAssignment,
            complete: false,
            id: this.assignments.lenght + 1
         });

         this.newAssignment = ''
      }
   }
}