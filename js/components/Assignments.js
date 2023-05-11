import AssignmentList from "./AssignmentList.js";

export default {
   components: { AssignmentList },
   template: `
   <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="In Bearbeitung"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Erledigt"></assignment-list>
   </section>
   
   `,

   data() {
      return {
         assignments: [
            { name: 'Projekt abschließen', complete: false, id: 1 },
            { name: 'Lese Kapitel 4', complete: false, id: 2 },
            { name: 'Hausaufgaben einreichen', complete: false, id: 3 },
         ]
      }
   },
   computed: {
      filters() {
         return {
            inProgress: this.assignments.filter(assignement => ! assignement.complete),
            completed: this.assignments.filter(assignement => assignement.complete)
         }
      }
   }
}