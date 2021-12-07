const app = Vue.createApp({

    data() {
        return {
            contact: {
                name: {
                    firstname: "Anton",
                    lastname: "Maynard"
                },

                email: "Dowee24@gmail.com",
                phone: "404-287-4423",
                city: "Carrollton",
                state: "GA"
            },
            introduction: "",
            education: [{
                id: 0,
                name: "University of West Georgia",
                degree: "Bachelor of Science in Computer Science",
                year: "“expected graduation in 2023"
            }],
            Work: [{
                    id: 0,
                    company: "Southwire LLC",
                    title: "I.T Professional",
                    years: "Jun 2021- Present"
                },
                {
                    id: 1,
                    company: "US ARMY RESERVE",
                    title: "Information Technology Specialist",
                    years: "Oct 2018 – Present"
                },

                {
                    id: 2,
                    company: "TANNER HEALTH SYSTEM",
                    title: "Service Desk Analyst",
                    years: "November 2019 – December 2019"
                },

                {
                    id: 3,
                    company: "KROGER CO",
                    title: "Meat and Seafood Clerk",
                    years: "Aug 2016 – Jan 2019"
                }
            ],

            skills: []
        }

    },

    computed: {
        location() {
            return this.contact.city + ", " + this.contact.state;
        },

        fullname() {
            return this.contact.name.firstname + " " + this.contact.name.lastname;
        }
    }
})