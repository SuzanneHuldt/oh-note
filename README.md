# oh-note!
*Building a kickass notes app in JavaScript.*

[Introduction](#introduction) | [Running the App](#running-the-app) | [Approach](#approach) | [Challenges](#challenges)


## Introduction

oh-note! is our implementation of the Makers Academy Week 7 challenge, the full spec of which can be found [here](https://github.com/makersacademy/course/blob/master/further_javascript/project_track.md). The challenge was to build a simple notes app in JavaScript but, importantly, without using any third party libraries or resources (with the exception of the simple [http-server](https://www.npmjs.com/package/http-server)). This meant creating a test suite from scratch, and writing the equivalent of jQuery code in pure JavaScript.


## Running the App

To run the application, ensure you have http-server installed. Installation instructions for http-server can be found [here](https://www.npmjs.com/package/http-server). Once installed, run `http-server` from the command line in the project directory, and visit the correct localhost port in a browser.

N.b. Notes will not persist if the app is closed and reopened.


## Approach

The lack of use of external libraries for this project meant taking a test-driven approach to this project would be difficult. As such, we decided to split into two teams, one of which would create a full testing suite (affectionately known as the *oh-notifier*) whilst the other team would create basic tests in order to drive the development of the application. These basic tests were later rewritten in the *oh-notifier*. We began by establishing what our minimum viable product would be: simply allowing a user to create and see a note. The user stories for this are as follows:

```
As a diligent student,    
So I can remember things that I have been taught,
I would like to be able to create a note

As a diligent student,
So I can revise things that I have been taught,
I would like to be able to see all of my notes
```

From this base, we were then able to work on the development of other features, such as being able to view a note, or create a nicer-looking user interface for the application. Further features that could be implemented include adding the ability to edit or delete notes, the ability to share a note, or the ability to persist notes.


## Challenges

One of the key challenges for this project was to recreate the various JavaScript libraries, such as Jasmine or jQuery, that we had used in projects up until this point. To tackle these issues, we built our own testing framework, the *oh-notifier* (which now exists independently of this project and can be found [here](https://github.com/somemarsupials/oh-notifier)), and rewrote code that would usually be written in jQuery in pure JavaScript. To this end, the website http://youmightnotneedjquery.com/ proved invaluable.



oh-note! was built by [Gabi](https://github.com/gabrielabud), [Marie](https://github.com/mariekerkstoel), [Peter](https://github.com/peterwdj), [Suze](https://github.com/SuzanneHuldt), and [Theo](https://github.com/somemarsupials/).
