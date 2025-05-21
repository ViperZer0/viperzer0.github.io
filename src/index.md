---
layout: base.njk
---

Here's my home page :3

Here are my posts

<ol reversed>
{% for post in collections.sortedPosts %}
<li><a class="inline-link" href="posts/{{ post.data.id }}/">{{ post.data.title }}</a></li>
{% endfor %}
</ol>

