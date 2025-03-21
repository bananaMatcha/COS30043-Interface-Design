//create new vue instance
Vue.createApp({
	//**************  data  ****************
	data() {
		return {
			//passing required data in vue app
			eventObj: {eventid:'',eventname:'',category:'', durationhour:''},  
            selectedCategory: 'Business',
            selectedEventName: '', 
            username: "",
            password: "",
            confirmPassword: "",
	
			allData:[
                {eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8},
                {eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6},
                {eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10},
                {eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4},
                {eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6},
                {eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5},
                {eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7},
                {eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12},
                {eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9},
                {eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6},
                {eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8},
                {eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7},
                {eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5},
                {eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6},
                {eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8},
                {eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4},
                {eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6},
                {eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7},
                {eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9},
                {eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5}
              ]
              
		}
	},//passing variables into vue app
    
	//**************  computed   ***************
	
    //filter function
    computed: {
        filterEvent() {
            let filtered = this.allData;
            
            // If category is 'All', return all data
            if (this.eventObj.category === "All") {
                return filtered;
            }
            
            // If a specific category is selected, filter by that category
            if (this.eventObj.category) {
                filtered = filtered.filter(e => e.category === this.eventObj.category);
            }
            
            // Apply additional filters for ID, name, and duration (if provided)
            if (this.eventObj.eventid) {
                filtered = filtered.filter(e => 
                    e.eventid.toLowerCase().includes(this.eventObj.eventid.toLowerCase())
                );
            }
            
            if (this.eventObj.eventname) {
                filtered = filtered.filter(e => 
                    e.eventname.toLowerCase().includes(this.eventObj.eventname.toLowerCase())
                );
            }
            
            if (this.eventObj.durationhour) {
                filtered = filtered.filter(e => 
                    e.durationhour.toString() === this.eventObj.durationhour.toString()
                );
            }
            
            return filtered;
        },

        // New computed property to get event names by category
        eventsByCategory() {
            return this.allData
                .filter(event => event.category === this.selectedCategory)
                .map(event => event.eventname);
        },
        passwordMismatch() {
            return this.confirmPassword && this.password !== this.confirmPassword;
        }
    }
}).mount('#app');