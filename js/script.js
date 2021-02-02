var app = new Vue({
  el: "#app",
  data: {
    user: {
      name: "Michele",
      img: "img/avatar_3.jpg"
    },
    contacts: [
      {
        name: "Lorenzo",
        img: "img/avatar_1.jpg",
        chat: true
      },
      {
        name: "Gigi",
        img: "img/avatar_2.jpg",
        chat: false
      },
      {
        name: "Francesca",
        img: "img/avatar_io.jpg",
        chat: false
      },
      {
        name: "Lebron",
        img: "img/avatar_4.jpg",
        chat: false
      }
    ]
  },
  methods: {
    
    // cambiare contatto
    changeChat(index) {
      if(this.contacts[index].chat != true) {

        const contact = this.contacts.splice(index, 1)[0];
        contact.chat = true

        this.contacts.forEach((element) => {
          if(element.chat == true) {
            element.chat = false;
          }
        });

        this.contacts.splice(index, 0, contact);
      }
    }
  }
});
