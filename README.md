# Another_Portfolio

**This readme is deprecated and will live on the v1 branch, ref to the main readme for new updates**

Lookit that, I'm making ANOTHER portfolio!

Deprecated Deployment -- https://kevintjolley.com/

Development Deployment -- https://suspicious-montalcini-c0d006.netlify.app/

!! This does not currently work on Internet Explorer !!
!! Currently a WIP Portfolio !!

---

**NOTE - BEFORE RUNNING, MAKE SURE YOU INSTALL PACKAGES WITH YARN**

**Possibly go through and rebuild a fully-mobile version of the page? It's not reactive or working with a reactive layout, so mobile phones should be redirected to a page that's built specifically for phones**

!! Major To-Do -- Go through and redo the projects to be in chronological order, add if they are depricated/finished/unfinished, and add the github/deployment links. !!

## Known Issues

- Scrolling on the homepage will cause it to display the sidebar, remove the ability to scroll on all devices from any page that are not set-up to scroll automatically.
- Projects section being absolute positioned is causing the scrollY to not register, thus casuing the sidebar to not disappear.
- Reactivity in the projects section causes issues at viewports lower than 1920x1080 or at a different aspect ratio.
- Missing Contact & Life sections, will need to revamp these in the future.
- Text inside the projects pop-up modal are not center justified when longer than normal.

## TO-DO

- Reactive ~~
  - About height is non-effective in some cases
  - Phones have slight overflow issues
- Scrolling anywhere on the page causes the show-nav to fire (at lower reactive levels)
  - This can probably be fixed by just adjusting the overflow for the entire page.
  - This functionality is deprecated, should be removed.
- Uneven numbers of projects will break the formatting in the projects section. (Check this?)
- Set-up contact segment
- Set-up or remove "Life" segment.
- Add a section for Languages/Frameworks
- Adjust background-images to be faster loading (smaller file size?).
- Rebuild side navigation at mobile to work as a pop-over, spawn from a hamburger in the main navigation, remove onscroll events and make navigation fully sticky.
- Redo all the CSS

**New Items (2020)**

- Add React Router, or some form of routing middleware to handle the transition between pages.
- Add a loading animation (ThreeJS) when the page is not fully loaded (this includes assets). This would make it immensely easier to manage the load times without having to reduce the file sizes.
-

## Ideas

- Projects Section - Separate them out into two categories?
  - Projects I've contributed to
  - Projects I've created
- Projects Section - Include what I contributed to the projects, along with a quick tl;dr similar to what would be included in a resume.
- Projects section needs to be more fluid, possibly smaller project buttons? Less padding obviously, resize should be fluid at every viewport.

- Life section should contain blocked out sections that show personal achievements outside of code. Something to show initiative and drive in the different areas of my life, things that I have interest in, etc.
  - Probably going to do this in the same way I did the projects section, using a small grid of sorts, then I'll have them click through to (possibly) router links?
  - Having pop-over modals for each would make it a little weird, but I think it'll work out.
