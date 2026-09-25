---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 4
description:
---

{%- comment -%}
  The build timestamp on the URL guarantees visitors get the newly posted CV
  rather than a copy their browser cached from an earlier visit.
{%- endcomment -%}
{% assign cv_stamp = site.time | date: '%s' %}
{% assign cv_href = '/assets/pdf/Elaine_Shen_CV.pdf' | relative_url | append: '?v=' | append: cv_stamp %}

<a href="{{ cv_href }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener">
  <i class="fa-solid fa-download"></i> Download CV (PDF)
</a>

<div class="cv-embed mt-3">
  <object data="{{ cv_href }}" type="application/pdf" aria-label="Curriculum Vitae">
    <div class="cv-embed-fallback">
      <p>Your browser can&rsquo;t display the PDF inline.</p>
      <p><a href="{{ cv_href }}" target="_blank" rel="noopener">Open the CV in a new tab</a></p>
    </div>
  </object>
</div>
