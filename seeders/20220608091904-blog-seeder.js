'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('blogs', [
      {
        title: 'Why parsing JSON in Flutter is a challenge',
        author: 'Lewis Cianci',
        details: 'It can be more difficult to parse JSON strings in Flutter compared to other languages. Let\'s learn how to encode and decode JSON in...',
        content: `The key difference between serializing and deserializing JSON strings in Flutter and other languages is that Flutter doesn't support a runtime feature known as “reflection.” With reflection, other languages are able to inspect objects for information that helps with object serialization.

        However, Flutter''s lack of reflection is actually a good thing. Without reflection, Flutter code avoids the associated performance caveats and results in a smaller installable binary for the end user.
        
        We can still easily parse JSON strings in Flutter, but we need to do more than just specify a type. Fortunately, we can generate all of the code that we need to accomplish this, so we don't have to write it by hand.
        
        There are two situations you can be in when you want to serialize data within Flutter.
        
        In one situation, you are in control of the data classes yourself, and you would like to convert your data to or from JSON to send to an API or to store on a device.
        
        In the other situation, you're not in control of the data classes yourself, and are receiving JSON from an API. You would like to convert this JSON to strongly-typed data you can operate on within your Flutter app.
        
        We'll consider both situations in this article. First, we'll look at how to serialize a class within an app when we are in control of our data. Then, we'll review deserializing JSON data in Flutter from a remote source.`,
        createdAt: '2022-06-29 22:50:09',
        imgUrl: 'https://blog.logrocket.com/wp-content/uploads/2022/06/How-parse-JSON-strings-Flutter.png',
        category: 1
      },
      {
        title: 'A complete guide to using CSS filters with SVGs',
        author: 'Oscar Jite-Orimiono',
        details: 'CSS has several filters that help improve the visual aspects of a website. You can apply them directly to...',
        content: `SVGs, or Scalable Vector Graphics, are an XML-based vector image format for displaying two-dimensional graphics. XML is another fancy acronym that stands for Extensible Markup Language. XML is used to store and transmit data, and define your tags.

        Back to SVGs. An SVG doubles as both an image and document format. Regular image formats like JPEG and PNG are made up of pixels that generally lose quality when they're zoomed in.
        
        What makes SVGs different is that they maintain their quality no matter how much you zoom. This is possible because they're made up of mathematical formulas.
        
        SVGs can do a lot of incredible things, and we’ve just gone over how to enhance images, as well as other graphical elements, with SVG filters.

        We also demonstrated the 17 primitives available with SVG filters. Distortion, color manipulation, blurring, color inversion — you name it, you can achieve these effects with a few key strokes!`,
        createdAt: '2022-06-28 22:50:15',
        imgUrl: 'https://blog.logrocket.com/wp-content/uploads/2022/06/complete-guide-using-css-filters-with-svgs-nocdn.png',
        category: 2
      },
      {
        title: 'Build a task tracker with SolidJS and TypeScript',
        author: 'Ebenezer Don',
        details: 'Follow this step-by-step tutorial to build a web app using SolidJS.',
        content: `If you’ve worked with React before, SolidJS will look very familiar. When React Hooks was first announced, I was so happy because I thought it would solve our state management crisis. Hooks made local state management in components easier, but global state management remained complex.

        It was still difficult for disconnected components to share data and numerous libraries showed up to try and solve the state management problem — which increased development fatigue and added unnecessary complexity to our codebase.
        
        I’ve also seen the same problem happen in other frontend frameworks; it’s as if global state management is an afterthought, rather than something that was planned for from the beginning.
        
        With SolidJS, things are different. Global state management is as easy as creating state and exporting it. There’s no need for any complex setup or third-party library.
        
        SolidJS also uses JSX, the popular HTML-like syntax extension to JavaScript. This makes handling UI logic, events, and state changes straightforward. Coupled with that, SolidJS compiles to plain JavaScript, so there’s no need for a virtual DOM, making it relatively faster than frameworks like React and Angular.
        
        SolidJS also has a simple workflow. Components only render once, just like in JavaScript, so it’s easier to predict the outcome of your code.
        
        Another huge advantage of SolidJS is that it builds on the shoulders of other web frameworks, so it proudly emulates the good parts and improves the not-so-good parts.
        
        Let’s go ahead and setup our SolidJS app to learn how to build a web app with SolidJS step-by-step.`,
        createdAt: '2022-06-27 22:50:18',
        imgUrl: 'https://blog.logrocket.com/wp-content/uploads/2022/06/build-task-tracker-with-solidjs-typescript-nocdn.png',
        category: 3
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('blogs', {}, null)
  }
};
