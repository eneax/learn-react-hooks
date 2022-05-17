import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app. 
    By default, each post preview is cut off until the user clicks "Open". 
    Only one post can be "Open" at a time.
*/

function App({ posts }) {
  return <div>{JSON.stringify(posts, null, 2)}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App
    posts={[
      {
        id: 0,
        img: "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:Code%20Splitting%20with%20React%252C%20React.lazy%252C%20and%20React%20Router,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:4%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
        text: "Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router.",
      },
      {
        id: 1,
        img: "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:JavaScript%20Inheritance%20vs%20Composition,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:3%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
        text: "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong.",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:JavaScript%20Modules:%20From%20IIFEs%20to%20CommonJS%20to%20ES6%20Modules,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:13%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
        text: "I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today.",
      },
    ]}
  />,
  rootElement
);
