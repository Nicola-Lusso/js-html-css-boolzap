var app = new Vue({
  el: "#app",
  data: {
    contatore: 0,
    newText:'',
    user: {
      name: "Michele",
      img: "img/avatar_3.jpg"
    },
    contacts: [
      {
        name: "Lorenzo",
        img: "img/avatar_1.jpg",
        chat: true,
        messages: [
            {
              date: '03/02/2020 11:09:11',
              text: 'Hai preparato la colazione?',
              status: 'sent'
           },
           {
              date: '03/02/2020 11:10:13',
              text: 'Ho tanta fame',
              status: 'sent'
           },
           {
              date: '03/02/2020 11:13:22',
              text: 'Tutto fatto!',
              status: 'received'
           },
           {
              date: '03/02/2020 11:20:02',
              text: 'Perfetto! Sto arrivando',
              status: 'sent'
           },
        ],
      },
      {
        name: "Gigi",
        img: "img/avatar_2.jpg",
        chat: false,
        messages: [
            {
              date: '03/02/2020 12:30:11',
              text: 'Ciao!',
              status: 'sent'
           },
           {
              date: '03/02/2020 12:30:13',
              text: 'Come va?',
              status: 'sent'
           },
           {
              date: '03/02/2020 12:40:22',
              text: 'Tutto bene, tu?',
              status: 'received'
           }
        ],
      },
      {
        name: "Francesca",
        img: "img/avatar_io.jpg",
        chat: false,
        messages: [
            {
            date: '03/02/2020 22:40:22',
            text: 'Buonanotte!',
            status: 'received'
            },
            {
              date: '03/02/2020 22:50:11',
              text: 'Buonanotte!',
              status: 'sent'
           }
        ],
      },
      {
        name: "Lebron",
        img: "img/avatar_4.jpg",
        chat: false,
        messages: [
            {
              date: '03/02/2020 14:28:11',
              text: 'Stasera andiamo in palestra?',
              status: 'received'
           },
           {
              date: '03/02/2020 14:30:13',
              text: 'A che ora?',
              status: 'sent'
           },
           {
              date: '03/02/2020 14:45:22',
              text: 'Alle 19.30, va bene?',
              status: 'received'
           },
           {
              date: '03/02/2020 14:55:44',
              text: 'Perfetto, a stasera!',
              status: 'sent'
           },
           {
              date: '03/02/2020 15:00:13',
              text: 'A dopo!',
              status: 'received'
           }

        ],
      }
    ],


  },
  methods: {

    // cambiare contatto
    changeChat(index) {
      this.contatore = index;

    },

    newMessage(){
      let nuovoMessaggio={
        date: '04/02/2020 10:50:31',
        text: this.newText,
        status: 'sent'
      }

      this.contacts[this.contatore].messages.push(nuovoMessaggio);
      this.newText='';
    }

  }
});
