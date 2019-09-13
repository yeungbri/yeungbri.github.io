---
layout: default
title: markdown
---

Bold

{% capture bold %}
**bold**  
*italics*
{% endcapture %}

<div class="row">
  <div class="column">**<div style="color:yellow">bold</div>**<br/> *<div style="color:yellow">italics</div>*</div>
  <div class="column" markdown="1">
    {{ bold }}
  </div>
</div>

Welcome to **cool** things
1. i like this
2. good good