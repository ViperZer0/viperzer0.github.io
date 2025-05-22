---
layout: base.njk
---

Hi! My name is Eli Stoll, though I commonly go by my handle here on the internet, Weedleeedle.

Below you'll find some of my various thoughts and musings about software development, technology,
and maybe a few other things here and there.

<ol reversed>
{% for post in collections.sortedPosts %}
<li><a class="list-link" href="posts/{{ post.data.id }}/">{{ post.data.title }}</a></li>
{% endfor %}
</ol>

