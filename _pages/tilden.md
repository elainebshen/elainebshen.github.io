---
layout: page
permalink: /tilden/
title: Tilden
description:
nav: true
nav_order: 4
---

I have a husky named **Tilden** that I am obsessed with! Some fun facts about Tilden:

- Tilden is a frequent attendee of economics seminars and office hours at UC Berkeley.
- Tilden's accomplishments include being described as the "most handsome labor economist" by a senior award-winning economist, and being called "beautiful" by a Nobel-prize-winning economist.
- Tilden insists that his presence at office hours was the only reason I won a GSI teaching award.

Additional photos available upon request.

{% assign tilden_photos = site.static_files
  | where_exp: "f", "f.path contains '/assets/img/tilden/'"
  | where_exp: "f", "f.extname == '.jpg' or f.extname == '.jpeg' or f.extname == '.png' or f.extname == '.webp' or f.extname == '.gif'"
  | sort: "name" %}

{% if tilden_photos.size > 0 %}
<div class="row mt-4">
  {% for photo in tilden_photos %}
  <div class="col-sm-6 col-md-4 mb-3">
    <img src="{{ photo.path | relative_url }}" alt="Tilden" class="img-fluid rounded z-depth-1" loading="lazy">
  </div>
  {% endfor %}
</div>
{% endif %}
