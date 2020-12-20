
# ECE Messenger - final project

The aim of this project was to code a chat application in nodeJS. We, Antoine Paoli and Mathéo Cambier, both student at ECE Paris coded this application from this template: https://github.com/adaltas/ece-2020-fall-webtech-project. This project made us get familiar with different javascript tools such as Material-UI component, routers and the Client/Server communications. The key-value storage LevelDB was used for this project.

## Usage

* Install [Go](https://golang.org/) and [Dex](https://dexidp.io/docs/getting-started/). For example, on Ubuntu, from your project root directory:   
  ```
  # Install Go
  apt install golang-go
  # Download Dex
  git clone https://github.com/dexidp/dex.git
  # Build Dex
  cd dex
  make
  make examples
  ```
  Note, the provided `.gitignore` file ignore the `dex` folder.
* Make a copy of the Dex configuration to `./dex-config/config-private.yaml`, the project is configured to Git ignore this path:
  ```bash
  cp -rp ./dex-config/config.yaml ./dex-config/config-private.yaml
  ```
* Register your GitHub application, get the clientID and clientSecret from GitHub and report them to your Dex configuration. Modify the provided `./dex-config/config-private.yaml` configuration to look like:
  ```yaml
  - type: github
    id: github
    name: GitHub
    config:
      clientID: xxxx98f1c26493dbxxxx
      clientSecret: xxxxxxxxx80e139441b637796b128d8xxxxxxxxx
      redirectURI: http://127.0.0.1:5556/dex/callback
  ```
* Inside `./dex-config/config-private.yaml`, the frond-end application is already registered and CORS is activated. Now that Dex is built and configured, your can start the Dex server:
  ```yaml
  cd dex
  bin/dex serve ../dex-config/config-private.yaml
  ```
* Start the back-end
  ```bash
  cd back-end
  # Install dependencies (use yarn or npm)
  yarn install
  # Optional, fill the database with initial data
  bin/init
  # Start the back-end
  bin/start
  ```
* Start the front-end
  ```bash
  cd front-end
  # Install dependencies (use yarn or npm)
  yarn install
  # Start the front-end
  yarn start
  ```

## Author
The project template was taken from: https://github.com/adaltas/ece-2020-fall-webtech-project.</br>

| Name | Email |
| --- | --- |
| Antoine PAOLI | antoine.paoli@edu.ece.fr |
| Mathéo CAMBIER | matheo.cambier@edu.ece.fr |

## Tasks

Project management

* Naming convention   
We tried to have clear variable and file names. ex: *ChannelCreation* for the channel creation or *CreateChannel* which is the button to create a channel and which is called by *ChannelCreation*.
* Project structure
We stored the components called for channel printing or channel creation in a folder for better understanding and organization. We kept seperated all backend operations and frontend so that communications would only be with HTTP requests/responses.
* Code quality   
We favored using the Context to pass variables to far components. We also reviewed many times in order to make our files intuitive.
* Design, UX   
We used mainly Material-UI for our components to make a good-looking application. We integrated a dark/light mode in our Settings.
* Git and DevOps   
Github was the versionning website used. In order to seperate tasks better, we worked on features and merged with the develop when our code was functionnal. When we both merged and took care of merging conflicts, we usually merged with the master.

Application development

* Welcome screens   
For a nice welcoming application, we changed the components and colors of the connection page. We filled the footer and put a little plug icon for an intuitive connection.
* New channel creation   
Once connected, the user can create a channel by going to More Options->Create Channel. The new channel name is mandatory. The user has also to select (by checking) at least one user to create a channel. The list printed is the list of **all** users in the database (except the user connected). The user can cancel the channel creation by pressing on the red *Cancel* button.
**important: the page is not scrollable so you must not have your window shorten** otherwise the *Create* and *Cancel* buttons won't appear on the screen.

-> A channel can be deleted by clicking on the red bin button in the channel toolbar.
* Channel membership and access   
*We unfortunatly didn't have the time to do this part.*
* Ressource access control   
*We unfortunatly didn't have the time to do this part.*
* Invite users to channels   
*We unfortunatly didn't have the time to do this part* We still have a nice button *+ Add* in the channel toolbar.
* Message modification   
The user can modify **his** messages by clicking on the red pen button next to his messages. When this button is clicked, a textfield will appear with the old message already typed in, thus the user will only have to modify the message by typing his new message and click on the check button next to the textfield. This action will modify the message in levelDB and refresh the channel to see the update. In the case where he changed his mind and finally didn't want to change his message, he can just click on the left arrow next to the textfield and it will cancel his modifications (and the textfield will disappear).
* Message removal   
The user can delete **his** messages by clicking on the red bin next to his messages. This action will delete the message in levelDB and be removed from the channel.
* Account settings   
The user can access to the settings by clicking on the *More Options* button on the top left (accessible anywhere application when logged in) and then by clicking on *Settings*. On the Settings page the user can change from dark to light mode with an intuitive switch. 
* Gravatar integration   
Gravatar is integrated in our app. The user will see the gravatar of the other users of the channel and his next to the names. We also put the gravatar images when a channel is being created, the gravatar of each user is printed next to their names in the full list of users (Go to *More Options*->*Create Channel*).
* Avatar selection   
We unfortunatly didn't have the time to do this part. However, we still tried to assemble components in order to show an idea of what we wanted to do for the avatar selection.
* Personal custom avatar   
*We unfortunatly didn't have the time to do this part.*

## Bonus

*We didn't do any bonuses.*
