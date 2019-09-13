---
layout: default
title: Brian Yeung
techs:
  Languages:
    - Python
    - JavaScript
    - SQL
    - Java
    - C++
    # - Bash (Shell)
    - Ruby
    - PHP
    - Racket
    - OCaml
    - C
    - Scala
  Web Frameworks:
    - React.js
    - Angular.js
    - Django
    # - Ruby on Rails
    - Spring
    - Laravel
  Libraries: 
    - Node.js
    - TensorFlow
  Databases:
    - PostgreSQL
    - MySQL
    - Elasticsearch
  Platforms/Infra: 
    - "*nix"
    - Docker
    - K8s
    - AWS
    - GCP
    - nginx
  Concepts: 
    - OOD
    - MVC
    - REST
    # - Network Layers
  Tools:
    - Git
    - Gitlab
    - Agile
    - Jira
    - Confluence
  Testing:
    - Selenium
---
<div style="max-width: 1000px;
  margin: auto;
  padding: 10px;">

<div class = "parent">
<div class = "header">
<div>
  <div class="row">
    <div class="column" style="text-align: right">
      <div class="circular--landscape">
        <img src="images/profile.png">
      </div>
    </div>
    <div class="column"  style="text-align: left">
      <div class="container">
        <div class="vertical-center" style="padding-left: 20px">
        <h2 style="font-size:50px;font-family:calibre; color:white; font-weight:800">Brian Yeung</h2>
        <!-- <h4>Fast learner => Strong hacker</h4> -->
        <p class = "highlight" style="width: 50%">
          Computer Science <a href="https://northeastern.edu">@Northeastern University</a> Spring '20 currently on my 3rd co-op as a Fullstack Software Engineer Co-op <a href="https://wellframe.com">@Wellframe</a>
        </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Use flex or something to have equally spaced items -->
<!-- Actually same spacing between links but centered on total length -->
<!-- spa -->
<!-- indicator for current page -->
<ul class="nav">
  <li><a href="/">Home</a></li>
  <li><a href="/">About</a></li>
  <li><a href="/">Blog</a></li>
  <li><a href="/">Notes</a></li>
  <li><a href="/">Resume</a></li>
</ul>
</div>

<!-- socials on the side like bc -->

<div class = "left">
<section>
  <h2>Experience</h2>
  <div class = "tag-container">
  {% for category in page.techs %}
    <div class = "tag-header">
    <h4>{{category[0]}}</h4>
    </div>
    {% for item in category[1] %}
      <p class = "tag">{{item}}</p>
    {% endfor %}
  {% endfor %}
  </div>
  <!-- Show off mind map of skills, tools, frameworks to prove valid mental model -->
  <p>
  Paste your job description!
  (Languages 'Python', Frameworks 'React', Knowledge 'OOD') <br />
  <h3>Technology I've Touched</h3> (varying capacities) <br />
  Category: Web Development, Cybersecurity, DevOps, Machine Learning <br />

  Python, Javascript, Java, Ruby on Rails, jenkins, gitlab, ood, design paradigms, algorithms, 
  </p>
  <p>
    Capacities:
    Web Development 7/10 | Cybersecurity 4/10 | Machine Learning 1/10 | Data Science 3/10 | Mobile Development 1/10
  </p>
  <p>
    Type: 6 Month Co-op <br />
    Software Engineer @ Cigna <br />
    Roles: FrontEnd Engineer, DevOps pipeline, Database, BackEnd Engineer
    Frameworks: SpringBoot, Angular
    Vendor API: ArcGIS
  </p>
  <p>
    Reading List <br />
    Leetcode Account link
  </p>

  <h2>Summary</h2>
  <ul>
    <li>Wellrounded engineer with 2+ years of co-op/intern experience across many disciplines.</li>
    <li>Open source contributions</li>

  </ul>
</section>
</div>
</div>
</div>
