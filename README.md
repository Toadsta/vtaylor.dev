# vtaylor.dev - A Node.js Website

vtaylor.dev is my personal website that I mainly made to just learn 
some more web programming skills. The website is a general about me 
site with links to my socials, a projects page, and a blog.

VicOS, the Windows 95-style desktop pastiche that used to live here, has moved to
its own repo: [Toadsta/VicOS](https://github.com/Toadsta/VicOS).

## Features and Technologies Used

- **Node.js**: The website is built using Node.js, a JavaScript runtime environment.
- **HTML/CSS/JS**: General web programming shenanigans
- **EJS**: I decided to use EJS, so I can embed other pages into the base. This is similar to flask
- **Light/dark theme**: follows system preference by default, with a manual toggle in the footer

## Project Structure

Here's the structure of the project:
```
├── app.js
├── views
│   ├── base.ejs
│   ├── about.ejs
│   ├── blog.ejs
│   └── projects.ejs
└── public
    ├── css
    ├── fonts
    ├── images
    └── javascript
```


## Getting Started

To run this website locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running the following command in the project directory:
```npm install```
3. Start the Node.js server by running the following command:
```node app.js```
4. Open your web browser and visit http://localhost:3000 or visit https://vtaylor.dev to visit my website!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

The contents of the repository was made by me (Victoria Taylor): 
1. The theme of the main webpage is heavily inspired by [Risotto](https://github.com/joeroe/risotto) for Hugo