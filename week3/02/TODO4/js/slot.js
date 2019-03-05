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
      { namez: 'Republican Party', senators: 53, },
      { namez: 'Democratic Party', senators: 45 },
      { namez: 'Independent', senators: 2 }
    ],
    created: function () {
      let partylist = this.parties
      const myObjStr = JSON.stringify(partylist)
      //const myobjc2 = JSON.parse(myObjStr)
      return this.myObjStr
    },
    created: function mergeRecursive(obj1, obj2) {
      for (var p in obj2) {
        try {
          // Property in destination object set; update its value.
          if (obj2[p].constructor == Object) {
            obj1[p] = this.mergeRecursive(obj1[p], obj2[p]);
    
          } else {
            obj1[p] = obj2[p];
    
          }
    
        } catch (e) {
          obj1[p] = obj2[p];
    
        }
      }
      return obj1;
    },
    created: function () {

    }
  }
});