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
         assignments: [],
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

   created() {
      fetch('http://localhost:3000/assignments')
         .then(response => response.json())
         .then(assignments => {
            this.assignments = assignments;
         });
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