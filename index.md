---
layout: default
---


<!-- Header -->
<header class="bg-blue-dark">
  <div class="container pt-3 pb-5 mt-2 mb-5 text-center text-white">
    <h1 class="display-5 fw-bold text-capitalize mt-5">ETHFUD</h1>
    <div class="col-lg-7 mx-auto">
      <p class="lead mb-4">Setting the facts straight.</p>
    </div>
  </div>
</header>



<!-- Content -->
<section class="">
  <div class="container py-5">
    <div class="row justify-content-center" style="margin-top: -8rem;">
      <div class="col-12 mb-4">
        <div class="card rounded-3 mx-auto bg-blue" style="max-width: 40rem;">
          <div class="card-body my-3 mx-0 mx-sm-2 mx-md-3">
            <!-- Search -->
            <div class="input-group mb-4">
              <input id="searchInput" type="text" class="form-control bg-blue-dark rounded-3" placeholder="Search" aria-label="Search" onkeyup="search()">
            </div>
            <!-- Filter -->
            <div class="filter btn-group d-flex justify-content-center mb-4 pb-2" role="group" aria-label="filter">
              <input type="radio" class="btn-check" name="filter" id="filterAll" value="all" autocomplete="off" onclick="applyFilter()" checked>
              <label class="btn btn-sm" for="filterAll">All</label>
              <input type="radio" class="btn-check" name="filter" id="filterTrue" value="true" autocomplete="off" onclick="applyFilter()">
              <label class="btn btn-sm" for="filterTrue">True</label>
              <input type="radio" class="btn-check" name="filter" id="filterFalsy" value="falsy" autocomplete="off" onclick="applyFilter()">
              <label class="btn btn-sm" for="filterFalsy">Falsy</label>
              <input type="radio" class="btn-check" name="filter" id="filterFud" value="fud" autocomplete="off" onclick="applyFilter()">
              <label class="btn btn-sm" for="filterFud">FUD</label>
            </div>
            <!-- Claims -->
            <div class="">
              {%- assign claimArray = "" | split: "," -%}
              {%- for claim in site.pages -%}
                {%- if claim.path contains 'claims/' -%}
                  {%- assign validity_status = "falsy" -%}
                  {%- assign validity_color = 'warning' -%}
                  {%- if claim.validity == true -%}
                    {%- assign validity_status = "true" -%}
                    {%- assign validity_color = 'success' -%}
                  {%- elsif claim.validity == false -%}
                    {%- assign validity_status = "fud" -%}
                    {%- assign validity_color = 'danger' -%}
                  {%- endif -%}
                  {%- assign words = claim.title | split: " " -%}
                  {%- assign title = "" -%}
                  {%- assign excluded_words = "at,off,by,on,for,in,to,of,and,the,as,but,if,nor" | split: "," -%}
                  {%- for word in words -%}
                    {%- if excluded_words contains word and forloop.index > 1 -%}
                      {%- assign title = title | append: " " | append: word -%}
                    {%- else -%}
                      {%- assign capitalized = word | capitalize -%}
                      {%- assign title = title | append: " " | append: capitalized -%}
                    {%- endif -%}
                  {%- endfor -%}
                  {%- assign title = title | strip -%}
                  <p class="claim {{validity_status}} d-flex align-items-start">
                    <span class="validity me-2 text-uppercase fst-italic fw-semibold text-{{validity_color}}">{{validity_status}}</span>
                    <a href="{{claim.url}}" target="_blank" class="flex-fill me-2 text-decoration-none">{{claim.title}}</a>
                    <span id="claim{{forloop.index}}" class="copy" onclick="copyText('{{site.url}}{{claim.url}}', this.id)" data-bs-toggle="tooltip" data-bs-placement="top" title="Copied!" data-bs-trigger="click">{{site.data.icons.link}}</span>
                  </p>
                {%- endif -%}
              {%- endfor -%}
              <p id="noResults" class="d-none text-gray">No results found, try simplifying your search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
