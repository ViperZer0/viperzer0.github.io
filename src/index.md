---
layout: home.html
pagination:
  data: collections.post
  size: 1
---

Here's my home page :3

Here are my posts

<ul>
{% for post in collections.post %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>

