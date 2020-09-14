---
categories:
  - Web Development
  - Database 
# use colors, symbols(stars), border highlights, italics to denote strength/interest
techs:
  Languages:
    - Python
    - JavaScript
    - SQL
    - Java
    - C++
    - Bash/Shell
    - Ruby
    - PHP
    - Racket
    - OCaml
    - C
    - Scala
  Libraries: 
    - Node.js
    - TensorFlow
  Web Frameworks:
    - React.js
    - Angular.js
    - Django
    # Keep it on one line
    - Ruby&nbsp;on&nbsp;Rails
    - Spring
    - Laravel
  Databases:
    - PostgreSQL
    - MySQL
    - Elasticsearch
  Platforms/Infra: 
    - Git
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
    - Networks
  Testing:
    - Selenium
---

<section>
  <h2>Experience</h2>
  <p>Filter by technology</p>
  <div class = "tag-container">
    {% for category in page.techs %}
      <div class = "tag-header highlight">
        {{category[0]}}
      </div>
      {% for item in category[1] %}
        <div class = "tag">
          <div style = "font-size: 12px">
            {{item}}
          </div>
        </div>
      {% endfor %}
      <div class = "tag-header"></div>
    {% endfor %}
  </div>
  <!-- Show off mind map of skills, tools, frameworks to prove valid mental model -->
  <p>
  Paste your job description!
  (Languages 'Python', Frameworks 'React', Knowledge 'OOD') <br />
  Category: Web Development, Cybersecurity, DevOps, Machine Learning <br />
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