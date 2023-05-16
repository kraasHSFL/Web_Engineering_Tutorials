import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
   components: { AssignmentList, AssignmentCreate },
   template: `
   <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="In Bearbeitung"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Erledigt"></assignment-list>

      <assignment-create @add="add"></assignment-create>
   </section>
   
   `,

   data() {
      return {
         assignments: [
            { name: 'Projekt abschließen', complete: false, id: 1 },
            { name: 'Lese Kapitel 4', complete: false, id: 2 },
            { name: 'Hausaufgaben einreichen', complete: false, id: 3 },
         ],
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
      add(name) {
         this.assignments.push({
            name: name,
            complete: false,
            id: this.assignments.lenght + 1
         });
      }
   }
}