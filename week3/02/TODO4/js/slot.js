Vue.component('my-list', {
  template: '#my-list',
  props: [ 'title', 'items', 'items2' ]
});

new Vue({
  el: '#app',
  data: {
    persons: [ 
      { name: 'Michelle', tweet: '@MichelleObama' }, 
      { name: 'Barack', tweet: '@BarackObama' }, 
      { name: 'Donald', tweet: '@realDonaldTrump' }
    ],
    parties: [
      { name: 'Republican Party', senators: 53, },
      { name: 'Democratic Party', senators: 45 },
      { name: 'Independent', senators: 2 }
    ]
  },

  // --------------------------------------------
  // Test to emerging lists

  created: function () {

    vm = this
    this.persons = JSON.stringify(this.persons)
    this.parties = JSON.stringify(this.parties)
    //const myobjc2 = JSON.parse(myObjStr)
    console.log(this.persons);
    return partylist, personlist 
  },
  created: function mergeRecursive(obj1, obj2) {
    // following is to avoid "Error in created hook: "RangeError: Maximum call stack size exceeded""


    // ----------------------------------------------
    vm = this 
    for (var i in obj2[i]) {
      try {
        // Property in destination object1(persons) set; update its value.
        if (obj2[i]) {
          obj1 = this.mergeRecursive(obj1[i], obj2[i]);
          console.log("IF TEST");
          return obj1[i];
        } 
        else {
          obj1[i] = obj1[i] + obj2[i] ;
          console.log("ELSE TEST");
          return obj1[i];
        }
      } 
      catch (e) {
        //obj1 = obj1 + obj2;
        obj1[i] = obj2[i];
        console.log("CATCH TEST", obj1[i] );
        return obj1[i];
        
      }
      /* if (! obj1) {
        //console.log(JSON.stringify(this.persons))
        return;
      }
      mergeRecursive(--obj1); */
    }
    console.log("LAST TEST");
    mergeRecursive(this.persons.name,this.parties.name)
    console.log("LAST TEST", this.persons);
    //console.log(JSON.stringify(this.persons))

    
    
  },

    // -----------------------------------------------  
   /* mergeRecursive(this.personlist,this.partylist)
    const myobjc2 = JSON.parse(this.personlist)
    vm.persons = myobjc2
    console.log( this.partylist )
    return this.obj1*/
  
});
