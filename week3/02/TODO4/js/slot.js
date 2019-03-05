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
  created: function () {
    vm = this
    let personlist = JSON.stringify(vm.persons)
    let partylist = JSON.stringify(vm.parties)
    //const myobjc2 = JSON.parse(myObjStr)
    console.log( this.persons );
    return partylist, personlist 
  },
  created: function mergeRecursive(obj1, obj2) {
    if ( ! obj1 || obj2) {
      return;
    }
    a(--x);
    vm = this
    // ----------------------------------------------
   /* for (var p in obj2) {
      try {
      // Property in destination object set; update its value.
      if (obj2[p].index == Object) {
          obj1[p] = this.merge(obj1[p], obj2[p]);
        } else {
          obj1[p] = obj2[p];
        }
      } catch (e) {
        obj1[p] = obj2[p];
      }

    } */

    // ----------------------------------------------

    for (var i in obj2) {
      try {
        // Property in destination object set; update its value.
        if (obj2[i].constructor == Object) {
          obj1[i] = this.mergeRecursive(obj1[i], obj2[i]);
        } else {
          obj1[i] = obj2[i];
        }
      } catch (e) {
        obj1[i] = obj2[i];
      }
    }
    return obj1;
  },
  created: function () {
    mergeRecursive(this.persons,this.parties)
    console.log(JSON.stringify(this.persons))
    
  }

    // -----------------------------------------------  
   /* mergeRecursive(this.personlist,this.partylist)
    const myobjc2 = JSON.parse(this.personlist)
    vm.persons = myobjc2
    console.log( this.partylist )
    return this.obj1*/
  
});
