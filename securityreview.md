 # Security Review

 **Checklist:**

 - [ ] Review `index.html` and `knowledge.html` pages (static pages).
 - [ ] Review platforms (e.g., Wordpress, Discourse, etc.) that are linked to.
 - [ ] Review libraries and imported fonts (e.g., Bootstrap, etc.).
 
 **Additional:** 

 - [ ] Investigate https://github.com/brave/ad-block/issues/126. This call will be used in a Reddit widget that displays the most recent posts from /r/BATProject on the batcommunity.org homepage. It is currently being blocked by Brave shields despite no positives from our filter lists.

 ## Description

BATCommunity.org will be a new hub for the BAT Community. It is a platform designed to facilitate community organization, meetups (e.g., with our regional leaders), the creation of community-related content, artwork, educational materials, and so on.

*Persons of contact (BAT Community): Luke Mulks*

**Domain name:** `batcommunity.org`.  This domain name is owned by Brave. 

*Persons of contact (domain name): Ryan Watson, Luke Mulks*

## Sitemap
  
* Index
  * News
  * Knowledge
  * Forum
  * Meetups
  * Store
  * Get Brave 

The website features no backend and the index page is a static .html file. Introduction of a backend in future iterations will be accompanied by another security review.

# Breakdown

## Index 

Static `.html` page. Contains some embedded video content.

## News 

External link to a Wordpress blog owned and hosted by us. It is currently in a staging environment. 

## Knowledge

Static `.html` page.

## Forum

Link to a Discourse forum owned by Brave. Hosted on Discourse's cloud hosting.

**Final URL**: forum.batcommunity.org. 

## Meetups

Link to our Meetup.com account page.

## Store

Links to our official merchandise store.

## Get Brave

Links to the official Brave website.

# External Libraries & Imports

* **Bootstrap 4**
   * CSS
   * jQuery
   * Javascript

* **FontAwesome v5.1.0**

* **Font 'Whitney' from Hoefler & Co.**
*Person of contact (font): Ross Moody.* 

## Embeds

We shall avoid embedding YouTube videos in favor of Vimeo embeds.

Vimeo embeds involve an `<iframe>`, which are currently sandboxed with `"allow-scripts allow-same-origin"`.

## Deployment

This repository will be forked over to Brave's GitHub and deployed through there. 

*Person of contact (deployment): Ryan Watson*