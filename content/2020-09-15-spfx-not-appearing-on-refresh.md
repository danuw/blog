---
date: 2020-09-15
title: "SPFx not appearing on refresh anymore!"
thumbnail: "../thumbnails/wp.png"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
categories: 
    - workplace automation
tags: 
    - Office365
    - Power Automate
    - MS Flow
    - MS Planner
    - Microsoft
---

Last summer I started looking a little bit more into SPFx development, having to port a very basic HTML/CSS/JS component from content editor WebPart to Modern SharePoint site (where iFrame was not a viable option).

After I successfully, though basically, ported my code over, my deployed package started disappearing on page refresh whether it was while saving a draft or while publishing the page. When editing the page, the WebPart container would still look bigger, as if a ghost of my web part was still there and duplicating that section would reveal the app in the new copy until the next save and refresh cycle.

I like to start versionning to the minimum so I can incrementally get a first minor version as the first draft.

This issue occurring on refresh, I could not easily undo the last thing I had done, as I had "made changes -> refreshed -> made changes -> ..." a few times.

We were striping the code of anything that could be the issue and that is when it struck me: I had read (and I cannot find where anymore) that data version was meant to be only two parts, so:

```typescript
    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }
```
as opposed to 

```typescript
    protected get dataVersion(): Version {
        return Version.parse('0.0.1');
    }
```
Changing this back and forth confirmed this was the exact issue.

Even though the answer was in my head from something I had read while the app was still working, I still needed some help, so, I hope this helps some out there (and do let me know if you found where this is in the documentation so I can add a reference - thanks).