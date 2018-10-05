# PWADemo
Follow this demo to make a Progressive Web App of a resume that you will be able to download onto your phone. Slides for PWA information that I found can be found at https://docs.google.com/presentation/d/1jFh-jzanqMG5DNb9vJ2MdjlkKjC4AqTQQ5FAYw1auzY/edit?usp=sharing

## Things you'll need
A text editor, icon's of your choice (There's a bunch of free generators online), a phone, Lighthouse (Plugin for Chrome), your resume.

## Get Started
Get the code and look at my index page, manifest, register service worker, and service worker to familiarize yourself with it. Changing these to customize the app will get you to have a online version of your resume and a means to edit the PWA to better suit you.  In the work folder, this is where you can practice step by step on making this your own and adding in a service worker to make a PWA.

## Step 1
Change all of the information to make the resume how you want it.  Put your icons into an images folder and name them so you can tell which sizes they are.  You can have different size ones and the sizes you need will depend on your device or if it will be used for a splash screen, but you need one that is at least 144x144 to satisfy the PWA requirement

## Step 2
Create Register Service Worker, you can go to the file and uncomment the code to make it ready to go.  All this code is doing is seeing if your browser allows service workers and then registers the service worker which is the file location of the service worker.  It does not have to be named anything special as long as this has the right file it will register as a service worker.  The code that is marked for iOS use is only supposed to run if it is on an Apple device and you want the install banner, since I don't own one I'm unsure if it actually works or not. 

## Step 3
Fill out the manifest. name is the full name of the app, short_name is what is displayed on your phone screen under the app. Icons are what are to be used for app icons and splash screens.  It uses the one that is closest in size and greater than 144*144 for the phone app icon, other icons are placed on splash screens provided that they fit to the screen.  start_url is where the app launches to when you open it, if you are doing this on github pages it will either be your repo name, or it will be just a / indicating start at the folder that you are in.  background_color is where the load screen color.  theme_color is the color of the tab on your phone if you are switching between tabs in your mobile browser.  Display should just be set to standalone, iOS requires it for PWA's in general but standalone means you want it to display as a native app.

## Step 4
Add the manifest and register service worker to the index page, that way they are provided to the browser whenever the index page loads.

## Step 5
Set up the service worker for installation.  This is so the service worker installs and caches in the browser.  In here you will be adding all of the files that you need cached into the filesToCache section.  These files need to have the correct pathes and need to exist, any errors will cause the installation to fail entirely.  The 'install' function is where the filesToCache are placed into the cacheName which is what the cache will be known as.

## Step 6
Set up the service worker for activation.  This is so the service worker is set to the activated state.  The activate function itself doesn't have to contain anything, but this is where you would set up where the cache can be checked for changes and a delete function if you want to implement that.  self.clients.claim() is what the puts the service worker in charge of all of the pages that are in the scope of the page, this means that content that is being served will come from the service worker's cache first unless it is not currently in cache.

## Step 7
Set up the fetch function. The main point of having a service worker is so that it delivers all content from cache if possible first to speed everything up, so there needs to be a fetch method that intercepts the GET requests and returns the corresponding request from cache rather than networking it.  In this function, we need to take a GET request and check to see if the cooresponding request can be found in cache and then return it.  If that fails (meaning the page is not in the cache yet), we then put the GET request back over the network and try to get the asset through our Internet connection.  If it is possible for you to access the item over the network, it creates a copy of the cache and then adds the new item into the cache that way it has it in cache for the next time.  If it makes it through all of these steps and it still can't recieve it, you can return an offline page.  The offline page is a page that will rarely get touched because the only way it gets called is if you have no internet connection and it's not in the cache.

## Step 8
Now that you have made a manifest, registered a service worker, have a means of displaying things offline, and is responsive, it meets all of the requirements to prompt the PWA install banner online.  This means now users can install it to their phone and access it from their homescreen at anytime.  So put all of this stuff up on github pages or your preferred hosting site and enjoy your Resume PWA.  The steps 2-7 are the steps to take to add the PWA caching functionality to any web app.  Other advanced functions such as notifications are not quite ready to be implemented on any device, but when they do come it may be beneficial to develop PWA's instead of having to make different native apps for devices.