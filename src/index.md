---
layout: home.html
pagination:
  data: collections.post
  size: 1
---

Here's my home page :3

Here are my posts

{% for post in collections.post %}
<a href="posts/{{ post.data.id }}/">{{ post.data.title }}</a>
{% endfor %}

