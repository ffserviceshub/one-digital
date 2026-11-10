# One Digital

## Course media files

Place course cover images and the Mayajaal course video in these repository paths:

- `images/gopal_bhar_course.webp` — গোপাল ভাঁড় কোর্সের Product Cover
- `images/mayajaal_course.webp` — মায়াজাল কোর্সের Product Cover
- `videos/mayajaal-course-video.mp4` — মায়াজাল কোর্সের Details video

The product cards use the `image` field in the course data in `index.html`. The Mayajaal course Details modal uses its `videoEmbed` field.

## Current Mayajaal price

The Mayajaal YouTube Secret Course price is set to **৳190** in `index.html`. Keep the `price` value in sync if you change the price later. The WhatsApp order link is generated from that same price value.

## Video download controls

The HTML5 player disables the visible download control, playback-rate menu, Picture-in-Picture, and context menu where supported by the browser. These are deterrents only; they cannot prevent screen recording or all methods of saving a video. For stronger protection, use authenticated streaming with DRM rather than a public MP4 URL.
