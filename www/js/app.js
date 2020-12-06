// DECLARATIONS

    // API Node Back-end 
    const apiUrl = 'http://localhost:7000';

    // API Front SongKick (In progess)
    /* const songKickURL = 'https://api.songkick.com/api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}'; */

    // Search form (in progress)
    //const searchForm = document.querySelector('#searchForm');
    //const searchData = document.querySelector('[name="searchData"]');

    // Button action sidebar

    const buttonUsers = document.querySelector('#sidebar-users');
    const buttonEvents = document.querySelector('#sidebar-events');
    const buttonHome = document.querySelector('#home');
    const buttonLogin = document.querySelector('#sibebar-log-in');
    const buttonRegister = document.querySelector('#sibebar-register');
    const buttonLogout= document.querySelector('#sibebar-log-out');
    const buttonMySpace = document.querySelector('#sibebar-my-space');

        // My space User - sidebar

        const buttonEditProfil = document.querySelector('#sidebar-edit-profil');
        const buttonNewEvent = document.querySelector('#sibebar-create-event');
        const dropdownMySpace = document.querySelector('.sidebar-myspace-dropdown');

    // Content : Home

    const blockHome = document.querySelector('.block-content-home');
    const blockEvents = document.querySelector('.block-events-all');
    const blockUsers = document.querySelector('.block-users-all');
    const blockEvent = document.querySelectorAll('.block-events-all__part');
    const blockUser = document.querySelectorAll('.block-users-all__part');
    const titleHome = document.querySelectorAll('.block-content-home > h2');

    // Content : myspace

    const blockMySpace = document.querySelector('.block-my-space');
    const blockEventsSpace = document.querySelector('.block-my-space__events');
    const blockProfileSpace = document.querySelector('.block-my-space__profile');

    // User

        // Home : Block two forms users

        const formsUser = document.querySelector('#forms-user');

        // Title Forms

        const titleRegister = document.querySelector('.block-forms__title-register');
        const titleLogin = document.querySelector('.block-forms__title-login');

        // Register

        const registerFormUser = document.querySelector('#registerFormUser');
        const userFname = document.querySelector('[name="userFname"]');
        const userLname = document.querySelector('[name="userLname"]');
        const userBirthday = document.querySelector('[name="userBirthday"]');
        const userGender = document.querySelectorAll('[name="gender"]');
        const userEmail = document.querySelector('[name="userEmail"]');
        const userPhone = document.querySelector('[name="userPhone"]');
        const userPicture = document.querySelector('[name="userPicture"]');
        const userBiography = document.querySelector('[name="userBiography"]');
        const userPassword = document.querySelector('[name="userPassword"]');

        // Login

        const loginFormUser = document.querySelector('#loginFormUser');
        const userEmailLogin = document.querySelector('[name="userEmailLogin"]');
        const userPasswordLogin = document.querySelector('[name="userPasswordLogin"]');
        const errorMessage = document.querySelector('.error-message.login');

        // Update profile

        const editProfileForm = document.querySelector('#editUser-modal');
        const editFNUser = document.querySelector('[name="editFNUser"]');
        const editLNUser = document.querySelector('[name="editLNUser"]');
        const editGender = document.querySelectorAll('[name="editGender"]');
        const editUMail = document.querySelector('[name="editUMail"]');
        const editUPhone = document.querySelector('[name="editUPhone"]');
        const editUPicture = document.querySelector('[name="editUPicture"]');
        const editUBio = document.querySelector('[name="editUBio"]');
        const editUPassword = document.querySelector('[name="editUPassword"]');

            // Modal edition profile user

            const modalEditionProfile = document.querySelector('#editUser-modal');
            const modalCloseEdition = document.querySelector('.block-modal-edit-user__close');

        // Delete profile

        const buttonDeleteAccount = document.querySelector('#delete-account');


    // Events

        // Creation
        
        const createEventForm = document.querySelector('#block-modal-event__form');
        const eventName = document.querySelector('[name="eventName"]');
        const eventDate = document.querySelector('[name="eventDate"]');
        const eventPicture = document.querySelector('[name="eventPicture"]');
        const eventDescription = document.querySelector('[name="eventDescription"]');
        const eventURL = document.querySelector('[name="eventURL"]');

        // Modal Creation event

        const modalEvent = document.querySelector('#creationEvent-modal');
        const modalCloseEvent = document.querySelector('.block-modal-event__close');

        // Edition

        const editEventForm = document.querySelector('#block-modal-event-edition__form');
        const editEventName = document.querySelector('[name="editEventName"]');
        const editEventDate = document.querySelector('[name="editEventDate"]');
        const editEventPicture = document.querySelector('[name="editEventPicture"]');
        const editEventDesc = document.querySelector('[name="editEventDesc"]');
        const editEventURL = document.querySelector('[name="editEventURL"]');

/*     // Public (in progress)
        // Register
    
    const registerFormPublic = document.querySelector('#registerFormPublic');
    const publicFname = document.querySelector('[name="publicFname"]');
    const publicLname = document.querySelector('[name="publicLname"]');
    const publicBirthday = document.querySelector('[name="publicBirthday"]');
    const publicEmail = document.querySelector('[name="publicEmail"]');
    const publicPhone = document.querySelector('[name="publicPhone"]');
    const publicPassword = document.querySelector('[name="publicPassword"]');

        // Login

    const loginFormPublic = document.querySelector('#loginFormPublic');
    const publicEmailLogin = document.querySelector('[name="publicEmailLogin"]');
    const publicPasswordLogin = document.querySelector('[name="publicPasswordLogin"]'); */

// FONCTIONS

    // Initials forms 

        const appearUsersForms = () => {
            formsUser.classList.remove('hidden');
        }

        const hideUsersForms = () => {
            formsUser.classList.add('hidden');
        }

/*     const appearPublicForms = () => {
    document.querySelector('#forms-public').classList.remove('hidden');
    document.querySelector('#forms-user').classList.add('hidden');

    }  */

    // Content methods

        // Color-text

        const redColorRegister = (buttonRegister, titleRegister, titleLogin)  => {
            buttonRegister.addEventListener('click', event => {
                // Stop event propagation
                event.preventDefault();
                titleRegister.classList.add('block-forms--red');
                titleLogin.classList.remove('block-forms--red');
            });
        }

        const redColorLogin = (buttonLogin, titleLogin, titleRegister)  => {
            buttonLogin.addEventListener('click', event => {
                // Stop event propagation
                event.preventDefault();
                titleLogin.classList.add('block-forms--red');
                titleRegister.classList.remove('block-forms--red');
            });
        }

        // Images (base 64)

        const extarctImage = (input) => {
            return new Promise( (resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                return resolve({ 
                value: reader.result, 
                filename: input.files[0].name, 
                filetype: input.files[0].type 
                })
            };
            reader.readAsDataURL(input.files[0]);
            });
        };

        const resizeImage = (base64Str, maxWidth = 300, maxHeight = 300) => {
            return new Promise((resolve) => {
            let img = new Image()
            img.src = base64Str
            img.onload = () => {
                let canvas = document.createElement('canvas')
                const MAX_WIDTH = maxWidth
                const MAX_HEIGHT = maxHeight
                let width = img.width
                let height = img.height

                if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width
                    width = MAX_WIDTH
                }
                } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height
                    height = MAX_HEIGHT
                }
                }
                canvas.width = width
                canvas.height = height
                let ctx = canvas.getContext('2d')
                ctx.drawImage(img, 0, 0, width, height)
                return resolve(canvas.toDataURL())
                    }
            })
        }

    // User
        // Register

    const registerUser = (registerFormUser, userFname, userLname, userGender, userBirthday, userEmail, userPhone, userPicture, userBiography, userPassword) => {
        registerFormUser.addEventListener('submit', async event => {
            // Stop event propagation
            let gender = null;
            event.preventDefault();
            //getGenderUser(registerFormUser, gender);
            for (let i=0; i < userGender.length; i++) {
                if ( userGender[i].checked ) {
                    gender = userGender[i].value;
                    break; 
                }
            }
            // Extract basse64 data
            const postImage = await extarctImage(userPicture);
            new FETCHrequest(
                `${apiUrl}/api/auth/register/user`,
                'POST',
                {
                    first_name : userFname.value,
                    last_name : userLname.value,
                    date_of_birth : userBirthday.value,
                    gender : gender,
                    email : userEmail.value,
                    phone : userPhone.value,
                    profile_picture: await resizeImage(postImage.value),
                    biography: userBiography.value,
                    password:   userPassword.value  
                }
            )
            .sendRequest()
            .then( jsonData => console.log(jsonData))
            .catch( jsonError => console.log(jsonError));   
        })
    };

        // Login

    const loginUser = (loginFormUser, userEmailLogin, userPasswordLogin) => {
        loginFormUser.addEventListener('submit', event => {
            // Stop event propagation
            event.preventDefault();

        new FETCHrequest(
                `${apiUrl}/api/auth/login/user`,
                'POST',
                {
                    email : userEmailLogin.value,
                    password : userPasswordLogin.value
                }
                )
        .sendRequest()
        .then( jsonData => {
            localStorage.setItem('kento', jsonData.token);
            userAccount();
            console.log(jsonData);
        })
        .catch( jsonError => {
            console.log(jsonError);
            errorMessage.classList.remove('hidden');        })
        });
    };

        // User Account

    const userAccount = () => {
        new FETCHrequest(
        apiUrl + '/api/auth/me',
        'GET',
        null,
        localStorage.getItem('kento')
        )
        .sendRequest()
        .then( dataUser => {
            hideUsersForms();
            let user_id = dataUser.data.profile._id;
            allUsers();
            allEvents();
            AllEventsPage();
            AllUsersPage();
            goHome();
            buttonUsers.classList.remove('hidden');
            buttonEvents.classList.remove('hidden');
            buttonLogin.classList.add('hidden');
            buttonRegister.classList.add('hidden');
            buttonLogout.classList.remove('hidden');
            buttonMySpace.classList.remove('hidden');
            blockHome.classList.remove('hidden');
            titleHome.forEach(title => title.classList.remove('hidden'));
            blockEvents.classList.remove('hidden');
            blockEvents.classList.add('active');
            blockUsers.classList.remove('hidden');
            blockUsers.classList.add('active');
            blockMySpace.classList.add('hidden');
            displayMySpace(buttonMySpace, blockHome, blockMySpace);
            displayProfileSpace(dataUser.data.profile, blockProfileSpace);
            displayEventsSpace(dataUser.data.eventsUser, blockEventsSpace, blockMySpace);
            //activeModalEEvent(modalEditionEvent);
            activeModalProfile(buttonEditProfil, buttonDeleteAccount, modalEditionProfile, modalCloseEdition);
            activeModalEvent(buttonNewEvent, modalEvent, modalCloseEvent);
            createEvent(createEventForm, user_id, eventName, eventDate, eventPicture, eventDescription, eventURL); 
            updateProfileUser(editProfileForm, user_id, editFNUser, editLNUser, editGender, editUMail, editUPhone, editUPicture, editUBio, editUPassword);
            deteleAccount(user_id);
            return user_id;
        })
        .catch( dataError => console.log(dataError))
    };

        // Logout

    const logOut = () => {
        buttonLogout.addEventListener('click', event => {
            // Stop event propagation
            event.preventDefault();
            new FETCHrequest(
                apiUrl + '/api/auth/logout',
                'GET',
                null,
                localStorage.getItem('kento')
                )
                .sendRequest()
                .then( jsonData => {
                    appearUsersForms();
                    buttonUsers.classList.add('hidden');
                    buttonEvents.classList.add('hidden');
                    buttonLogin.classList.remove('hidden');
                    buttonRegister.classList.remove('hidden');
                    blockEvents.classList.add('hidden');
                    blockUsers.classList.add('hidden');
                    buttonLogout.classList.add('hidden');
                    buttonMySpace.classList.add('hidden');
                    blockMySpace.classList.remove('active');
                    blockMySpace.classList.add('hidden');
                    dropdownMySpace.classList.add('hidden');
                    blockHome.classList.add('hidden');
                    console.log(jsonData);
                    console.log('with clean cookies');
                })
                .catch( jsonError => console.log(jsonError))
        })
    }

    // Home

    // Display events - Home

    const allEvents = () => {
        new FETCHrequest(
                `${apiUrl}/api/users/all-events`,
                'GET'
                )
        .sendRequest()
        .then( jsonData => {
            displayEventsAll(jsonData.data);
            console.log(jsonData);
        })
        .catch( jsonError => {
            console.log(jsonError);
        }) 
    };

    const displayEventsAll = events => {
        blockEvents.innerHTML = '';

        if (events.length === 0) {
            console.log('No event');
            blockEvents.innerHTML = '';
        } else {

            for(let i=0; i < events.length; i++) {
                blockEvents.innerHTML += `
                    <div class="block-events-all__part ${events[i].author} events ${events[i]._id}">
                        <article>
                            <div><img class="block-events-all__image" src="${events[i].picture_one}" alt="${events[i].name} ${events[i].author}"></div>
                            <div class="block-events-all__name">${events[i].name}</div>
                            <div class="block-events-all__date">${events[i].date}</div>
                            <div class="block-events-all__actions">
                                <div><a class="block-events-all__action-more is-disable" href="#">See</a></div>
                                <div><a class="block-events-all__action-share is-disable" href="#">Share</a></div>
                            </div>
                        </article>
                    </div>
                `;
            }
        }
    };

    // Display events - Full page

    const AllEventsPage = () => {
        buttonEvents.addEventListener('click', event => {
            event.preventDefault;
            blockEvents.classList.remove('active');
            blockEvents.classList.add('full-page');
            blockUsers.classList.remove('active');
            blockUsers.classList.remove('full-page');
            blockUsers.classList.add('hidden');
            document.querySelector('.block-content-home__title.events').classList.remove('hidden');
            document.querySelector('.block-content-home__title.users').classList.add('hidden');
            blockHome.classList.remove('hidden');
            blockHome.classList.add('active');
            blockMySpace.classList.add('hidden');
            blockMySpace.classList.remove('active');
        })
    };

    // Display users - Home

    const allUsers = () => {
        new FETCHrequest(
                `${apiUrl}/api/users/all-users`,
                'GET'
                )
        .sendRequest()
        .then( jsonData => {
            displayUsersAll(jsonData.data);
            console.log(jsonData);
        })
        .catch( jsonError => {
            console.log(jsonError);
        }) 
    };

   const displayUsersAll = users => {
       blockUsers.innerHTML = '';

       for(let i=0; i < users.length; i++) {
        blockUsers.innerHTML += `
        <div class="block-users-all__part ${users[i]._id}">
            <a class="block-users-all__action-more is-disable" href="#">
                <article>
                    <div><img class="block-users-all__image" src="${users[i].profile_picture}" alt="Profile picture ${users[i].first_name} ${users[i].last_name}"></div>
                    <div class="block-users-all__identification">${users[i].first_name} ${users[i].last_name}</div>
                </article>
            </a>
      </div>
        `;
        }
    }; 

    // Display users - Full page

    const AllUsersPage = () => {
        buttonUsers.addEventListener('click', event => {
            event.preventDefault;
            blockUsers.classList.remove('active');
            blockUsers.classList.add('full-page');
            blockEvents.classList.remove('active');
            blockEvents.classList.remove('full-page');
            blockEvents.classList.add('hidden');
            document.querySelector('.block-content-home__title.users').classList.remove('hidden');
            document.querySelector('.block-content-home__title.events').classList.add('hidden');
            blockHome.classList.remove('hidden');
            blockHome.classList.add('active');
            blockMySpace.classList.add('hidden');
            blockMySpace.classList.remove('active');
        })
    };

    // Back to Home
 
    const goHome = () => {
        buttonHome.addEventListener('click', event => {
            // Stop event propagation
            event.preventDefault();
            document.querySelector('.block-content-home__title.events').classList.remove('hidden');
            document.querySelector('.block-content-home__title.users').classList.remove('hidden');
            blockEvents.classList.remove('full-page');
            blockEvents.classList.add('active');
            blockUsers.classList.remove('full-page');
            blockUsers.classList.add('active');
            blockHome.classList.remove('hidden');
            blockMySpace.classList.add('hidden'); 
            blockMySpace.classList.remove('active');    
        })
    };

    // User space

    const displayMySpace = (buttonMySpace, blockHome, blockMySpace) => {
        buttonMySpace.addEventListener ('click', event => {
            // Stop event propagation
            event.preventDefault();
            buttonMySpace.classList.add('active');
            blockHome.classList.add('hidden');
            blockMySpace.classList.remove('hidden'); 
            blockMySpace.classList.add('active');
            dropdownMySpace.classList.remove('hidden');
        }) 
    };

    // Profile user

    const displayProfileSpace = (data, blockProfileSpace) => {
        blockProfileSpace.innerHTML = '<h2>My profile</h2>';
                blockProfileSpace.innerHTML += `
                    <div class="block-my-space-user">
                        <article>
                            <div class="block-my-space__photo" >
                                <img alt="Profile picture ${data.first_name} ${data.last_name}" src="${data.profile_picture}" >
                            </div>
                            <div class="block-my-space__identification" >${data.first_name} ${data.last_name}</div>
                            <div class="block-my-space__gender" >Gender: ${data.gender}</div>
                            <div class="block-my-space__birth" >Birthday: ${data.date_of_birth}</div>
                            <div class="block-my-space__email" >Email: ${data.email}</div>
                            <div class="block-my-space__phone" >Phone: ${data.phone}</div>
                            <div class="block-my-space__biography" >${data.biography}</div>
                        </article>
                    </div>
                `;  
    };

     // Event's user

    const displayEventsSpace = (data, blockEventsSpace, modalEditionEvent, buttonEEdition, modalCloseEEvent) => {
        blockEventsSpace.innerHTML = '<h2>My events</h2>';
        if (data.length === 0) {
            blockEventsSpace.innerHTML = `
                <h2>No event yet</h2>
                `;
        } else {
            blockEventsSpace.innerHTML += `
            <!-- The Modal Edition Event (futur back-office) -->
            <div class="block-modal-event-edition modal" id="editionEvent-modal">
          <!-- Modal content  -->
            <div class="block-modal-event-edition__content">
              <span class="block-modal-event-edition__close">&times;</span>
              <form action="#" method="PUT"  id="block-modal-event-edition__form">
                <h2 class="block-modal-event-edition__title">Edit your event</h2>
                <label for="editEventName">Name *</label>
                <input id="editEventName" type="text" name="editEventName" required minlength="4" placeholder="Name's event">
                <div>
                  <label for="editEventDate">Date of event: *</label>
                  <input type="date" id="editEventDate" name="editEventDate">
                </div>
                <div>
                  <label for="editEventPicture">Select image to upload: (200px x 70px) *</label>
                  <input type="file" name="editEventPicture" id="editEventPicture">
                </div>
                <label for="editEventDesc">Description: *</label>
                <textarea id="editEventDesc" name="editEventDesc" rows="4" cols="10" placeholder="Your description">
                </textarea>
                <label for="editEventURL">Link's Event *</label>
                <input id="editEventURL" type="text" name="editEventURL" required minlength="4" placeholder="Link's event">
                <button type="submit" aria-label="Left Align">Update</button>
                <button type="button" aria-label="Left Align">Delete</button>
              </form>
            </div>
          </div>
            `;
            const modalEditionEvent = document.querySelector('#editionEvent-modal');
            const modalCloseEEvent = document.querySelector('.block-modal-event-edition__close');
            //console.log("modal eidtion event into my space :");
            //console.log(modalEditionEvent);
            //activeModalEEvent(modalEditionEvent);
            for(let i=0; i < data.length; i++) {
                blockEventsSpace.innerHTML += `
                    <div class="block-my-space-events">
                        <article>
                            <div><img class="block-my-space-events__image" src="${data[i].picture_one}" alt="Picture event ${data[i].name}"></div>
                            <div class="block-my-space-events__name">${data[i].name}</div>
                            <div class="block-my-space-events__date">${data[i].date}</div>
                            <div class="block-my-space-events__description">${data[i].description}</div>
                            <div class="block-my-space-events__link">${data[i].url}</div>
                            <div class="block-my-space-events__actions">
                                <div><button type="button" class="block-my-space-events__action-edit is-disable">Edit</a></div>
                                <div><button type="button" class="block-my-space-events__action-share is-disable">Share</a></div>
                            </div>
                        </article>
                    </div>
                `;
            }
            const buttonEEdition = document.querySelectorAll('.block-my-space-events__action-edit');
            //console.log(buttonEEdition);
            const activeModalEEvent = () => {
                //console.log('My modal into function');
                //console.log(modalEditionEvent);
                //console.log('My buttons into function');
                //console.log(buttonEEdition);
                buttonEEdition.forEach(item => {
                    item.addEventListener('click', event => {
                        event.preventDefault;
                      //handle click
                      console.log('bouton activé');
                      console.log(modalEditionEvent);
                      modalEditionEvent.classList.add('active');
                      blockEventsSpace.innerHTML = '';
                      blockEventsSpace.innerHTML += `
                      <!-- The Modal Edition Event (futur back-office) -->
                      <div class="block-modal-event-edition modal active" id="editionEvent-modal">
                    <!-- Modal content  -->
                      <div class="block-modal-event-edition__content">
                        <span class="block-modal-event-edition__close">&times;</span>
                        <form action="#" method="PUT"  id="block-modal-event-edition__form">
                          <h2 class="block-modal-event-edition__title">Edit your event</h2>
                          <label for="editEventName">Name *</label>
                          <input id="editEventName" type="text" name="editEventName" required minlength="4" placeholder="Name's event">
                          <div>
                            <label for="editEventDate">Date of event: *</label>
                            <input type="date" id="editEventDate" name="editEventDate">
                          </div>
                          <div>
                            <label for="editEventPicture">Select image to upload: (200px x 70px) *</label>
                            <input type="file" name="editEventPicture" id="editEventPicture">
                          </div>
                          <label for="editEventDesc">Description: *</label>
                          <textarea id="editEventDesc" name="editEventDesc" rows="4" cols="10" placeholder="Your description">
                          </textarea>
                          <label for="editEventURL">Link's Event *</label>
                          <input id="editEventURL" type="text" name="editEventURL" required minlength="4" placeholder="Link's event">
                          <button type="submit" aria-label="Left Align">Update</button>
                          <button type="button" aria-label="Left Align">Delete</button>
                        </form>
                      </div>
                    </div>
                      `;
                      console.log('????');
                    })
/*                     modalCloseEEvent.addEventListener('click', event => {
                        // Stop event propagation
                        event.preventDefault();
                        console.log('close');
                        modalEditionEvent.classList.remove('active');
                    }) */
                });   
            }
            activeModalEEvent();
            return [modalEditionEvent, buttonEEdition, activeModalEEvent, modalCloseEEvent]; 
        }
    }; 

           // Modal edition event (in progress)
           //const modalEditionEvent = document.querySelector('#editionEvent-modal');


/*         const activeModalEEvent = () => {}  */

    // Actions sidebar user : Create event (Modal event)

    const activeModalEvent = (buttonNewEvent, modalEvent, modalCloseEvent) => {
        if(buttonNewEvent) {
            buttonNewEvent.addEventListener('click', event => {
                // Stop event propagation
                event.preventDefault();
                modalEvent.classList.add('active');
            });
        }

        if(modalCloseEvent) {
            modalCloseEvent.addEventListener('click', event => {
                // Stop event propagation
                event.preventDefault();
                modalEvent.classList.remove('active');
            }); 
        }
    }

    const createEvent = (createEventForm, user_id, eventName, eventDate, eventPicture, eventDescription, eventURL) => {
        if (typeof user_id != 'undefined') {
            createEventForm.addEventListener('submit', async event => {
                // Stop event propagation
                event.preventDefault();
    
                // Extract basse64 data
                const postImage = await extarctImage(eventPicture);
    
                new FETCHrequest(
                    `${apiUrl}/api/users/create/event`,
                    'POST',
                    {                   
                        author: user_id,
                        name: eventName.value,
                        date: eventDate.date,
                        picture_one: await resizeImage(postImage.value),
                        description: eventDescription.value,
                        url: eventURL.value
                    }
                )
                .sendRequest()
                .then( jsonData => {
                    console.log(jsonData);
                    let event_id = jsonData.data._id;
                    //updateEvent(event_id, user_id, editEventForm, editEventName, editEventDate, editEventPicture, editEventDesc, editEventURL, modalEditionEvent, modalCloseEEvent); 
                    modalEvent.classList.remove('active');
                    return event_id;
                    
                })
                .catch( jsonError => console.log(jsonError));   
            })
        }
    };

    // Update event
    const updateEvent = (event_id, user_id, editEventForm, editEventName, editEventDate, editEventPicture, editEventDesc, editEventURL, modalEditionEvent, modalCloseEEvent) => {
        if (typeof event_id != 'undefined') {
            editEventForm.addEventListener('submit', async event => {
                // Stop event propagation
                event.preventDefault();
    
                // Extract basse64 data
                const postImage = await extarctImage(editEventPicture);
    
                new FETCHrequest(
                    `${apiUrl}/api/users/updating-event/${event_id}`,
                    'PUT',
                    {                   
                        author : user_id,
                        name : editEventName.value,
                        date : editEventDate.value,
                        picture_one : await resizeImage(postImage.value),
                        description : editEventDesc.value,
                        url : editEventURL.value
                    }
                )
                .sendRequest()
                .then( jsonData => {
                    console.log(jsonData);
                    modalEditionEvent.classList.remove('active');
                })
                .catch( jsonError => console.log(jsonError));   
            })
        }
    };

    // Actions sidebar user : Update profile (Modal edition profile)

    const activeModalProfile = (buttonEditProfil, buttonDeleteAccount, modalEditionProfile, modalCloseEdition) => {
    
        if(buttonEditProfil) {
            buttonEditProfil.addEventListener('click', event => {
                // Stop event propagation
                event.preventDefault();
                modalEditionProfile.classList.add('active');
            });
        }

        if(modalCloseEdition) {
            modalCloseEdition.addEventListener('click', event => {
                // Stop event propagation
                event.preventDefault();
                modalEditionProfile.classList.remove('active');
            });
            
            buttonDeleteAccount.addEventListener('click', event => {
                // Stop event propagation
                event.preventDefault();
                modalEditionProfile.classList.remove('active');
            }); 
        }
    }

    const updateProfileUser = (editProfileForm, user_id, editFNUser, editLNUser, editGender, editUMail, editUPhone, editUPicture, editUBio, editUPassword) => {

        if (typeof user_id != 'undefined') {
            editProfileForm.addEventListener('submit', async event => {
                // Stop event propagation
                event.preventDefault();
                let newGender = null;
                event.preventDefault();
                //getGenderUser(registerFormUser, gender);
                for (let i=0; i < editGender.length; i++) {
                    if ( editGender[i].checked ) { // radio checked?
                        newGender = editGender[i].value; // if so, hold its value in val
                        break; 
                    }
                }
    
                // Extract basse64 data
                const postImage = await extarctImage(editUPicture);
    
                new FETCHrequest(
                    `${apiUrl}/api/users/updating/${user_id}`,
                    'PUT',
                    {                   
                        first_name : editFNUser.value,
                        last_name : editLNUser.value,
                        gender : newGender,
                        email : editUMail.value,
                        phone : editUPhone.value,
                        profile_picture: await resizeImage(postImage.value),
                        biography: editUBio.value,
                        password:   editUPassword.value  
                    }
                )
                .sendRequest()
                .then( jsonData => {
                    console.log(jsonData);
                    modalEditionProfile.classList.remove('active');
                })
                .catch( jsonError => console.log(jsonError));   
            })
        }
    };

    // Actions sidebar user : Delete Account (into modal edition profile)

    const deteleAccount = (user_id) => {
        if (typeof user_id != 'undefined') {
            buttonDeleteAccount.addEventListener('click', event => {
                // Stop event propagation
                event.preventDefault();
                new FETCHrequest(
                    `${apiUrl}/api/users/remove/${user_id}`,
                    'DELETE',
                    {
                        token : localStorage.getItem('kento')
                    }
                    )
                    .sendRequest()
                    .then( dataDelete => {
                        console.log(dataDelete);
                        // Log out
                        appearUsersForms();
                        buttonUsers.classList.add('hidden');
                        buttonEvents.classList.add('hidden');
                        buttonLogin.classList.remove('hidden');
                        buttonRegister.classList.remove('hidden');
                        blockEvents.classList.add('hidden');
                        blockUsers.classList.add('hidden');
                        buttonLogout.classList.add('hidden');
                        buttonMySpace.classList.remove('active');
                        buttonMySpace.classList.add('hidden');
                        blockMySpace.classList.remove('active');
                        blockMySpace.classList.add('hidden');
                        dropdownMySpace.classList.add('hidden');
                        blockHome.classList.add('hidden');
                        errorMessage.classList.remove('hidden');
                    })
                    .catch( dataError => console.log(dataError))
            })
        }
    };
 
// Waiting loading DOM
    document.addEventListener('DOMContentLoaded', () => {
        appearUsersForms();
        redColorRegister(buttonRegister, titleRegister, titleLogin);
        redColorLogin(buttonLogin, titleLogin, titleRegister);
        registerUser(registerFormUser, userFname, userLname, userGender, userBirthday, userEmail, userPhone, userPicture, userBiography, userPassword);
        loginUser(loginFormUser, userEmailLogin, userPasswordLogin);
        logOut();
    })