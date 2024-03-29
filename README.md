# twitter_clone

<p align="center"> 
  <a href="https://fullcycle.com.br/" target="_blank">
    <img width="auto" src="./README_FILES/_41122539-a504-4d4c-8d40-90b50423972e.jpg"/>
  </a> 
</p>

<h4 align="center" >🚀 🟦 Twitter - X 🟦 🚀</h4>

<h4 align="center">
  Application developed for explore my dev skills and make a discovery in the twitter platform by creating a clone that goes beyond the interface
</h4>

#

<p align="center">
  |&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#project">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#techs">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#app">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#run-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#author">Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

#

<h1 align="center">
  
  <a href="https://github.com/Samuel-Ricardo">
    <img src="https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=GITHUB"/>
  </a>

  <a herf="https://www.instagram.com/samuel_ricardo.ex/">
    <img src='https://img.shields.io/static/v1?label=&message=Samuel.ex&color=black&style=for-the-badge&logo=instagram'/> 
  </a>

  <a herf='https://www.linkedin.com/in/samuel-ricardo/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=LinkedIn'/> 
  </a>

</h1>

<br>

<p id="project"/>

<br>

<h2>  | :artificial_satellite: About:  </h2>

<p align="justify">
  This project is a functional twitter clone Full Stack application with a rethink metalic design, implements the main features of Twitter with the best pratice of Clean Architeture and with a Modular system, has the complete testing pyramid, security layer and more. The entire system is built on Docker.
</p>

<br>

🔭 | API Repository: [[twitter_clone-API](https://github.com/Samuel-Ricardo/twitter_clone-api)] <br>
📡 | Hosted on Vercel: https://twitter-clone-gules-seven.vercel.app/

<br>

#

<br>

<h2 id="techs">
  :building_construction: | Technologies and Concepts Studied:
</h2>

> <a href='https://nextjs.org/'> <img width="128px" src="https://cdn.dribbble.com/userupload/4083900/file/original-af6fd9a0f697fc74d006f73f0e9d1ed5.png?resize=1024x576" /> </a>

- NextJS 14
- TailwindCSS
- Typescript
- Jest
- Cypress
- Docker
- Inversify
- MongoDB
- NextAuth
- Zod
- Validations
- Zustand
- React-Hook-Forms
- File Upload & File Handle
- SWR
- React-Query - [ @tanstack ]
- Cryptography
- Argon2
- Bcrypt
- Crypto - [ NodeJS ]
- Axios
- Socket.IO
- Websockets
- eslint
- Prettier
- husky
- lint-staged
- Events & Async
- Event-Emitter 2
- Caching
- Storybook - [ DOCS ]
- Analytics - [ Vercel ]
- Design Patterns
- Perfomance
- Clean Architeture
- Clean Code / SOLID
- Scalability
- Real Time

> Among Others...

#

<br>

<h2 id="app">
  💻 | Application:
</h2>

> Go to the video demo by clicking on any image

  <br>
  <br>

> <a href="./README_FILES/video_demo/"> <img width="auto" src="./README_FILES/_5cc71638-1246-4488-9b29-d0b574e59a6e.jpg"/> </a>

<br>

<p>
  This is the front-end of the application, it was built with NextJS 14, TailwindCSS and Typescript, as the basis of the software. Here you can create and browse posts (Tweets) and interact with them, you can follow and unfollow users and be notified of relevant events such as a new post from someone you follow
</p>

<br>

> 📑 | More details about: [LinkedIn Posts](https://www.linkedin.com/in/samuel-ricardo/recent-activity/all/) with [#samuclone_twitter](https://www.linkedin.com/search/results/content/?keywords=%23samuclone_twitter&origin=FACETED_SEARCH&sid=VXl&sortBy=%22date_posted%22)

<br>
<br>

### 🏡 | Home

> <a href="./README_FILES/video_demo/"> <img width="auto" src="./README_FILES/demo_posts.png"/> </a>

<br>

<p>
  On home page you find the newest posts, you can interact with them and click on a post to see more details and the comments. if you are the author, you can delete post.
</p>

<p>
  You can create a post on "What are you thinking?" box, images are optional and all images are optimized to better performance. This section have data validations to prevent erros.
</p>

<p>
  On right side have a list of users that you may like to meet.
</p>

✅ | This site is completly responsive, you can use it on any device and screen size :D

<br>

### 💾 | Caching

<br>

<p>
  This application uses an efficient caching system, the entire page structure is cached on demand, avoiding unnecessary page requests, the same happens with the data that is cached and hydrated, avoiding unnecessary reloads, but without losing the reactivity of the software
</p>

<p>
  Which means this application tends to be faster the more you are using it, the more you use this application the faster it will be because it will be optimized in real time.
</p>

<br>

### 🔏 | Cryptography

<br>

<p>
  This application uses a cryptography system for various functions, such as password hashing with Argon2 or Bcrypt, it is a hybrid system. In addition to hashing, it uses salts and other strategies to update password security and avoid rainbow tables.
</p>

<p>
  It implements an end-to-end encryption system, using symmetric keys and other strategies to encrypt and decrypt all communication between this application and the server, even if the connection is insecure, your data is safe. 
</p>

<br>

### 🕊️ | Detailed Post

> <a href="./README_FILES/video_demo/"> <img width="auto" src="./README_FILES/demo_post.png"/> </a>

<br>

<p>
  Here you can have a better experience by seeing the post and its comments, you can interact with the comments and create your own comment about it.
</p>

<p>
 The content is responsive, you can better view images, for example, and comments are ordered by date. 
</p>

<br>

### ☕ | Profile

> <a href="./README_FILES/video_demo/"> <img width="auto" src="./README_FILES/demo_profile.png"/> </a>

<br>

<p>
  Here you can see users profile, latest tweets and data like followers and following, name, bio and much more.
</p>

<p>
  Here you can get to know users better and decide whether to follow or unfollow them.
</p>

<p>
  On your profile, you can edit to make this space yours and update your data such as name, avatar or background.  
</p>

<br>

### 📬 | Notifications

> <a href="./README_FILES/video_demo/"> <img width="auto" src="./README_FILES/demo_notfications.png"/> </a>

<br>

<p>
  Here you can see all notifications relevant to you due to our reactive notifications system.
</p>

<p>
  Our notification system works in real time, identifies when an event occurs and notifies anyone who is interested.
</p>

<p>
  The bell icon reacts based on notifications. You can view notifications by clicking on them and if possible you will be redirected to the notification context, you can delete it, and when all notifications are viewed the bell icon will be updated automatically 
</p>

<p>
  If you follow someone, you can be notified when they post a new tweet.
</p>

<br>

### 🛂 | Authentication

> <a href="./README_FILES/video_demo/"> <img width="auto" src="./README_FILES/demo_login.png"/> </a>

<br>

<p>
  The login flow is divided on front & back end, the backend handle the search and authentication of a user applying the domain logics, the frontend handle the session with nextauth 
</p>

<br>

### 📜 | Forms & Validation

> <a href="./README_FILES/video_demo/"> <img width="auto" src="./README_FILES/demo_register.png"/> </a>

<br>

<p>
 This app uses react hooks form to build amazing forms with very good usability and maintainability. All this with Zod to handle data validation and transformation and maintain data security. 
</p>

<br>

## 🍏🐢 | Performance

> <img width="auto" src="./README_FILES/performance.png"/>

<p>

<br>

🔭 | API Repository: [[twitter_clone-API](https://github.com/Samuel-Ricardo/twitter_clone-api)] <br>
📡 | Hosted on Vercel: https://twitter-clone-gules-seven.vercel.app/

<br>
<br>

<h2 id="run-project"> 
   👨‍💻 | How to use
</h2>

<br>

### Open your Git Terminal and clone this repository

```git
  $ git clone "git@github.com:Samuel-Ricardo/twitter_clone.git"
```

### Make Pull

```git
  $ git pull "git@github.com:Samuel-Ricardo/twitter_clone.git"
```

<br>

This application use `Docker` so you dont need to install and cofigurate anything other than docker on your machine.

> <a target="_blank" href="https://www.docker.com/"> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" /> </a>

<br>

Navigate to project folder `$ cd ./twitter_clone/` and run it using `docker-compose`

```bash

  # After setup docker environment just run this commmand on root project folder:

  $ docker-compose up --build   # For First Time run this command

  $ docker-compose up           # to run project


```

```bash

  #Apps Running on:

  $ APP: http://localhost:3000
  $ API: http://localhost:3004

  $ STORYBOOK: http://localhost:6006/ | [DOCUMENTATION] | [DEV]

  $ MONGO: http://localhost:27017 | [DATABASE]


  $ [DEV] = only on development environment

  See more: ./twitter_clone/docker-compose.yaml

```

<br>

#

<br>

<h2 id="author">
  :octocat: | Author:  
</h2>

> <a target="_blank" href="https://www.linkedin.com/in/samuel-ricardo/"> <img width="350px" src="https://github.com/Samuel-Ricardo/bolao-da-copa/blob/main/readme_files/IMG_20220904_220148_188.jpg?raw=true"/> <br> <p> <b> - Samuel Ricardo</b> </p></a>

<h1>
  <a herf='https://github.com/Samuel-Ricardo'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=GITHUB'> 
  </a>
  
  <a herf='https://www.instagram.com/samuel_ricardo.ex/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel.ex&color=black&style=for-the-badge&logo=instagram'> 
  </a>
  
  <a herf='https://twitter.com/SamuelR84144340'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=twitter'> 
  </a>
  
   <a herf='https://www.linkedin.com/in/samuel-ricardo/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=LinkedIn'> 
  </a>
</h1>
