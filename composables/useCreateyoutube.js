import { defineStore } from 'pinia'
 

export const useCreateyoutubeStore = defineStore('Create-youtube-store', {
    state: () => ({
        loading: false,
        currentUserId: null,
        Warn:'',
        videos: [],
        activity:'None',
        singlevideo: 
         {
            video_id: '',
            video_name: '',
            channel_name: '',
         }
        ,
        limitedvideos: [],

        
         

        
    }),
    getters: {
        /* getBook: (state) => (id) => {
            return state.books.find((book) => book.id === id)
        },
        getLimitedBooks: (state) => {
            return state.limitedBooks
        },
        getBookmarks: (state) => {
            return state.books
        },
        getSingleBook: (state) => {
            return state.singleBook
        }, */
        getActivity: (state) => {
            return state.activity
        }
       /*  getWarn: (state) => {
            return state.Warn
        }, */
    },
    actions: {
       //create a new bookmark in regards to current logged in user
        async create(video, options = {}) {
            const client = useSupabaseAuthClient()
            
            /*  const LoggedUser = useSupabaseUser()
            this.currentUserId = LoggedUser.value.id  */
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,

            }
            this.loading = true
            const { data, error } = await client
                .from('youtube')
                .insert([
                    {
                         
                        video_id: video.video_id,
                        video_name: video.video_name,
                        channel_name: video.channel_name,
                        
                    },
                ])
                  if (error) {
                    this.loading = false;
                     useToast().error(error.message, toastOptions); 
                    console.log('Error:', error); // Display error in console.log

                  } else {
                    console.log("data",data)
                    alert('Course created successfully');
                     useToast().success('Course created successfully', toastOptions);
                    this.$state.activity = video.title + ' created';
                    setTimeout(() => {
                      this.loading = false;
                    }, 4000); 
                    
                     this.$router.push('/AdminDashboard'); // Use this.$router.push() instead of navigateTo
                   
                  }   
           /*  if (error) {
                this.loading = false
                useToast().error(error.message, toastOptions)
            }else{
                useToast().success('course  created successfully', toastOptions)
                this.$state.activity=video.title + " created"
                setTimeout(() => {
                    this.loading = false
                }, 4000)
                location.reload()
                navigateTo('/AdminDashboard')
            }   */
        },
        // retrieve bookmarks in regard to current logged in user
        async getyoutube() {
            const toastOptions = {
              // toast options...
            };
           /*  const user = useSupabaseUser(); */
            try {
              this.loading = true;
              const client = useSupabaseAuthClient();
      
              /* console.log('Fetching data from the "youtube" table...'); */
              const { data, error } = await client
                .from('youtube')
                .select('*');
                // .eq('user', user.value.id); // Uncomment if you want to filter by user
      
              if (error) {
                this.loading = false;
                console.log('Error:', error);
                useToast().error(error.message, toastOptions);
              }
              if (data) {
                 console.log('Data received:', data);
                this.videos = data;
                this.loading = false;
              }
            } catch (error) {
              console.log('Error:', error);
              useToast().info('Have you created any course?', toastOptions);
              this.$state.Warn = 'You have no course yet';
              this.loading = false;
            }
          },
        /* fetch only six bookmarks */
        /* async getyoutube() {
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,

            }
            const user=useSupabaseUser()
           try {
            this.loading = true
            const client = useSupabaseAuthClient()
            const { data, error } = await client

                .from('youtube')
                .select('*')
                .eq('video', video.value.id)
                .limit(6)
            if (error) {
                this.loading = false
                 useToast().error(error.message, toastOptions)

            }
            if (data) {
                this.limitedvideos = data
                this.loading = false

            }
           } catch (error) {
             useToast().info("?Have you created any course", toastOptions)
            this.$state.Warn="You have no course yet"
            this.loading = false
            
           }
        }, */
        // delete a bookmark
        /* async delete(id) {
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,
            }
            this.loading = true
            const client = useSupabaseAuthClient()
           try {
            const { data, error } = await client
            .from('youtube')
            .delete()
            .eq('video_id', id)
        if (error) {
            this.loading = false
            useToast().error(error.message, toastOptions)
        }
        setTimeout(() => {
            this.loading = false
            useToast().success('video deleted', toastOptions)
            window.location.reload()
        }, 4000)

           } catch (error) {
            useToast().error("Unexpected. try again.", toastOptions)
            this.loading = false
           }
         
        }, */
        // update a bookmark
        /*  async update(id, title, url, description) {
            const toastOptions = {
                position: 'top-center',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: true,
                closeButton: 'button',
                icon: 'MyIconComponent',
                rtl: true,
            }
            this.loading = true
            const client = useSupabaseAuthClient()
            try {
                const { data, error } = await client

                .from('bookmarks')
                .update({ title: title, url: url, description: description })
                .eq('user_id', id)
            if (error) {
                this.loading = false
                useToast().error(error.message, toastOptions)
            }
           
            setTimeout(() => {
                this.loading = false
                useToast().success('Bookmark updated', toastOptions)
                window.location.reload()
            }, 4000) 

            } catch (error) {
                useToast().error("Unexpected. try again.", toastOptions)
                this.loading = false
            }
        },  */
        //get a bookmark by id
        async getyoutubeById(id) {
            const toastOptions = {
              // toast options...
            };
            this.loading = true;
            const client = useSupabaseAuthClient();
            try {
              console.log('Fetching data from the "youtube" table...');
              const { data, error } = await client
                .from('youtube')
                .select('*')
                .eq('video_id', id);
              if (error) {
                this.loading = false;
                console.log('Error:', error);
                useToast().error(error.message, toastOptions);
              }
              if (data) {
             /*    console.log('Data received:', data); */
                this.singlevideo.video_id = data[0]['video_id'];
                this.singlevideo.video_name = data[0]['video_name'];
                this.singlevideo.channel_name = data[0]['channel_name'];
      
                this.loading = false;
              }
            } catch (error) {
              console.log('Error:', error);
              useToast().error(error.message, toastOptions);
              this.loading = false;
            }
          },

      
    
                

    }
})