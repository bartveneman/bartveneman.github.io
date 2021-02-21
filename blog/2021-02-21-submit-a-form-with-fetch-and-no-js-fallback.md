---
title: Submit a form with `fetch()` and no-js fallback
---

TL;DR;
- Forms that are submitted with javascript should have a no-js fallback;
- The HTML form submits to the same endpoint as the JS version;
- The endpoint works out if it's a JS submission or a plain `<form>` submit
  - If JS: respond with a JSON response
  - If `<form>`: Respond with HTTP 200 and redirect back to the same page

---

## Why I am doing this

I'm working on a new feature for Project Wallace. The website is split into two parts: a static website that is for marketing pages and an Express app for all the authenticated stuff. It's nice, because I keep the complex session/auth stuff in Express and the 'easy' things in Svelte + Sapper. But for this new feature I want to try out if I can make an authenticated page work in a statically rendered page.

The main reason I'm holding back on this pattern is because all the extra hoops I'll have to jump through. And there's also the benefit that a page without client-side JS *just works* once it arrived on the user's browser. But I want to give it a shot, because it's an increasingly popular pattern for a good reason (I guess).

One thing that's really important for me is to have progressive enhanced forms in case anything in my javascript breaks and my fancy `fetch()` request doesn't fire and the user is stuck with a webpage that does not respond or even worse: submits the form without handling it.

---

## How to handle javascript form submissions with a no-js fallback

The real trick is as dull as it is effective: create a `<form>` element like you always do (yo *do* always create plain old forms with a form tags, labels and input, right?). Then follow these steps:

1. Craft an HTML form
    1. The form `action` points to a server that can handle both versions: 'plain' submit and a fetch request
    1. The form `method` will be shared between the 'plain' submit and `fetch`
2. Read all form input in JS with `new FormData(formElement)` and it will make all form inputs immediately available to send with `fetch()`
3. The JS submit explicitly signals to the server that it wishes to be treated differently than a plain submit: in my case by using the `Accept: application/json` header (which a plain old form cannot do). This way the server knows the difference between the two different types of submits;
4. The server responds with a JSON response to the JS, or with a redirect response in which case the browser will reload the page, showing the latest available data.

## Implementation

Here is some example HTML:

```html
<form
  action="/handler"
  method="post"
>
  <label for="username">Username</label>
  <input
    type="text"
    name="username"
    name="username"
  />
  <button>Save settings</button>
</form>
```

Here is the client-side javascript to submit this form to the server:

```js
document
  .querySelector('form')
  .addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault()

  const form = event.target;

  // Reading action="" and method="" from
  // the <form> element
  const { method, action } = form;
  // This creates a nice package of all
  // our form fields to send to the server
  const formData = new FormData(form);

  // Send off the request to the server
  const response = await fetch(action, {
    body: formData,
    method,
    headers: {
      Accept: 'application/json'
    }
  })
  // and look what it gave us!
  const result = await response.json()
}
```

And to tie all things together, here is the Node server processing the incoming request. This example assumes a serverless function like on Vercel, Netlify or any other platform, but it could easily be an Express route or something else completely.

```js
export default function handler(req, res) {
  // Do something with the incoming data via `req.body`

  // Handle JS fetch() requests
  // Remember we set the Accept header explicitly
  // in our client-side fetch?
  if (req.headers.accept.includes('application/json'))
    return res.json({ success: true })

  // Handle raw form submissions:
  // Send them back where they came from
  return res.redirect(req.headers.referer)
}
```

## Caveats

- Modern browsers only, because of `fetch()` and `FormData`;
- The redirect URL could/should be passed via the `<form>` in a hidden input but in all conditions this URL should be checked to make sure it doesn't redirect to a malicious website;
- None of the examples contain error handling, but you (and I) should definitely add that;
