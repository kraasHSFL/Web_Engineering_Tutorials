import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
   components: { AssignmentList, AssignmentCreate },
   template: `
   <section class="flex gap-8">
      <assignment-list :assignments="filters.inProgress" title="In Bearbeitung">
         <assignment-create @add="add"></assignment-create>
      </assignment-list>
      <div v-show="showCompleted">
         <assignment-list 
            :assignments="filters.completed" 
            title="Erledigt" 
            can-toggle
            @toggle="showCompleted = !showCompleted"
         ></assignment-list>  
      </div>
      
   </section>
   
   `,

   data() {
      return {
         assignments: [],
         showCompleted: true
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