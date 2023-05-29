# Casino reviews component

## Live preview

### Dynamically rendered (client side)

https://casino-reviews-git-main-bienias.vercel.app/

### Statically pre-rendered (server side)

https://casino-reviews-git-main-bienias.vercel.app/static

### Admin dashboard

https://casino-reviews-git-main-bienias.vercel.app/admin

## Running the app locally

### Development environment

```
npm run dev
```

### Production environment

```
npm run build && npm start
```

## Git commit message convention

https://karma-runner.github.io/latest/dev/git-commit-msg.html

## Styling

I used [Tailwind CSS](https://tailwindcss.com/).

License: https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE

- It makes the CSS bundle as small as possible (only actual used CSS classes are bundled without duplications)
- Naming own CSS classes isn't a thing any more
- It makes the design easily very consistent (no need to use rems/pixels)
- By design it encourages to build small reusable components

## Icons

I used [Iconify](https://icon-sets.iconify.design/).

License: https://github.com/iconify/icon-sets/blob/master/collections.md

Straight copy-pasted inline SVG icons to make them portable without additional dependencies.

## Data fetching

I used [SWR](https://swr.vercel.app/).

License: https://github.com/vercel/swr/blob/main/LICENSE

It allows to cache requests and revalidate them on demand as well as mutate requests locally (optimistic UI).

## Automated tests

I used [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).

I haven't tested the whole project extensively, but I provided examples of unit and integration testing to showcase how I would write test for production ready component.

```
npm run test
```

## Drag & drop in admin dashboard

It certainly needs more time to polish admin dashboard.

In production I'd go with optimistic UI updates by populating cache of outgoing requests e.g. with:

https://swr.vercel.app/blog/swr-v2.en-US#mutation-and-optimistic-ui

But in this scenario, with mocked API, all outgoing request fails, so I came up with an idea of simply mutating a data object.
