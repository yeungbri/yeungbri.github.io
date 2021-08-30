<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Projects</h1>
      <p class="lead text-muted">Software for fun</p>
    </div>
  </div>
</section>

<div class="container">
  <div class="row row-cols-sm-1 row-cols-md-3 g-4">
    {% for post in site.posts %}
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