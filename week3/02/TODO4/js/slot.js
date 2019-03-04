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
      const myobjc2 = JSON.parse(myObjStr)
      return this.myObjStr
    }
  }
});