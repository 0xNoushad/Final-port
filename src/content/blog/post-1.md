Here's the full content in Markdown format:

```markdown
---
title: Add Smooth Scrolling to Your Website in 4 Lines of Code
excerpt: Ever wanted to give your website a sleek, professional scrolling effect? With Locomotive Scroll, you can do it in just 4 lines of code. Here's how!
publishDate: 'Jun 24, 2024'
tags:
  - Guide
  - Web Development
seo:
  image:
    src: '/smooth-scroll.jpg'
    alt: Website smooth scrolling effect
---

# Add Smooth Scrolling to Your Website in 4 Lines of Code

Ever wanted to give your website that sleek, professional scrolling effect? With **Locomotive Scroll**, you can do it in just **4 lines of code**. Let’s break it down:

---

## Step 1: Set Up Your HTML  

First, include the Locomotive Scroll CSS in your HTML’s `<head>`:  

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1/dist/locomotive-scroll.min.css">
```

Next, wrap your content in a container with a special attribute:  

```html
<div data-scroll-container>
  <!-- Your website content goes here -->
</div>
```

---

## Step 2: Add the JavaScript  

Just before your closing `</body>` tag, include the Locomotive Scroll script:  

```html
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1/dist/locomotive-scroll.min.js"></script>
```

---

## Step 3: The Magic 4 Lines  

Now, here’s where the magic happens. Add these 4 lines of JavaScript after the script include:  

```javascript
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
```

That’s it! You’ve just added smooth scrolling to your website.

---

### What These 4 Lines Do:  

1. **Create a new Locomotive Scroll instance**  
2. **Select the container** we defined earlier  
3. **Enable smooth scrolling**  
4. **Store the instance in a variable**, useful for advanced features  

---

### Customization Tips:  

- Add `data-scroll` attributes to elements for additional animation effects.  
- Adjust smoothness by changing the `smooth` value (e.g., `smooth: 0.5` for slower scrolling).  

---

## Example:  

Here’s a simple three-section website using this technique:  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smooth Scroll Demo</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1/dist/locomotive-scroll.min.css">
  <style>
    body { margin: 0; font-family: Arial, sans-serif; }
    .page { height: 100vh; display: flex; align-items: center; justify-content: center; color: white; }
    #home, #about, #contact { background: url('https://images.unsplash.com/photo-1517379026834-d36e707f4d24?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3') center/cover; }
  </style>
</head>
<body>
  <div data-scroll-container>
    <section id="home" class="page">
      <h1>Welcome to Smooth Scroll</h1>
    </section>
    <section id="about" class="page">
      <h2>1st Section</h2>
    </section>
    <section id="contact" class="page">
      <h2>2nd Section</h2>
    </section>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1/dist/locomotive-scroll.min.js"></script>
  <script>
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  </script>
</body>
</html>
```

---

## Conclusion:  

With just **4 lines of JavaScript**, you’ve transformed your website’s scrolling experience. It’s that simple! Experiment with Locomotive Scroll’s options to further customize the effect and make your site stand out.

---

### My Thoughts:  

Remember, smooth scrolling isn’t just about aesthetics — it can significantly enhance user experience, making your site feel more polished and professional.
```

