---
---

<section>
  <div class="container">
    <h3>Latest Projects</h3>
    <div class="row row-cols-sm-1 row-cols-md-3 g-4">
      {% for post in site.posts limit: 3 %}
        <div class="col d-flex align-items-stretch">
          <div class="card bg-dark" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">{{post.title}}</h5>
              <p class="card-text small">{{post.desc}}</p>
            </div>
            <div class="card-footer">
              <div class="float-right">
                <a href="{{post.url}}" class="card-link">View</a>
              </div>
              <div class="float-left">
                <small class="text-muted">{{post.date | date: '%B %d, %Y' }}</small>
              </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

  <br />
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Software Engineering</h1>
        <p class="lead text-muted">Overview of my software development journey</p>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-dark"> Resume </button>
          <button type="button" class="btn btn-dark"> Projects </button>
          <button type="button" class="btn btn-dark"> Reading List </button>
          <button type="button" class="btn btn-dark"> Leetcode </button>
          <button type="button" class="btn btn-dark"> Open Source </button>
        </div>
      </div>
    </div>
  </section>

  {% for category in site.data.tech%}
    <div class="row align-items-md-stretch">
      <div class="col-md-12">
        <!-- {% assign categoryEven = forloop.index0 | modulo: 2 %} -->
        {% assign categoryEven = 0 %}
        <!-- <div class="h-100 p-5 text-white bg-dark rounded-3"> -->
        <div class="h-100 p-5 rounded-3 {% if categoryEven != 0 %}text-secondary bg-dark{% endif %}">
          <h4>{{category[0]}}</h4>
          <p>1-10 rating based on confidence with technology</p>
          {% for area in category[1]%}
            {% assign even = forloop.index0 | modulo: 2 %}
            <div class="container {% if even == 0 %}text-right{% endif %}">
              <div class="row">
                {% if even == 0 %}
                  <div class="col-2"></div>
                {% endif %}
                <div class="col-10">
                  <h5>{{area[0]}}</h5>
                  {% for tech in area[1] %}
                    <button type="button" class="btn {% if categoryEven != 0 %} btn-secondary {% else %} btn-dark {% endif %}">
                      {{tech.name}} <span class="badge badge-dark">{{tech.score}}</span>
                    </button>
                  {% endfor %}
                </div>
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
    </div>
  {% endfor %}
</section>
